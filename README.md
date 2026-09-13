# Chelsea Finn · Physical Intelligence Research Reader

A zero-build, multi-talk research companion for Chelsea Finn's 2025 and 2026 Y Combinator talks. It connects bilingual timestamped reading notes with the Physical Intelligence research path from π0 to π0.7.

**Live site:** [Open the research reader](https://asandstar.github.io/chelsea-finn-robot-talk-reader/)

Direct routes:

- [2025 · Building Robots That Can Do Anything](https://asandstar.github.io/chelsea-finn-robot-talk-reader/talks/2025-building-robots/)
- [2026 · The Next Decade in Robotics](https://asandstar.github.io/chelsea-finn-robot-talk-reader/talks/2026-next-decade/)
- [Compare · One Year of Physical Intelligence](https://asandstar.github.io/chelsea-finn-robot-talk-reader/compare/)

## What is included

- a root talk library and research-evolution map
- 2025 reader: 98 timestamped transcript segments and 17 research chapters
- 2026 reader: 15 official timestamp chapters with original bilingual research summaries
- synchronized YouTube seeking, bilingual / English / Chinese views, search, topic filters, progress, focus mode, and dark mode
- bidirectional 2025 ↔ 2026 links for memory, reinforcement learning, world models, and generalization
- a four-track comparison page with technical shifts, remaining bottlenecks, exact chapter links, and official paper sources
- a provenance-aware research graph across π0, FAST, Hi Robot, π0.5, Knowledge Insulation, π*0.6 / RECAP, MEM, and π0.7

## Preview locally

The site uses plain HTML, CSS, and JavaScript. It has no package-manager dependency or build step.

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`.

## Content architecture

Each talk owns an independent source bundle:

```text
talks/<talk-slug>/
├── index.html
└── data/
    ├── meta.json
    ├── segments_en.json
    ├── translations.jsonl
    ├── chapters.json
    └── talk-data.js
```

Shared runtime files live in `assets/`:

- `reader.js`: data-driven talk reader
- `home.js`: root talk library
- `compare.js`: year-over-year comparison
- `styles.css`: shared responsive visual system

Site-level data lives in `data/site-data.js` and is separated by meaning:

- `talks`: talk-level navigation and summaries
- `research.works`: canonical research-work metadata and official sources
- `research.relations`: typed links between works, each with evidence provenance and confidence
- `research.concepts`: reusable research questions such as memory, RL, compositionality, and world models
- `compare.tracks`: four talk-to-talk comparisons that reference canonical works by ID

The homepage paper map and Compare reading lists both resolve their labels, dates, summaries, and URLs from the same research graph.

Relation types keep different claims separate: `version-successor` marks an explicitly supported model-generation succession; `research-line-successor` marks a later node in the same research or model family without claiming direct architectural inheritance; `builds-on` primarily means an implementation explicitly extends a prior system; `applied-to` means a method was combined with or tested on a model; `adopted-by` is reserved for an explicitly incorporated method; `builds-on-concept` records strongly supported conceptual continuity without claiming full architectural inheritance; and `related-method` records a reader interpretation rather than an official integration claim.

After editing talk JSON, regenerate both browser bundles:

```bash
python3 scripts/build_data.py
```

The build script validates translation indices, non-overlapping chapter ranges, and complete segment coverage before writing `talk-data.js`.

Validate the research graph, Compare references, and relative HTML entrypoints with:

```bash
node scripts/check_site.mjs
```

## GitHub Pages

The included `.github/workflows/pages.yml` uploads the repository as a static Pages artifact after a push to `main`. All internal assets and routes use relative paths, so the site works under the GitHub Project Pages prefix:

```text
https://<username>.github.io/<repo-name>/
```

In **Settings → Pages**, the source should be **GitHub Actions**.

## Source and rights note

The 2025 English transcript came from a transcript copy supplied by the reader; its Chinese translation and annotations are study notes. The 2026 reader does not mirror the full third-party transcript: it publishes original English and Chinese summaries aligned to the official Root Access chapter timestamps.

Original videos, transcript text, research media, and papers retain their respective rights. Primary references:

- 2025 video: https://www.youtube.com/watch?v=a8-QsBHoH94
- 2026 video: https://www.youtube.com/watch?v=cRZNwgvcWUg
- Root Access 2026 article/transcript: https://www.ycrootaccess.com/p/chelsea-finn-on-the-next-decade-in
- Physical Intelligence research: https://www.pi.website/research
