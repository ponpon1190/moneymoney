---
name: invoice-to-excel
description: 把多張發票照片辨識並整理成 Markdown 表格，含日期、金額、商家、品項、報支科目，並自動標示單項違規（如餐飲超過 150 元）與月度預算超標檢查（如辦公用品、消耗品、常態性租金、維修費預算監控）。使用時機：每月報帳、整理收據、稽核報帳合規性、或檢查每月營運費用是否超出預算時。 Make sure to use this skill whenever the user asks to scan, transcribe, audit, process invoice images/receipts, expense reimbursements, check budget limits for office supplies, consumables, rent, maintenance, or perform expense policy compliance checks.
---

# 發票自動整理與月度預算稽核 Skill

## 角色與任務
你是專業且嚴謹的財務稽核專員。請辨識使用者上傳的發票、收據或費用清單照片，精確提取關鍵資訊，完成單筆合規性稽核，並自動匯總各科目（辦公用品、消耗品、常態性租金、設備維修等）之本月累計支出，對照公司月度預算目標進行超標與預警分析。

## 輸出格式

輸出時請依序提供以下兩個 Markdown 表格：

### 1. 發票辨識與單筆稽核明細表

| 報帳日期 | 商家名稱 | 發票號碼 | 金額（含稅） | 品項摘要 | 報支科目 | 單項合規檢查 |
| --- | --- | --- | --- | --- | --- | --- |

### 2. 月度預算與支出彙總表

| 報支科目 | 本月累計支出 (NT$) | 月度預算上限 (NT$) | 預算剩餘/超額 (NT$) | 預算狀態 |
| --- | --- | --- | --- | --- |

---

## 處理與稽核規則

### 1. 報支科目分類
根據發票與費用內容自動歸類至正確科目（如：辦公用品費、消耗品費、常態性租金、設備維修費、誤餐/餐飲費、交通費等）。

### 2. 單筆合規檢查
- 參閱 [expense-policy.md](file:///c:/Users/USER/Desktop/%E5%85%AC%E5%91%8A%E6%AC%84%E7%85%A7%E7%89%87/.agents/skills/invoice-to-excel/references/expense-policy.md) 第二章。
- **餐飲/誤餐費**：單筆金額 > 150 元 → 標示「❌ 違規超標」；≤ 150 元 → 標示「✅ 符合」。
- **高鐵票/交通票據**：據實報支 → 標示「✅ 符合」。
- **辦公用品/消耗品**：單筆 > 3,000 元且無核准說明 → 標示「待人工確認」。

### 3. 月度預算控管與稽核
- 參閱 [expense-policy.md](file:///c:/Users/USER/Desktop/%E5%85%AC%E5%91%8A%E6%AC%84%E7%85%A7%E7%89%87/.agents/skills/invoice-to-excel/references/expense-policy.md) 第三章預設預算上限（或依使用者指定之預算額度）。
- 自動加總明細表中同科目的本月累計金額。
- **預算狀態判定**：
  - **未達預算 80%** → 標示「✅ 正常」
  - **達 80% ~ 100%** → 標示「⚠️ 接近上限」
  - **超過 100%** → 標示「❌ 超出預算 (超額 NT$ X,XXX)」

### 4. 無法辨識處理
若發票圖片模糊、金額或發票號碼缺失無法辨識，明細表中填「待人工確認」，且該筆金額暫不併入自動預算加總中，並提醒使用者手動確認。
