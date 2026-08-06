/**
 * Verify Mode Engine
 * Handles hybrid verification (GitHub REST API checking + Step-by-step Checklist).
 */
class VerifyEngine {
  constructor() {
    this.apiBase = 'https://api.github.com/repos';
  }

  async verifyGitHubRepo(repoUrl) {
    if (!repoUrl) {
      return { success: false, message: '請輸入有效的 GitHub 儲存庫網址！' };
    }

    try {
      // Parse URL format: https://github.com/owner/repo
      const cleanUrl = repoUrl.trim().replace(/\/$/, '');
      const parts = cleanUrl.split('github.com/');
      if (parts.length < 2) {
        return { success: false, message: '網址格式不正確，例：https://github.com/username/my-first-repo' };
      }

      const repoPath = parts[1];
      const apiResponse = await fetch(`${this.apiBase}/${repoPath}`);
      
      if (apiResponse.status === 200) {
        const repoData = await apiResponse.json();
        return {
          success: true,
          message: `✅ 驗證成功！已找到線上儲存庫『${repoData.full_name}』(預設分支: ${repoData.default_branch})`,
          data: repoData
        };
      } else if (apiResponse.status === 404) {
        return {
          success: false,
          message: '❌ 找不到該 GitHub 儲存庫，請確認專案是否已發布為 Public (公開)！'
        };
      } else {
        return {
          success: false,
          message: `GitHub API 限制或傳回狀態碼: ${apiResponse.status}`
        };
      }
    } catch (error) {
      console.error('Verify error:', error);
      return { success: false, message: '網路連線錯誤，無法完成線上 API 驗證。' };
    }
  }

  validateChecklist(lessonId, totalItemsCount) {
    const checklistState = window.progressManager.getChecklistState(lessonId);
    const checkedCount = Object.values(checklistState).filter(Boolean).length;
    return checkedCount >= totalItemsCount;
  }
}

window.verifyEngine = new VerifyEngine();
