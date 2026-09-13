import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const siteDataSource = fs.readFileSync(path.join(root, 'data/site-data.js'), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(siteDataSource, sandbox, { filename: 'data/site-data.js' });

const site = sandbox.window.SITE_DATA;
const research = site?.research;
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

check(Boolean(site), 'SITE_DATA was not created');
check(Boolean(research), 'SITE_DATA.research is missing');

const requiredWorkFields = [
  'id', 'label', 'fullTitle', 'year', 'publicationDate', 'category', 'summary',
  'researchQuestion', 'officialUrl', 'paperUrl', 'arxivUrl', 'tags'
];
const works = research?.works || [];
const workIds = new Set();
for (const work of works) {
  for (const field of requiredWorkFields) {
    check(Object.hasOwn(work, field), `work ${work.id || '<unknown>'} is missing ${field}`);
  }
  check(!workIds.has(work.id), `duplicate work id: ${work.id}`);
  workIds.add(work.id);
  check(Object.hasOwn(research.categoryLabels || {}, work.category), `work ${work.id} has unknown category: ${work.category}`);
  check(Array.isArray(work.tags), `work ${work.id} tags must be an array`);
  for (const field of ['officialUrl', 'paperUrl', 'arxivUrl']) {
    check(work[field] === null || /^https:\/\//.test(work[field]), `work ${work.id} has invalid ${field}`);
  }
}

const allowedTypes = new Set([
  'version-successor', 'research-line-successor', 'method-branch', 'adopted-by', 'extends',
  'incorporated-into', 'experience-distilled-into', 'builds-on', 'applied-to',
  'builds-on-concept', 'related-method', 'evaluated-with'
]);
const allowedConfidence = new Set(['explicit', 'strong-inference', 'interpretive']);
const allowedSourceTypes = new Set(['official-blog', 'official-research-page', 'paper', 'arxiv', 'talk']);
const relations = research?.relations || [];
for (const [index, relation] of relations.entries()) {
  const key = `relation[${index}] ${relation.from || '?'} -> ${relation.to || '?'}`;
  check(workIds.has(relation.from), `${key} has dangling from id`);
  check(workIds.has(relation.to), `${key} has dangling to id`);
  check(allowedTypes.has(relation.type), `${key} has unknown type: ${relation.type}`);
  check(Object.hasOwn(research.relationTypeLabels || {}, relation.type), `${key} has no rendering label`);
  check(allowedConfidence.has(relation.confidence), `${key} has unknown confidence: ${relation.confidence}`);
  check(Boolean(relation.description), `${key} is missing description`);
  check(Boolean(relation.evidence), `${key} is missing evidence`);
  if (relation.evidence) {
    for (const field of ['sourceLabel', 'sourceUrl', 'sourceType', 'note']) {
      check(Boolean(relation.evidence[field]), `${key} evidence is missing ${field}`);
    }
    check(allowedSourceTypes.has(relation.evidence.sourceType), `${key} has unknown evidence sourceType`);
    check(/^https:\/\//.test(relation.evidence.sourceUrl || ''), `${key} has invalid evidence sourceUrl`);
  }
}

const relationByEndpoints = new Map(relations.map(relation => [`${relation.from}->${relation.to}`, relation]));
for (const [endpoints, expected] of Object.entries({
  'fast->pi0': { type: 'applied-to', confidence: 'explicit' },
  'pi05->pi07': { type: 'research-line-successor', confidence: 'strong-inference' },
  'hi-robot->pi07': { type: 'builds-on-concept', confidence: 'strong-inference' },
  'mem->pi07': { type: 'related-method', confidence: 'interpretive' }
})) {
  const relation = relationByEndpoints.get(endpoints);
  check(Boolean(relation), `required relation ${endpoints} is missing`);
  check(relation?.type === expected.type, `${endpoints} must use ${expected.type}`);
  check(relation?.confidence === expected.confidence, `${endpoints} must use ${expected.confidence} confidence`);
}

const mainlineRelationTypes = new Set(['version-successor', 'research-line-successor']);
const successorRelations = relations.filter(relation => mainlineRelationTypes.has(relation.type));
const successorTargets = new Set(successorRelations.map(relation => relation.to));
const starts = successorRelations.filter(relation => !successorTargets.has(relation.from));
check(starts.length === 1, `research mainline must have one start; found ${starts.length}`);
const successorBySource = new Map();
for (const relation of successorRelations) {
  check(!successorBySource.has(relation.from), `multiple research-mainline successors from ${relation.from}`);
  successorBySource.set(relation.from, relation.to);
}
const visited = new Set();
let cursor = starts[0]?.from;
while (cursor) {
  check(!visited.has(cursor), `cycle in research mainline at ${cursor}`);
  if (visited.has(cursor)) break;
  visited.add(cursor);
  cursor = successorBySource.get(cursor);
}
check(['pi0', 'pi05', 'pi07'].every(id => visited.has(id)), 'mainline must resolve pi0 -> pi05 -> pi07');

for (const track of site?.compare?.tracks || []) {
  check(Array.isArray(track.workIds), `compare track ${track.id} is missing workIds`);
  for (const workId of track.workIds || []) {
    check(workIds.has(workId), `compare track ${track.id} references unknown work ${workId}`);
  }
  check(!Object.hasOwn(track, 'papers'), `compare track ${track.id} still duplicates papers metadata`);
}

for (const relativeFile of ['index.html', 'compare/index.html', 'talks/2025-building-robots/index.html', 'talks/2026-next-decade/index.html']) {
  const htmlPath = path.join(root, relativeFile);
  const html = fs.readFileSync(htmlPath, 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const reference = match[1];
    if (/^(?:https?:|#|mailto:)/.test(reference)) continue;
    const target = path.resolve(path.dirname(htmlPath), reference);
    check(fs.existsSync(target), `${relativeFile} has missing relative target: ${reference}`);
  }
}

const researchPresentation = [
  'data/site-data.js', 'assets/home.js', 'assets/compare.js'
].map(file => fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
check(!researchPresentation.includes('一年不是多了一场演讲，而是研究对象发生了变化'), 'old research framing is still present');

if (failures.length) {
  console.error(failures.map(message => `- ${message}`).join('\n'));
  process.exit(1);
}

console.log(`Research graph OK: ${works.length} works, ${relations.length} relations, ${site.compare.tracks.length} compare tracks.`);
console.log('Relative HTML entrypoint references OK.');
