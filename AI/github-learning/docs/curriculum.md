# Git & GitHub 實證課程大綱 (Curriculum)

本大綱涵蓋由淺入深的 24 堂 Git & GitHub 核心課程，專為兼具「GitHub Desktop UI 操作」與「Git CLI 指令」雙軌學習者設計。每一堂課均標註官方定義出處、心智模型、驗證任務與練習對照。

---

## 課程模組一：Git & GitHub 核心概念與基礎工作流

### Lesson 01: 什麼是版本控制與 Git / GitHub 差異？
- **學習目標**：理解分散式版本控制 (DVCS) 的心智模型，區分 Git 本地工具與 GitHub 雲端平台。
- **前置知識**：基本的電腦檔案與目錄操作概念。
- **心智模型**：Git 是你的「時間機器與備份檔案庫」，GitHub 是你的「雲端合作社與展演舞台」。
- **官方定義與出處**：
  - Git: *Pro Git Chapter 1.1* ("Git is a distributed version control system...")
  - GitHub: *GitHub Docs - Getting started with GitHub*
- **雙軌操作**：GitHub Desktop 介面導覽 vs `git --version`, `git config`
- **驗證任務 (Verify Mode)**：完成 Git 用戶名稱與 Email 的初始化設定並完成檢核。

### Lesson 02: 建立第一個儲存庫 (Repository)
- **學習目標**：掌握 Repository 的概念與建立方式。
- **前置知識**：Lesson 01。
- **心智模型**：Repository 是一個被 Git 全權監控的獨立資料夾專案。
- **官方定義與出處**：*GitHub Docs - Glossary / Repositories*
- **雙軌操作**：GitHub Desktop "Create a New Repository" vs `git init`
- **驗證任務 (Verify Mode)**：建立名為 `my-first-repo` 的本地儲存庫並確認 `.git` 目錄初始化。

### Lesson 03: 工作區、暫存區與 Commit (提交紀錄)
- **學習目標**：掌握 Git 的三大區域與 Commit 快照概念。
- **前置知識**：Lesson 02。
- **心智模型**：工作區 (Working Directory) = 你的桌面；暫存區 (Staging Area) = 準備寄出的包裹；Commit = 封箱並蓋上時間戳印的照片快照。
- **官方定義與出處**：*Pro Git Chapter 1.3 - The Three States*
- **雙軌操作**：GitHub Desktop "Changes & Commit summary" vs `git add` & `git commit -m`
- **驗證任務 (Verify Mode)**：新增一個 `README.md` 檔案，完成第一次 Commit，並到驗證模式確認提交紀錄。

### Lesson 04: 查看歷史紀錄與檔案變更 (Log & Diff)
- **學習目標**：學會查詢過往 Commit 歷史與比對檔案修訂細節。
- **官方定義與出處**：*Git Documentation - git-log / git-diff*
- **雙軌操作**：GitHub Desktop "History Tab" vs `git log`, `git diff`
- **驗證任務 (Verify Mode)**：在專案中進行多次修改並精確查看 Commit 歷史訊息。

### Lesson 05: 忽略不必要的檔案 (.gitignore)
- **學習目標**：了解 `.gitignore` 檔案的作用與寫法，避免推送敏感或暫存檔。
- **官方定義與出處**：*GitHub Docs - Ignoring files*
- **雙軌操作**：GitHub Desktop 右鍵 "Ignore file" vs `.gitignore` 語法撰寫與 `git status` 觀察
- **驗證任務 (Verify Mode)**：建立 `.env` 檔案並確保其被 `.gitignore` 成功排除。

### Lesson 06: 復原變更與撤銷 (Undo & Reset 基礎)
- **學習目標**：理解如何安全地放棄未 Commit 的修改或撤銷最後一次 Commit。
- **官方定義與出處**：*Pro Git Chapter 2.4 - Undoing Things*
- **雙軌操作**：GitHub Desktop "Discard Changes / Undo Commit" vs `git restore`, `git reset --soft`
- **驗證任務 (Verify Mode)**：故意修改檔案後使用撤銷功能還原為最新 commit 狀態。

---

## 課程模組二：遠端協作與 GitHub 雲端同步

### Lesson 07: 將本地專案發布至 GitHub (Push)
- **學習目標**：理解 Remote (遠端庫) 概念與 `git push` 工作流。
- **官方定義與出處**：*GitHub Docs - Pushing commits to GitHub*
- **雙軌操作**：GitHub Desktop "Publish repository" vs `git remote add origin` & `git push -u origin main`
- **驗證任務 (Verify Mode)**：將本地專案推送到 GitHub，輸入 Repo URL 在驗證模式完成實時線上確認！

### Lesson 08: 從 GitHub 下載與複製專案 (Clone & Download)
- **學習目標**：掌握 Clone 與 Download ZIP 的差異，正確拉取他人或遠端專案。
- **官方定義與出處**：*GitHub Docs - Cloning a repository*
- **雙軌操作**：GitHub Desktop "Clone a repository" vs `git clone`
- **驗證任務 (Verify Mode)**：成功複製指定的公開 Repo 到本地環境。

### Lesson 09: 拉取最新雲端進度 (Fetch & Pull)
- **學習目標**：區分 `fetch`（檢查更新）與 `pull`（下載並合併更新）的運作原理。
- **官方定義與出處**：*Pro Git Chapter 2.5 - Working with Remotes*
- **雙軌操作**：GitHub Desktop "Fetch origin / Pull origin" vs `git fetch`, `git pull`
- **驗證任務 (Verify Mode)**：在雲端修改檔案後，由本地成功執行 Pull 更新。

