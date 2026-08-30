(() => {
  const site = window.SITE_DATA;
  const mount = document.getElementById('homeApp');
  if (!site || !mount) return;
  const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const talkCards = site.talks.map((talk, index) => `
    <article class="talk-card ${esc(talk.accent)}">
      <div class="talk-card-top"><span class="talk-year">${esc(talk.year)}</span><span>${esc(talk.duration)}</span></div>
      <div><div class="eyebrow">Talk ${String(index + 1).padStart(2, '0')} · ${esc(talk.format)}</div><h2>${esc(talk.title)}</h2><h3>${esc(talk.zhTitle)}</h3><p>${esc(talk.thesis)}</p></div>
      <div class="topic-row">${talk.topics.map(topic => `<span>${esc(topic)}</span>`).join('')}</div>
      <a class="card-cta" href="${esc(talk.route)}">Open ${esc(talk.year)} reader <span>→</span></a>
    </article>`).join('');
  const paths = site.researchPaths.map((path, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><div><strong>${esc(path.label)}</strong><p>${esc(path.detail)}</p></div></li>`).join('');
  const papers = site.paperMap.map(paper => `<a class="paper-chip-card" href="${esc(paper.url)}" target="_blank" rel="noreferrer"><small>${esc(paper.year)}</small><strong>${esc(paper.label)}</strong><span>${esc(paper.note)}</span></a>`).join('');
  mount.innerHTML = `
    <header class="topbar"><a class="brand" href="./"><span class="brand-mark">π</span><span>${esc(site.shortBrand)}</span></a><nav class="top-actions"><a class="ghost-btn" href="${esc(site.compare.route)}">Compare</a><button id="themeToggle" class="ghost-btn" type="button">Dark</button></nav></header>
    <main>
      <section class="home-hero shell"><div class="home-orbit" aria-hidden="true"><i></i><i></i><i></i><span>π</span></div><div class="hero-kicker">${esc(site.brand)}</div><h1>${esc(site.titleLead)}<br><span>${esc(site.titleFocus)}</span></h1><p>${esc(site.deck)}</p><div class="home-actions"><a class="primary-btn" href="${esc(site.talks[0].route)}">Start with 2025</a><a class="secondary-btn" href="${esc(site.compare.route)}">Compare the evolution</a></div></section>
      <section class="talk-library shell"><div class="section-heading compact"><div class="eyebrow">Talk library</div><h2>选择一场演讲，或沿着研究演进阅读</h2></div><div class="talk-grid">${talkCards}</div></section>
      <section class="evolution-band"><div class="shell evolution-grid"><div class="section-heading"><div class="eyebrow">Research evolution</div><h2>一年不是多了一场演讲，而是研究对象发生了变化。</h2><p>2025 讨论如何获得广泛能力；2026 把焦点移到部署闭环、持续自治，以及如何把不同数据源压进一个可控、可组合的通用策略。</p><a class="inline-link" href="${esc(site.compare.route)}">Open the four-track comparison →</a></div><ol class="path-list">${paths}</ol></div></section>
      <section class="home-papers shell"><div class="section-heading compact"><div class="eyebrow">Official paper map</div><h2>π0 → π0.7</h2><p>只使用 Physical Intelligence 官方研究页、官方论文与 arXiv 项目链接。</p></div><div class="paper-chip-grid">${papers}</div></section>
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
