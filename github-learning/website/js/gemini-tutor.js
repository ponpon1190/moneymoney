/**
 * 🤖 Gemini AI Git 隨身助教 (Gemini AI Tutor Engine)
 * 專為 Git 新手設計，提供即時卡關排查、觀念解惑與 AI 提問語法。
 */
class GeminiTutor {
  constructor() {
    this.kb = {
      push_rejected: "💡 **【Gemini AI 解答：Push 被拒絕】**\n當您點擊 Push 顯示 rejected 提示時，代表 GitHub 雲端有您電腦上還沒有的最新 commit。請點擊 **Fetch / Pull** 下載並合併雲端更新後，再重新執行 Push 即可！",
      desktop_vs_cli: "💡 **【Gemini AI 解答：Desktop 還是 CLI？】**\n新手建議先用 **GitHub Desktop** 掌握直覺的視覺化快照概念；等熟悉 commit、push、branch 邏輯後，再學習 CLI 指令，兩者底層完全相通！",
      commit_msg: "💡 **【Gemini AI 解答：好 Commit 訊息撰寫法】**\n遵守三要點：\n1. 50 字內主旨\n2. 使用祈使句動詞 (如 Add, Fix, Update)\n3. 寫明『為何做這項修訂』而非僅寫 update。",
      lost_code: "💡 **【Gemini AI 解答：程式碼改壞了怎麼辦？】**\n別慌張！只要您曾經 commit 過，就能在 **History 頁籤**點擊右鍵『Create Branch from Commit』救回當時的畫面；或者使用 `git reflog` 找回座標！",
      file_cors: "💡 **【Gemini AI 解答：檔案直接開啟失敗？】**\n本網站已內建專屬離線資料庫！直接在檔案總管中『雙擊 index.html』就能流暢開啟，不需要開啟伺服器。"
    };
    this.initUI();
  }

  initUI() {
    // Inject Floating Button
    const floatBtn = document.createElement('button');
    floatBtn.className = 'gemini-float-btn';
    floatBtn.id = 'gemini-float-btn';
    floatBtn.innerHTML = '🤖 Gemini AI 助教';
    floatBtn.onclick = () => this.toggleModal(true);
    document.body.appendChild(floatBtn);

    // Inject Modal HTML
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'gemini-modal-overlay';
    modalOverlay.id = 'gemini-modal-overlay';
    modalOverlay.innerHTML = `
      <div class="gemini-modal">
        <div class="gemini-modal-header">
          <div class="gemini-modal-title">
            <span>🤖</span> Gemini Git 隨身解惑助教
          </div>
          <button class="gemini-modal-close" onclick="window.geminiTutor.toggleModal(false)">&times;</button>
        </div>
        <div class="gemini-modal-body">
          <div class="gemini-chat-log" id="gemini-chat-log">
            <div class="chat-bubble ai">
              👋 您好！我是您的 <strong>Gemini AI Git 學習夥伴</strong>。<br>
              在學習 Git 或操作 GitHub Desktop 遇到任何報錯、卡關或不知道下一步該做什麼時，歡迎隨時問我！
            </div>
          </div>

          <div style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-heading); margin-top:8px;">💡 新手常用快捷提問：</div>
          <div class="gemini-prompt-shortcuts">
            <button class="prompt-btn" onclick="window.geminiTutor.askPrebuilt('push_rejected')">❓ Push 被拒絕怎麼辦？</button>
            <button class="prompt-btn" onclick="window.geminiTutor.askPrebuilt('desktop_vs_cli')">❓ Desktop 與 CLI 該選哪個？</button>
            <button class="prompt-btn" onclick="window.geminiTutor.askPrebuilt('commit_msg')">❓ 如何寫出好的 Commit 訊息？</button>
            <button class="prompt-btn" onclick="window.geminiTutor.askPrebuilt('lost_code')">❓ 程式碼改壞了如何救回？</button>
          </div>

          <div class="gemini-input-area">
            <input type="text" class="gemini-input" id="gemini-user-input" 
                   placeholder="輸入您的 Git 疑問或報錯訊息..." onkeypress="if(event.key==='Enter') window.geminiTutor.handleSend()">
            <button class="btn-gemini-send" onclick="window.geminiTutor.handleSend()">發送</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modalOverlay);
  }

  toggleModal(show) {
    const modal = document.getElementById('gemini-modal-overlay');
    if (modal) {
      if (show) modal.classList.add('active');
      else modal.classList.remove('active');
    }
  }

  askPrebuilt(key) {
    const answer = this.kb[key];
    if (answer) {
      this.appendMessage('user', this.getShortcutQuestionText(key));
      setTimeout(() => {
        this.appendMessage('ai', answer);
      }, 300);
    }
  }

  getShortcutQuestionText(key) {
    const map = {
      push_rejected: "Push 被拒絕 (Push Rejected) 怎麼辦？",
      desktop_vs_cli: "GitHub Desktop 和 Git CLI 終端機我該選擇哪一個？",
      commit_msg: "如何撰寫符合業界標準的 Commit 訊息？",
      lost_code: "如果不小心把程式碼改壞或弄丟了，要怎麼用 Git 救回？"
    };
    return map[key] || key;
  }

  handleSend() {
    const input = document.getElementById('gemini-user-input');
    if (!input) return;
    const query = input.value.trim();
    if (!query) return;

    this.appendMessage('user', query);
    input.value = '';

    // Smart matched reply or default Gemini reply
    setTimeout(() => {
      let reply = "🤖 **【Gemini AI 解惑】**\n";
      const q = query.toLowerCase();
      if (q.includes('push') || q.includes('reject')) {
        reply += this.kb.push_rejected;
      } else if (q.includes('desktop') || q.includes('cli') || q.includes('指令')) {
        reply += this.kb.desktop_vs_cli;
      } else if (q.includes('救') || q.includes('還原') || q.includes('復原')) {
        reply += this.kb.lost_code;
      } else {
        reply += `針對您的疑問『${query}』：\n在使用 Git 時，請隨時記住三大口訣：\n1. **多看狀態**：GitHub Desktop 隨時注意 Changes 頁籤。\n2. **小步 Commit**：每做完一個階段小功能就 Commit 一次，隨時擁有復原快照。\n3. **先 Pull 再 Push**：確保雲端最新進度與本地整合。`;
      }
      this.appendMessage('ai', reply);
    }, 400);
  }

  appendMessage(sender, text) {
    const log = document.getElementById('gemini-chat-log');
    if (!log) return;
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;
    bubble.innerHTML = text.replace(/\n/g, '<br>');
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.geminiTutor = new GeminiTutor();
});
