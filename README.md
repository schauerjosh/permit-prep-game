# Missouri Permit Prep Game: Heads Up!

A mobile-optimized, dark-mode web game inspired by "Heads Up!" to help you study for the Missouri Driver Permit test. Play in rounds, answer real questions, and get instant feedback with links to the official Missouri Driver Guide.

## Features

- **200 real Missouri permit test questions** (provided in `questions.js`)
- **4 rounds** of 25 questions each (all 200 questions used per game)
- **Randomized question order** every game
- **Responsive, mobile-first UI** with dark mode
- **Multiple choice buttons** for each question
- **Instant feedback**: Green for correct, red for wrong, with vibration and a link to the relevant section of the [official Missouri Driver Guide](https://dor.mo.gov/driver-license/guide/)
- **Score tracking** across all rounds
- **Easy controls**: Start Game, Next Round, and Restart buttons
- **No backend or frameworks** – runs entirely in your browser, perfect for GitHub Pages

## How to Play

1. **Start Game**: Tap the Start button to begin.
2. **Answer Questions**: Tap your answer. Correct answers turn green and vibrate; wrong answers turn red, vibrate in a warning pattern, and show a link to the relevant Driver Guide section.
3. **Next**: Tap Next to move to the next question.
4. **Next Round**: After 25 questions, tap Next Round to continue.
5. **Final Score**: After 4 rounds (all 200 questions), see your total score and restart if you wish.

## File Structure

- `index.html` – Main HTML file, links all scripts and styles
- `style.css` – Responsive, dark-mode styles
- `game.js` – Game logic (rounds, scoring, feedback, vibration, etc.)
- `questions.js` – Array of 200 Missouri permit test questions (format below)
- `README.md` – This file

## Question Format

Your `questions.js` should export an array like:

```js
const allQuestions = [
  {
    question: "What should you do at a flashing red light?",
    choices: ["Stop completely", "Speed up", "Yield", "Ignore it"],
    answer: "Stop completely",
    reference: "https://dor.mo.gov/forms/Driver%20Guide.pdf#page=38"
  },
  // ...199 more questions...
];
```

## Deployment

### GitHub Pages
1. Push all files to your GitHub repo (e.g., `schauerjosh/permit-prep-game`).
2. In your repo settings, enable GitHub Pages (set source to `main` branch or `/docs` folder).
3. Visit your published site at `https://<your-username>.github.io/permit-prep-game/`.

### Local
Just open `index.html` in your browser. No server needed.

## Customization
- To update questions, edit `questions.js`.
- To change styles, edit `style.css`.

## Credits
- Official Missouri Driver Guide: [https://dor.mo.gov/driver-license/guide/](https://dor.mo.gov/driver-license/guide/)
- Game by Josh Schauer

---

**Good luck on your Missouri permit test!**
