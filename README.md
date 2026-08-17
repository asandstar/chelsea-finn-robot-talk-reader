# Chelsea Finn · Building Robots That Can Do Anything · Research Reader

A zero-build static reading companion for Chelsea Finn's YC AI Startup School talk. It is designed to be published directly with GitHub Pages.

**Live site:** [Open the interactive lecture reader](https://asandstar.github.io/chelsea-finn-robot-talk-reader/)

## What is included

- 98 timestamped English transcript segments
- Chinese paragraph-by-paragraph translation
- 17 research chapters with a synchronized annotation rail
- VLA / robot-learning background concepts
- paper mapping to π0, π0.5, Hi Robot, FAST, and π0.5 knowledge-insulation notes
- clickable timestamps that jump the embedded YouTube video
- bilingual / English-only / Chinese-only reading modes
- full-text search and topic filters
- automatic active-chapter tracking and reading progress
- light / dark mode and focus mode
- responsive mobile layout

## Preview locally

The site has no package-manager dependency and no build step.

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly, although using a local HTTP server is closer to GitHub Pages behavior.

## Publish with GitHub Pages

1. Create a GitHub repository and put these files at the repository root.
2. Push to the `main` branch.
3. In **Settings → Pages**, set **Source** to **GitHub Actions**.
4. The included `.github/workflows/pages.yml` deploys the static site automatically after pushes to `main`.

No React/Vite build is required. The site uses plain HTML, CSS, and JavaScript.

## Editing the content

The content source is split into three files:

- `data/segments_en.json`: timestamp, speaker, English transcript
- `data/translations.jsonl`: Chinese translations indexed by segment
- `data/chapters.json`: research chapter boundaries, concepts, paper links, and annotations

After editing these files, regenerate the browser data bundle:

```bash
python scripts/build_data.py
```

This rewrites `data/talk-data.js`.

## Suggested extensions

If you later want to turn this into a larger research notebook, useful next additions are:

- screenshot cards synchronized to specific timestamps
- paragraph-level personal notes saved to LocalStorage
- citation popovers with paper page/section references
- a timeline view comparing π0 → FAST → Hi Robot → π0.5
- a dedicated "robot memory" layer that tags every passage touching history, partial observability, retrieval, hierarchy, planning, or world state
- BibTeX export for papers

## Source and rights note

The English transcript in this project came from a transcript copy supplied by the reader. The Chinese translation and research annotations are study notes. The original talk/video and transcript content retain their respective rights. Before publishing a full transcript publicly, review the redistribution terms of the original video/transcript source and preserve attribution.

Primary research links used in the annotations:

- π0: https://www.physicalintelligence.company/download/pi0.pdf
- π0.5: https://www.physicalintelligence.company/download/pi05.pdf
- Hi Robot: https://www.physicalintelligence.company/download/hirobot.pdf
- FAST: https://www.physicalintelligence.company/download/fast.pdf
- π0.5 Knowledge Insulation note: https://www.physicalintelligence.company/download/pi05_KI.pdf
