// Game logic for MO Permit Prep Game
// Assumes allQuestions is loaded from questions.js

const QUESTIONS_PER_ROUND = 25;
const TOTAL_ROUNDS = 4;
let shuffledQuestions = [];
let currentRound = 1;
let currentQuestionIndex = 0;
let score = 0;
let roundScore = 0;
let usedQuestions = [];
let correctlyAnsweredSet = new Set();

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const nextRoundBtn = document.getElementById('next-round-btn');
const restartBtn = document.getElementById('restart-btn');
const questionSection = document.getElementById('question-section');
const startSection = document.getElementById('start-section');
const roundSection = document.getElementById('round-section');
const endSection = document.getElementById('end-section');
const questionText = document.getElementById('question-text');
const choicesDiv = document.getElementById('choices');
const feedbackDiv = document.getElementById('feedback');
const scoreRoundDiv = document.getElementById('score-round');
const finalScoreDiv = document.getElementById('final-score');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
  shuffledQuestions = shuffle([...allQuestions]);
  currentRound = 1;
  score = 0;
  usedQuestions = [];
  correctlyAnsweredSet = new Set();
  startSection.classList.add('hidden');
  endSection.classList.add('hidden');
  roundSection.classList.add('hidden');
  showRound();
}

function getNextQuestion() {
  // Only return questions not already answered correctly
  let startIdx = (currentRound - 1) * QUESTIONS_PER_ROUND;
  let endIdx = startIdx + QUESTIONS_PER_ROUND;
  let roundQuestions = shuffledQuestions.slice(startIdx, endIdx).filter(q => !correctlyAnsweredSet.has(q.question));
  return roundQuestions[currentQuestionIndex] || null;
}

function showRound() {
  roundScore = 0;
  currentQuestionIndex = 0;
  scoreRoundDiv.textContent = `Round ${currentRound} of ${TOTAL_ROUNDS} | Score: ${score}`;
  questionSection.classList.remove('hidden');
  feedbackDiv.classList.add('hidden');
  nextBtn.classList.add('hidden');
  roundSection.classList.add('hidden');
  endSection.classList.add('hidden');
  showQuestion();
}

function showQuestion() {
  feedbackDiv.classList.add('hidden');
  nextBtn.classList.add('hidden');
  choicesDiv.innerHTML = '';
  const question = getNextQuestion();
  if (!question) {
    // All questions for this round have been answered correctly
    nextQuestion();
    return;
  }
  questionText.innerHTML = `<span class="tiktok-q">Q:</span> ${question.question}`;
  question.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, question, choice);
    choicesDiv.appendChild(btn);
  });
  // Add swipe gesture for next
  addSwipeListener();
}

function selectAnswer(btn, question, choice) {
  Array.from(choicesDiv.children).forEach(b => b.disabled = true);
  if (choice === question.answer) {
    btn.classList.add('correct');
    score++;
    roundScore++;
    correctlyAnsweredSet.add(question.question);
    feedbackDiv.innerHTML = '<span class="tiktok-correct">✨ Yasss! Correct! ✨</span>';
    feedbackDiv.style.color = '#ff69b4';
    feedbackDiv.classList.remove('hidden');
    vibrate([60]);
    // Add a little confetti effect
    showConfetti();
  } else {
    btn.classList.add('wrong');
    feedbackDiv.innerHTML = `<span class="tiktok-wrong">Nope! 💅</span><br>See: <a href="${question.reference}" target="_blank">Driver Guide</a>`;
    feedbackDiv.style.color = '#e74c3c';
    feedbackDiv.classList.remove('hidden');
    vibrate([100, 60, 100]);
    // Highlight correct answer
    Array.from(choicesDiv.children).forEach(b => {
      if (b.textContent === question.answer) b.classList.add('correct');
    });
  }
  nextBtn.classList.remove('hidden');
}

function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  // If all questions for this round have been answered correctly, or we've shown all, move on
  let startIdx = (currentRound - 1) * QUESTIONS_PER_ROUND;
  let endIdx = startIdx + QUESTIONS_PER_ROUND;
  let roundQuestions = shuffledQuestions.slice(startIdx, endIdx).filter(q => !correctlyAnsweredSet.has(q.question));
  if (currentQuestionIndex < QUESTIONS_PER_ROUND && roundQuestions.length > 0) {
    showQuestion();
  } else {
    // End of round
    questionSection.classList.add('hidden');
    if (currentRound < TOTAL_ROUNDS) {
      roundSection.classList.remove('hidden');
    } else {
      showEnd();
    }
  }
}

function nextRound() {
  currentRound++;
  showRound();
}

function showEnd() {
  endSection.classList.remove('hidden');
  finalScoreDiv.textContent = `Final Score: ${score} / ${QUESTIONS_PER_ROUND * TOTAL_ROUNDS}`;
  scoreRoundDiv.textContent = '';
  questionSection.classList.add('hidden');
  roundSection.classList.add('hidden');
}

function restartGame() {
  startGame();
}

function addSwipeListener() {
  // Simple left/right swipe for next (mobile)
  let startX = null;
  questionSection.ontouchstart = e => {
    if (e.touches.length === 1) startX = e.touches[0].clientX;
  };
  questionSection.ontouchend = e => {
    if (startX !== null && e.changedTouches.length === 1) {
      let dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 60) {
        nextBtn.click();
      }
    }
    startX = null;
  };
}

function showConfetti() {
  // Simple emoji confetti burst
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.innerText = '💖✨🎉';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 1200);
}

startBtn.onclick = startGame;
nextBtn.onclick = nextQuestion;
nextRoundBtn.onclick = nextRound;
restartBtn.onclick = restartGame;

// On load, show start section only
startSection.classList.remove('hidden');
questionSection.classList.add('hidden');
roundSection.classList.add('hidden');
endSection.classList.add('hidden');
