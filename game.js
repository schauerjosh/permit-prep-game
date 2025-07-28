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
let rounds = [];
let roundAnswered = [];
let roundCorrect = [];

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

const congratsMessages = [
  'Nice! You got it!',
  'Correct! Keep going!',
  'Awesome job!',
  'You nailed it!',
  'Great work!',
  'That’s right!',
  'Solid answer!',
  'You’re on a roll!',
  'Smart move!',
  'You’re crushing it!',
  'Well done!',
  'You’re learning fast!',
  'Impressive!',
  'You’re unstoppable!',
  'You’re leveling up!',
  'That’s how it’s done!',
  'You’re making progress!',
  'You’re a star!',
  'You’re in the zone!',
  'Keep up the good work!'
];

const wrongMessages = [
  'Not quite, but keep trying!',
  'Almost! Review and try again.',
  'Missed it, but you’re learning!',
  'No worries, you’ll get it next time!',
  'Keep going, you’ve got this!',
  'Review the guide and try again!',
  'Mistakes help you grow!',
  'Don’t give up!',
  'You’re getting closer!',
  'Try again, you’re improving!',
  'Keep practicing!',
  'Learning takes time!',
  'You’re making progress!',
  'Review and keep moving forward!',
  'Stay positive and try again!'
];


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// function to start the game
function startGame() {
  // shuffle the questions and divide them into rounds
  shuffledQuestions = shuffle([...allQuestions]);
  rounds = [];
  for (let i = 0; i < TOTAL_ROUNDS; i++) {
    rounds.push(shuffledQuestions.slice(i * QUESTIONS_PER_ROUND, (i + 1) * QUESTIONS_PER_ROUND));
  }
  currentRound = 0;
  score = 0;
  roundAnswered = [];
  roundCorrect = [];
  startSection.classList.add('hidden');
  endSection.classList.add('hidden');
  roundSection.classList.add('hidden');
  showRound();
}

// function to show the current round
function showRound() {
  currentRound++;
  currentQuestionIndex = 0;
  roundAnswered[currentRound - 1] = Array(QUESTIONS_PER_ROUND).fill(false);
  roundCorrect[currentRound - 1] = 0;
  scoreRoundDiv.textContent = `Round ${currentRound} of ${TOTAL_ROUNDS} | Score: ${score}`;
  questionSection.classList.remove('hidden');
  feedbackDiv.classList.add('hidden');
  nextBtn.classList.add('hidden');
  roundSection.classList.add('hidden');
  endSection.classList.add('hidden');
  showQuestion();
}

// function to get the indexes of unanswered questions
function getUnansweredIndexes() {
  return roundAnswered[currentRound - 1].map((answered, idx) => !answered ? idx : null).filter(idx => idx !== null);
}

// function to show a question
let swipeHandlerSet = false;

function showQuestion() {
  feedbackDiv.classList.add('hidden');
  nextBtn.classList.add('hidden');
  choicesDiv.innerHTML = '';
  let unanswered = getUnansweredIndexes();
  if (unanswered.length === 0) {
    // All questions answered, check if user can advance
    questionSection.classList.add('hidden');
    if (roundCorrect[currentRound - 1] >= 21) {
      if (currentRound < TOTAL_ROUNDS) {
        roundSection.classList.remove('hidden');
      } else {
        showEnd();
      }
    } else {
      showRetryRound();
    }
    return;
  }
  // Cycle through unanswered questions
  if (!unanswered.includes(currentQuestionIndex)) {
    currentQuestionIndex = unanswered[0];
  }
  const question = rounds[currentRound - 1][currentQuestionIndex];
  questionText.innerHTML = `<span class="tiktok-q">Q:</span> ${question.question}`;
  question.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;
    btn.disabled = false;
    btn.onclick = () => selectAnswer(btn, question, choice);
    choicesDiv.appendChild(btn);
  });
  // Only add swipe handler once
  if (!swipeHandlerSet) {
    addSwipeListener();
    swipeHandlerSet = true;
  }
}

function getRandomCongrats() {
  return congratsMessages[Math.floor(Math.random() * congratsMessages.length)];
}
function getRandomWrong() {
  return wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
}

function updateScoreDisplay() {
  scoreRoundDiv.textContent = `Round ${currentRound} of ${TOTAL_ROUNDS} | Score: ${score}`;
}

// function to select an answer
function selectAnswer(btn, question, choice) {
  Array.from(choicesDiv.children).forEach(b => b.disabled = true);
  if (choice === question.answer) {
    btn.classList.add('correct');
    score++;
    roundAnswered[currentRound - 1][currentQuestionIndex] = true;
    roundCorrect[currentRound - 1]++;
    updateScoreDisplay();
    feedbackDiv.innerHTML = `<span class=\"tiktok-correct\">${getRandomCongrats()}</span>`;
    feedbackDiv.style.color = '#ff69b4';
    feedbackDiv.classList.remove('hidden');
    vibrate([60]);
    showExplodingHearts();
  } else {
    btn.classList.add('wrong');
    feedbackDiv.innerHTML = `<span class=\"tiktok-wrong\">${getRandomWrong()}</span><br><a class=\"study-link\" href=\"${question.reference}\" target=\"_blank\">📖 Tap here to study the answer</a>`;
    feedbackDiv.style.color = '#e74c3c';
    feedbackDiv.classList.remove('hidden');
    vibrate([100, 60, 100]);
    Array.from(choicesDiv.children).forEach(b => {
      if (b.textContent === question.answer) b.classList.add('correct');
    });
  }
  nextBtn.classList.remove('hidden');
}

