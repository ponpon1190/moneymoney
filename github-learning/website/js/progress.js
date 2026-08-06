/**
 * Progress & LocalStorage State Manager
 * Tracks completed lessons, verification status, and theme preferences.
 */
class ProgressManager {
  constructor() {
    this.STORAGE_KEY = 'github_learning_progress_v1';
    this.THEME_KEY = 'github_learning_theme';
    this.state = this.loadState();
  }

  loadState() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : {
        completedLessons: [],
        verifiedLessons: [],
        lessonChecklists: {},
        quizScores: {},
        preferredGuideTab: 'desktop' // 'desktop' or 'cli'
      };
    } catch (e) {
      console.error('Failed to load progress state:', e);
      return {
        completedLessons: [],
        verifiedLessons: [],
        lessonChecklists: {},
        quizScores: {},
        preferredGuideTab: 'desktop'
      };
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error('Failed to save progress state:', e);
    }
  }

  isLessonCompleted(lessonId) {
    return this.state.completedLessons.includes(lessonId);
  }

  isLessonVerified(lessonId) {
    return this.state.verifiedLessons.includes(lessonId);
  }

  markLessonVerified(lessonId) {
    if (!this.state.verifiedLessons.includes(lessonId)) {
      this.state.verifiedLessons.push(lessonId);
    }
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
    }
    this.saveState();
  }

  toggleChecklistItem(lessonId, index, isChecked) {
    if (!this.state.lessonChecklists[lessonId]) {
      this.state.lessonChecklists[lessonId] = {};
    }
    this.state.lessonChecklists[lessonId][index] = isChecked;
    this.saveState();
  }

  getChecklistState(lessonId) {
    return this.state.lessonChecklists[lessonId] || {};
  }

  setPreferredTab(tab) {
    this.state.preferredGuideTab = tab;
    this.saveState();
  }

  getPreferredTab() {
    return this.state.preferredGuideTab || 'desktop';
  }

  calculateProgress(totalLessonsCount) {
    if (!totalLessonsCount || totalLessonsCount === 0) return 0;
    const completedCount = this.state.completedLessons.length;
    return Math.round((completedCount / totalLessonsCount) * 100);
  }

  getTheme() {
    return localStorage.getItem(this.THEME_KEY) || 'light';
  }

  setTheme(theme) {
    localStorage.setItem(this.THEME_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }
}

window.progressManager = new ProgressManager();
