(() => {
  const site = window.SITE_DATA;
  const mount = document.getElementById('compareApp');
  if (!site || !mount) return;
  const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const worksById = new Map(site.research.works.map(work => [work.id, work]));
  const chapterLink = (slug, chapter) => `../talks/${slug}/#chapter-${chapter}`;
  const renderWorkLink = workId => {
    const work = worksById.get(workId);
    if (!work) return '';
    const url = work.officialUrl || work.paperUrl || work.arxivUrl;
    if (!url) return `<span>${esc(work.label)}</span>`;
    return `<a href="${esc(url)}" target="_blank" rel="noreferrer" title="${esc(work.summary)}"><strong>${esc(work.label)}</strong><small>${esc(work.publicationDate || 'Referenced model')}</small></a>`;
  };
  const tracks = site.compare.tracks.map((track, index) => `
    <article class="comparison-track" id="track-${esc(track.id)}">
      <header><div class="track-index">Track ${String(index + 1).padStart(2, '0')}</div><h2>${esc(track.label)}</h2><p>${esc(track.centralQuestion)}</p></header>
      <div class="then-now-grid">
        <a class="era-card then" href="${chapterLink(site.talks[0].slug, track.then.chapter)}"><div class="era-label"><span>2025 · THEN</span><time>${esc(track.then.time)}</time></div><h3>${esc(track.then.title)}</h3><p>${esc(track.then.note)}</p><strong>Open chapter →</strong></a>
        <div class="shift-arrow" aria-hidden="true">→</div>
        <a class="era-card now" href="${chapterLink(site.talks[1].slug, track.now.chapter)}"><div class="era-label"><span>2026 · NOW</span><time>${esc(track.now.time)}</time></div><h3>${esc(track.now.title)}</h3><p>${esc(track.now.note)}</p><strong>Open chapter →</strong></a>
      </div>
      <div class="track-analysis"><div><small>Technical shift</small><p>${esc(track.technicalShift)}</p></div><div><small>Remaining bottleneck</small><p>${esc(track.bottleneck)}</p></div><div><small>Official reading</small><div class="mini-paper-links">${track.workIds.map(renderWorkLink).join('')}</div></div></div>
    </article>`).join('');
  mount.innerHTML = `
    <header class="topbar"><a class="brand" href="../"><span class="brand-mark">π</span><span>${esc(site.shortBrand)}</span></a><nav class="top-actions"><a class="ghost-btn" href="../talks/${esc(site.talks[0].slug)}/">2025</a><a class="ghost-btn" href="../talks/${esc(site.talks[1].slug)}/">2026</a><button id="themeToggle" class="ghost-btn" type="button">Dark</button></nav></header>
    <main>
      <section class="compare-hero shell"><div class="hero-kicker">2025 → 2026 · Comparative research notebook</div><h1>${esc(site.compare.title)}</h1><p>${esc(site.compare.subtitle)}</p><div class="compare-route">${site.compare.tracks.map((track, index) => `<a href="#track-${esc(track.id)}"><span>${String(index + 1).padStart(2, '0')}</span>${esc(track.label)}</a>`).join('')}</div></section>
      <section class="comparison-list shell">${tracks}</section>
    </main>
    <footer class="footer shell"><div><strong>Comparison method</strong><p>“Then” links to the exact 2025 research chapter; “Now” links to the official-timestamp 2026 chapter. Technical shifts and remaining bottlenecks are editorial synthesis grounded in the linked PI sources.</p></div><div class="footer-links"><a href="../talks/${esc(site.talks[0].slug)}/">Read 2025</a><a href="../talks/${esc(site.talks[1].slug)}/">Read 2026</a><a href="../">Research reader home</a></div></footer>`;
  const themeToggle = document.getElementById('themeToggle');
  const applyTheme = theme => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('talk-theme', theme);
    themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  };
  applyTheme(localStorage.getItem('talk-theme') || 'light');
  themeToggle.addEventListener('click', () => applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
})();
