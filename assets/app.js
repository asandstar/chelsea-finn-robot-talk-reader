(() => {
  const data = window.TALK_DATA;
  if (!data) return;

  const state = {
    view: localStorage.getItem('talk-view') || 'bilingual',
    theme: localStorage.getItem('talk-theme') || 'light',
    activeChapter: data.chapters[0].id,
    activeSegment: 0,
    query: '',
    tag: null,
    focus: false,
  };

  const els = {
    transcriptRoot: document.getElementById('transcriptRoot'),
    chapterNav: document.getElementById('chapterNav'),
    researchCard: document.getElementById('researchCard'),
    progressBar: document.getElementById('progressBar'),
    tagBar: document.getElementById('tagBar'),
    searchInput: document.getElementById('searchInput'),
    searchStatus: document.getElementById('searchStatus'),
    clearFilter: document.getElementById('clearFilter'),
    themeToggle: document.getElementById('themeToggle'),
    focusToggle: document.getElementById('focusToggle'),
    randomInsight: document.getElementById('randomInsight'),
    videoFrame: document.getElementById('videoFrame'),
    nowPlaying: document.getElementById('nowPlaying'),
  };

  const esc = (s='') => s.replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const secondsFromTime = (time) => {
    const [h,m,s] = time.split(':').map(Number);
    return h*3600 + m*60 + s;
  };
  const chapterById = id => data.chapters.find(c => c.id === id);

  function renderNav() {
    els.chapterNav.innerHTML = `<div class="nav-label">Research chapters</div>` + data.chapters.map((c,i) => `
      <a class="chapter-link ${i===0?'active':''}" data-chapter-link="${c.id}" href="#chapter-${c.id}">
        <small>${c.time}</small>${String(i+1).padStart(2,'0')} · ${esc(c.zhTitle)}
      </a>`).join('');
  }

  function renderTags() {
    const tags = [...new Set(data.chapters.flatMap(c => c.tags))];
    els.tagBar.innerHTML = tags.map(t => `<button type="button" class="tag-chip" data-tag="${esc(t)}">${esc(t)}</button>`).join('');
  }

  function renderTranscript() {
    const html = data.chapters.map((c,chapterIndex) => {
      const segs = data.segments.filter(s => s.index >= c.start && s.index <= c.end);
      return `<section class="chapter-section" id="chapter-${c.id}" data-chapter="${c.id}">
        <header class="chapter-heading">
          <div class="chapter-number">Chapter ${String(chapterIndex+1).padStart(2,'0')} · ${c.time}</div>
          <h2>${esc(c.title)} <span class="zh-title">${esc(c.zhTitle)}</span></h2>
          <p>${esc(c.summary)}</p>
          <div class="chapter-tags">${c.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div>
        </header>
        ${segs.map(s => `
          <article class="segment" id="${s.id}" data-index="${s.index}" data-chapter-id="${s.chapterId}" data-search="${esc((s.en+' '+s.zh+' '+c.concepts.join(' ')+' '+c.tags.join(' ')).toLowerCase())}">
            <div class="time-col">
              <button class="time-btn" type="button" data-time="${s.time}" data-seconds="${secondsFromTime(s.time)}">${s.time}</button>
              <div class="speaker">${esc(s.speaker)}</div>
            </div>
            <div class="copy-col">
              <div class="en-copy">${esc(s.en)}</div>
              <div class="zh-copy">${esc(s.zh)}</div>
            </div>
          </article>`).join('')}
      </section>`;
    }).join('');
    els.transcriptRoot.innerHTML = html;
  }

  function renderResearch(chapterId) {
    const c = chapterById(chapterId);
    if (!c) return;
    const papers = c.papers.length ? c.papers.map(p => `
      <a class="paper-link" href="${p.url}" target="_blank" rel="noreferrer">
        <strong>${esc(p.label)} ↗</strong><small>${esc(p.note)}</small>
      </a>`).join('') : `<div class="no-paper">这一段演讲没有明确指向某一篇 PI 论文。这里的内容更适合作为研究问题或方法论线索。</div>`;
    els.researchCard.innerHTML = `
      <div class="research-head"><div class="time">${c.time}</div><h3>${esc(c.zhTitle)}</h3></div>
      <div class="research-body">
        <div class="research-block"><h4>Background concepts</h4><div class="concept-list">${c.concepts.map(x=>`<span class="concept-pill">${esc(x)}</span>`).join('')}</div></div>
        <div class="research-block"><h4>Why this matters</h4><p>${esc(c.why)}</p></div>
        <div class="research-block"><h4>Key line</h4><div class="quote-box">“${esc(c.quote)}”</div></div>
        <div class="research-block"><h4>Paper mapping</h4><div class="paper-links">${papers}</div></div>
      </div>`;
  }

  function setActiveChapter(id) {
    if (!id || state.activeChapter === id) return;
    state.activeChapter = id;
    document.querySelectorAll('[data-chapter-link]').forEach(a => a.classList.toggle('active', a.dataset.chapterLink === id));
    renderResearch(id);
    const c = chapterById(id);
    if (c && els.nowPlaying) els.nowPlaying.textContent = `${data.segments[c.start].time} · ${c.zhTitle}`;
  }

  function setActiveSegment(index) {
    state.activeSegment = Number(index);
    document.querySelectorAll('.segment.active-segment').forEach(el => el.classList.remove('active-segment'));
    const el = document.querySelector(`.segment[data-index="${state.activeSegment}"]`);
    if (el) el.classList.add('active-segment');
  }

  function initObservers() {
    const chapterObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if (visible[0]) setActiveChapter(visible[0].target.dataset.chapter);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
    document.querySelectorAll('.chapter-section').forEach(el => chapterObserver.observe(el));

    const segmentObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(e=>e.isIntersecting).sort((a,b)=>Math.abs(a.boundingClientRect.top-180)-Math.abs(b.boundingClientRect.top-180));
      if (visible[0]) setActiveSegment(visible[0].target.dataset.index);
    }, { rootMargin: '-110px 0px -68% 0px', threshold: 0.02 });
    document.querySelectorAll('.segment').forEach(el => segmentObserver.observe(el));
  }

  function applyView(view) {
    state.view = view;
    document.body.dataset.view = view;
    localStorage.setItem('talk-view', view);
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
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
    const pct = max > 0 ? (root.scrollTop / max) * 100 : 0;
    els.progressBar.style.width = `${pct}%`;
  }

  function updateVideo(time, seconds) {
    if (!els.videoFrame) return;
    els.videoFrame.src = `https://www.youtube-nocookie.com/embed/${data.meta.videoId}?start=${seconds}&autoplay=1&rel=0`;
    const seg = data.segments.find(s => s.time === time);
    const c = seg ? chapterById(seg.chapterId) : null;
    els.nowPlaying.textContent = `${time}${c ? ' · '+c.zhTitle : ''}`;
  }

  function matchesFilter(el) {
    const queryOk = !state.query || el.dataset.search.includes(state.query);
    const chapter = chapterById(el.dataset.chapterId);
    const tagOk = !state.tag || chapter.tags.includes(state.tag);
    return queryOk && tagOk;
  }

  function applyFilters() {
    let visibleCount = 0;
    document.querySelectorAll('.segment').forEach(el => {
      const ok = matchesFilter(el);
      el.classList.toggle('filtered-out', !ok);
      if (ok) visibleCount += 1;
    });
    document.querySelectorAll('.chapter-section').forEach(section => {
      const hasVisible = [...section.querySelectorAll('.segment')].some(el => !el.classList.contains('filtered-out'));
      section.style.display = hasVisible ? '' : 'none';
    });
    const filtering = Boolean(state.query || state.tag);
    els.clearFilter.hidden = !filtering;
    els.searchStatus.textContent = filtering ? `${visibleCount} / ${data.segments.length} segments shown${state.tag ? ` · ${state.tag}` : ''}` : '';
    document.querySelectorAll('.tag-chip').forEach(btn => btn.classList.toggle('active', btn.dataset.tag === state.tag));
  }

  function bindEvents() {
    document.querySelectorAll('.view-btn').forEach(btn => btn.addEventListener('click', () => applyView(btn.dataset.view)));
    els.themeToggle.addEventListener('click', () => applyTheme(state.theme === 'dark' ? 'light' : 'dark'));
    els.focusToggle.addEventListener('click', () => {
      state.focus = !state.focus;
      document.body.classList.toggle('focus-mode', state.focus);
      els.focusToggle.textContent = state.focus ? 'Exit focus' : 'Focus';
    });
    els.searchInput.addEventListener('input', e => {
      state.query = e.target.value.trim().toLowerCase();
      applyFilters();
    });
    els.tagBar.addEventListener('click', e => {
      const btn = e.target.closest('[data-tag]');
      if (!btn) return;
      state.tag = state.tag === btn.dataset.tag ? null : btn.dataset.tag;
      applyFilters();
    });
    els.clearFilter.addEventListener('click', () => {
      state.query = ''; state.tag = null; els.searchInput.value = ''; applyFilters();
    });
    document.addEventListener('click', e => {
      const btn = e.target.closest('.time-btn');
      if (!btn) return;
      updateVideo(btn.dataset.time, btn.dataset.seconds);
      const segment = btn.closest('.segment');
      if (segment) {
        setActiveSegment(segment.dataset.index);
        setActiveChapter(segment.dataset.chapterId);
      }
    });
    els.randomInsight.addEventListener('click', () => {
      const keyIds = ['memory-hypotheses','posttraining-breakthrough','pi0-architecture','knowledge-insulation','hi-robot','qa-world-model','qa-synthetic','qa-academia-fast'];
      const id = keyIds[Math.floor(Math.random()*keyIds.length)];
      document.getElementById(`chapter-${id}`)?.scrollIntoView({behavior:'smooth',block:'start'});
    });
    window.addEventListener('scroll', updateProgress, {passive:true});
    document.addEventListener('keydown', e => {
      if (e.key === '/' && document.activeElement !== els.searchInput) { e.preventDefault(); els.searchInput.focus(); }
      if (e.key.toLowerCase() === 'b' && !/input|textarea/i.test(document.activeElement.tagName)) applyView('bilingual');
      if (e.key.toLowerCase() === 'e' && !/input|textarea/i.test(document.activeElement.tagName)) applyView('en');
      if (e.key.toLowerCase() === 'z' && !/input|textarea/i.test(document.activeElement.tagName)) applyView('zh');
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
