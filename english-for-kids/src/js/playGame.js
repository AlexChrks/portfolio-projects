import endGame from './endGame.js';
import getRandomIndexes from './getEightRandomIndexes.js';
import playRandomWord from './playRandomWord.js';

export default function playGame(wordsCategory) {
  const randomIndexesArr = getRandomIndexes(wordsCategory.length);
  const stackOfErrors = [];
  const cards = document.querySelectorAll('.play_mode_card');
  const answersField = document.querySelector('.right_answers_field');
  const clickedCards = [];

  const rightAnswerSound = document.createElement('audio');
  rightAnswerSound.src = './sounds/right.mp3';

  const falseAnswerSound = document.createElement('audio');
  falseAnswerSound.src = './sounds/failure.mp3';

  playRandomWord(wordsCategory, randomIndexesArr);

  document.querySelector('.button_repeat').addEventListener('click', () => {
    playRandomWord(wordsCategory, randomIndexesArr);
  });

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      if (!clickedCards.includes(card)) {
        if (answersField.children.length === 8) {
          answersField.removeChild(answersField.children[0]);
        }
        const lastRandomWord = wordsCategory[randomIndexesArr[randomIndexesArr.length - 1]];
        const wordObjectLocalStorage = JSON.parse(localStorage.getItem(lastRandomWord.word));

        if (card.children[0].src.includes(lastRandomWord.image)) {
          wordObjectLocalStorage.right += 1;
          wordObjectLocalStorage.percent = Math.round((wordObjectLocalStorage.wrong * 100)
          / (wordObjectLocalStorage.wrong + wordObjectLocalStorage.right));

          clickedCards.push(card);
          card.classList.add('disable_card');
          rightAnswerSound.currentTime = 0;
          rightAnswerSound.play();

          const rightAnswerImage = document.createElement('img');
          rightAnswerImage.src = './img/right_answer.png';
          rightAnswerImage.classList.add('answers_images');
          document.querySelector('.right_answers_field').appendChild(rightAnswerImage);

          randomIndexesArr.pop();

          if (!randomIndexesArr.length) {
            endGame(stackOfErrors);
            return;
          }

          setTimeout(playRandomWord, 1000, wordsCategory, randomIndexesArr);
        } else {
          wordObjectLocalStorage.wrong += 1;
          wordObjectLocalStorage.percent = Math.round((wordObjectLocalStorage.wrong * 100)
          / (wordObjectLocalStorage.wrong + wordObjectLocalStorage.right));

          falseAnswerSound.currentTime = 0;
          falseAnswerSound.play();

          const falseAnswerImage = document.createElement('img');
          falseAnswerImage.src = './img/false_answer.png';
          falseAnswerImage.classList.add('answers_images');
          document.querySelector('.right_answers_field').appendChild(falseAnswerImage);

          stackOfErrors.push(wordsCategory[randomIndexesArr[randomIndexesArr.length - 1]]);
        }
        localStorage.setItem(lastRandomWord.word, JSON.stringify(wordObjectLocalStorage));
      }
    });
  });
}
