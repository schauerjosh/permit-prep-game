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
  '✨ Yasss! Correct! ✨',
  '💖 Slay! You got it!',
  '🎉 Queen energy! 🎉',
  '🔥 You ate that up!',
  '💅 Periodt! No notes!',
  '🌈 Werk it, bestie!',
  '👑 Crown on, answer strong!',
  '💜 You understood the assignment!',
  '🦋 So iconic!',
  '💫 That was a serve!',
  '🌟 Main character moment!',
  '🩷 Go off!',
  '💃 You snapped!',
  '🦄 Legendary!',
  '🎀 Pink vibes only!',
  '💥 Boom! Genius!',
  '🦋 Butterfly brain!',
  '🦄 Unicorn level smart!',
  '💎 Shining bright!',
  '🍦 Sweet victory!',
  '🦩 Flamingo flex!',
  '🪩 Disco brain!',
  '🧁 Cupcake win!',
  '🩰 Ballet of brains!',
  '🕺 Dance break! You nailed it!',
  '🦜 Parrot says: YAAAS!',
  '🦚 Peacocking that answer!',
  '🦥 Slow clap for you!',
  '🦦 Otterly amazing!',
  '🦔 Hedge-hogging the win!',
  '🦦 Otterly fabulous!',
  '🦄 You’re a legend!',
  '🦋 Fluttering to success!',
  '🦩 Pink power!',
  '🦚 Strut your stuff!',
  '🦜 Talk of the town!',
  '🦥 Chill and still a champ!',
  '🦦 Splashing success!',
  '🦔 Spiky smart!',
  '🦄 Magic moment!',
  '🦋 Butterfly vibes!',
  '🦩 Flamingo fabulous!',
  '🦚 Peacock proud!',
  '🦜 Parrot party!',
  '🦥 Sloth speed, genius brain!',
  '🦦 Otterly unstoppable!',
  '🦔 Hedgehog hero!'
];

const wrongMessages = [
  'Oops! Not quite, but you got this! 💪',
  'So close! Time for a quick study break 📚',
  'No worries, even queens miss sometimes 👑',
  'Wrong, but you’re still iconic! ✨',
  'Try again, superstar! 🌟',
  'Missed it, but you’re still a legend 🦄',
  'Not the vibe, but you’ll get it next time! 💅',
  'Study up and slay next round! 📖',
  'Almost! Check the guide and come back stronger! 🔥',
  'No biggie! Study and flex next time! 💪',
  'You’re learning! Check the answer and glow up! 💡',
  'Not today, but you’re still main character! 🎬',
  'Wrong, but you’re still trending! 🔝',
  'Keep going, bestie! You got this! 🩷',
  'Study break! You’ll ace it next time! 📚',
  'Oops! Let’s get that bread next time! 🍞',
  'Not quite, but you’re still a star! ⭐️',
  'Almost! Study and slay! 💅',
  'No worries, you’re still iconic! ✨',
  'Missed it, but you’re still a legend 🦄'
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startGame() {
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

function getUnansweredIndexes() {
  return roundAnswered[currentRound - 1].map((answered, idx) => !answered ? idx : null).filter(idx => idx !== null);
}

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
      // Not enough correct, must retry round
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
    btn.onclick = () => selectAnswer(btn, question, choice);
    choicesDiv.appendChild(btn);
  });
  // Add swipe gesture for next
  addSwipeListener();
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
      // Not enough correct, must retry round
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
    btn.onclick = () => selectAnswer(btn, question, choice);
    choicesDiv.appendChild(btn);
  });
  // Add swipe gesture for next
  addSwipeListener();
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

function showRetryRound() {
  roundSection.classList.remove('hidden');
  roundSection.innerHTML = `<div style='text-align:center;color:#ff69b4;font-size:1.2em;margin-bottom:1em;'>You need at least 21 correct to advance.<br>You got ${roundCorrect[currentRound - 1]} correct.<br><button id='retry-round-btn' style='margin-top:1em;background:#ff69b4;color:#fff;border:none;border-radius:1em;padding:0.7em 1.5em;font-size:1em;'>Retry Round</button></div>`;
  document.getElementById('retry-round-btn').onclick = retryRound;
}

function retryRound() {
  // Reset round state but keep score as is
  roundAnswered[currentRound - 1] = Array(QUESTIONS_PER_ROUND).fill(false);
  roundCorrect[currentRound - 1] = 0;
  currentQuestionIndex = 0;
  roundSection.classList.add('hidden');
  showQuestion();
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

// function to vibrate the device
function vibrate(pattern) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}

// function to show exploding hearts animation
function showExplodingHearts() {
  // Exploding hearts animation
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('div');
    heart.className = 'exploding-heart';
    heart.innerText = '💖';
    const angle = (i / 18) * 2 * Math.PI;
    const distance = 80 + Math.random() * 30;
    heart.style.left = `calc(50% + ${Math.cos(angle) * distance}px)`;
    heart.style.top = `calc(50% + ${Math.sin(angle) * distance}px)`;
    heart.style.transform = `translate(-50%, -50%) scale(${0.8 + Math.random() * 0.7})`;
    heart.style.opacity = '1';
    heart.style.position = 'fixed';
    heart.style.zIndex = 9999;
    heart.style.pointerEvents = 'none';
    heart.style.fontSize = '2.2rem';
    heart.style.transition = 'opacity 0.8s, transform 0.8s';
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.style.opacity = '0';
      heart.style.transform += ' scale(1.7)';
    }, 10);
    setTimeout(() => heart.remove(), 900);
  }
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
