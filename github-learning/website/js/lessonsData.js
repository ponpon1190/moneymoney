/**
 * Lessons Database JS Bundle (All 24 Lessons Complete)
 */
window.lessonsData = [
  {
    "id": "lesson-01",
    "number": 1,
    "title": "什麼是版本控制與 Git / GitHub 差異？",
    "module": "模組一：Git & GitHub 核心概念與基礎工作流",
    "duration": "15 分鐘",
    "objectives": [
      "理解分散式版本控制 (DVCS) 的核心概念與優點",
      "精確區分 Git (本地版本控制工具) 與 GitHub (雲端協作平台) 的差異",
      "完成 Git 使用者名稱與 Email 的初始化配置"
    ],
    "prerequisites": [
      "基本的電腦檔案管理與目錄導覽經驗"
    ],
    "mentalModel": {
      "analogy": "把 Git 想像成一台安裝在本地電腦的『時間機器與備份相機』，每當你拍攝一張快照，它就能紀錄當時所有檔案的精確狀態；而 GitHub 則像是一個『雲端展演中心與合作社』，你可以把本地的時間機器紀錄傳送上去，讓全世界或團隊成員一起檢視、討論與協作。",
      "keyTakeaway": "Git 可以在完全沒有網路的環境下於本地獨自運作；GitHub 則需要網路連結才能進行雲端同步與團隊協作。"
    },
    "definitions": [
      {
        "term": "Git",
        "definition": "Git 是一個免費、開源的分散式版本控制系統 (DVCS)，旨在快速且高效率地處理從小型到大型的各種專案。",
        "source": "Git Official Site (git-scm.com)"
      },
      {
        "term": "GitHub",
        "definition": "GitHub 是一個基於 Git 的程式碼託管與協作雲端平台，提供版本控制、Issue 追蹤、Pull Request Code Review 與部署服務。",
        "source": "GitHub Docs - Getting started with GitHub"
      }
    ],
    "evidences": [
      {
        "item": "Git 分散式架構定義",
        "sourceName": "Pro Git (Official Book)",
        "sourceUrl": "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "In a DVCS, clients don't just check out the latest snapshot of the files; rather, they fully mirror the repository, including its full history."
      },
      {
        "item": "GitHub 平台定位說明",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/get-started/start-your-journey/about-github-and-git",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "GitHub is a code hosting platform for version control and collaboration. Git is the underlying technology GitHub uses."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 初次配置與視窗導覽",
        "steps": [
          "下載並安裝 GitHub Desktop (desktop.github.com)。",
          "開啟應用程式，點擊主選單的 File -> Options (Windows) 或 GitHub Desktop -> Preferences (Mac)。",
          "在 Accounts 頁籤登入你的 GitHub 帳號。",
          "在 Git 頁籤確認 Name 與 Email 是否與 GitHub 帳號綁定。"
        ],
        "tip": "在 GitHub Desktop 中登入帳號後，系統會自動幫你設定好 Git 的 user.name 與 user.email。"
      },
      "cli": {
        "title": "Git CLI 終端機初始化設定",
        "steps": [
          "開啟 Terminal 或 PowerShell / Git Bash。",
          "輸入 git --version 確認是否已正確安裝 Git。",
          "設定你的全域使用者名稱：git config --global user.name \"Your Name\"",
          "設定你的全域 Email：git config --global user.email \"your_email@example.com\"",
          "檢查目前設定：git config --list"
        ],
        "tip": "注意：user.email 建議與你的 GitHub 帳號註冊 Email 完全一致。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "以為沒辦 GitHub 帳號就不能用 Git",
        "correction": "Git 是完全獨立的本地命令列工具，即使沒有網路也能在本地進行修訂快照。"
      }
    ],
    "quiz": {
      "question": "關於 Git 與 GitHub 的差異，下列哪一個敘述是『正確』的？",
      "options": [
        "Git 必須在連接網際網路的情況下才能執行 commit",
        "GitHub 是唯一的 Git 雲端託管平台",
        "Git 負責本地的版本修訂快照，GitHub 提供雲端託管與協作平台",
        "安裝 GitHub Desktop 後，電腦就不需要安裝 Git 引擎了"
      ],
      "answerIndex": 2,
      "explanation": "Git 是一個分散式版本控制系統，可完全離線在本地進行 commit 快照；而 GitHub 是基於 Git 的雲端託管平台。"
    },
    "verification": {
      "title": "Lesson 01 實作驗證任務",
      "description": "請完成你的 Git 作者身分設定，並確認環境就緒。",
      "checkType": "interactive",
      "checklist": [
        "已在 GitHub Desktop 或終端機中確認 Git 版本",
        "已完成 user.name 的初始化設定",
        "已完成 user.email 的初始化設定",
        "理解 Git (本地) 與 GitHub (雲端) 的基本分工"
      ],
      "verifyPrompt": "請勾選上述確認事項，點擊『執行驗證』完成本課學習標章！"
    }
  },
  {
    "id": "lesson-02",
    "number": 2,
    "title": "建立第一個儲存庫 (Repository)",
    "module": "模組一：Git & GitHub 核心概念與基礎工作流",
    "duration": "20 分鐘",
    "objectives": [
      "掌握 Repository (儲存庫) 的概念與元件結構",
      "學會使用 GitHub Desktop 或 Git CLI 建立本地儲存庫",
      "理解隱藏目錄 .git 的重要性與作用"
    ],
    "prerequisites": [
      "Lesson 01：完成 Git 初始化設定"
    ],
    "mentalModel": {
      "analogy": "儲存庫 (Repository) 就像是專案的『保險箱專屬資料夾』。一旦你將一般資料夾『初始化』為 Repository，Git 就會在裡面悄悄放置一個隱藏的 .git 保險箱核心，開始精確記錄這個資料夾內每一秒的任何檔案變動。",
      "keyTakeaway": "千萬不可以手動刪除或隨意修改 .git 隱藏資料夾，那是儲存整個專案歷史資料庫的核心精髓！"
    },
    "definitions": [
      {
        "term": "Repository",
        "definition": "儲存庫是 GitHub 與 Git 中最基本的元件。你可以把它想像成專案的資料夾，裡面包含了所有的專案檔案以及每一個檔案的完整歷史修訂紀錄。",
        "source": "GitHub Docs Glossary"
      }
    ],
    "evidences": [
      {
        "item": "Repository 官方定義與範疇",
        "sourceName": "GitHub Docs Glossary",
        "sourceUrl": "https://docs.github.com/en/get-started/quickstart/github-glossary#repository",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "A repository contains all of your project's files and each file's revision history."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "使用 GitHub Desktop 建立儲存庫",
        "steps": [
          "點擊頂部功能選單 File -> New Repository...。",
          "在 Name 欄位輸入儲存庫名稱（例如：my-first-repo）。",
          "在 Local Path 選擇儲存庫要放置於電腦的何處。",
          "勾選 Initialize this repository with a README。",
          "點擊 Create Repository 即可完成建立！"
        ],
        "tip": "建立後，可以在選單點擊 Repository -> Show in Explorer / Finder 快速開啟資料夾。"
      },
      "cli": {
        "title": "使用 Git CLI 建立與初始化儲存庫",
        "steps": [
          "建立專案資料夾：mkdir my-first-repo",
          "進入該資料夾：cd my-first-repo",
          "執行初始化命令：git init",
          "檢查隱藏目錄：ls -la (Mac/Linux) 或 dir /a (Windows) 確認 .git 存在。"
        ],
        "tip": "在已存在的專案中執行 git init 也可以將現有專案轉為 Git 儲存庫。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "在 Repo 裡面又建立另一個 Repo (嵌套 Repo)",
        "correction": "切勿在已經包含 .git 的資料夾內部再次執行 git init，每一個專案資料夾維持一個獨立的 .git 即可。"
      }
    ],
    "quiz": {
      "question": "執行 git init 或在 GitHub Desktop 建立 Repository 後，專案資料夾內會產生什麼關鍵元件？",
      "options": [
        "一個名為 backup.zip 的備份壓縮檔",
        "一個隱藏的 .git 資料夾，儲存所有的歷史資料庫與中繼資料",
        "一個公開在網際網路上的專案網址",
        "一個包含所有團隊成員名單的通訊錄檔案"
      ],
      "answerIndex": 1,
      "explanation": "Git 透過隱藏的 .git 資料夾保存所有快照、分支指標與物件資料庫。"
    },
    "verification": {
      "title": "Lesson 02 實作驗證任務",
      "description": "請在你的電腦上建立名為 my-first-repo 的儲存庫。",
      "checkType": "hybrid",
      "checklist": [
        "已成功建立名為 my-first-repo 的資料夾",
        "專案目錄中已包含隱藏的 .git 資料夾",
        "可以在 GitHub Desktop 的 Current Repository 看到 my-first-repo"
      ],
      "verifyPrompt": "若您建立了 GitHub 公開 Repository，也可貼上 GitHub URL 讓網站驗證："
    }
  },
  {
    "id": "lesson-03",
    "number": 3,
    "title": "工作區、暫存區與 Commit (提交紀錄)",
    "module": "模組一：Git & GitHub 核心概念與基礎工作流",
    "duration": "25 分鐘",
    "objectives": [
      "深入理解 Git 三大區域：工作區 (Working Directory)、暫存區 (Staging Area) 與本地資料庫 (Git Directory)",
      "掌握 git add 與 git commit 的完整生命週期",
      "撰寫符合業界最佳實踐規範的 Commit Message"
    ],
    "prerequisites": [
      "Lesson 02：已建立 Repository"
    ],
    "mentalModel": {
      "analogy": "工作區 = 你的寫字檯；暫存區 = 挑選禮物放入寄送禮盒中；Commit = 封箱貼上快遞單並拍下永久快照照片。",
      "keyTakeaway": "Commit 是 Git 的最基本歷史單位，每一個 Commit 都包含唯一的 SHA-1 Hash 雜湊值與變更紀錄。"
    },
    "definitions": [
      {
        "term": "Staging Area (暫存區)",
        "definition": "位於 Git 資料夾中的一個檔案，保存了下一次提交 (Commit) 所包含的變更資訊。",
        "source": "Pro Git Book 1.3"
      }
    ],
    "evidences": [
      {
        "item": "Git 三大狀態 (The Three States)",
        "sourceName": "Pro Git Book Chapter 1.3",
        "sourceUrl": "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F#_the_three_states",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "Git has three main states that your files can reside in: modified, staged, and committed."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 進行 Commit 操作",
        "steps": [
          "在專案資料夾中新建 README.md 檔案。",
          "切換至 GitHub Desktop，左側 Changes 面板會列出該變更。",
          "勾選檔案左側的核取方塊（暫存 Staging 動作）。",
          "在 Summary 輸入簡要說明（例如 Add README.md file）。",
          "點擊 Commit to main 完成提交！"
        ],
        "tip": "取消勾選檔案即可將其排除在本次 Commit 之外。"
      },
      "cli": {
        "title": "Git CLI 的三階段提交工作流",
        "steps": [
          "查看變更狀態：git status",
          "加入暫存區：git add README.md",
          "執行提交：git commit -m \"Add README.md file\"",
          "確認工作區乾淨：git status"
        ],
        "tip": "Commit 訊息建議主旨簡明扼要 (50字內)，動詞使用祈使句。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "寫出像 update, fix 這樣毫無意義的 Commit 訊息",
        "correction": "請明確寫出修訂目的，例如：Fix login validation error on mobile。"
      }
    ],
    "quiz": {
      "question": "在 Git 生命週期中，哪一個區域負責『保存即將進入下一次 Commit 的檔案清單』？",
      "options": [
        "工作區 (Working Directory)",
        "暫存區 (Staging Area / Index)",
        "遠端庫 (Remote Repository)",
        "回收桶 (Recycle Bin)"
      ],
      "answerIndex": 1,
      "explanation": "暫存區 (Staging Area) 扮演精細控制 Commit 內容的中介角色。"
    },
    "verification": {
      "title": "Lesson 03 實作驗證任務",
      "description": "請在你的 my-first-repo 儲存庫中新增 README.md 檔案並完成第一次 Commit。",
      "checkType": "hybrid",
      "checklist": [
        "專案資料夾內已包含 README.md 檔案",
        "已成功執行 commit 快照",
        "git status 顯示 working tree clean"
      ],
      "verifyPrompt": "若您已有 GitHub 公開存儲庫，請輸入專案 URL 進行線上實時驗證："
    }
  },
  {
    "id": "lesson-04",
    "number": 4,
    "title": "查看歷史紀錄與檔案變更 (Log & Diff)",
    "module": "模組一：Git & GitHub 核心概念與基礎工作流",
    "duration": "20 分鐘",
    "objectives": [
      "掌握 git log 查詢 commit 歷史紀錄",
      "學會使用 git diff 檢視檔案變更對照"
    ],
    "prerequisites": [
      "Lesson 03"
    ],
    "mentalModel": {
      "analogy": "git log 就像是開起相簿檢視過往所有拍下的照片紀錄；git diff 則像是開啟『比對鏡頭』，精確標示出前後兩張照片中哪裡增加了線條，哪裡抹去了文字。",
      "keyTakeaway": "綠色代表新增 (+)，紅色代表刪除 (-)。"
    },
    "definitions": [
      {
        "term": "git log",
        "definition": "顯示提交紀錄的日誌命令。",
        "source": "Git Docs"
      }
    ],
    "evidences": [
      {
        "item": "Viewing the Commit History",
        "sourceName": "Pro Git Book 2.3",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "After you have created several commits, you’ll probably want to look back to see what has happened. The tool to do this is git log."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 查看 History",
        "steps": [
          "開啟 GitHub Desktop 並點擊頂部 History 頁籤。",
          "左側會按時間依序排列所有的 Commit 快照。",
          "點擊任意 Commit，右側會高亮顯示該 Commit 改動的檔案比對 (Diff)。"
        ],
        "tip": "在 History 點擊右鍵可以進行歷史查看與複製 SHA 雜湊值。"
      },
      "cli": {
        "title": "Git CLI 歷史與 Diff 比對",
        "steps": [
          "查看歷史紀錄：git log",
          "簡短一行顯示：git log --oneline",
          "比對工作區未暫存變更：git diff",
          "比對暫存區變更：git diff --staged"
        ],
        "tip": "在 git log 中按 Q 鍵即可離開分頁輸出。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "以為 git log 只能看到當前分支的紀錄",
        "correction": "git log 預設顯示目前 HEAD 所在分支的歷史，使用 git log --all 可以查看所有分支紀錄。"
      }
    ],
    "quiz": {
      "question": "哪一個 command 用於精確比對工作區與暫存區之間的檔案差異？",
      "options": [
        "git status",
        "git log",
        "git diff",
        "git checkout"
      ],
      "answerIndex": 2,
      "explanation": "git diff 專門用來計算檔案之間的增刪修訂差異。"
    },
    "verification": {
      "title": "Lesson 04 實作驗證任務",
      "description": "請在專案中進行兩次不同的修改並成功使用 git log / History 查看修訂對照。",
      "checkType": "interactive",
      "checklist": [
        "已多次 Commit 檔案修改",
        "能正確使用 History 或 git log --oneline 看到 SHA 雜湊碼",
        "能識別綠色 (+) 與紅色 (-) 的 Diff 差異"
      ],
      "verifyPrompt": "請勾選上述確認事項並完成驗證："
    }
  },
  {
    "id": "lesson-05",
    "number": 5,
    "title": "忽略不必要的檔案 (.gitignore)",
    "module": "模組一：Git & GitHub 核心概念與基礎工作流",
    "duration": "15 分鐘",
    "objectives": [
      "掌握 .gitignore 的語法規則與匹配邏輯",
      "避免將敏感資訊 (.env) 或暫存檔推送到 Git"
    ],
    "prerequisites": [
      "Lesson 03"
    ],
    "mentalModel": {
      "analogy": ".gitignore 就像是專案門口貼的『禁止入內告示牌』。它告訴 Git 哪些檔案是私人密碼、系統暫存檔或大型編譯結果，完全忽視它們的存在。",
      "keyTakeaway": ".gitignore 只對未曾被追蹤 (Untracked) 的檔案生效。"
    },
    "definitions": [
      {
        "term": ".gitignore",
        "definition": "一個文字檔，告訴 Git 哪些未追蹤的檔案應該被忽略。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "Ignoring Files Standard",
        "sourceName": "GitHub Docs - Ignoring files",
        "sourceUrl": "https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "You can create a .gitignore file in your repository's root directory to tell Git which files and directories to ignore."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 右鍵忽略檔案",
        "steps": [
          "在 Changes 清單中右鍵點擊不想追蹤的檔案。",
          "選擇 Ignore file（或 Ignore all .log files）。",
          "GitHub Desktop 會自動為你建立或更新 .gitignore 檔案。"
        ],
        "tip": "在 GitHub Desktop 中可以看到 .gitignore 被自動列入變更。"
      },
      "cli": {
        "title": "Git CLI 手動編寫 .gitignore",
        "steps": [
          "在專案根目錄建立檔案：touch .gitignore",
          "用編輯器開啟並寫入規則（如 *.log 或 .env）。",
          "檢查狀態：git status，被忽略的檔案不再出現！"
        ],
        "tip": "常見語法：/node_modules/ 忽略資料夾，*.tmp 忽略所有 tmp 副檔名。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "將已 commit 的檔案寫入 .gitignore 以為會被刪除",
        "correction": "若檔案已被 Git 追蹤，必須先執行 git rm --cached <file> 移除追蹤，.gitignore 才會生效。"
      }
    ],
    "quiz": {
      "question": "下列哪一種檔案最『不應該』被 Commit 進入 Git 儲存庫？",
      "options": [
        "README.md 說明文件",
        "包含資料庫密碼與 API 金鑰的 .env 檔案",
        "index.html 網頁主頁",
        "styles.css 樣式表"
      ],
      "answerIndex": 1,
      "explanation": "包含金鑰與密碼的敏感檔案應絕對排除於 Git 追蹤之外。"
    },
    "verification": {
      "title": "Lesson 05 實作驗證任務",
      "description": "請建立 .env 檔案並透過 .gitignore 成功排除。",
      "checkType": "interactive",
      "checklist": [
        "已在專案根目錄建立 .gitignore",
        "已寫入 .env 忽略規則",
        "git status 或 Changes 不會顯示 .env 檔案"
      ],
      "verifyPrompt": "完成排除測試後點擊執行驗證："
    }
  },
  {
    "id": "lesson-06",
    "number": 6,
    "title": "復原變更與撤銷 (Undo & Reset 基礎)",
    "module": "模組一：Git & GitHub 核心概念與基礎工作流",
    "duration": "25 分鐘",
    "objectives": [
      "掌握放棄未 commit 修改的方法",
      "理解 git restore 與 git reset 的使用場景"
    ],
    "prerequisites": [
      "Lesson 03"
    ],
    "mentalModel": {
      "analogy": "Undo 就像是按下 ctrl+z 復原剛才打錯的字；Restore 是將桌面還原回上一張快照的模樣。",
      "keyTakeaway": "未 commit 的修訂一旦強行 discard 就無法救回，操作前務必謹慎。"
    },
    "definitions": [
      {
        "term": "git restore",
        "definition": "還原工作區檔案至特定快照狀態的命令。",
        "source": "Pro Git 2.4"
      }
    ],
    "evidences": [
      {
        "item": "Undoing Things in Git",
        "sourceName": "Pro Git Book 2.4",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "At any stage, you may want to undo something. Here, we’ll look at a few basic tools for undoing changes."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 撤銷變更",
        "steps": [
          "在 Changes 面板右鍵點擊修改過的檔案。",
          "選擇 Discard Changes...",
          "彈出確認視窗後點擊確認，檔案還原為最後一次 commit 狀態。"
        ],
        "tip": "若剛完成 commit，頂部會出現 Undo 按鈕可快速撤銷。"
      },
      "cli": {
        "title": "Git CLI 復原指令",
        "steps": [
          "放棄工作區未暫存修改：git restore <file>",
          "將暫存區檔案移回工作區：git restore --staged <file>",
          "撤銷最後一次 commit 但保留修改：git reset --soft HEAD~1"
        ],
        "tip": "git restore 是 Git 2.23+ 推出專門用於復原檔案的乾淨指令。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "誤用 git reset --hard 導致寫到一半的程式碼遺失",
        "correction": "--hard 會抹去所有未 commit 的變更，安全作法是先用 git stash 保存。"
      }
    ],
    "quiz": {
      "question": "在 Git 2.23+ 中，若想放棄工作區中某個檔案未提交的修改，應使用什麼 command？",
      "options": [
        "git restore <file>",
        "git remove <file>",
        "git delete <file>",
        "git push <file>"
      ],
      "answerIndex": 0,
      "explanation": "git restore <file> 能將檔案還原為暫存區或 HEAD 的狀態。"
    },
    "verification": {
      "title": "Lesson 06 實作驗證任務",
      "description": "請故意修改一個檔案，隨後成功將其撤銷還原。",
      "checkType": "interactive",
      "checklist": [
        "在專案中修改檔案",
        "使用 Discard / git restore 成功將檔案復原",
        "確認 Working Tree 回復 Clean"
      ],
      "verifyPrompt": "完成還原測試後執行驗證："
    }
  },
  {
    "id": "lesson-07",
    "number": 7,
    "title": "將本地專案發布至 GitHub (Push)",
    "module": "模組二：遠端協作與 GitHub 雲端同步",
    "duration": "25 分鐘",
    "objectives": [
      "理解 Remote (遠端庫) 與 Origin 的定義",
      "掌握 git push 將本地 Commit 同步至 GitHub 雲端"
    ],
    "prerequisites": [
      "Lesson 03"
    ],
    "mentalModel": {
      "analogy": "Push 就像是將你本地照片庫同步上傳到 GitHub 雲端相簿。讓遠端伺服器備份你的每一次 commit 快照。",
      "keyTakeaway": "Push 傳送的是 Commit 歷史物件，而非單純的檔案檔案覆蓋。"
    },
    "definitions": [
      {
        "term": "Push",
        "definition": "將本地儲存庫的修訂快照傳送並更新至遠端儲存庫的動作。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "Pushing commits standard",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/get-started/using-git/pushing-commits-to-github",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "Pushing is how you transfer commits from your local repository to a remote repository."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 發布與 Push",
        "steps": [
          "若專案尚未發布，點擊 Publish repository 按鈕。",
          "選擇專案名稱並決定是否公開 (Public)。",
          "後續每次 commit 後，點擊 Push origin 即可將最新 commit 送上雲端。"
        ],
        "tip": "GitHub Desktop 會自動幫你設定好 remote origin 網址。"
      },
      "cli": {
        "title": "Git CLI 設定遠端並 Push",
        "steps": [
          "新增遠端庫連結：git remote add origin <URL>",
          "推送到遠端主分支：git push -u origin main",
          "後續簡寫推送到預設遠端：git push"
        ],
        "tip": "-u 參數 (set-upstream) 可以建立本地分支與遠端分支的預設追蹤關係。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "遠端已有新的 Commit 卻強行 git push -f 覆蓋",
        "correction": "強行 Push 會抹去團隊其他人的提交，應先執行 git pull 整合變更。"
      }
    ],
    "quiz": {
      "question": "將本地 Commit 快照傳送並同步至 GitHub 遠端儲存庫的動作稱為？",
      "options": [
        "Pull",
        "Push",
        "Clone",
        "Fork"
      ],
      "answerIndex": 1,
      "explanation": "Push 是將本地改動上傳遠端庫的核心操作。"
    },
    "verification": {
      "title": "Lesson 07 實作驗證任務 (Verify Mode)",
      "description": "請將專案發布至 GitHub，並貼上 GitHub URL 在驗證模式進行線上 API 確認！",
      "checkType": "hybrid",
      "checklist": [
        "已將本地 Repo 推送到 GitHub 雲端",
        "在 GitHub 網站上能看到已提交的 README.md",
        "輸入 GitHub 網址通訊 API 完成驗證"
      ],
      "verifyPrompt": "請在上方輸入您的 GitHub Repo 公開網址並點擊驗證："
    }
  },
  {
    "id": "lesson-08",
    "number": 8,
    "title": "從 GitHub 下載與複製專案 (Clone & Download)",
    "module": "模組二：遠端協作與 GitHub 雲端同步",
    "duration": "20 分鐘",
    "objectives": [
      "理解 Clone 與 Download ZIP 的本質差異",
      "學會複製遠端儲存庫到本地電腦"
    ],
    "prerequisites": [
      "Lesson 01"
    ],
    "mentalModel": {
      "analogy": "Download ZIP 只是下載了一張當前檔案的『快照印刷單張』（沒有 .git）；Clone 則是將全套『歷史時間機器』整台複製到你的電腦中。",
      "keyTakeaway": "Clone 後的專案包含完整修訂歷史，可以直接進行 commit 與 push 操作。"
    },
    "definitions": [
      {
        "term": "Clone",
        "definition": "建立一個遠端儲存庫在本地電腦的完整複本。",
        "source": "GitHub Docs Glossary"
      }
    ],
    "evidences": [
      {
        "item": "Cloning a Repository",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "When you clone a repository, you copy the repository from GitHub.com to your local machine."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 複製儲存庫",
        "steps": [
          "點擊 File -> Clone Repository...。",
          "在 GitHub.com 頁籤中選擇你的專案（或切換到 URL 頁籤貼上網址）。",
          "選擇本地儲存路徑後點擊 Clone。"
        ],
        "tip": "GitHub Desktop 會自動為複製的專案建立好預設登入狀態。"
      },
      "cli": {
        "title": "Git CLI 複製專案",
        "steps": [
          "複製專案：git clone https://github.com/username/repo-name.git",
          "進入複製好的資料夾：cd repo-name",
          "查看遠端連結：git remote -v"
        ],
        "tip": "Clone 命令會自動設定名為 origin 的遠端指標。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "下載 Download ZIP 後疑惑為什麼不能執行 git push",
        "correction": "ZIP 檔不包含 .git 資料庫，必須透過 git clone 複製才能獲得完整 Git 儲存庫。"
      }
    ],
    "quiz": {
      "question": "若想在本地電腦獲得帶有完整 Git 歷史紀錄與遠端連結的專案複本，應該使用？",
      "options": [
        "Download ZIP",
        "git clone",
        "git export",
        "Save Page As"
      ],
      "answerIndex": 1,
      "explanation": "git clone 會複製遠端庫的完整歷史與中繼資料。"
    },
    "verification": {
      "title": "Lesson 08 實作驗證任務",
      "description": "請成功 Clone 一個公開專案到你的電腦中。",
      "checkType": "interactive",
      "checklist": [
        "已複製目標專案的 HTTPS 網址",
        "已成功在本地 Clone 出該專案資料夾",
        "專案內包含完整 .git 歷史"
      ],
      "verifyPrompt": "完成 Clone 後勾選執行驗證："
    }
  },
  {
    "id": "lesson-09",
    "number": 9,
    "title": "拉取最新雲端進度 (Fetch & Pull)",
    "module": "模組二：遠端協作與 GitHub 雲端同步",
    "duration": "20 分鐘",
    "objectives": [
      "區分 Fetch (檢查更新) 與 Pull (下載並合併) 的差異",
      "掌握團隊協作時保持本地最新進度的規範"
    ],
    "prerequisites": [
      "Lesson 07"
    ],
    "mentalModel": {
      "analogy": "Fetch 像是查看快遞追蹤簡訊通知（知道了有新包裹但尚未拆封）；Pull 則是收下包裹並直接拆開裝入你的房間（Fetch + Merge）。",
      "keyTakeaway": "git pull = git fetch + git merge"
    },
    "definitions": [
      {
        "term": "git pull",
        "definition": "從遠端儲存庫提取並立即合併最新的修訂快照至當前分支。",
        "source": "Pro Git 2.5"
      }
    ],
    "evidences": [
      {
        "item": "Working with Remotes",
        "sourceName": "Pro Git Book 2.5",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "git pull will fetch data from the server and automatically merge it into your current code."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop Fetch & Pull",
        "steps": [
          "點擊頂部欄位的 Fetch origin 檢查雲端是否有新進度。",
          "若雲端有更新，按鈕會變成 Pull origin (1 commit behind)。",
          "點擊 Pull origin 即可自動同步最新修訂。"
        ],
        "tip": "GitHub Desktop 背景會定期為你執行安全的 Fetch 檢查。"
      },
      "cli": {
        "title": "Git CLI 提取與拉取",
        "steps": [
          "只檢查更新不合併：git fetch origin",
          "查看遠端與本地落後狀態：git status",
          "下載並合併最新進度：git pull origin main"
        ],
        "tip": "在每天開始寫程式碼前，執行 git pull 是個非常優秀的好習慣！"
      }
    },
    "commonMistakes": [
      {
        "mistake": "本地有未 commit 的檔案直接執行 git pull 導致覆蓋衝突",
        "correction": "拉取最新進度前，先確保本地工作區是 Clean 狀態或先暫存 (Stash)。"
      }
    ],
    "quiz": {
      "question": "關於 git fetch 與 git pull 的關係，下列何者正確？",
      "options": [
        "git fetch 等於 git push",
        "git pull 會先 fetch 遠端更新再合併 (merge) 到當前分支",
        "git fetch 會刪除本地檔案",
        "兩者完全沒有差別"
      ],
      "answerIndex": 1,
      "explanation": "git pull 實際上是 fetch 與 merge 兩步操作的組合捷徑。"
    },
    "verification": {
      "title": "Lesson 09 實作驗證任務",
      "description": "請在 GitHub 網頁修改檔案後，使用 Pull 將進度同步回本地。",
      "checkType": "interactive",
      "checklist": [
        "能在 GitHub 網頁編輯並 commit 檔案",
        "本地能檢測出 1 commit behind",
        "成功執行 Pull 獲取最新修訂"
      ],
      "verifyPrompt": "完成同步後執行驗證："
    }
  },
  {
    "id": "lesson-10",
    "number": 10,
    "title": "了解分支概念 (Branching 核心)",
    "module": "模組二：遠端協作與 GitHub 雲端同步",
    "duration": "25 分鐘",
    "objectives": [
      "理解 Git 分支是指向 Commit 的輕量級可移動指標",
      "掌握建立與切換分支的操作 (checkout / switch)"
    ],
    "prerequisites": [
      "Lesson 03"
    ],
    "mentalModel": {
      "analogy": "分支就像是平行宇宙的實驗室。你在新分支隨意嘗試開發新功能，完全不會影響主宇宙 (main) 的穩定運作。",
      "keyTakeaway": "Git 的分支非常輕量，本質只是一個指向 40 字元 SHA-1 Commit 的 41 位元組檔案指標！"
    },
    "definitions": [
      {
        "term": "Branch",
        "definition": "儲存庫中的獨立開發平行線，指向特定的 commit 節點。",
        "source": "GitHub Docs Glossary"
      }
    ],
    "evidences": [
      {
        "item": "Git Branches in a Nutshell",
        "sourceName": "Pro Git Book 3.1",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "A branch in Git is simply a lightweight movable pointer to one of these commits."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 分支操作",
        "steps": [
          "點擊頂部 Current Branch -> New Branch。",
          "輸入新分支名稱（如 feature/login-page）。",
          "點擊 Create Branch 即可自動切換到新分支。",
          "在新分支上完成的 commit 均屬於該分支。"
        ],
        "tip": "在 Current Branch 下拉選單中可以輕鬆在不同分支間雙擊切換。"
      },
      "cli": {
        "title": "Git CLI 分支建立與切換",
        "steps": [
          "列出分支：git branch",
          "建立新分支：git branch feature/login",
          "切換分支：git checkout feature/login (或 git switch feature/login)",
          "建立並立即切換捷徑：git checkout -b feature/login"
        ],
        "tip": "Git 2.23+ 建議使用語意更清晰的 git switch <branch> 來切換分支。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "忘記自己在哪個分支，把測試程式碼誤 commit 到 main 分支",
        "correction": "時刻用 git status 或查看 Desktop 頂部確認當前 Branch 名稱。"
      }
    ],
    "quiz": {
      "question": "Git 中的分支 (Branch) 在底層架構上的本質是什麼？",
      "options": [
        "整份專案檔案的完整硬碟複製",
        "一個輕量級、指向特定 Commit 的可移動指標",
        "一個加密過的資料庫索引鏈",
        "一個全域變數檔案"
      ],
      "answerIndex": 1,
      "explanation": "Git 分支本質極為輕量，只是一個 41 bytes 的 Commit 指針。"
    },
    "verification": {
      "title": "Lesson 10 實作驗證任務",
      "description": "請建立名為 feature/login 的分支並成功切換過去完成 Commit。",
      "checkType": "interactive",
      "checklist": [
        "已建立新分支 feature/login",
        "成功切換至該分支",
        "在新分支上產生至少一個專屬 Commit"
      ],
      "verifyPrompt": "完成分支建立與提交後驗證："
    }
  },
  {
    "id": "lesson-11",
    "number": 11,
    "title": "合併分支 (Merge 基礎)",
    "module": "模組二：遠端協作與 GitHub 雲端同步",
    "duration": "25 分鐘",
    "objectives": [
      "理解 Fast-forward 快速前進合併與三方合併 (3-way merge)",
      "掌握將 Feature 分支合併回 Main 分支的工作流"
    ],
    "prerequisites": [
      "Lesson 10"
    ],
    "mentalModel": {
      "analogy": "Merge 就像是將平行宇宙在測試成熟後的最新技術，正式裝配與回歸到主宇宙主航線上。",
      "keyTakeaway": "先切換到接收變更的目标分支 (如 main)，再執行 merge 來源分支。"
    },
    "definitions": [
      {
        "term": "Merge",
        "definition": "將一個分支中的修訂快照整合至另一個分支的操作。",
        "source": "Pro Git 3.2"
      }
    ],
    "evidences": [
      {
        "item": "Basic Branching and Merging",
        "sourceName": "Pro Git Book 3.2",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "Merging brings the changes from one branch into another."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 合併分支",
        "steps": [
          "確保 Current Branch 為 main 分支。",
          "點擊頂部功能選單 Branch -> Merge into current branch...",
          "選擇要合併進來的功能分支（如 feature/login）。",
          "點擊 Create a merge commit 完成合併！"
        ],
        "tip": "合併後可以右鍵點擊舊分支選擇 Delete 保持乾淨。"
      },
      "cli": {
        "title": "Git CLI 合併流程",
        "steps": [
          "切換回主分支：git checkout main",
          "執行合併命令：git merge feature/login",
          "刪除已合併的舊分支：git branch -d feature/login"
        ],
        "tip": "若沒有衝突且 main 沒移動過，Git 會執行快速前進 (Fast-forward) 合併。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "在 feature 分支上執行 git merge main 導致方向顛倒",
        "correction": "記得口訣：『站在被合併的目標分支上，吸入功能分支』。"
      }
    ],
    "quiz": {
      "question": "若想將 feature/login 分支合併進 main 分支，第一步應該切換到哪個分支？",
      "options": [
        "feature/login 分支",
        "main 分支",
        "origin/remote 分支",
        "不必切換分支"
      ],
      "answerIndex": 1,
      "explanation": "必須先切換到目標接收分支 (main)，再執行合併。"
    },
    "verification": {
      "title": "Lesson 11 實作驗證任務",
      "description": "請成功將 feature 分支合併回 main 分支並刪除舊分支。",
      "checkType": "interactive",
      "checklist": [
        "已切換回 main 分支",
        "成功執行 merge 合併",
        "舊分支已被安全清理刪除"
      ],
      "verifyPrompt": "完成合併後點擊驗證："
    }
  },
  {
    "id": "lesson-12",
    "number": 12,
    "title": "解決合併衝突 (Merge Conflicts)",
    "module": "模組二：遠端協作與 GitHub 雲端同步",
    "duration": "30 分鐘",
    "objectives": [
      "克服對 Merge Conflict 的恐懼，理解衝突產生的原因",
      "學會閱讀 <<<<<<<, =======, >>>>>>> 衝突標記並手動解決"
    ],
    "prerequisites": [
      "Lesson 11"
    ],
    "mentalModel": {
      "analogy": "衝突就像是兩位作者同時在同一頁同一個段落寫了不同的文字，Git 不敢擅自替你作主刪除任何人的心血，於是舉手請你親自決定要採用哪一個版本。",
      "keyTakeaway": "衝突不是壞事，它是 Git 保障資料安全的保護機制。"
    },
    "definitions": [
      {
        "term": "Merge Conflict",
        "definition": "當兩分支修改了同一個檔案的同一區域且 Git 無法自動合併時觸發的狀態。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "Addressing Merge Conflicts",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "Merge conflicts happen when people make competing changes to the same line of a file."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 衝突處理解析",
        "steps": [
          "當合併發生衝突時，會跳出 Conflicts 提示視窗。",
          "點擊 Open in VS Code 使用編輯器修復檔案。",
          "手動保留正確程式碼，刪除 <<<, ===, >>> 標記。",
          "返回 GitHub Desktop 點擊 Continue Merge 完成 Commit！"
        ],
        "tip": "GitHub Desktop 會清晰列出目前剩餘幾個檔案尚未解決衝突。"
      },
      "cli": {
        "title": "Git CLI 解決衝突三部曲",
        "steps": [
          "執行 git merge 觸發衝突，查看狀態：git status",
          "開啟衝突檔案，手動清理衝突區塊。",
          "將已修復的檔案加入暫存區：git add <file>",
          "完成合併提交：git commit -m \"Fix merge conflict\""
        ],
        "tip": "若想放棄本次失敗的合併，可執行 git merge --abort 還原。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "忘記刪除 <<<<<<< HEAD 這些 Git 衝突標記就直接 commit",
        "correction": "衝突標記若留在檔案中會導致程式語法錯誤，務必清理乾淨。"
      }
    ],
    "quiz": {
      "question": "在 Git 衝突檔案中，======= 符號的作用是什麼？",
      "options": [
        "代表檔案結尾",
        "分隔當前分支 (HEAD) 的修改與待合併分支的修改",
        "代表警告訊息",
        "代表自動忽略該行"
      ],
      "answerIndex": 1,
      "explanation": "======= 是兩分支修訂內容的分隔線。"
    },
    "verification": {
      "title": "Lesson 12 實作驗證任務",
      "description": "請人為製造一次衝突並手動解決後完成合併 Commit。",
      "checkType": "interactive",
      "checklist": [
        "成功在兩分支修改同檔案同一行觸發衝突",
        "手動清理了衝突標記與保留正確內容",
        "成功完成 Merge Commit"
      ],
      "verifyPrompt": "完成衝突解決後執行驗證："
    }
  },
  {
    "id": "lesson-13",
    "number": 13,
    "title": "建立 Pull Request (PR) 流程",
    "module": "模組三：團隊協作與 GitHub 生態系",
    "duration": "25 分鐘",
    "objectives": [
      "掌握 GitHub 最核心的協作機制 Pull Request 的建立規範",
      "撰寫結構清晰的 PR 說明與標題"
    ],
    "prerequisites": [
      "Lesson 07",
      "Lesson 10"
    ],
    "mentalModel": {
      "analogy": "PR 就像是向專案總監遞交一份『企劃與修訂申請書』。你展示你在功能分支上的成果，請團隊夥伴討論與審查，核准後才能進入主線。",
      "keyTakeaway": "PR 是 GitHub 上的線上討論區，而非單純的 command 指令。"
    },
    "definitions": [
      {
        "term": "Pull Request",
        "definition": "向儲存庫維護者提案將你的分支變更合併至主分支的機制。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "About Pull Requests Standard",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "Pull requests let you tell others about changes you've pushed to a branch in a repository on GitHub."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 一鍵發起 PR",
        "steps": [
          "將功能分支 Push 上雲端。",
          "頂部會出現藍色按鈕 Create Pull Request。",
          "點擊後會自動開啟瀏覽器並跳轉至 GitHub PR 建立頁面。",
          "填寫標題與 Content 說明後點擊 Create Pull Request！"
        ],
        "tip": "GitHub Desktop 會自動為你對照好 Base 分支與 Compare 分支。"
      },
      "cli": {
        "title": "GitHub Web / GitHub CLI (gh) 建立 PR",
        "steps": [
          "推送分支：git push origin feature/login",
          "使用 GitHub CLI 工具：gh pr create --title \"Add login page\" --body \"Description...\"",
          "或登入 GitHub 網頁點擊 Compare & pull request 綠色按鈕。"
        ],
        "tip": "安裝 GitHub CLI (`gh`) 可以在終端機內完全不用開啟瀏覽器即可發起 PR！"
      }
    },
    "commonMistakes": [
      {
        "mistake": "PR 標題寫得太含糊（如 'update'），沒寫內文說明",
        "correction": "好的 PR 應寫明：改動原因、修改項目、測試方式，方便 Reviewer 快速理解。"
      }
    ],
    "quiz": {
      "question": "關於 Pull Request (PR)，下列哪一個說明是『正確』的？",
      "options": [
        "PR 是 Git CLI 原生內建的命令",
        "PR 是 GitHub 上用於提出修訂提案與開會討論 Code Review 的機制",
        "PR 會直接刪除遠端儲存庫",
        "只有公開專案才能使用 PR"
      ],
      "answerIndex": 1,
      "explanation": "PR 是 GitHub 平台的特色功能，用於跨成員程式碼審查與討論。"
    },
    "verification": {
      "title": "Lesson 13 實作驗證任務",
      "description": "請在你的 GitHub Repo 上發起第一個 Pull Request！",
      "checkType": "interactive",
      "checklist": [
        "已推送功能分支到 GitHub",
        "已在網頁或 CLI 成功建立 PR",
        "PR 包含清晰標題與說明"
      ],
      "verifyPrompt": "完成 PR 建立後執行驗證："
    }
  },
  {
    "id": "lesson-14",
    "number": 14,
    "title": "Code Review 與討論 (審查與修訂)",
    "module": "模組三：團隊協作與 GitHub 生態系",
    "duration": "25 分鐘",
    "objectives": [
      "學習在 PR 中給予單行對照留言 (Inline Comment)",
      "掌握 Approve, Request Changes 與 Comment 的評審狀態"
    ],
    "prerequisites": [
      "Lesson 13"
    ],
    "mentalModel": {
      "analogy": "Code Review 就像是同儕論文評閱。大家針對特定段落提出優化建議，幫助專案保持高代碼品質與低 Bug 率。",
      "keyTakeaway": "評論針對的是『程式碼與架構』，而非開發者個人。"
    },
    "definitions": [
      {
        "term": "Code Review",
        "definition": "團隊成員對 PR 中的程式碼變更進行審查與回覆說明的過程。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "Reviewing Proposed Changes",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "Reviews allow collaborators to comment on proposed changes, approve changes, or request changes before merging."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 檢視 PR 評論",
        "steps": [
          "在 GitHub Desktop 頂部點擊 Current Branch。",
          "切換到 Pull Requests 頁籤可以看到與你相關的 PR 列表。",
          "在視窗中可以直接點擊查看 Reviewer 提出的修訂意見。"
        ],
        "tip": "當收到修訂建議時，只需在本地分支繼續 commit 並 push，PR 就會自動更新！"
      },
      "cli": {
        "title": "GitHub Web 進行審查與留言",
        "steps": [
          "開啟 PR 頁面的 Files changed 頁籤。",
          "滑鼠懸停在代碼行號上，點擊 + 號發起單行討論。",
          "選擇 Start a review 或 Add single comment。",
          "點擊 Review changes 選擇 Approve 或 Request changes 提交審查結果。"
        ],
        "tip": "善用 Suggest a change 功能可以直接提出建議修訂程式碼塊！"
      }
    },
    "commonMistakes": [
      {
        "mistake": "當收到修訂建議時重新開一個全新的 PR",
        "correction": "不需要開新 PR！只要在原分支繼續 commit 並 push，變更會自動追加入同一個 PR。"
      }
    ],
    "quiz": {
      "question": "在 GitHub PR 審查中，若認為程式碼有重大漏洞必須要求修改後才能合併，應選擇哪種審查狀態？",
      "options": [
        "Approve",
        "Comment",
        "Request changes",
        "Cancel PR"
      ],
      "answerIndex": 2,
      "explanation": "Request changes 會阻止 PR 被誤合併，直到問題被修復。"
    },
    "verification": {
      "title": "Lesson 14 實作驗證任務",
      "description": "請在 PR 頁面體驗發表一則單行留言 (Inline Comment) 或更新修訂。",
      "checkType": "interactive",
      "checklist": [
        "能在 Files changed 發表行內留言",
        "能在本地補充 commit 並更新至同一個 PR",
        "理解 Approve 與 Request changes 差別"
      ],
      "verifyPrompt": "完成審查互動體驗後驗證："
    }
  },
  {
    "id": "lesson-15",
    "number": 15,
    "title": "合併 Pull Request 與刪除遠端分支",
    "module": "模組三：團隊協作與 GitHub 生態系",
    "duration": "20 分鐘",
    "objectives": [
      "理解 Create a merge commit, Squash and merge, Rebase and merge 三種合併方式",
      "學會清理已完工的遠端分支"
    ],
    "prerequisites": [
      "Lesson 13"
    ],
    "mentalModel": {
      "analogy": "Squash and merge 就像是將你開發過程中的 10 個草稿碎屑小 commit 打包壓扁成 1 個精美的特刊 commit，保持主分支日誌乾淨俐落。",
      "keyTakeaway": "合併完 PR 後，養成順手刪除 feature 分支的好習慣。"
    },
    "definitions": [
      {
        "term": "Squash and Merge",
        "definition": "將分支上的多個 commit 濃縮合併為單一 commit 後加入目標分支的方式。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "About Merge Methods on GitHub",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-merge-methods-on-github",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "You can merge pull requests on GitHub.com using a merge commit, squashed commits, or rebased commits."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 清理已合併分支",
        "steps": [
          "當 PR 於網頁端合併完成後，開啟 GitHub Desktop。",
          "點擊 Fetch origin，系統會提示該分支已被遠端合併。",
          "點擊 Delete Branch 彈窗，勾選 Delete on remote 同步清理雲端分支！"
        ],
        "tip": "GitHub Desktop 會貼心提示該分支已 Safe to delete。"
      },
      "cli": {
        "title": "GitHub Web 合併與分支刪除",
        "steps": [
          "在 PR 底部綠色按鈕點擊下拉箭頭，選擇 Squash and merge。",
          "確認提交摘要訊息後點擊 Confirm squash and merge。",
          "頁面會顯示紫色圖示，點擊 Delete branch 刪除遠端分支。"
        ],
        "tip": "可在 GitHub Repo Settings 中設定 Merge 後自動刪除 head 分支 (Automatically delete head branches)。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "合併完 PR 後保留數十個廢棄的舊分支",
        "correction": "過多的廢棄分支會干擾團隊視線，應隨手刪除完工分支。"
      }
    ],
    "quiz": {
      "question": "若希望將功能分支上 5 個零碎的小 commit 合併壓縮成單一 commit 併入 main，應該選擇哪種合併模式？",
      "options": [
        "Create a merge commit",
        "Squash and merge",
        "Rebase and delete",
        "Direct force push"
      ],
      "answerIndex": 1,
      "explanation": "Squash and merge 會壓縮同分支的所有 commit 為單一高層級 commit。"
    },
    "verification": {
      "title": "Lesson 15 實作驗證任務",
      "description": "請成功 Squash & Merge 一個 PR 並清理遠端分支。",
      "checkType": "interactive",
      "checklist": [
        "成功執行 PR 合併",
        "主分支歷史乾淨無雜訊",
        "已刪除已合併的遠端與本地分支"
      ],
      "verifyPrompt": "完成合併與清理後驗證："
    }
  },
  {
    "id": "lesson-16",
    "number": 16,
    "title": "使用 GitHub Issues 追蹤任務與 Bug",
    "module": "模組三：團隊協作與 GitHub 生態系",
    "duration": "20 分鐘",
    "objectives": [
      "掌握 GitHub Issues 任務卡片、Labels, Assignees, Milestones 的使用",
      "學會在 Commit 訊息中使用關閉關鍵字 (Fixes #1)"
    ],
    "prerequisites": [
      "Lesson 07"
    ],
    "mentalModel": {
      "analogy": "Issues 就像是專案看板上的『待辦事項便籤』。大家在那裡提報 bug、討論新功能，並追蹤進度。",
      "keyTakeaway": "在 commit 或 PR 中寫入 `Fixes #Issue編號` 可以觸發自動關閉 Issue！"
    },
    "definitions": [
      {
        "term": "Issue",
        "definition": "用於追蹤專案中的 Bug、功能需求、討論與任務的卡片項目。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "About Issues Standard",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "GitHub Issues are useful for tracking tasks, enhancements, and bugs for your project."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 與 Issue 關閉關聯",
        "steps": [
          "在本地修改修復 Bug。",
          "在 GitHub Desktop 左下角 Commit Summary 中寫入：Fix login bug (Fixes #1)。",
          "點擊 Commit 並 Push 上雲端。",
          "GitHub 會自動將 Issue #1 標記為 Closed！"
        ],
        "tip": "支援的關鍵字包括 Fixes, Closes, Resolves。"
      },
      "cli": {
        "title": "GitHub 網頁建置與管理 Issue",
        "steps": [
          "點擊專案頁面頂部的 Issues 頁籤。",
          "點擊 New issue 按鈕，填寫標題與詳細描述。",
          "在右側邊欄設定 Assignees (負責人), Labels (標籤，如 bug/feature), Milestone (里程碑)。",
          "點擊 Submit new issue 提交！"
        ],
        "tip": "使用 GitHub Project 看板可以將 Issues 轉為 Kanban 拖曳管理。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "手動去點擊 Close Issue 而非讓 Commit / PR 訊息自動連結關閉",
        "correction": "使用 Fixes #1 能夠在 Issue 留言區留下精確的修復 Commit 追蹤連結。"
      }
    ],
    "quiz": {
      "question": "在 Commit 訊息中寫入下列哪一段語法，可以在 Push 後讓 GitHub 自動把第 5 號 Issue 關閉？",
      "options": [
        "Delete #5",
        "Fixes #5",
        "Remove Issue 5",
        "Hide #5"
      ],
      "answerIndex": 1,
      "explanation": "Fixes #5 是 GitHub 官方支援的自動關閉關鍵字之一。"
    },
    "verification": {
      "title": "Lesson 16 實作驗證任務",
      "description": "請建立一個 Issue 並在 Commit 訊息中使用 Fixes #1 將其自動關閉。",
      "checkType": "interactive",
      "checklist": [
        "已在 GitHub 建立第一個 Issue",
        "提交包含 Fixes #1 的 commit 並 push",
        "確認 Issue 狀態已自動變更為 Closed"
      ],
      "verifyPrompt": "完成 Issue 自動關閉測試後驗證："
    }
  },
  {
    "id": "lesson-17",
    "number": 17,
    "title": "GitHub Markdown 與 README 專案門面",
    "module": "模組三：团队協作與 GitHub 生態系",
    "duration": "20 分鐘",
    "objectives": [
      "掌握 GitHub Flavored Markdown (GFM) 的核心語法",
      "打造高質感的 README.md 門面頁面"
    ],
    "prerequisites": [
      "Lesson 03"
    ],
    "mentalModel": {
      "analogy": "README.md 就像是專案的『精裝名片與展示櫥窗』。開宗明義告訴訪客這個專案是什麼、怎麼安裝、如何使用。",
      "keyTakeaway": "好的 README 包含：標題、簡介、安裝步驟、使用說明與授權。"
    },
    "definitions": [
      {
        "term": "README",
        "definition": "包含儲存庫資訊與專案介紹的核心說明文件。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "Writing on GitHub",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/get-started/writing-on-github",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "GitHub Flavored Markdown is the version of the Markdown syntax that GitHub uses."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 預覽 README 改動",
        "steps": [
          "使用 VS Code 或 Typora 編輯 README.md 檔案。",
          "切換回 GitHub Desktop，左側邊欄可以即時檢視排版對照。",
          "完成排版編寫後 Commit 並 Push 上雲端。"
        ],
        "tip": "README 支援 Emoji、表格與語法高亮程式碼區塊。"
      },
      "cli": {
        "title": "GFM 核心語法範例",
        "steps": [
          "標題：# 主標題, ## 次標題",
          "程式碼區塊：```javascript ... ```",
          "任務清單：- [x] 完成項目 - [ ] 未完成",
          "引用區塊：> 注意事項..."
        ],
        "tip": "在 GitHub 網頁上點擊 Edit 可以即時使用 Preview 頁籤預覽渲染效果。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "README 全是一整團沒有結構的純文字",
        "correction": "善用標題 (H1/H2)、列表、粗體與程式碼區塊提升可讀性。"
      }
    ],
    "quiz": {
      "question": "在 GitHub Markdown 語法中，若想建立帶有語法高亮 (Syntax Highlighting) 的程式碼區塊，應該使用什麼符號包裹？",
      "options": [
        "三個單引號 '''",
        "三個反引號 ```",
        "三個雙引號 \"\"\"",
        "三個星號 ***"
      ],
      "answerIndex": 1,
      "explanation": "三個反引號 ``` (Backticks) 用於聲明多行程式碼區塊與指定語言。"
    },
    "verification": {
      "title": "Lesson 17 實作驗證任務",
      "description": "請為你的專案編寫一份包含標題、簡介與代碼塊的精美 README.md。",
      "checkType": "interactive",
      "checklist": [
        "README 包含清晰的 H1/H2 標題",
        "包含程式碼高亮區塊或任務清單",
        "在 GitHub 網頁上完美渲染"
      ],
      "verifyPrompt": "完成 README 編寫後驗證："
    }
  },
  {
    "id": "lesson-18",
    "number": 18,
    "title": "Fork 與 Open Source 貢獻工作流",
    "module": "模組三：團隊協作與 GitHub 生態系",
    "duration": "30 分鐘",
    "objectives": [
      "理解 Fork 與 Clone 的權限差異",
      "掌握對外部開源專案提交跨庫 PR 的經典工作流"
    ],
    "prerequisites": [
      "Lesson 08",
      "Lesson 13"
    ],
    "mentalModel": {
      "analogy": "Fork 就像是在圖書館影印了一本經典書籍放在你自己的書架上。你可以隨意在上面做筆記，成熟後再把精妙的筆記寫回給原作者 (跨庫 PR)。",
      "keyTakeaway": "Fork 會在你的 GitHub 個人帳號下建立一份擁有完全寫入權限的專案副本。"
    },
    "definitions": [
      {
        "term": "Fork",
        "definition": "在個人帳號下建立其他使用者專案的獨立副本。",
        "source": "GitHub Docs Glossary"
      }
    ],
    "evidences": [
      {
        "item": "Fork a repo Standard",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "A fork is a new repository that shares code and visibility settings with the original upstream repository."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 複製 Fork 專案",
        "steps": [
          "在 GitHub 網頁上對目標專案點擊右上角的 Fork 按鈕。",
          "開啟 GitHub Desktop，選擇 Clone 剛 Fork 回你自己帳號下的專案。",
          "建立功能分支並完成修改提交。",
          "點擊 Create Pull Request，系統會自動辨識並指向原專案 (Upstream)！"
        ],
        "tip": "GitHub Desktop 會提示該專案為 Forked repository。"
      },
      "cli": {
        "title": "Git CLI 的 Upstream 遠端設定",
        "steps": [
          "Fork 並 Clone 你自己的副本：git clone https://github.com/your-name/repo.git",
          "新增原作者遠端鏈結 (Upstream)：git remote add upstream https://github.com/original-author/repo.git",
          "同步原作者最新進度：git fetch upstream && git merge upstream/main"
        ],
        "tip": "origin 指向你自己的 Fork 庫，upstream 指向原作者的官方庫。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "直接在你自己 Fork 庫的 main 分支修改並開 PR",
        "correction": "開源貢獻最佳實踐：永遠在專屬功能分支上修改，避免主分支同步衝突。"
      }
    ],
    "quiz": {
      "question": "若想對一個你『沒有寫入權限』的 GitHub 開源專案進行貢獻與修改，第一步應該？",
      "options": [
        "直接強行 git push 到原專案",
        "點擊 Fork 按鈕將專案複製一份至個人帳號下",
        "給原作者發送信件要求管理員權限",
        "刪除原專案"
      ],
      "answerIndex": 1,
      "explanation": "Fork 讓你能在自己的副本專案中自由修改並提出跨庫 PR 貢獻。"
    },
    "verification": {
      "title": "Lesson 18 實作驗證任務",
      "description": "請成功 Fork 一個公開練習庫並完成一次跨庫 PR 提案體驗。",
      "checkType": "interactive",
      "checklist": [
        "已在 GitHub 成功 Fork 專案至個人帳號",
        "已 Clone 副本並建立功能分支",
        "成功向 Upstream 原專案發起 PR"
      ],
      "verifyPrompt": "完成 Fork 貢獻體驗後驗證："
    }
  },
  {
    "id": "lesson-19",
    "number": 19,
    "title": "暫存工作進度 (Git Stash)",
    "module": "模組四：進階 Git 技巧與排查實務",
    "duration": "20 分鐘",
    "objectives": [
      "掌握 git stash 暫存未完成修改的方法",
      "學會使用 stash pop / apply 取回暫存堆疊"
    ],
    "prerequisites": [
      "Lesson 06",
      "Lesson 10"
    ],
    "mentalModel": {
      "analogy": "Stash 就像是將寫到一半的草稿紙臨時塞入桌面下的抽屜裡，讓桌面瞬間回復乾淨，等你切換完分支處理完緊急 Bug 後，再從抽屜拿出來繼續寫。",
      "keyTakeaway": "Stash 適用於寫到一半不適合 Commit 但必須立即切換分支的場景。"
    },
    "definitions": [
      {
        "term": "git stash",
        "definition": "將未提交的工作區與暫存區變更保存至臨時堆疊的命令。",
        "source": "Pro Git 7.3"
      }
    ],
    "evidences": [
      {
        "item": "Git Stashing and Cleaning",
        "sourceName": "Pro Git Book 7.3",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "git stash takes the dirty state of your working directory and saves it on a stack of unfinished changes."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 自動 Stash 提醒",
        "steps": [
          "當工作區有未 commit 修改且嘗試切換分支時。",
          "GitHub Desktop 會跳出 Stash 彈窗問詢。",
          "選擇 Bring my changes (帶過去) 或 Leave my changes (留存在 Stash)。",
          "若留存在 Stash，切回原本分支點擊 Restore Stash 即可取回！"
        ],
        "tip": "GitHub Desktop 會在 Changes 底欄清晰顯示當前的 Stash 狀態。"
      },
      "cli": {
        "title": "Git CLI 暫存堆疊指令",
        "steps": [
          "暫存當前修改：git stash (或 git stash save \"description\")",
          "查看所有暫存清單：git stash list",
          "取回最後一次暫存並移除：git stash pop",
          "取回暫存但保留堆疊紀錄：git stash apply"
        ],
        "tip": "預設 git stash 不包含未追蹤 (Untracked) 的新檔案，需加 -u 參數：git stash -u。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "以為 git stash 之後檔案就永遠消失了",
        "correction": "stash 只是保存在內部堆疊中，隨時可以使用 git stash pop 喚回。"
      }
    ],
    "quiz": {
      "question": "若想將當前寫到一半未 commit 的修改塞入抽屜暫存並回復乾淨工作區，應使用哪個 command？",
      "options": [
        "git stash",
        "git delete",
        "git reset",
        "git clean"
      ],
      "answerIndex": 0,
      "explanation": "git stash 專門用於暫存未完工變更至堆疊。"
    },
    "verification": {
      "title": "Lesson 19 實作驗證任務",
      "description": "請修改檔案後執行 Stash，隨後成功 Pop 取回修改。",
      "checkType": "interactive",
      "checklist": [
        "執行 git stash 後工作區回復 Clean",
        "能在 stash list 看到暫存紀錄",
        "成功執行 Stash Pop 還原變更"
      ],
      "verifyPrompt": "完成 Stash 測試後驗證："
    }
  },
  {
    "id": "lesson-20",
    "number": 20,
    "title": "挑選特定提交 (Git Cherry-pick)",
    "module": "模組四：進階 Git 技巧與排查實務",
    "duration": "20 分鐘",
    "objectives": [
      "掌握 git cherry-pick 的運作原理與應用情境",
      "學會將其他分支中的單一提交複製到當前分支"
    ],
    "prerequisites": [
      "Lesson 04",
      "Lesson 10"
    ],
    "mentalModel": {
      "analogy": "Cherry-pick 就像是在櫻桃蛋糕上『單獨採摘其中一顆最甜的櫻桃』。你不想要另一個分支的所有改動，只想要裡面的某一個特定的 Commit。",
      "keyTakeaway": "Cherry-pick 會在當前分支複製並建立一個內容相同但 SHA 雜湊值不同的新 Commit。"
    },
    "definitions": [
      {
        "term": "Cherry-pick",
        "definition": "挑選特定的 Commit 並將其修改應用於當前分支的命令。",
        "source": "Pro Git 5.3"
      }
    ],
    "evidences": [
      {
        "item": "Rebasing and Cherry-Picking",
        "sourceName": "Pro Git Book 5.3",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "Cherry-picking in Git is like picking a commit from one branch and applying it to another."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 拖曳 Cherry-pick",
        "steps": [
          "在頂部切換到目標接收分支（如 main）。",
          "點擊 Current Branch 下拉清單，切換至 Other Branches 頁籤點選來源分支。",
          "進入 History，右鍵點擊想要的單一 Commit。",
          "選擇 Cherry-pick Commit... 或直接將其拖曳至當前分支！"
        ],
        "tip": "GitHub Desktop 支援流暢的視覺化 Commit 拖曳 Cherry-pick。"
      },
      "cli": {
        "title": "Git CLI 挑選 Commit",
        "steps": [
          "切換到目標分支：git checkout main",
          "查詢想要的 Commit SHA 雜湊碼（例如 e4a1b2c）。",
          "執行挑選：git cherry-pick e4a1b2c",
          "若發生衝突，解決後執行 git cherry-pick --continue"
        ],
        "tip": "亦可一次挑選多個 Commit：git cherry-pick SHA1 SHA2。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "頻繁 Cherry-pick 同一分支的所有 commit 造成合併歷史分叉衝突",
        "correction": "若需要分支上的大部分改動，請優先使用 Merge 或 Rebase。"
      }
    ],
    "quiz": {
      "question": "若你只想複製 feature 分支上的『某一個特定 hotfix Commit』到 main 分支，最適當的工具是？",
      "options": [
        "git merge",
        "git cherry-pick",
        "git clone",
        "git init"
      ],
      "answerIndex": 1,
      "explanation": "git cherry-pick 專門用於精密採摘單一 commit 複製。"
    },
    "verification": {
      "title": "Lesson 20 實作驗證任務",
      "description": "請成功 Cherry-pick 另一個分支上的 Commit 到當前分支。",
      "checkType": "interactive",
      "checklist": [
        "獲取目標 Commit 的 SHA 雜湊碼",
        "成功將其 Cherry-pick 到當前分支",
        "當前分支成功出現內容相同的修訂快照"
      ],
      "verifyPrompt": "完成 Cherry-pick 驗證："
    }
  },
  {
    "id": "lesson-21",
    "number": 21,
    "title": "重寫歷史與 Rebase (Git Rebase)",
    "module": "模組四：進階 Git 技巧與排查實務",
    "duration": "30 分鐘",
    "objectives": [
      "理解 Rebase (變更基底) 與 Merge 的異同",
      "掌握黃金法則：絕對不要在已公開推送到遠端的主分支上 Rebase"
    ],
    "prerequisites": [
      "Lesson 10",
      "Lesson 11"
    ],
    "mentalModel": {
      "analogy": "Rebase 就像是把你的功能分支整根抽出來，把它的起點『剪貼接合』到最新 main 分支的末端，讓歷史發展變成一條完美好看的直線。",
      "keyTakeaway": "Rebase 能創造極致乾淨的線性歷史 (Linear History)，但會重新計算 SHA 雜湊值。"
    },
    "definitions": [
      {
        "term": "Rebase",
        "definition": "重新套用一連串 Commit 快照於新的基底 Commit 之上的操作。",
        "source": "Pro Git 3.6"
      }
    ],
    "evidences": [
      {
        "item": "Git Rebasing Standard",
        "sourceName": "Pro Git Book 3.6",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "With the rebase command, you can take all the changes that were committed on one branch and replay them on another."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 線性 Rebase",
        "steps": [
          "切換至你的 Feature 分支。",
          "點擊頂部功能選單 Branch -> Rebase current branch...",
          "選擇 main 作為基底分支。",
          "點擊 Rebase 執行自動序列套用。"
        ],
        "tip": "GitHub Desktop 會在一旁顯示目前套用到第幾個 Commit。"
      },
      "cli": {
        "title": "Git CLI Rebase 操作",
        "steps": [
          "切換到 feature 分支：git checkout feature",
          "對 main 分支 Rebase：git rebase main",
          "若有衝突，修復後：git add . && git rebase --continue",
          "互動式整頓本地 Commit 歷史：git rebase -i HEAD~3"
        ],
        "tip": "黃金法則：Do not rebase commits that exist outside your repository!"
      }
    },
    "commonMistakes": [
      {
        "mistake": "對已經 Push 上 GitHub 被團隊共用的 main 分支做 Rebase",
        "correction": "這會破壞團隊其他人的修訂基準，引發歷史混亂與強行衝突。"
      }
    ],
    "quiz": {
      "question": "關於 Git Rebase 的『黃金法則 (Golden Rule)』，下列何者正確？",
      "options": [
        "可以在任何分支隨意 Rebase",
        "絕不對已經推送到公開遠端被共用的分支執行 Rebase",
        "Rebase 會刪除所有檔案",
        "Rebase 必須每天執行十次"
      ],
      "answerIndex": 1,
      "explanation": "已共用的公開分支若被 Rebase 會更改歷史 SHA，破壞他人儲存庫。"
    },
    "verification": {
      "title": "Lesson 21 實作驗證任務",
      "description": "請在本地未公開功能分支上成功執行 Rebase 操作。",
      "checkType": "interactive",
      "checklist": [
        "理解 Rebase 與 Merge 的線性差異",
        "成功在 Feature 分支以 main 為基底進行 Rebase",
        "歷史日誌變為漂亮直線"
      ],
      "verifyPrompt": "完成 Rebase 驗證："
    }
  },
  {
    "id": "lesson-22",
    "number": 22,
    "title": "使用 Git Reflog 救援失蹤的 Commit",
    "module": "模組四：進階 Git 技巧與排查實務",
    "duration": "25 分鐘",
    "objectives": [
      "瞭解 Git 終極安全網 git reflog 的運作原理",
      "學會在誤刪分支或不當 reset 後救回失蹤的 Commit"
    ],
    "prerequisites": [
      "Lesson 06",
      "Lesson 21"
    ],
    "mentalModel": {
      "analogy": "Reflog 就像是 Git 系統底層的『黑盒子飛行紀錄器』。不論你如何誤刪分支或執行 reset --hard，只要 Commit 曾經存在過，Reflog 都能找回它的座標。",
      "keyTakeaway": "Git 幾乎不會輕易丟失任何已經 Commit 過的資料！"
    },
    "definitions": [
      {
        "term": "git reflog",
        "definition": "記錄本地 HEAD 指標每一次移動與操作歷史的參考日誌。",
        "source": "Pro Git 7.1"
      }
    ],
    "evidences": [
      {
        "item": "Reflog Revision Selection",
        "sourceName": "Pro Git Book 7.1",
        "sourceUrl": "https://git-scm.com/book/en/v2/Git-Tools-Revision-Selection#_reflog",
        "level": "Level 1 (官方書籍)",
        "verified": true,
        "quote": "Git keeps a log of where your HEAD and branch references have been for the last few months."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 與救回 Undo",
        "steps": [
          "若剛誤操作，立即使用頂部 Edit -> Undo 選項。",
          "若時間已過，可以在 History 面板中找到舊快照。",
          "右鍵點擊舊 Commit，選擇 Create branch from commit 救回當時的完整狀態！"
        ],
        "tip": "從舊 Commit 建分支是尚無損救回失蹤程式碼的最推薦安全作法。"
      },
      "cli": {
        "title": "Git CLI 的 Reflog 救援絕招",
        "steps": [
          "印出 HEAD 操作歷史：git reflog",
          "找到失蹤 Commit 之前的 SHA-1 碼（例如 HEAD@{2} 或 a1b2c3d）。",
          "直接基於該點建立新救援分支：git checkout -b rescue-branch a1b2c3d",
          "或重置當前分支到該點：git reset --hard a1b2c3d"
        ],
        "tip": "Reflog 紀錄預設會在本地保存 90 天。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "以為誤刪本地分支之後程式碼就真的永遠灰飛煙滅了",
        "correction": "立馬開啟 git reflog，就能看到當時的 Commit SHA 並建分支救回。"
      }
    ],
    "quiz": {
      "question": "當你不小心執行了 git reset --hard 導致剛 commit 的程式碼看似消失時，哪一個 command 是拯救資料的黑盒子？",
      "options": [
        "git reflog",
        "git clean",
        "git format",
        "git exit"
      ],
      "answerIndex": 0,
      "explanation": "git reflog 記錄了本地 HEAD 的每一次移動，包含已被刪除分支的 commit 指針。"
    },
    "verification": {
      "title": "Lesson 22 實作驗證任務",
      "description": "請故意刪除一個本地分支，並使用 git reflog 或建立分支將其完美救回！",
      "checkType": "interactive",
      "checklist": [
        "執行 git reflog 能看到過往 HEAD 操作軌跡",
        "找到遭刪除分支的 Commit SHA",
        "成功恢復並救回失蹤的 Commit"
      ],
      "verifyPrompt": "完成 Reflog 救援測試後驗證："
    }
  },
  {
    "id": "lesson-23",
    "number": 23,
    "title": "標籤管理 (Git Tags & Releases)",
    "module": "模組四：進階 Git 技巧與排查實務",
    "duration": "20 分鐘",
    "objectives": [
      "掌握附註標籤 (Annotated Tag) 的建立與語意化版本號 (SemVer)",
      "學會在 GitHub 發布正式的 Release 版本包"
    ],
    "prerequisites": [
      "Lesson 07"
    ],
    "mentalModel": {
      "analogy": "Tag 就像是里程碑里程碑紀念碑。當你的產品達到重要里程碑（如 1.0.0 正式版上線），你在特定的 Commit 貼上一枚永久標籤與紀念封印。",
      "keyTakeaway": "語意化版本號：v主版本.次版本.修訂版本 (例: v1.0.0)。"
    },
    "definitions": [
      {
        "term": "Tag",
        "definition": "指向特定 Commit 的永久性唯讀指標，常用於標記版本發布。",
        "source": "Pro Git 2.6"
      }
    ],
    "evidences": [
      {
        "item": "Managing Releases Standard",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "Releases are deployable software iterations that you can package and provide for your users."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop 打標籤",
        "steps": [
          "在 History 面板找到要標記版本的 Commit。",
          "右鍵點擊選擇 Create Tag...",
          "輸入版本號（如 v1.0.0）並點擊 Create Tag。",
          "點擊 Push origin 時，GitHub Desktop 會自動將 Tag 推送上雲端！"
        ],
        "tip": "可以在 History 清單中看到醒目的小 Tag 圖示。"
      },
      "cli": {
        "title": "Git CLI 標籤與 Release",
        "steps": [
          "建立附註標籤：git tag -a v1.0.0 -m \"Release version 1.0.0\"",
          "列出所有標籤：git tag",
          "將標籤推送到遠端：git push origin v1.0.0 (或推全標籤 git push origin --tags)",
          "在 GitHub 網頁點擊 Create a new release 綁定該 Tag！"
        ],
        "tip": "附註標籤 (Annotated) 含有打標籤者、日期與簽名訊息，推薦於正式發布。"
      }
    },
    "commonMistakes": [
      {
        "mistake": "git push 不會預設自動把本地 tag 送上雲端",
        "correction": "必須使用 git push origin <tagname> 或 --tags 參數顯式推送 Tag。"
      }
    ],
    "quiz": {
      "question": "在語意化版本號 (Semantic Versioning) v2.4.1 中，中間的數字『4』代表什麼意義？",
      "options": [
        "主版本號 (Major)",
        "次版本號 (Minor，代表向下相容的新功能新增)",
        "修訂版本號 (Patch)",
        "build 號"
      ],
      "answerIndex": 1,
      "explanation": "語意化版本為 Major.Minor.Patch，中間是代表相容新功能的 Minor 次版本號。"
    },
    "verification": {
      "title": "Lesson 23 實作驗證任務",
      "description": "請為專案打上 v1.0.0 標籤並成功推送到 GitHub 雲端！",
      "checkType": "interactive",
      "checklist": [
        "已建立附註標籤 v1.0.0",
        "已將 Tag 推送到 GitHub",
        "可以在 GitHub 網頁的 Tags / Releases 看到該版本"
      ],
      "verifyPrompt": "完成 Tag 發布後驗證："
    }
  },
  {
    "id": "lesson-24",
    "number": 24,
    "title": "專案驗證終極實務 (GitHub Pages 免費網站託管)",
    "module": "模組四：進階 Git 技巧與排查實務",
    "duration": "30 分鐘",
    "objectives": [
      "掌握 GitHub Pages 將靜態網站免費部署上線的完整流程",
      "完成整套 Git/GitHub 學習閉環與成果展示"
    ],
    "prerequisites": [
      "Lesson 07",
      "Lesson 17"
    ],
    "mentalModel": {
      "analogy": "GitHub Pages 就像是 GitHub 免費贈送給你的『全天候個人網頁伺服器』。只要你將網頁程式碼 Push 上傳，GitHub 就能自動幫你發布成全網可造訪的真實網站！",
      "keyTakeaway": "這是驗證並展示你 Git / GitHub 學習成果的最精采終點與起點！"
    },
    "definitions": [
      {
        "term": "GitHub Pages",
        "definition": "直接由 GitHub 儲存庫託管與發布的公開網頁託管服務。",
        "source": "GitHub Docs"
      }
    ],
    "evidences": [
      {
        "item": "GitHub Pages Overview",
        "sourceName": "GitHub Docs",
        "sourceUrl": "https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages",
        "level": "Level 1 (官方文件)",
        "verified": true,
        "quote": "GitHub Pages is a public webpage hosting service that takes HTML, CSS, and JavaScript files straight from a repository."
      }
    ],
    "dualGuides": {
      "desktop": {
        "title": "GitHub Desktop Pages 部署流",
        "steps": [
          "確保專案根目錄包含 index.html。",
          "使用 GitHub Desktop 將專案完全 Commit 並 Push 到 GitHub 雲端。",
          "在 GitHub 網頁進入 Repo Settings -> Pages。",
          "在 Source 選擇 Deploy from a branch (Branch: main, /root)。",
          "點擊 Save，約 1 分鐘後即可獲得專屬可造訪網址！"
        ],
        "tip": "網址格式為：https://username.github.io/repo-name/"
      },
      "cli": {
        "title": "Git CLI 部署與 Action 自動自動發布",
        "steps": [
          "確認 index.html 與變更皆已 Push：git push origin main",
          "前往 GitHub 網頁 -> Settings -> Pages",
          "選擇 Source: GitHub Actions 或 Branch (main)",
          "完成設定後返回 Code 頁面，右側邊欄會出現對應的 Pages 部署即時網址鏈結！"
        ],
        "tip": "GitHub Pages 完全免費，並自動提供 HTTPS 安全憑證！"
      }
    },
    "commonMistakes": [
      {
        "mistake": "根目錄忘記命名為 index.html 導致造訪 Pages 時出現 404 錯誤",
        "correction": "伺服器預設尋找 index.html 作為預設首頁，務必確認檔名大小寫。"
      }
    ],
    "quiz": {
      "question": "使用 GitHub Pages 將個人網頁免費託管部署上線時，預設的入口 HTML 檔名應該是？",
      "options": [
        "main.html",
        "home.html",
        "index.html",
        "page.html"
      ],
      "answerIndex": 2,
      "explanation": "index.html 是 Web 伺服器約定俗成的首頁網頁檔名。"
    },
    "verification": {
      "title": "Lesson 24 終極實作驗證任務 (Verify Mode)",
      "description": "恭喜達到最後一課！請啟用 GitHub Pages 並填入發布的線上網址驗證！",
      "checkType": "hybrid",
      "checklist": [
        "已啟用 GitHub Pages",
        "獲得格式為 https://username.github.io/repo-name/ 的網站",
        "能在全網公開造訪你親自建立的網頁！"
      ],
      "verifyPrompt": "請在上方輸入您發布的 GitHub Pages / Repo 網址完成終極大滿貫驗證："
    }
  }
];
