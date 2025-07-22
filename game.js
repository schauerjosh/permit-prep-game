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
  startSection.classList.add('hidden');
  endSection.classList.add('hidden');
  roundSection.classList.add('hidden');
  showRound();
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
  const qIdx = (currentRound - 1) * QUESTIONS_PER_ROUND + currentQuestionIndex;
  const question = shuffledQuestions[qIdx];
  if (!question) return;
  questionText.textContent = question.question;
  question.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(btn, question, choice);
    choicesDiv.appendChild(btn);
  });
}

function selectAnswer(btn, question, choice) {
  Array.from(choicesDiv.children).forEach(b => b.disabled = true);
  if (choice === question.answer) {
    btn.classList.add('correct');
    score++;
    roundScore++;
    feedbackDiv.textContent = 'Correct!';
    feedbackDiv.style.color = '#1db954';
    feedbackDiv.classList.remove('hidden');
    vibrate([60]);
  } else {
    btn.classList.add('wrong');
    feedbackDiv.innerHTML = `Wrong!<br>See: <a href="${question.reference}" target="_blank">Driver Guide</a>`;
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
  if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
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

startBtn.onclick = startGame;
nextBtn.onclick = nextQuestion;
nextRoundBtn.onclick = nextRound;
restartBtn.onclick = restartGame;

// On load, show start section only
startSection.classList.remove('hidden');
questionSection.classList.add('hidden');
roundSection.classList.add('hidden');
endSection.classList.add('hidden');
