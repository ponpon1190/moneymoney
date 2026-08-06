/**
 * Quiz Engine
 * Renders multiple choice quizzes, evaluates answers, and displays explanation feedback.
 */
class QuizEngine {
  constructor() {}

  renderQuiz(quizData, containerId) {
    const container = document.getElementById(containerId);
    if (!container || !quizData) return;

    let optionsHtml = quizData.options.map((opt, idx) => `
      <button class="quiz-option-btn" data-index="${idx}">
        ${String.fromCharCode(65 + idx)}. ${opt}
      </button>
    `).join('');

    container.innerHTML = `
      <div class="quiz-card">
        <div class="quiz-question">💡 小測驗：${quizData.question}</div>
        <div class="quiz-options">${optionsHtml}</div>
        <div class="quiz-explanation" id="quiz-explanation-${containerId}">
          <strong>答案解析：</strong> ${quizData.explanation}
        </div>
      </div>
    `;

    // Add event listeners
    const optionBtns = container.querySelectorAll('.quiz-option-btn');
    const explanationEl = document.getElementById(`quiz-explanation-${containerId}`);

    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
        
        // Reset styles
        optionBtns.forEach(b => {
          b.disabled = true;
          b.classList.remove('correct', 'wrong');
        });

        if (selectedIdx === quizData.answerIndex) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
          optionBtns[quizData.answerIndex].classList.add('correct');
        }

        explanationEl.style.display = 'block';
      });
    });
  }
}

window.quizEngine = new QuizEngine();
