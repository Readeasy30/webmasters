# ReadEasy30 Bubbles 30-Minute Timer Build Spec

Last updated: 2026-05-29

## Purpose

Plan a lightweight Bubbles 30-minute practice timer for the ReadEasy30 lesson app.

This is a build spec for the ReadEasy30 site repo. Do not paste directly into production without reviewing the current `app.html`, `app.js`, and `css/style.css` structure first.

## Why this helps

The timer supports the ReadEasy30 promise:

- calm practice
- 30 minutes a day
- no rushing
- no shame
- Bubbles as a friendly guide
- a natural completion moment for MathEasy30 cross-promotion

## Feature summary

The timer should include:

- 30-minute countdown
- Start / Pause / Resume button
- mobile-friendly progress bar
- Bubbles coaching messages
- completion message
- optional success card linking to MathEasy30
- no account requirement
- no tracking
- no sound by default

## Recommended placement

Place the timer near the top of the lesson app, after the lesson title/progress area and before the reading story.

Do not let the timer push the story too far down on mobile.

## Suggested HTML structure

Use semantic classes instead of inline styles when adding to production.

```html
<section class="bubbles-timer" aria-labelledby="bubbles-timer-title">
  <h2 id="bubbles-timer-title">🫧 Bubbles' 30-Minute Practice Timer</h2>

  <p id="bubbles-timer-message" class="bubbles-timer-message">
    Click start when you are ready to read calmly with me.
  </p>

  <div id="bubbles-timer-display" class="bubbles-timer-display" aria-live="polite">
    30:00
  </div>

  <div class="bubbles-timer-track" aria-hidden="true">
    <div id="bubbles-timer-progress" class="bubbles-timer-progress"></div>
  </div>

  <button id="bubbles-timer-button" class="bubbles-timer-button" type="button">
    Start Lesson
  </button>
</section>
```

## MathEasy30 success-card concept

When the timer reaches 00:00, show a friendly card that celebrates the learner and suggests MathEasy30 as the next calm daily block.

```html
<section id="readeasy-success-card" class="readeasy-success-card" hidden>
  <div class="success-icon" aria-hidden="true">🎉</div>

  <h2>30 Minutes Completed!</h2>

  <p>
    🫧 <strong>Bubbles says:</strong> Fantastic focus today. Your reading brain worked hard.
  </p>

  <p><strong>Ready for one more calm practice block?</strong></p>

  <a class="success-card-link" href="https://matheasy30.com/">
    Go to MathEasy30.com →
  </a>

  <p class="success-card-note">
    Free, calm math practice for one small step at a time.
  </p>
</section>
```

## Suggested JavaScript logic

Attach the timer to existing app logic rather than creating duplicate global state where possible.

```javascript
const BUBBLES_TIMER_TOTAL_SECONDS = 30 * 60;
let bubblesTimeRemaining = BUBBLES_TIMER_TOTAL_SECONDS;
let bubblesTimerInterval = null;
let bubblesTimerRunning = false;

function toggleBubblesTimer() {
  const button = document.getElementById('bubbles-timer-button');

  if (!button) return;

  if (bubblesTimerRunning) {
    clearInterval(bubblesTimerInterval);
    bubblesTimerRunning = false;
    button.textContent = 'Resume Lesson';
    updateBubblesTimerMessage('Paused? That is fine. Take a breath and resume when ready.');
    return;
  }

  bubblesTimerRunning = true;
  button.textContent = 'Pause';
  updateBubblesTimerMessage('Great job. Read slowly and look for clues.');

  bubblesTimerInterval = setInterval(runBubblesTimerTick, 1000);
}

function runBubblesTimerTick() {
  if (bubblesTimeRemaining <= 0) {
    completeBubblesTimer();
    return;
  }

  bubblesTimeRemaining -= 1;
  renderBubblesTimer();

  if (bubblesTimeRemaining === 15 * 60) {
    updateBubblesTimerMessage('You are halfway there. Remember to look for proof in the story.');
  }

  if (bubblesTimeRemaining === 5 * 60) {
    updateBubblesTimerMessage('Only 5 minutes left. You are doing strong work today.');
  }
}

function renderBubblesTimer() {
  const display = document.getElementById('bubbles-timer-display');
  const progress = document.getElementById('bubbles-timer-progress');

  if (!display || !progress) return;

  const minutes = Math.floor(bubblesTimeRemaining / 60);
  const seconds = bubblesTimeRemaining % 60;
  const percentComplete = ((BUBBLES_TIMER_TOTAL_SECONDS - bubblesTimeRemaining) / BUBBLES_TIMER_TOTAL_SECONDS) * 100;

  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  progress.style.width = `${percentComplete}%`;
}

function completeBubblesTimer() {
  clearInterval(bubblesTimerInterval);
  bubblesTimerRunning = false;
  bubblesTimeRemaining = 0;
  renderBubblesTimer();
  updateBubblesTimerMessage('Wonderful. You completed your 30 minutes for today.');

  const timer = document.querySelector('.bubbles-timer');
  const successCard = document.getElementById('readeasy-success-card');

  if (timer) timer.hidden = true;
  if (successCard) successCard.hidden = false;
}

function updateBubblesTimerMessage(message) {
  const messageEl = document.getElementById('bubbles-timer-message');
  if (messageEl) messageEl.textContent = message;
}
```

## Suggested CSS

```css
.bubbles-timer,
.readeasy-success-card {
  max-width: 460px;
  margin: 1.25rem auto;
  padding: 1rem;
  border-radius: 1rem;
  background: #f8fbff;
  border: 1px solid #dbeafe;
  text-align: center;
}

.bubbles-timer-message {
  min-height: 2.5rem;
  color: #475569;
}

.bubbles-timer-display {
  font-size: 2rem;
  font-weight: 800;
  margin: 0.75rem 0;
}

.bubbles-timer-track {
  width: 100%;
  height: 0.75rem;
  border-radius: 999px;
  background: #e2e8f0;
  overflow: hidden;
}

.bubbles-timer-progress {
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: #38bdf8;
  transition: width 1s linear;
}

.bubbles-timer-button,
.success-card-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.1rem;
  border: 0;
  border-radius: 0.75rem;
  background: #2563eb;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
}

.readeasy-success-card {
  background: #f0fdf4;
  border-color: #86efac;
}
```

## Implementation notes

- Use external CSS, not inline styles, in the final site.
- Avoid loud alarm sounds.
- Avoid aggressive timers that create stress.
- Keep Pause / Resume available.
- Store completion locally only if needed later.
- Do not add accounts, tracking, or analytics for this feature without approval.

## Cross-promotion rule

The MathEasy30 link should feel like a helpful next option, not a forced redirect.

Use:

- Go to MathEasy30.com
- Try a calm math practice block
- Continue with math practice

Avoid:

- You must continue
- Required next step
- Guaranteed learning streak
