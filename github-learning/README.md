# 🛡️ GitHub & Git 實證互動學習平台 (`github-learning`)

> **高規格、官方權威對照、雙軌教學 (Desktop & CLI) 與實作驗證 (Verify Mode) 的 Git / GitHub 互動學習網站。**

---

## 🌟 專案核心特點

1. **三層官方權威證據鏈 (Evidence System)**
   - 拒絕「我認為」或社群民間非官方用語。
   - **Level 1**：GitHub Official Docs & Pro Git 官方書籍出處與原文對照。
   - **Level 2**：GitHub Desktop Docs 圖形工具官方說明。
   - **Level 3**：學員 Verify 模式實測驗證。

2. **雙軌教學 (Dual Guide)**
   - 每一課均提供 **GitHub Desktop 圖形化介面** 與 **Git CLI 終端機指令** 雙頁籤對照。
   - 記憶學員偏好，切換流暢。

3. **實作驗證模式 (Verify Mode - Option A)**
   - 支援填寫 GitHub 公開 Repo 網址進行 **GitHub REST API 實時檢驗**。
   - 搭配 Step-by-step 互動檢查清單 (Interactive Checklist)。
   - 只有真正完成驗證，才能獲得 Lesson 完成標章！

4. **現代化 SPA 網頁體驗**
   - 響應式 layout（桌機、平板、手機）。
   - 深色 (Dark Mode) / 淺色 (Light Mode) 即時切換。
   - LocalStorage 無縫保存學習進度與完成率計算。
   - 課後互動小測驗 (Interactive Quiz) 與即時觀念解析。
   - 課程快速搜尋與心智模型 (Mental Model) 圖像化說明。

---

## 📂 專案目錄結構

```text
github-learning/
│
├── docs/
│   ├── curriculum.md          # 完整 24 課大綱與心智地圖
│   ├── evidence.md            # 三層權威證據對照陣列
│   └── glossary.md            # Git & GitHub 官方名詞解釋
│
├── website/
│   ├── index.html             # SPA 網站主入口
│   ├── css/
│   │   └── styles.css         # 現代化主題與元件樣式
│   ├── js/
│   │   ├── app.js             # 主控控制器、路由與 UI 渲染
│   │   ├── progress.js        # LocalStorage 進度與狀態管理
│   │   ├── verify.js          # 驗證模式引擎 (GitHub API + Checklist)
│   │   └── quiz.js            # 小測驗互動引擎
│   └── data/
│       └── lessons.json       # 課程資料庫 (Lesson 1-3 完整實施)
│
├── exercises/
│   └── README.md              # 實做練習說明
│
├── quizzes/
│   └── README.md              # 測驗說明檔
│
└── README.md                  # 本專案說明文件
```

---

## 🚀 快速開始 (Quick Start)

1. 用任何瀏覽器開啟 `github-learning/website/index.html`。
2. 即可開始探索 Lesson 1 ~ 3，嘗試切換 Desktop / CLI 頁籤、深淺色主題、回答課後測驗，並在底部體驗 **Verify Mode (驗證模式)**！