### Lesson 10: 了解分支概念 (Branching 核心)
- **學習目標**：理解 Git 分支是輕量級的可移動指標，掌握 Feature Branch 工作流。
- **官方定義與出處**：*Pro Git Chapter 3.1 - Git Branches in a Nutshell*
- **雙軌操作**：GitHub Desktop "Current Branch -> New Branch" vs `git branch`, `git checkout -b`
- **驗證任務 (Verify Mode)**：建立 `feature/login` 分支並切換過去完成專屬 Commit。

### Lesson 11: 合併分支 (Merge 基礎)
- **學習目標**：理解 Fast-forward 快速前進合併與三方合併 (3-way merge)。
- **官方定義與出處**：*Pro Git Chapter 3.2 - Basic Branching and Merging*
- **雙軌操作**：GitHub Desktop "Choose a branch to merge into main" vs `git merge`
- **驗證任務 (Verify Mode)**：將功能分支合併回 `main` 分支並刪除舊分支。

### Lesson 12: 解決合併衝突 (Merge Conflicts)
- **學習目標**：克服對衝突的恐懼，學會閱讀 `<<<<<<<`, `=======`, `>>>>>>>` 標記並正確手動解決。
- **官方定義與出處**：*GitHub Docs - Addressing merge conflicts*
- **雙軌操作**：GitHub Desktop 衝突提示視窗 vs VS Code 編輯器 / Git CLI 衝突處理解析
- **驗證任務 (Verify Mode)**：製造人工衝突並成功解決後完成 Commit。

---

## 課程模組三：團隊協作與 GitHub 生態系

### Lesson 13: 建立 Pull Request (PR) 流程
- **學習目標**：掌握 GitHub 核心協作機制 Pull Request 的建立與撰寫規範。
- **官方定義與出處**：*GitHub Docs - About pull requests*
- **雙軌操作**：GitHub Desktop "Create Pull Request" vs GitHub Web 介面與 GitHub CLI (`gh pr create`)
- **驗證任務 (Verify Mode)**：在 GitHub 上成功發起一個 PR 並完成說明撰寫。

### Lesson 14: Code Review 與討論 (審查與修訂)
- **學習目標**：學習給予 Inline Comment、核准 (Approve) 或要求變更 (Request Changes)。
- **官方定義與出處**：*GitHub Docs - Reviewing proposed changes in a pull request*
- **驗證任務 (Verify Mode)**：在練習 PR 中發表至少一則行內留言並更新 PR。

### Lesson 15: 合併 Pull Request 與刪除遠端分支
- **學習目標**：理解 Create a merge commit, Squash and merge, Rebase and merge 的差異。
- **官方定義與出處**：*GitHub Docs - About merge methods on GitHub*
- **驗證任務 (Verify Mode)**：使用 Squash and merge 成功合併 PR。

### Lesson 16: 使用 GitHub Issues 追蹤任務與 Bug
- **學習目標**：理解 Issue、Label、Milestone 與 Assignee 的使用方式。
- **官方定義與出處**：*GitHub Docs - About issues*
- **驗證任務 (Verify Mode)**：建立第一個 Issue 並在 Commit 訊息中使用 `Fixes #1` 自動關閉 Issue。

### Lesson 17: GitHub Markdown 與 README 專案門面
- **學習目標**：掌握 GitHub Flavored Markdown (GFM) 語法、標籤、程式碼區塊與 Checklist。
- **官方定義與出處**：*GitHub Docs - Writing on GitHub*
- **驗證任務 (Verify Mode)**：編寫高質感的 `README.md` 並呈現在個人 Profile/Repo。

### Lesson 18: Fork 與 Open Source 貢獻工作流
- **學習目標**：理解 Upstream 遠端庫、Fork 副本與跨儲存庫發起 PR 的完整流程。
- **官方定義與出處**：*GitHub Docs - Working with forks*
- **驗證任務 (Verify Mode)**：Fork 練習專案並提交跨庫 PR。

---

## 課程模組四：進階 Git 技巧與排查實務

### Lesson 19: 暫存工作進度 (Git Stash)
- **學習目標**：在不 commit 的情況下切換分支與保存臨時代碼。
- **官方定義與出處**：*Pro Git Chapter 7.3 - Git Stashing and Cleaning*
- **雙軌操作**：GitHub Desktop "Stash changes" vs `git stash`, `git stash pop`

### Lesson 20: 挑選特定提交 (Git Cherry-pick)
- **學習目標**：將其他分支中的單一提交複製到目前分支。
- **官方定義與出處**：*Pro Git Chapter 5.3 - Cherry-picking*

### Lesson 21: 重寫歷史與 Rebase (Git Rebase)
- **學習目標**：理解 Rebase 與 Merge 的本質區別，掌握互動式 Rebase (`git rebase -i`) 的安全規範。
- **官方定義與出處**：*Pro Git Chapter 3.6 - Rebasing*

### Lesson 22: 使用 Git Reflog 救援失蹤的 Commit
- **學習目標**：了解 Git 的安全網 `git reflog`，在誤刪分支或救回舊 commit 時發揮關鍵作用。
- **官方定義與出處**：*Pro Git Chapter 7.1 - Revision Selection (Reflog)*

### Lesson 23: 標籤管理 (Git Tags & Releases)
- **學習目標**：學會建立附註標籤 (Annotated Tag) 與發布 GitHub Release 部署版本。
- **官方定義與出處**：*GitHub Docs - Managing releases in a repository*

### Lesson 24: 專案驗證終極實務 (GitHub Pages 免費網站託管)
- **學習目標**：將前端專案透過 GitHub Pages 部署上線，完成整套 Git/GitHub 學習閉環！
- **官方定義與出處**：*GitHub Docs - GitHub Pages overview*
- **驗證任務 (Verify Mode)**：啟用 GitHub Pages 並獲得即時可造訪的網址驗證。
