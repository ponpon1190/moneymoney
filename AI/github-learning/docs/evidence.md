# 三層官方權威證據對照庫 (Evidence System Matrix)

本專案拒絕任何非官方社群猜測或臆測用語，所有概念、定義與操作流程均依據以下**三層官方權威來源**建立並進行雙重對照：

---

## 權威來源優先級分類

| 層級 | 權威來源名稱 | 官方連結 / 書籍出處 | 適用範疇 |
| :--- | :--- | :--- | :--- |
| **第一層 (Level 1)** | **GitHub Official Docs** | [docs.github.com](https://docs.github.com) | GitHub 雲端平台、PR、Issue、Pages、驗證機制 |
| **第一層 (Level 1)** | **Git Official Pro Git Book** | [git-scm.com/book](https://git-scm.com/book/en/v2) | Git 核心機制、分散式模型、Commit、Branch、Rebase |
| **第二層 (Level 2)** | **GitHub Desktop Docs** | [docs.github.com/desktop](https://docs.github.com/en/desktop) | 圖形化 UI 操作、Stash、Merge、Publish 流程 |
| **第三層 (Level 3)** | **學員實作驗證 (Verify Mode)** | 網站即時 API / Checklist 機制 | 本地與雲端動作的親自操作驗證 |

---

## 核心名詞與定義對照證據表

### 1. Repository (儲存庫 / 倉庫)
- **官方定義**：A repository contains all of your project's files and each file's revision history. Repositories can have multiple collaborators and can be either public or private.
- **來源對照**：
  - [GitHub Docs: Glossary - Repository](https://docs.github.com/en/get-started/quickstart/github-glossary#repository) ✅
  - Pro Git Chapter 1.3: *Getting Started - Git Basics* ✅
- **常見社群誤解**：以為 Repository 只是單純的雲端資料夾；實則包含了完整的修訂歷史資料庫 (`.git`)。

### 2. Commit (提交 / 快照)
- **官方定義**：Git thinks of its data more like a set of snapshots of a miniature filesystem. Every time you commit, Git takes a picture of what all your files look like at that moment and stores a reference to that snapshot.
- **來源對照**：
  - Pro Git Chapter 1.3: *Snapshots, Not Differences* ✅
  - [GitHub Docs: Glossary - Commit](https://docs.github.com/en/get-started/quickstart/github-glossary#commit) ✅
- **常見社群误解**：誤以為 Commit 只記錄檔案的增減行數 (Delta)；事實上 Git Commit 保存的是完整的狀態快照引用。

### 3. Working Tree / Staging Area / Git Directory (三大區域)
- **官方定義**：
  1. *Working Tree*: A single checkout of one version of the project.
  2. *Staging Area*: A file, generally contained in your Git directory, that stores information about what will go into your next commit.
  3. *Git Directory*: Where Git stores the metadata and object database for your project.
- **來源對照**：
  - Pro Git Chapter 1.3: *The Three States* ✅
- **常見社群誤解**：跳過 Staging Area（暫存區）的概念，導致無法理解 `git add` 的目的與精細控制提交內容的好處。

### 4. Push (推拉與雲端同步)
- **官方定義**：Pushing is how you transfer commits from your local repository to a remote repository.
- **來源對照**：
  - [GitHub Docs: Pushing commits to GitHub](https://docs.github.com/en/get-started/using-git/pushing-commits-to-github) ✅
  - GitHub Desktop Docs: *Pushing changes to GitHub* ✅

### 5. Pull Request (PR 請求)
- **官方定義**：Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with collaborators.
- **來源對照**：
  - [GitHub Docs: About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ✅

---

## 每課證據品質檢核機制 (Audit Standard)

本網站每一堂 Lesson 的底部均隨附「證據核驗面板」，確保達成：
1. **100% 標註章節出處與 URL**。
2. **區分 GitHub Desktop 步驟與 Git CLI 官方文檔**。
3. **提供「學員 Verify 模式實測條款」**（即完成驗證後才能標記 ✅ 驗證通過）。
