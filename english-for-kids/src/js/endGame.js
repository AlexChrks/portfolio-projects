import showEndCartoon from './showEndCartoon.js';

export default function endGame(stackOfErrors) {
  const winSound = document.createElement('audio');
  winSound.src = './sounds/won.mp3';

  const failSound = document.createElement('audio');
  failSound.src = './sounds/fail.mp3';

  const successGamePage = document.querySelector('.success_game_result');

  const failGamePage = document.querySelector('.fail_game_result');

  if (!stackOfErrors.length) {
    showEndCartoon(successGamePage, winSound);
  } else {
    document.querySelector('.errors').innerText = `Fail answers: ${stackOfErrors.length}`;
    showEndCartoon(failGamePage, failSound);
  }
}
