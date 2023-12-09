import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import 'highlight.js/styles/github.css';

let deck = new Reveal({
  plugins: [RevealNotes],
  hash: true,
  transition: 'none',
  controls: false,
  transitionSpeed: 'fast',
  autoAnimateDuration: 0.3,
  navigationMode: 'linear',
})

deck.initialize();

let timerInterval; // Variable to store the interval ID

function startTimer() {
  let timerElement = document.getElementById('timer-count');
  let seconds = 1;
  let minutes, displaySeconds;

  timerInterval = setInterval(function () {
    // @ts-expect-error
    minutes = parseInt(seconds / 60, 10);
    displaySeconds = seconds % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    displaySeconds = displaySeconds < 10 ? '0' + displaySeconds : displaySeconds;

    timerElement.textContent = minutes + ':' + displaySeconds;

    seconds++;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = undefined;
}

const buttonEl = document.querySelector<HTMLButtonElement>('button.timer');
buttonEl.addEventListener('click', (e) => {
  console.log(buttonEl);
  if (timerInterval) {
    stopTimer()
    buttonEl.textContent = 'Start Timer'
  } else {
    startTimer();
    buttonEl.textContent = 'Stop Timer'
  }
})