/**
 * GitHub Learning App Controller
 * Router, Dynamic UI Renderer, Navigation, Search, and Event Binding.
 */
class App {
  constructor() {
    this.lessons = [];
    this.currentLessonId = null;
    this.init();
  }

  async init() {
    this.initTheme();
    await this.loadLessonsData();
    this.bindGlobalEvents();
    
    // Hash routing or default to lesson-01
    const hash = window.location.hash.replace('#', '');
    if (hash && this.lessons.some(l => l.id === hash)) {
      this.switchLesson(hash);
    } else if (this.lessons.length > 0) {
      this.switchLesson(this.lessons[0].id);
    }

    this.updateGlobalProgress();
  }

  initTheme() {
    const currentTheme = window.progressManager.getTheme();
    document.documentElement.setAttribute('data-theme', currentTheme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  toggleTheme() {
    const newTheme = window.progressManager.getTheme() === 'dark' ? 'light' : 'dark';
    window.progressManager.setTheme(newTheme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    }
  }

  async loadLessonsData() {
    try {
      if (window.lessonsData && window.location.protocol === 'file:') {
        this.lessons = window.lessonsData;
      } else {
        const response = await fetch('./data/lessons.json');
        this.lessons = await response.json();
      }
    } catch (e) {
      if (window.lessonsData) {
        this.lessons = window.lessonsData;
      } else {
        console.error('Failed to load lessons database:', e);
      }
    }
    this.renderSidebarNav();
  }

  renderSidebarNav() {
    const navContainer = document.getElementById('sidebar-nav-container');
    if (!navContainer) return;

    let html = '';
    let currentModule = '';

    this.lessons.forEach(lesson => {
      if (lesson.module !== currentModule) {
        currentModule = lesson.module;
        html += `<div class="nav-module-title">${currentModule}</div>`;
      }

      const isCompleted = window.progressManager.isLessonCompleted(lesson.id);
      const isVerified = window.progressManager.isLessonVerified(lesson.id);
      const isActive = lesson.id === this.currentLessonId;

      html += `
        <div class="nav-lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
             data-id="${lesson.id}" onclick="app.switchLesson('${lesson.id}')">
          <span>L${lesson.number}. ${lesson.title}</span>
          <span class="check-status">${isVerified ? '✅' : (isCompleted ? '☑️' : '⚪')}</span>
        </div>
      `;
    });

    navContainer.innerHTML = html;
  }

  switchLesson(lessonId) {
    const lesson = this.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.currentLessonId = lessonId;
    window.location.hash = lessonId;
    this.renderSidebarNav();
    this.renderLessonView(lesson);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderLessonView(lesson) {
    const container = document.getElementById('main-content-area');
    if (!container) return;

    const activeTab = window.progressManager.getPreferredTab();
    const isVerified = window.progressManager.isLessonVerified(lesson.id);

    // Objectives HTML
    const objectivesHtml = lesson.objectives.map(obj => `<li>✨ ${obj}</li>`).join('');

    // Evidence Cards HTML
    const evidenceHtml = lesson.evidences.map(ev => `
      <div class="evidence-card">
        <div class="evidence-level">${ev.level}</div>
        <div class="evidence-title">${ev.item}</div>
        <div class="evidence-quote">"${ev.quote}"</div>
        <div style="display:flex; justify-between; align-items:center;">
          <a class="evidence-link" href="${ev.sourceUrl}" target="_blank" rel="noopener">🔗 ${ev.sourceName}</a>
          <span style="font-size:0.75rem; color:var(--accent-green);">已驗證 ✅</span>
        </div>
      </div>
    `).join('');

    // Common Mistakes HTML
    const mistakesHtml = lesson.commonMistakes.map(m => `
      <div style="background-color:var(--bg-tertiary); border-left:3px solid var(--accent-red); padding:14px 18px; border-radius:var(--radius-md); margin-bottom:12px;">
        <div style="font-weight:600; color:var(--accent-red); margin-bottom:4px;">❌ 常見誤解：${m.mistake}</div>
        <div style="font-size:0.9rem; color:var(--text-primary);">💡 正確觀念：${m.correction}</div>
      </div>
    `).join('');

    // Verify Checklist HTML
    const checklistState = window.progressManager.getChecklistState(lesson.id);
    const checklistHtml = lesson.verification.checklist.map((item, idx) => {
      const checked = checklistState[idx] ? 'checked' : '';
      return `
        <li>
          <input type="checkbox" id="chk-${lesson.id}-${idx}" ${checked} 
                 onchange="app.handleChecklistChange('${lesson.id}', ${idx}, this.checked)">
          <label for="chk-${lesson.id}-${idx}">${item}</label>
        </li>
      `;
    }).join('');

    container.innerHTML = `
      <!-- Hero Card -->
      <div class="lesson-card">
        <div class="lesson-meta">
          <span class="module-badge">${lesson.module}</span>
          <span class="duration-badge">⏱️ 預估時間：${lesson.duration}</span>
        </div>
        <h1 class="lesson-title">Lesson ${lesson.number}: ${lesson.title}</h1>
        
        <!-- Mental Model -->
        <div class="mental-model-box">
          <div class="mental-model-header">🧠 心智模型 (Mental Model)</div>
          <div class="mental-model-text">${lesson.mentalModel.analogy}\n\n📌 核心要點：${lesson.mentalModel.keyTakeaway}</div>
        </div>
      </div>

      <!-- Objectives Section -->
      <div class="section-title">🎯 學習目標</div>
      <ul class="objectives-list">${objectivesHtml}</ul>

      <!-- Evidence Matrix Section -->
      <div class="section-title">🛡️ 官方權威三層證據來源 (Evidence Matrix)</div>
      <div class="evidence-container">${evidenceHtml}</div>

      <!-- Dual Guide Section -->
      <div class="section-title">🛠️ 實體操作教學 (Dual Guide)</div>
      <div class="dual-guide-container">
        <div class="tab-header">
          <button class="tab-btn ${activeTab === 'desktop' ? 'active' : ''}" onclick="app.switchGuideTab('desktop')">
            🖥️ GitHub Desktop 操作
          </button>
          <button class="tab-btn ${activeTab === 'cli' ? 'active' : ''}" onclick="app.switchGuideTab('cli')">
            💻 Git CLI 指令對照
          </button>
        </div>
        <div class="tab-content" id="guide-tab-content">
          ${this.getGuideTabHtml(lesson, activeTab)}
        </div>
      </div>

      <!-- Common Mistakes -->
      <div class="section-title">⚠️ 常見錯誤與觀念排查</div>
      <div style="margin-bottom:32px;">${mistakesHtml}</div>

      <!-- Quiz Section -->
      <div class="section-title">🧪 課後小測驗</div>
      <div id="quiz-container-${lesson.id}"></div>

      <!-- Verify Mode Section -->
      <div class="section-title">🔍 驗證模式 (Verify Mode)</div>
      <div class="verify-card">
        <div class="verify-header">
          <span class="verify-icon">${isVerified ? '✅' : '🛡️'}</span>
          <div>
            <h3 style="font-size:1.15rem; font-weight:700;">${lesson.verification.title}</h3>
            <p style="font-size:0.875rem; color:var(--text-secondary);">${lesson.verification.description}</p>
          </div>
        </div>
        
        <ul class="verify-checklist">${checklistHtml}</ul>
        
        <p style="font-size:0.875rem; font-weight:600; margin-bottom:8px;">${lesson.verification.verifyPrompt}</p>
        <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
          <input type="text" class="verify-url-input" id="verify-url-input" 
                 placeholder="https://github.com/username/my-first-repo" style="flex:1; margin-bottom:0;">
          <button class="btn-primary" onclick="app.runVerification('${lesson.id}')">
            🚀 執行驗證與完成學習
          </button>
        </div>
        <div id="verify-status-msg" style="margin-top:12px; font-weight:600; font-size:0.9rem;"></div>
      </div>

      <!-- Footer Navigation -->
      <div class="lesson-footer-nav">
        ${this.getFooterNavHtml(lesson)}
      </div>
    `;

    // Render Quiz
    window.quizEngine.renderQuiz(lesson.quiz, `quiz-container-${lesson.id}`);
  }

  getGuideTabHtml(lesson, tab) {
    const guide = lesson.dualGuides[tab];
    if (!guide) return '';

    const stepsHtml = guide.steps.map(step => `<li>${step}</li>`).join('');
    return `
      <h3 style="font-size:1.1rem; font-weight:700; margin-bottom:16px;">${guide.title}</h3>
      <ol class="step-list">${stepsHtml}</ol>
      <div class="guide-tip-box">💡 小撇步：${guide.tip}</div>
    `;
  }

  switchGuideTab(tab) {
    window.progressManager.setPreferredTab(tab);
    const lesson = this.lessons.find(l => l.id === this.currentLessonId);
    if (lesson) {
      this.renderLessonView(lesson);
    }
  }

  handleChecklistChange(lessonId, index, isChecked) {
    window.progressManager.toggleChecklistItem(lessonId, index, isChecked);
  }

  async runVerification(lessonId) {
    const lesson = this.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const statusEl = document.getElementById('verify-status-msg');
    const urlInput = document.getElementById('verify-url-input');
    const repoUrl = urlInput ? urlInput.value.trim() : '';

    // Check checklist items
    const checklistCount = lesson.verification.checklist.length;
    const isChecklistComplete = window.verifyEngine.validateChecklist(lessonId, checklistCount);

    if (!isChecklistComplete && !repoUrl) {
      statusEl.style.color = 'var(--accent-red)';
      statusEl.innerText = '⚠️ 請先勾選上方所有的驗證確認事項，或輸入 GitHub 網址！';
      return;
    }

    if (repoUrl) {
      statusEl.style.color = 'var(--accent-cyan)';
      statusEl.innerText = '🔍 正在通訊 GitHub REST API 進行實時驗證中...';

      const result = await window.verifyEngine.verifyGitHubRepo(repoUrl);
      if (result.success) {
        statusEl.style.color = 'var(--accent-green)';
        statusEl.innerText = result.message;
        window.progressManager.markLessonVerified(lessonId);
        this.updateGlobalProgress();
        this.renderSidebarNav();
      } else {
        statusEl.style.color = 'var(--accent-red)';
        statusEl.innerText = result.message;
      }
    } else {
      // Manual checklist verification
      statusEl.style.color = 'var(--accent-green)';
      statusEl.innerText = '🎉 驗證成功！已透過實作檢查清單完成本課！';
      window.progressManager.markLessonVerified(lessonId);
      this.updateGlobalProgress();
      this.renderSidebarNav();
    }
  }

  getFooterNavHtml(lesson) {
    const currentIndex = this.lessons.findIndex(l => l.id === lesson.id);
    const prevLesson = currentIndex > 0 ? this.lessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < this.lessons.length - 1 ? this.lessons[currentIndex + 1] : null;

    let html = '';
    if (prevLesson) {
      html += `<button class="btn-secondary" onclick="app.switchLesson('${prevLesson.id}')">⬅️ 上一課：${prevLesson.title}</button>`;
    } else {
      html += `<div></div>`;
    }

    if (nextLesson) {
      html += `<button class="btn-primary" onclick="app.switchLesson('${nextLesson.id}')">下一課：${nextLesson.title} ➡️</button>`;
    } else {
      html += `<div style="font-weight:600; color:var(--accent-cyan);">🎉 您已完成第一階段的所有展示課程！</div>`;
    }

    return html;
  }

  updateGlobalProgress() {
    const totalCount = 24; // 24 lessons planned in curriculum
    const percent = window.progressManager.calculateProgress(totalCount);
    
    const fillEl = document.getElementById('progress-bar-fill');
    const textEl = document.getElementById('progress-text');
    if (fillEl) fillEl.style.width = `${percent}%`;
    if (textEl) textEl.innerText = `完成度: ${percent}% (${window.progressManager.state.verifiedLessons.length}/24 課)`;
  }

  bindGlobalEvents() {
    const searchInput = document.getElementById('sidebar-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const items = document.querySelectorAll('.nav-lesson-item');
        items.forEach(item => {
          const text = item.innerText.toLowerCase();
          item.style.display = text.includes(query) ? 'flex' : 'none';
        });
      });
    }

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
