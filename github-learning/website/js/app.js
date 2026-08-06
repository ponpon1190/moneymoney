/**
 * GitHub Learning App Controller (Literary Warm Aesthetic & Visual Diagram Enhanced)
 * Router, Dynamic UI Renderer, Compass Navigation, Search, and Event Binding.
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
    document.documentElement.setAttribute('data-theme', 'light');
  }

  async loadLessonsData() {
    try {
      if (window.lessonsData) {
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
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <a class="evidence-link" href="${ev.sourceUrl}" target="_blank" rel="noopener">🔗 ${ev.sourceName}</a>
          <span style="font-size:0.75rem; color:var(--accent-sage); font-family:var(--font-heading);">已核驗 ✅</span>
        </div>
      </div>
    `).join('');

    // Common Mistakes HTML
    const mistakesHtml = lesson.commonMistakes.map(m => `
      <div style="background-color:var(--bg-secondary); border-left:3px solid var(--accent-terracotta); padding:16px 20px; border-radius:var(--radius-md); margin-bottom:14px; border:1px solid var(--border-color);">
        <div style="font-weight:600; color:var(--accent-terracotta); margin-bottom:4px; font-family:var(--font-heading);">❌ 新手常犯錯誤與盲點排查：${m.mistake}</div>
        <div style="font-size:0.9rem; color:var(--text-primary);">💡 正確做法與觀念解惑：${m.correction}</div>
      </div>
    `).join('');

    // Compass Steps HTML
    const compassHtml = lesson.compass && lesson.compass.steps ? lesson.compass.steps.map((step, idx) => `
      <div class="compass-step-item">
        <span class="compass-step-num">${idx + 1}</span>
        <span>${step}</span>
      </div>
    `).join('') : '';

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
          <span class="duration-badge">⏱️ 閱讀修習：${lesson.duration}</span>
        </div>
        <h1 class="lesson-title">Lesson ${lesson.number}: ${lesson.title}</h1>
        
        <!-- Compass Card: 本課專屬新手導航 -->
        <div class="compass-card">
          <div class="compass-header">${lesson.compass ? lesson.compass.title : '🧭 Lesson 專屬新手實作指南'}</div>
          <div class="compass-steps">
            ${compassHtml}
          </div>
        </div>

        <!-- Mental Model -->
        <div class="mental-model-box">
          <div class="mental-model-header">📜 心智模型 (Mental Model)</div>
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
      <div class="section-title">🛠️ 實體操作與視覺化圖解 (Dual Guide & Visual Diagram)</div>
      <div class="dual-guide-container">
        <div class="tab-header">
          <button class="tab-btn ${activeTab === 'desktop' ? 'active' : ''}" onclick="app.switchGuideTab('desktop')">
            🖥️ GitHub Desktop 圖形介面圖解
          </button>
          <button class="tab-btn ${activeTab === 'cli' ? 'active' : ''}" onclick="app.switchGuideTab('cli')">
            💻 Git CLI 終端機指令對照
          </button>
        </div>
        <div class="tab-content" id="guide-tab-content">
          ${this.getGuideTabHtml(lesson, activeTab)}
        </div>
      </div>

      <!-- Common Mistakes -->
      <div class="section-title">⚠️ 新手卡關與常見錯誤排查雷達</div>
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
            <h3 style="font-size:1.15rem; font-weight:700; font-family:var(--font-heading);">${lesson.verification.title}</h3>
            <p style="font-size:0.875rem; color:var(--text-secondary);">${lesson.verification.description}</p>
          </div>
        </div>
        
        <ul class="verify-checklist">${checklistHtml}</ul>
        
        <p style="font-size:0.875rem; font-weight:600; margin-bottom:8px; font-family:var(--font-heading);">${lesson.verification.verifyPrompt}</p>
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

    // Generate Visual Diagram Card
    let diagramHtml = '';
    if (tab === 'desktop') {
      const stepItems = guide.steps.map(s => {
        // extract key button terms
        const shortName = s.split('：')[0].split('。')[0];
        return `<span class="ui-btn-target">🔘 ${shortName}</span>`;
      }).join(' <span class="ui-arrow">➔</span> ');

      diagramHtml = `
        <div class="ui-diagram-card">
          <div class="ui-diagram-window-header">
            <div class="window-dots">
              <div class="dot red"></div>
              <div class="dot yellow"></div>
              <div class="dot green"></div>
            </div>
            <span class="window-title">GitHub Desktop 介面視覺化按鈕圖解流程</span>
          </div>
          <div class="ui-diagram-body">
            <div class="ui-flow-row">
              ${stepItems}
            </div>
          </div>
        </div>
      `;
    } else {
      const cliLines = guide.steps.map(s => {
        const cmdPart = s.includes('：') ? s.split('：')[1] : s;
        return `<div class="terminal-line"><span class="cmd">$</span> <span class="param">${cmdPart}</span></div>`;
      }).join('');

      diagramHtml = `
        <div class="ui-diagram-card">
          <div class="ui-diagram-window-header">
            <div class="window-dots">
              <div class="dot red"></div>
              <div class="dot yellow"></div>
              <div class="dot green"></div>
            </div>
            <span class="window-title">Git Terminal 指令對照視窗</span>
          </div>
          <div class="ui-diagram-body">
            ${cliLines}
          </div>
        </div>
      `;
    }

    return `
      <h3 style="font-size:1.1rem; font-weight:700; font-family:var(--font-heading); margin-bottom:16px;">${guide.title}</h3>
      ${diagramHtml}
      <ol class="step-list">${stepsHtml}</ol>
      <div class="guide-tip-box">💡 零基礎提示：${guide.tip}</div>
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

    const checklistCount = lesson.verification.checklist.length;
    const isChecklistComplete = window.verifyEngine.validateChecklist(lessonId, checklistCount);

    if (!isChecklistComplete && !repoUrl) {
      statusEl.style.color = 'var(--accent-terracotta)';
      statusEl.innerText = '⚠️ 請先勾選上方所有的驗證確認事項，或輸入 GitHub 網址！';
      return;
    }

    if (repoUrl) {
      statusEl.style.color = 'var(--accent-sage)';
      statusEl.innerText = '🔍 正在通訊 GitHub REST API 進行實時驗證中...';

      const result = await window.verifyEngine.verifyGitHubRepo(repoUrl);
      if (result.success) {
        statusEl.style.color = 'var(--accent-sage)';
        statusEl.innerText = result.message;
        window.progressManager.markLessonVerified(lessonId);
        this.updateGlobalProgress();
        this.renderSidebarNav();
      } else {
        statusEl.style.color = 'var(--accent-terracotta)';
        statusEl.innerText = result.message;
      }
    } else {
      statusEl.style.color = 'var(--accent-sage)';
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
      html += `<div style="font-weight:600; color:var(--accent-sage); font-family:var(--font-heading);">🎉 恭喜您完成全部 24 課！成就 Git / GitHub 大滿貫！</div>`;
    }

    return html;
  }

  updateGlobalProgress() {
    const totalCount = 24;
    const percent = window.progressManager.calculateProgress(totalCount);
    
    const fillEl = document.getElementById('progress-bar-fill');
    const textEl = document.getElementById('progress-text');
    if (fillEl) fillEl.style.width = `${percent}%`;
    if (textEl) textEl.innerText = `學習步履: ${percent}% (${window.progressManager.state.verifiedLessons.length}/24 課)`;
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
