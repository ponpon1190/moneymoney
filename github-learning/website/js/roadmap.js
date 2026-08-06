/**
 * 📜 課程全景學習流程圖 (Visual Curriculum Roadmap Engine)
 * 為新手提供直覺、可互動的 24 課學習流向圖。
 */
class RoadmapEngine {
  constructor() {
    this.initUI();
  }

  initUI() {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'gemini-modal-overlay';
    modalOverlay.id = 'roadmap-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="gemini-modal" style="max-width: 960px; height: 88vh;">
        <div class="gemini-modal-header" style="background: var(--gradient-brand);">
          <div class="gemini-modal-title">
            <span>🗺️</span> Git & GitHub 全景學習流程圖 (Curriculum Roadmap)
          </div>
          <button class="gemini-modal-close" onclick="window.roadmapEngine.toggle(false)">&times;</button>
        </div>
        <div class="gemini-modal-body" style="background-color: var(--bg-primary); padding: 32px; overflow-y: auto;">
          
          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 24px; text-align: center; font-family: var(--font-heading);">
            點擊下方任一學習卡片，即可快速跳轉至該課學習修習。從本地單機到團隊協作，循序漸進成就不依賴老師的自主學習！
          </p>

          <div class="roadmap-flow-container">
            
            <!-- Phase 1 -->
            <div class="roadmap-phase-card">
              <div class="phase-header">
                <span class="phase-number">第一階段</span>
                <span class="phase-title">Git & GitHub 基礎工作流 (L01 - L06)</span>
              </div>
              <div class="phase-nodes">
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-01')">
                  <div class="node-badge">L01</div>
                  <div class="node-text">Git/GitHub 差異與設定</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-02')">
                  <div class="node-badge">L02</div>
                  <div class="node-text">建立第一個 Repository</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-03')">
                  <div class="node-badge">L03</div>
                  <div class="node-text">三大區域與 Commit 快照</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-04')">
                  <div class="node-badge">L04</div>
                  <div class="node-text">Log 歷史與 Diff 比對</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-05')">
                  <div class="node-badge">L05</div>
                  <div class="node-text">.gitignore 忽略檔案</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-06')">
                  <div class="node-badge">L06</div>
                  <div class="node-text">復原與 Discard/Undo</div>
                </div>
              </div>
            </div>

            <!-- Arrow Down -->
            <div class="phase-connector-down">👇 掌握本地單機操作後，邁向雲端同步</div>

            <!-- Phase 2 -->
            <div class="roadmap-phase-card">
              <div class="phase-header">
                <span class="phase-number">第二階段</span>
                <span class="phase-title">遠端同步與分支管理 (L07 - L12)</span>
              </div>
              <div class="phase-nodes">
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-07')">
                  <div class="node-badge">L07</div>
                  <div class="node-text">Push 發布上雲端</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-08')">
                  <div class="node-badge">L08</div>
                  <div class="node-text">Clone 複製專案</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-09')">
                  <div class="node-badge">L09</div>
                  <div class="node-text">Fetch & Pull 拉取</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-10')">
                  <div class="node-badge">L10</div>
                  <div class="node-text">Branch 平行分支</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-11')">
                  <div class="node-badge">L11</div>
                  <div class="node-text">Branch Merge 合併</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-12')">
                  <div class="node-badge">L12</div>
                  <div class="node-text">解決 Merge Conflicts</div>
                </div>
              </div>
            </div>

            <!-- Arrow Down -->
            <div class="phase-connector-down">👇 掌握分支與衝突後，展開團隊 Pull Request 協作</div>

            <!-- Phase 3 -->
            <div class="roadmap-phase-card">
              <div class="phase-header">
                <span class="phase-number">第三階段</span>
                <span class="phase-title">團隊協作與 GitHub 生態系 (L13 - L18)</span>
              </div>
              <div class="phase-nodes">
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-13')">
                  <div class="node-badge">L13</div>
                  <div class="node-text">Pull Request (PR)</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-14')">
                  <div class="node-badge">L14</div>
                  <div class="node-text">Code Review 審查</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-15')">
                  <div class="node-badge">L15</div>
                  <div class="node-text">Squash and Merge</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-16')">
                  <div class="node-badge">L16</div>
                  <div class="node-text">GitHub Issues 卡片</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-17')">
                  <div class="node-badge">L17</div>
                  <div class="node-text">Markdown & README</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-18')">
                  <div class="node-badge">L18</div>
                  <div class="node-text">Fork & 開源貢獻</div>
                </div>
              </div>
            </div>

            <!-- Arrow Down -->
            <div class="phase-connector-down">👇 精通團隊協作後，進階高級 Git 救援與自動部署</div>

            <!-- Phase 4 -->
            <div class="roadmap-phase-card">
              <div class="phase-header">
                <span class="phase-number">第四階段</span>
                <span class="phase-title">進階 Git 技巧與 Pages 部署 (L19 - L24)</span>
              </div>
              <div class="phase-nodes">
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-19')">
                  <div class="node-badge">L19</div>
                  <div class="node-text">Git Stash 暫存抽屜</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-20')">
                  <div class="node-badge">L20</div>
                  <div class="node-text">Git Cherry-pick 採摘</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-21')">
                  <div class="node-badge">L21</div>
                  <div class="node-text">Git Rebase 直線歷史</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-22')">
                  <div class="node-badge">L22</div>
                  <div class="node-text">Git Reflog 救援黑盒子</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-23')">
                  <div class="node-badge">L23</div>
                  <div class="node-text">Tags & Release 版本號</div>
                </div>
                <div class="roadmap-arrow">➔</div>
                <div class="roadmap-node" onclick="window.roadmapEngine.navigateTo('lesson-24')">
                  <div class="node-badge">L24</div>
                  <div class="node-text">GitHub Pages 免費發布</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  toggle(show) {
    const modal = document.getElementById('roadmap-modal-overlay');
    if (modal) {
      if (show) modal.classList.add('active');
      else modal.classList.remove('active');
    }
  }

  navigateTo(lessonId) {
    this.toggle(false);
    if (window.app) {
      window.app.switchLesson(lessonId);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.roadmapEngine = new RoadmapEngine();
});
