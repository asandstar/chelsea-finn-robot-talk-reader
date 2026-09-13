(() => {
  const site = window.SITE_DATA;
  const mount = document.getElementById('homeApp');
  if (!site || !mount) return;
  const research = site.research;
  const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const worksById = new Map(research.works.map(work => [work.id, work]));
  const formatDate = value => value ? value.replaceAll('-', '.') : 'Date not independently published';
  const confidenceBadge = relation => `<a class="evidence-badge ${esc(relation.confidence)}" href="${esc(relation.evidence.sourceUrl)}" target="_blank" rel="noreferrer" title="${esc(`${relation.evidence.sourceLabel}: ${relation.evidence.note}`)}">${esc(research.confidenceLabels[relation.confidence])} ↗</a>`;
  const sourceLinks = work => `<div class="paper-source-links">${work.officialUrl ? `<a href="${esc(work.officialUrl)}" target="_blank" rel="noreferrer">研究页 ↗</a>` : ''}${work.paperUrl ? `<a href="${esc(work.paperUrl)}" target="_blank" rel="noreferrer">论文 ↗</a>` : ''}${work.arxivUrl ? `<a href="${esc(work.arxivUrl)}" target="_blank" rel="noreferrer">arXiv ↗</a>` : ''}</div>`;
  const talkCards = site.talks.map((talk, index) => `
    <article class="talk-card ${esc(talk.accent)}">
      <div class="talk-card-top"><span class="talk-year">${esc(talk.year)}</span><span>${esc(talk.duration)}</span></div>
      <div><div class="eyebrow">Talk ${String(index + 1).padStart(2, '0')} · ${esc(talk.format)}</div><h2>${esc(talk.title)}</h2><h3>${esc(talk.zhTitle)}</h3><p>${esc(talk.thesis)}</p></div>
      <div class="topic-row">${talk.topics.map(topic => `<span>${esc(topic)}</span>`).join('')}</div>
      <a class="card-cta" href="${esc(talk.route)}">Open ${esc(talk.year)} reader <span>→</span></a>
    </article>`).join('');
  const paths = research.overview.steps.map((path, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${esc(path.label)}</strong><p>${esc(path.detail)}</p></div></li>`).join('');
  const mainlineRelationTypes = new Set(['version-successor', 'research-line-successor']);
  const successorRelations = research.relations.filter(relation => mainlineRelationTypes.has(relation.type));
  const successorTargets = new Set(successorRelations.map(relation => relation.to));
  let mainlineId = successorRelations.find(relation => !successorTargets.has(relation.from))?.from;
  const mainlineWorks = [];
  const visitedMainline = new Set();
  while (mainlineId && !visitedMainline.has(mainlineId)) {
    visitedMainline.add(mainlineId);
    const work = worksById.get(mainlineId);
    if (work) mainlineWorks.push(work);
    mainlineId = successorRelations.find(relation => relation.from === mainlineId)?.to;
  }
  const mainlineIds = new Set(mainlineWorks.map(work => work.id));
  const mainlinePapers = mainlineWorks.map((work, index) => {
    const incomingRelation = successorRelations.find(relation => relation.to === work.id);
    const outgoingRelation = successorRelations.find(relation => relation.from === work.id);
    return `
    <article class="paper-node mainline-node">
      <div class="paper-node-meta"><time datetime="${esc(work.publicationDate)}">${esc(formatDate(work.publicationDate))}</time><span>${esc(work.stage)}</span></div>
      ${incomingRelation ? `<div class="mainline-provenance"><span>${esc(research.relationTypeLabels[incomingRelation.type])} · ${esc(worksById.get(incomingRelation.from)?.label)} → ${esc(work.label)}</span>${confidenceBadge(incomingRelation)}</div>` : ''}
      <div class="paper-node-title"><strong>${esc(work.label)}</strong>${outgoingRelation ? `<i aria-hidden="true" title="${esc(outgoingRelation.description)}">→</i>` : ''}</div>
      <p class="paper-question">${esc(work.researchQuestion)}</p>
      <p class="paper-relation">${esc(work.summary)}</p>
      ${sourceLinks(work)}
    </article>`;
  }).join('');
  const branchWorks = research.works.filter(work => work.displayOnMap !== false && !mainlineIds.has(work.id));
  const relationList = work => {
    const relations = research.relations.filter(relation => !mainlineRelationTypes.has(relation.type) && (relation.from === work.id || relation.to === work.id));
    return `<ul class="work-relations">${relations.map(relation => {
      const otherId = relation.from === work.id ? relation.to : relation.from;
      const otherWork = worksById.get(otherId);
      return `<li class="relation-${esc(relation.confidence)}"><div><span>${esc(research.relationTypeLabels[relation.type])}</span><strong>${esc(otherWork?.label || otherId)}</strong>${confidenceBadge(relation)}</div><p>${esc(relation.description)}</p></li>`;
    }).join('')}</ul>`;
  };
  const branchPapers = branchWorks.map(work => `
    <article class="paper-node branch-node">
      <div class="paper-node-meta"><time datetime="${esc(work.publicationDate)}">${esc(formatDate(work.publicationDate))}</time><span>${esc(research.categoryLabels[work.category])}</span></div>
      <strong>${esc(work.label)}</strong>
      <p class="branch-question">${esc(work.researchQuestion)}</p>
      <p>${esc(work.summary)}</p>
      ${relationList(work)}
      ${sourceLinks(work)}
    </article>`).join('');
  mount.innerHTML = `
    <header class="topbar"><a class="brand" href="./"><span class="brand-mark">π</span><span>${esc(site.shortBrand)}</span></a><nav class="top-actions"><a class="ghost-btn" href="${esc(site.compare.route)}">Compare</a><button id="themeToggle" class="ghost-btn" type="button">Dark</button></nav></header>
    <main>
      <section class="home-hero shell"><div class="home-orbit" aria-hidden="true"><i></i><i></i><i></i><span>π</span></div><div class="hero-kicker">${esc(site.brand)}</div><h1>${esc(site.titleLead)}<br><span>${esc(site.titleFocus)}</span></h1><p>${esc(site.deck)}</p><div class="home-actions"><a class="primary-btn" href="${esc(site.talks[0].route)}">Start with 2025</a><a class="secondary-btn" href="${esc(site.compare.route)}">Compare the evolution</a></div></section>
      <section class="talk-library shell"><div class="section-heading compact wide-heading"><div class="eyebrow">Talk library</div><h2>从一场演讲开始，沿研究脉络继续阅读</h2></div><div class="talk-grid">${talkCards}</div></section>
      <section class="evolution-band"><div class="shell evolution-grid"><div class="section-heading"><div class="eyebrow">${esc(research.overview.eyebrow)}</div><h2>${esc(research.overview.title)}</h2><p>${esc(research.overview.description)}</p><a class="inline-link" href="${esc(site.compare.route)}">${esc(research.overview.linkLabel)}</a></div><ol class="path-list">${paths}</ol></div></section>
      <section class="home-papers shell"><div class="section-heading compact wide-heading"><div class="eyebrow">${esc(research.map.eyebrow)}</div><h2>${esc(research.map.title)}</h2><p>${esc(research.map.description)}</p></div><div class="paper-map-legend" aria-label="路线图图例"><span><i class="legend-main"></i>${esc(research.map.mainlineLabel)}</span><span><i class="legend-branch"></i>${esc(research.map.branchLabel)}</span><span class="legend-evidence"><b class="evidence-badge explicit">${esc(research.confidenceLabels.explicit)}</b><b class="evidence-badge strong-inference">${esc(research.confidenceLabels['strong-inference'])}</b><b class="evidence-badge interpretive">${esc(research.confidenceLabels.interpretive)}</b></span><small>${esc(research.map.sourceNote)}</small></div><div class="mainline-map" aria-label="π model mainline">${mainlinePapers}</div><div class="branch-heading"><span>${esc(research.map.branchLabel)}</span><p>${esc(research.map.branchDescription)}</p></div><div class="branch-paper-grid">${branchPapers}</div></section>
    </main>
    <footer class="footer shell"><div><strong>${esc(site.brand)}</strong><p>Zero-build static research companion. The 2025 reader preserves its supplied transcript; the 2026 reader publishes original bilingual summaries aligned to official timestamps.</p></div><div class="footer-links"><a href="${esc(site.compare.route)}">One Year of Physical Intelligence</a><a href="https://www.pi.website/research" target="_blank" rel="noreferrer">PI research ↗</a></div></footer>`;

  const themeToggle = document.getElementById('themeToggle');
  const applyTheme = theme => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('talk-theme', theme);
    themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  };
  applyTheme(localStorage.getItem('talk-theme') || 'light');
  themeToggle.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
