---
name: belong-event-manager
description: Taipei Campus BELONG 活動營運管理與 Salesforce CRM 自動化 SOP 技能。提供 BELONG 活動雙階段通知流程、一鍵 RSVP 出席確認、Salesforce 小組自動媒合架構、電話追蹤流程與活動後留存率統計。當使用者詢問 BELONG 活動、新朋友小組媒合、報名流程優化、Salesforce CRM 整合或活動留存追蹤時使用。
---

# BELONG 活動營運與 Salesforce CRM 自動化管理技能

本技能提供 **Taipei Campus BELONG 活動** 的完整營運 SOP、自動化信件/簡訊範本，以及 Salesforce CRM 自動比對與留存追蹤規範。

## 📌 活動基本資訊
- **活動名稱**：Taipei Campus BELONG 活動
- **活動上限**：48 人
- **主辦單位**：The Hope Church Life & Operation 團隊
- **主要系統**：Salesforce CRM、Email Server (`Belong.tpe@thehope.co`)、SMS 簡訊系統

---

## 🚀 核心工作流程 (Automated Timeline)

1. **D-14 (8/30)**: 系統發送第一階段錄取 Email（內含動態 RSVP `[確認出席]` / `[無法出席]` 按鈕）。
2. **D-12 (9/1)**: 48 小時內未開信/未確認者，Salesforce 自動觸發 **SMS 簡訊提醒**。
3. **D-11 (9/2 早上)**: 下一步團隊（Next Steps Team）進行人工電話確認；下午 2:00 PM 發送第二階段遞補信件。
4. **D-7 (9/6 中午)**: 下一步團隊進行第二階段電話追蹤。
5. **D-5 (9/8)**: 未確認者發送釋出名額與下次預約通知。
6. **D-3 (9/10)**: **Salesforce Flow 自動進行「可聚會時間」小組比對**，自動分配區長與臨時小組，並生成區長專屬報告。
7. **D-2 (9/11)**: 自動發送 D-2 行前通知 Email & 簡訊（提醒 3:45 PM - 4:00 PM 報到，地點副堂）。
8. **D-0 (9/13)**: 活動當天報到與區長對接。
9. **D+7 & D+14**: 區長於 Salesforce 進行點名打卡，系統即時更新 Retention Dashboard 留存率。

---

## 📂 參考文件
- 詳細 SOP 文件與 IT 規格請參閱：[references/SOP.md](file:///c:/Users/USER/Desktop/%E5%85%AC%E5%91%8A%E6%AC%84%E7%85%A7%E7%89%87/.agents/skills/BELONG%E6%B4%BB%E5%8B%95/references/SOP.md)
