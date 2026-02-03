// NYC Public Notary Trivia App - Main Logic

const CANDIDATE_NAME = 'Yuliya';

const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsScreen = document.getElementById('results-screen');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');
const currentQEl = document.getElementById('current-q');
const progressBar = document.getElementById('progress-bar');
const scoreDisplay = document.getElementById('score-display');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const examYearBadge = document.getElementById('exam-year-badge');
const timerValueEl = document.getElementById('timer-value');
const exitExamBtn = document.getElementById('exit-exam-btn');

let currentIndex = 0;
let userAnswers = [];
let answered = new Set();
let selectedYear = '2025';
let timerInterval = null;
let elapsedSeconds = 0;

// Seeded shuffle - same year = same order for consistency
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function shuffleArray(arr, seed) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let questions = [];

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
  elapsedSeconds = 0;
  timerValueEl.textContent = formatTime(0);
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    elapsedSeconds++;
    timerValueEl.textContent = formatTime(elapsedSeconds);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function init(year) {
  selectedYear = year || '2025';
  const seed = parseInt(selectedYear, 10);
  questions = shuffleArray(QUESTIONS, seed);
  userAnswers = [];
  answered = new Set();
  currentIndex = 0;
  examYearBadge.textContent = `${selectedYear} Practice Exam`;
}

function showScreen(screen) {
  startScreen.classList.add('hidden');
  quizContainer.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  screen.classList.remove('hidden');
}

function renderQuestion() {
  const q = questions[currentIndex];
  questionText.textContent = q.question;

  optionsContainer.innerHTML = '';
  const userAnswer = userAnswers.find(a => a.questionId === q.id);

  q.options.forEach((opt, i) => {
    const div = document.createElement('button');
    div.type = 'button';
    div.className = 'option-card w-full text-left p-3 sm:p-4 rounded-xl border-2 border-notary-200 transition-all duration-200 flex items-start gap-2 sm:gap-3';
    div.dataset.index = i;

    const letter = String.fromCharCode(65 + i);
    div.innerHTML = `
      <span class="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-notary-100 text-notary-700 font-bold flex items-center justify-center text-xs sm:text-sm">${letter}</span>
      <span class="text-notary-800 text-sm sm:text-base">${opt}</span>
    `;

    if (userAnswer !== undefined) {
      div.disabled = true;
      if (i === userAnswer.selectedIndex) {
        div.classList.add(userAnswer.isCorrect ? 'correct' : 'incorrect');
      }
      if (i === q.correct && !userAnswer.isCorrect) {
        div.classList.add('correct');
      }
    } else {
      div.addEventListener('click', () => selectOption(q, i));
    }

    optionsContainer.appendChild(div);
  });

  // Feedback
  feedbackEl.classList.add('hidden');
  if (userAnswer !== undefined) {
    feedbackEl.classList.remove('hidden');
    feedbackEl.className = 'mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl text-sm sm:text-base ' + (userAnswer.isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200');
    feedbackEl.innerHTML = `
      <p class="font-semibold mb-1">${userAnswer.isCorrect ? `✓ Correct, ${CANDIDATE_NAME}!` : `✗ Incorrect, ${CANDIDATE_NAME}`}</p>
      <p class="text-sm opacity-90">${q.explanation}</p>
    `;
  }

  // Progress
  currentQEl.textContent = currentIndex + 1;
  progressBar.style.width = `${((currentIndex + 1) / 40) * 100}%`;

  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  scoreDisplay.textContent = userAnswers.length > 0 ? `${correctCount} / ${userAnswers.length} correct` : '—';

  // Buttons
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = !answered.has(q.id);
  nextBtn.textContent = currentIndex === 39 ? 'See Results' : 'Next →';
}

function selectOption(q, index) {
  if (answered.has(q.id)) return;

  const isCorrect = index === q.correct;
  userAnswers.push({ questionId: q.id, selectedIndex: index, isCorrect });
  answered.add(q.id);

  renderQuestion();
}

function goNext() {
  const q = questions[currentIndex];
  if (!answered.has(q.id)) return;

  if (currentIndex < 39) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function showResults(isEarlyExit = false) {
  stopTimer();
  const correct = userAnswers.filter(a => a.isCorrect).length;
  const total = isEarlyExit ? userAnswers.length : 40;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  const iconEl = document.getElementById('results-icon');
  const scoreEl = document.getElementById('results-score');
  const msgEl = document.getElementById('results-message');
  const examYearEl = document.getElementById('results-exam-year');
  examYearEl.textContent = `${CANDIDATE_NAME} — ${selectedYear} Practice Exam${isEarlyExit ? ' (Exited early)' : ''}`;

  if (total === 0) {
    iconEl.className = 'w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-notary-100 text-notary-600';
    iconEl.innerHTML = '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
    msgEl.textContent = `${CANDIDATE_NAME}, you exited without answering any questions.`;
  } else if (pct >= 80) {
    iconEl.className = 'w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-600';
    iconEl.innerHTML = '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
    msgEl.textContent = `Excellent work, ${CANDIDATE_NAME}! You demonstrate strong knowledge of NYS notary requirements.`;
  } else if (pct >= 70) {
    iconEl.className = 'w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-amber-100 text-amber-600';
    iconEl.innerHTML = '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
    msgEl.textContent = `Good effort, ${CANDIDATE_NAME}! Review the explanations and try again to strengthen your knowledge.`;
  } else {
    iconEl.className = 'w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-red-100 text-red-600';
    iconEl.innerHTML = '<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';
    msgEl.textContent = `Keep studying, ${CANDIDATE_NAME}! Review the NYS Department of State notary materials and try again.`;
  }

  let scoreText = `${correct} / ${total} (${pct}%)`;
  if (total > 0) scoreText += ` • Time: ${formatTime(elapsedSeconds)}`;
  scoreEl.textContent = scoreText;
  showScreen(resultsScreen);
}

// Event listeners - exam year buttons
document.querySelectorAll('.exam-year-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const year = btn.dataset.year;
    init(year);
    startTimer();
    showScreen(quizContainer);
    renderQuestion();
  });
});

exitExamBtn.addEventListener('click', () => {
  if (userAnswers.length === 0) {
    if (confirm(`${CANDIDATE_NAME}, exit without answering any questions? You will see no results.`)) {
      showResults(true);
    }
  } else {
    if (confirm(`${CANDIDATE_NAME}, exit now? You've answered ${userAnswers.length} questions. Your results will be shown.`)) {
      showResults(true);
    }
  }
});

prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);

document.getElementById('retry-btn').addEventListener('click', () => {
  init(selectedYear);
  startTimer();
  showScreen(quizContainer);
  renderQuestion();
});

document.getElementById('back-to-exams-btn').addEventListener('click', () => {
  showScreen(startScreen);
});