function nextQuestion() {
  let unanswered = getUnansweredIndexes();
  if (unanswered.length === 0) {
    // All questions answered, check if user can advance
    questionSection.classList.add('hidden');
    if (roundCorrect[currentRound - 1] >= 21) {
      if (currentRound < TOTAL_ROUNDS) {
        roundSection.classList.remove('hidden');
      } else {
        showEnd();
      }
    } else {
      showRetryRound();
    }
    return;
  }
  // Move to next unanswered question
  let idx = unanswered.indexOf(currentQuestionIndex);
  currentQuestionIndex = unanswered[(idx + 1) % unanswered.length];
  showQuestion();
}

function showRetryRound() {
  // Find missed questions
  const missedIndexes = roundAnswered[currentRound - 1].map((answered, idx) => !answered ? idx : null).filter(idx => idx !== null);
  roundSection.classList.remove('hidden');
  let reviewBtn = '';
  if (missedIndexes.length > 0) {
    reviewBtn = `<button id='review-missed-btn' style='margin-top:1em;background:#5bc0eb;color:#fff;border:none;border-radius:1em;padding:0.7em 1.5em;font-size:1em;'>Review Missed Questions</button>`;
  }
  roundSection.innerHTML = `<div style='text-align:center;color:#e74c3c;font-size:1.2em;margin-bottom:1em;'>You need at least 21 correct to advance.<br>You got ${roundCorrect[currentRound - 1]} correct.<br><button id='retry-round-btn' style='margin-top:1em;background:#f76e5c;color:#fff;border:none;border-radius:1em;padding:0.7em 1.5em;font-size:1em;'>Retake Round</button>${reviewBtn}</div>`;
  document.getElementById('retry-round-btn').onclick = retryRound;
  if (missedIndexes.length > 0) {
    document.getElementById('review-missed-btn').onclick = () => reviewMissedQuestions(missedIndexes);
  }
}

function reviewMissedQuestions(missedIndexes) {
  // Show only missed questions, do not update score or roundAnswered
  let reviewIndex = 0;
  function showReviewQuestion() {
    feedbackDiv.classList.add('hidden');
    nextBtn.classList.add('hidden');
    choicesDiv.innerHTML = '';
    const idx = missedIndexes[reviewIndex];
    const question = rounds[currentRound - 1][idx];
    questionText.innerHTML = `<span class="tiktok-q">Review:</span> ${question.question}`;
    question.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice;
      btn.disabled = false;
      btn.onclick = () => {
        Array.from(choicesDiv.children).forEach(b => b.disabled = true);
        if (choice === question.answer) {
          btn.classList.add('correct');
          feedbackDiv.innerHTML = `<span class=\"tiktok-correct\">Nice! But you must retake the round to count it.</span>`;
          feedbackDiv.style.color = '#5bc0eb';
        } else {
          btn.classList.add('wrong');
          feedbackDiv.innerHTML = `<span class=\"tiktok-wrong\">Still missed! Review the guide.</span><br><a class=\"study-link\" href=\"${question.reference}\" target=\"_blank\">📖 Study</a>`;
          feedbackDiv.style.color = '#e74c3c';
        }
        feedbackDiv.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
      };
      choicesDiv.appendChild(btn);
    });
    nextBtn.onclick = () => {
      reviewIndex++;
      if (reviewIndex < missedIndexes.length) {
        showReviewQuestion();
      } else {
        // End review, show retry option again
        showRetryRound();
      }
    };
  }
  showReviewQuestion();
}

// function to show the end screen
function showEnd() {
  endSection.classList.remove('hidden');
  finalScoreDiv.textContent = `Final Score: ${score} / ${QUESTIONS_PER_ROUND * TOTAL_ROUNDS}`;
  scoreRoundDiv.textContent = '';
  questionSection.classList.add('hidden');
  roundSection.classList.add('hidden');
}

// function to restart the game
function restartGame() {
  startGame();
}

// function to add swipe listener for mobile
function addSwipeListener() {
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

// function to vibrate the device
function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// function to show exploding hearts animation
function showExplodingHearts() {
  // Gender-neutral confetti animation
  for (let i = 0; i < 18; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'exploding-heart';
    confetti.innerText = ['🎉','⭐','✨','🎈','🎊','🟢','🔵','🟣','🟠','🟡'][i%10];
    const angle = (i / 18) * 2 * Math.PI;
    const distance = 80 + Math.random() * 30;
    confetti.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`;
    confetti.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`;
    confetti.style.transform = `translate(-50%, -50%) scale(${0.8 + Math.random() * 0.7})`;
    confetti.style.opacity = '1';
    confetti.style.position = 'fixed';
    confetti.style.zIndex = 9999;
    confetti.style.pointerEvents = 'none';
    confetti.style.fontSize = '2.2rem';
    confetti.style.transition = 'opacity 0.8s, transform 0.8s';
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.style.opacity = '0';
      confetti.style.transform += ' scale(1.7)';
    }, 10);
    setTimeout(() => confetti.remove(), 900);
  }
}

startBtn.onclick = startGame;
nextBtn.onclick = nextQuestion;
nextRoundBtn.onclick = function() {
  if (roundCorrect[currentRound - 1] >= 21) {
    showRound();
  } else {
    roundSection.innerHTML = `<div style='text-align:center;color:#e74c3c;font-size:1.2em;margin-bottom:1em;'>You need at least 21 correct to advance.<br>You got ${roundCorrect[currentRound - 1]} correct.<br><button id='retry-round-btn' style='margin-top:1em;background:#ff69b4;color:#fff;border:none;border-radius:1em;padding:0.7em 1.5em;font-size:1em;'>Retry Round</button></div>`;
    document.getElementById('retry-round-btn').onclick = retryRound;
  }
};
restartBtn.onclick = restartGame;

// On load, show start section only
startSection.classList.remove('hidden');
questionSection.classList.add('hidden');
roundSection.classList.add('hidden');
endSection.classList.add('hidden');
