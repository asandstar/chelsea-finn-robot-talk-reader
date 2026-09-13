(() => {
  const data = window.TALK_DATA;
  const site = window.SITE_DATA;
  const mount = document.getElementById('readerApp');
  if (!data || !site || !mount) return;

  const meta = data.meta;
  const talkIndex = site.talks.findIndex(talk => talk.slug === meta.slug);
  const previousTalk = talkIndex > 0 ? site.talks[talkIndex - 1] : null;
  const nextTalk = talkIndex < site.talks.length - 1 ? site.talks[talkIndex + 1] : null;
  const state = {
    view: localStorage.getItem('talk-view') || 'bilingual',
    theme: localStorage.getItem('talk-theme') || 'light',
    activeChapter: data.chapters[0].id,
    activeSegment: 0,
    query: '',
    tag: null,
    focus: false,
  };

  const esc = (value = '') => String(value).replace(/[&<>'"]/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  }[char]));
  const safeUrl = value => /^(https?:\/\/|\.\.\/|\.\/|#)/.test(value || '') ? esc(value) : '#';
  const secondsFromTime = time => {
    const parts = time.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return (parts[0] || 0) * 3600 + (parts[1] || 0) * 60 + (parts[2] || 0);
  };
  const chapterById = id => data.chapters.find(chapter => chapter.id === id);
  const talkHref = slug => `../${slug}/`;

  document.title = meta.pageTitle;
  let description = document.querySelector('meta[name="description"]');
  if (!description) {
    description = document.createElement('meta');
    description.name = 'description';
    document.head.appendChild(description);
  }
  description.content = meta.description;

  const routeHtml = meta.route.map((item, index) =>
    `${index ? '<i aria-hidden="true">→</i>' : ''}<span>${esc(item)}</span>`
  ).join('');
  const selectorHtml = site.talks.map(talk =>
    `<option value="${talkHref(talk.slug)}" ${talk.slug === meta.slug ? 'selected' : ''}>${esc(talk.year)} · ${esc(talk.title)}</option>`
  ).join('');
  const paperCards = meta.paperSources.map(paper => `
    <a class="paper-card" href="${safeUrl(paper.url)}" target="_blank" rel="noreferrer">
      <span>${esc(paper.year)}</span><strong>${esc(paper.label)}</strong><p>${esc(paper.note)}</p>
    </a>`).join('');
  const footerLinks = meta.footer.links.map(link =>
    `<a href="${safeUrl(link.url)}" target="_blank" rel="noreferrer">${esc(link.label)}</a>`
  ).join('');
  const prevNextHtml = [
    previousTalk ? `<a class="talk-step previous" href="${talkHref(previousTalk.slug)}"><small>← Previous talk</small><strong>${esc(previousTalk.year)} · ${esc(previousTalk.title)}</strong></a>` : '<span></span>',
    nextTalk ? `<a class="talk-step next" href="${talkHref(nextTalk.slug)}"><small>Next talk →</small><strong>${esc(nextTalk.year)} · ${esc(nextTalk.title)}</strong></a>` : '<span></span>'
  ].join('');

  mount.innerHTML = `
    <div class="progress-track" aria-hidden="true"><div id="progressBar" class="progress-bar"></div></div>
    <header class="topbar">
      <a class="brand" href="../../" aria-label="Research reader home"><span class="brand-mark">π</span><span>${esc(site.shortBrand)}</span></a>
      <div class="talk-switch-wrap">
        <label for="talkSelect">Talk</label>
        <select id="talkSelect" class="talk-select" aria-label="Choose a talk">${selectorHtml}</select>
      </div>
      <nav class="top-actions" aria-label="Reading controls">
        <a class="ghost-btn compare-top-link" href="../../compare/">Compare</a>
        <button id="focusToggle" class="ghost-btn" type="button">Focus</button>
        <button id="themeToggle" class="ghost-btn" type="button">Dark</button>
        <a class="ghost-btn link-btn" href="${safeUrl(meta.videoUrl)}" target="_blank" rel="noreferrer">YouTube ↗</a>
      </nav>
    </header>

    <section id="top" class="hero shell talk-hero">
      <div class="hero-kicker">${esc(meta.eyebrow)}</div>
      <h1>${esc(meta.titleLead)}<br><span>${esc(meta.titleFocus)}</span></h1>
      <p class="hero-deck">${esc(meta.subtitle)}</p>
      <div class="source-capsule"><strong>${esc(meta.contentKind)}</strong><span>${esc(meta.sourceLabel)}</span><a href="${safeUrl(meta.sourceUrl)}" target="_blank" rel="noreferrer">Source ↗</a></div>
      <div class="hero-meta">
        <span>${esc(meta.duration)}</span><span>${data.segments.length} segments</span><span>${data.chapters.length} research chapters</span><span>${esc(meta.date)}</span><span>${esc(meta.venue)}</span>
      </div>
      <div class="hero-actions"><a class="primary-btn" href="#reader">${esc(meta.startLabel)}</a><button id="randomInsight" class="secondary-btn" type="button">${esc(meta.randomLabel)}</button></div>
      <div class="route-strip" aria-label="Talk research route">${routeHtml}</div>
    </section>

    <section class="video-band shell" aria-label="Video companion">
      <div class="video-card">
        <div class="video-copy"><div class="eyebrow">Video companion</div><h2>回到演讲的原始语境</h2><p>点击时间戳即可从对应位置播放视频。2026 按官方章节切分；2025 保留逐段时间戳。</p><div id="nowPlaying" class="now-playing">${esc(data.segments[0].time)} · ${esc(data.chapters[0].zhTitle)}</div></div>
        <div class="video-frame-wrap"><iframe id="videoFrame" class="video-frame" src="https://www.youtube-nocookie.com/embed/${esc(meta.videoId)}?rel=0" title="${esc(meta.titleFocus)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
      </div>
    </section>

    <main id="reader" class="reader-shell shell">
      <aside id="chapterNav" class="chapter-nav" aria-label="Chapter navigation"></aside>
      <section class="reader-main">
        <div class="control-panel">
          <div class="view-switch" role="group" aria-label="Language view"><button class="view-btn active" data-view="bilingual" type="button">EN + 中文</button><button class="view-btn" data-view="en" type="button">English</button><button class="view-btn" data-view="zh" type="button">中文</button></div>
          <label class="search-box"><span aria-hidden="true">⌕</span><input id="searchInput" type="search" placeholder="Search notes / 搜索内容" autocomplete="off"><kbd>/</kbd></label>
          <button id="clearFilter" class="tiny-btn" type="button" hidden>Clear</button>
        </div>
        <div id="tagBar" class="tag-bar" aria-label="Topic filters"></div><div id="searchStatus" class="search-status" aria-live="polite"></div><div id="transcriptRoot"></div>
      </section>
      <aside class="research-rail" aria-label="Active research notes"><div id="researchCard" class="research-card"></div></aside>
    </main>

    <nav class="talk-steps shell" aria-label="Previous and next talks">${prevNextHtml}</nav>
    <section class="paper-map shell"><div class="section-heading wide-heading"><div class="eyebrow">Paper map · official sources</div><h2>从这场演讲延伸到 PI 的相关研究</h2><p>下列研究工作补充演讲中的背景；链接仅指向 PI 官方研究页、官方论文或 arXiv 项目页。</p></div><div class="paper-grid">${paperCards}</div></section>
    <footer class="footer shell"><div><strong>${esc(meta.footer.title)}</strong><p>${esc(meta.footer.note)}</p><p class="source-note">${esc(meta.sourceNote)}</p></div><div class="footer-links">${footerLinks}<a href="../../compare/">Compare 2025 → 2026</a><a href="#top">Back to top ↑</a></div></footer>`;

  const els = {
    transcriptRoot: document.getElementById('transcriptRoot'), chapterNav: document.getElementById('chapterNav'),
    researchCard: document.getElementById('researchCard'), progressBar: document.getElementById('progressBar'),
    tagBar: document.getElementById('tagBar'), searchInput: document.getElementById('searchInput'),
    searchStatus: document.getElementById('searchStatus'), clearFilter: document.getElementById('clearFilter'),
    themeToggle: document.getElementById('themeToggle'), focusToggle: document.getElementById('focusToggle'),
    randomInsight: document.getElementById('randomInsight'), videoFrame: document.getElementById('videoFrame'),
    nowPlaying: document.getElementById('nowPlaying'), talkSelect: document.getElementById('talkSelect'),
  };

  function renderNav() {
    els.chapterNav.innerHTML = `<div class="nav-label">Research chapters</div>` + data.chapters.map((chapter, index) => `
      <a class="chapter-link ${index === 0 ? 'active' : ''}" data-chapter-link="${esc(chapter.id)}" href="#chapter-${esc(chapter.id)}"><small>${esc(chapter.time)}</small>${String(index + 1).padStart(2, '0')} · ${esc(chapter.zhTitle)}</a>`).join('');
  }

  function renderTags() {
    const tags = [...new Set(data.chapters.flatMap(chapter => chapter.tags))];
    els.tagBar.innerHTML = tags.map(tag => `<button type="button" class="tag-chip" data-tag="${esc(tag)}">${esc(tag)}</button>`).join('');
  }

  function renderCrossLinks(chapter) {
    if (!chapter.crossLinks?.length) return '';
    return `<div class="cross-link-stack">${chapter.crossLinks.map(link => `
      <a class="cross-link-card" href="${safeUrl(link.href)}"><small>${esc(link.kicker)}</small><strong>${esc(link.title)} →</strong><p>${esc(link.note)}</p></a>`).join('')}</div>`;
  }

  function renderTranscript() {
    els.transcriptRoot.innerHTML = data.chapters.map((chapter, chapterIndex) => {
      const segments = data.segments.filter(segment => segment.index >= chapter.start && segment.index <= chapter.end);
      return `<section class="chapter-section" id="chapter-${esc(chapter.id)}" data-chapter="${esc(chapter.id)}">
        <header class="chapter-heading"><div class="chapter-number">Chapter ${String(chapterIndex + 1).padStart(2, '0')} · ${esc(chapter.time)}</div><h2>${esc(chapter.title)} <span class="zh-title">${esc(chapter.zhTitle)}</span></h2><p>${esc(chapter.summary)}</p><div class="chapter-tags">${chapter.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>${renderCrossLinks(chapter)}</header>
        ${segments.map(segment => `<article class="segment" id="${esc(segment.id)}" data-index="${segment.index}" data-chapter-id="${esc(segment.chapterId)}" data-search="${esc(`${segment.en} ${segment.zh} ${chapter.concepts.join(' ')} ${chapter.tags.join(' ')}`.toLowerCase())}"><div class="time-col"><button class="time-btn" type="button" data-time="${esc(segment.time)}" data-seconds="${secondsFromTime(segment.time)}">${esc(segment.time)}</button><div class="speaker">${esc(segment.speaker)}</div></div><div class="copy-col"><div class="en-copy">${esc(segment.en)}</div><div class="zh-copy">${esc(segment.zh)}</div></div></article>`).join('')}
      </section>`;
    }).join('');
  }

  function renderResearch(chapterId) {
    const chapter = chapterById(chapterId);
    if (!chapter) return;
    const papers = chapter.papers.length ? chapter.papers.map(paper => `<a class="paper-link" href="${safeUrl(paper.url)}" target="_blank" rel="noreferrer"><strong>${esc(paper.label)} ↗</strong><small>${esc(paper.note)}</small></a>`).join('') : '<div class="no-paper">Research question / method note; no single PI paper is assigned.</div>';
    const keyContent = chapter.takeaway ? esc(chapter.takeaway) : `“${esc(chapter.quote)}”`;
    els.researchCard.innerHTML = `<div class="research-head"><div class="time">${esc(chapter.time)}</div><h3>${esc(chapter.zhTitle)}</h3></div><div class="research-body"><div class="research-block"><h4>Background concepts</h4><div class="concept-list">${chapter.concepts.map(concept => `<span class="concept-pill">${esc(concept)}</span>`).join('')}</div></div><div class="research-block"><h4>Why this matters</h4><p>${esc(chapter.why)}</p></div><div class="research-block"><h4>${chapter.takeaway ? 'Research takeaway' : 'Key line from talk'}</h4><div class="quote-box">${keyContent}</div></div><div class="research-block"><h4>Supplemental paper mapping</h4><div class="paper-links">${papers}</div></div>${renderCrossLinks(chapter)}</div>`;
  }

  function setActiveChapter(id, force = false) {
    if (!id || (!force && state.activeChapter === id)) return;
    state.activeChapter = id;
    document.querySelectorAll('[data-chapter-link]').forEach(link => link.classList.toggle('active', link.dataset.chapterLink === id));
    renderResearch(id);
    const chapter = chapterById(id);
    if (chapter) els.nowPlaying.textContent = `${data.segments[chapter.start].time} · ${chapter.zhTitle}`;
  }

  function setActiveSegment(index) {
    state.activeSegment = Number(index);
    document.querySelectorAll('.segment.active-segment').forEach(segment => segment.classList.remove('active-segment'));
    document.querySelector(`.segment[data-index="${state.activeSegment}"]`)?.classList.add('active-segment');
  }

  function initObservers() {
    const chapterObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveChapter(visible[0].target.dataset.chapter);
    }, {rootMargin: '-18% 0px -68% 0px', threshold: 0});
    document.querySelectorAll('.chapter-section').forEach(section => chapterObserver.observe(section));
    const segmentObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top - 180) - Math.abs(b.boundingClientRect.top - 180));
      if (visible[0]) setActiveSegment(visible[0].target.dataset.index);
    }, {rootMargin: '-110px 0px -68% 0px', threshold: 0.02});
    document.querySelectorAll('.segment').forEach(segment => segmentObserver.observe(segment));
  }

  function applyView(view) {
    state.view = view;
    document.body.dataset.view = view;
    localStorage.setItem('talk-view', view);
    document.querySelectorAll('.view-btn').forEach(button => button.classList.toggle('active', button.dataset.view === view));
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('talk-theme', theme);
    els.themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  function updateProgress() {
    const root = document.documentElement;
    const max = root.scrollHeight - root.clientHeight;
    els.progressBar.style.width = `${max > 0 ? (root.scrollTop / max) * 100 : 0}%`;
  }

  function updateVideo(time, seconds) {
    els.videoFrame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(meta.videoId)}?start=${seconds}&autoplay=1&rel=0`;
    const segment = data.segments.find(item => item.time === time);
    const chapter = segment ? chapterById(segment.chapterId) : null;
    els.nowPlaying.textContent = `${time}${chapter ? ` · ${chapter.zhTitle}` : ''}`;
  }

  function applyFilters() {
    let visibleCount = 0;
    document.querySelectorAll('.segment').forEach(segment => {
      const chapter = chapterById(segment.dataset.chapterId);
      const visible = (!state.query || segment.dataset.search.includes(state.query)) && (!state.tag || chapter.tags.includes(state.tag));
      segment.classList.toggle('filtered-out', !visible);
      if (visible) visibleCount += 1;
    });
    document.querySelectorAll('.chapter-section').forEach(section => {
      section.hidden = ![...section.querySelectorAll('.segment')].some(segment => !segment.classList.contains('filtered-out'));
    });
    const filtering = Boolean(state.query || state.tag);
    els.clearFilter.hidden = !filtering;
    els.searchStatus.textContent = filtering ? `${visibleCount} / ${data.segments.length} segments shown${state.tag ? ` · ${state.tag}` : ''}` : '';
    document.querySelectorAll('.tag-chip').forEach(button => button.classList.toggle('active', button.dataset.tag === state.tag));
  }

  function bindEvents() {
    document.querySelectorAll('.view-btn').forEach(button => button.addEventListener('click', () => applyView(button.dataset.view)));
    els.themeToggle.addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));
    els.focusToggle.addEventListener('click', () => {
      state.focus = !state.focus;
      document.body.classList.toggle('focus-mode', state.focus);
      els.focusToggle.textContent = state.focus ? 'Exit focus' : 'Focus';
    });
    els.talkSelect.addEventListener('change', event => { window.location.href = event.target.value; });
    els.searchInput.addEventListener('input', event => { state.query = event.target.value.trim().toLowerCase(); applyFilters(); });
    els.tagBar.addEventListener('click', event => {
      const button = event.target.closest('[data-tag]');
      if (!button) return;
      state.tag = state.tag === button.dataset.tag ? null : button.dataset.tag;
      applyFilters();
    });
    els.clearFilter.addEventListener('click', () => { state.query = ''; state.tag = null; els.searchInput.value = ''; applyFilters(); });
    document.addEventListener('click', event => {
      const button = event.target.closest('.time-btn');
      if (!button) return;
      updateVideo(button.dataset.time, button.dataset.seconds);
      const segment = button.closest('.segment');
      if (segment) { setActiveSegment(segment.dataset.index); setActiveChapter(segment.dataset.chapterId, true); }
    });
    els.randomInsight.addEventListener('click', () => {
      const id = meta.keyInsights[Math.floor(Math.random() * meta.keyInsights.length)];
      document.getElementById(`chapter-${id}`)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
    window.addEventListener('scroll', updateProgress, {passive: true});
    document.addEventListener('keydown', event => {
      if (event.key === '/' && document.activeElement !== els.searchInput) { event.preventDefault(); els.searchInput.focus(); }
      if (!/input|textarea|select/i.test(document.activeElement.tagName)) {
        if (event.key.toLowerCase() === 'b') applyView('bilingual');
        if (event.key.toLowerCase() === 'e') applyView('en');
        if (event.key.toLowerCase() === 'z') applyView('zh');
      }
    });
  }

  renderNav();
  renderTags();
  renderTranscript();
  renderResearch(state.activeChapter);
  applyView(state.view);
  applyTheme(state.theme);
  bindEvents();
  initObservers();
  updateProgress();
})();
