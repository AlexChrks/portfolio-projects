import {
  clothes, family, animals, jobs, music, shapes, tools, toys,
} from '../cards.js';
import playWordPronunciation from './playWordPronunciation.js';
import rotateImage from './rotateImage.js';
import playGame from './playGame.js';

export default function setWordsPage(category, wordsToRepeat) {
  document.querySelector('.dynamic_content').classList.remove('hidden');
  document.querySelector('.statistics').classList.add('hidden');

  const mode = document.querySelector('.switcher').getAttribute('data');

  let wordsCategory = {};
  switch (category) {
    case 'Animals':
      wordsCategory = animals;
      break;
    case 'Clothes':
      wordsCategory = clothes;
      break;
    case 'Family':
      wordsCategory = family;
      break;
    case 'Jobs':
      wordsCategory = jobs;
      break;
    case 'Musical Instruments':
      wordsCategory = music;
      break;
    case 'Shapes':
      wordsCategory = shapes;
      break;
    case 'Tools':
      wordsCategory = tools;
      break;
    case 'Toys':
      wordsCategory = toys;
      break;
    default:
      wordsCategory = wordsToRepeat;
      break;
  }

  const nameOfCategory = document.querySelector('.category_name');
  nameOfCategory.innerText = category;

  const cardsGridSection = document.querySelector('.dynamic_content');
  cardsGridSection.innerHTML = '';

  if (document.querySelector('.play_mode_footer') !== null) {
    document.querySelector('main').removeChild(document.querySelector('.play_mode_footer'));
  }

  if (mode === 'play') {
    const playModeFooterForButtons = document.createElement('div');
    playModeFooterForButtons.classList.add('play_mode_footer');
    document.querySelector('main').appendChild(playModeFooterForButtons);

    const buttonRepeat = document.createElement('button');
    buttonRepeat.classList.add('button_start', 'button_repeat', 'hidden');
    buttonRepeat.innerText = 'Repeat';
    playModeFooterForButtons.appendChild(buttonRepeat);

    const repeatIcon = document.createElement('img');
    repeatIcon.src = './img/arrow_repeat.svg';
    buttonRepeat.appendChild(repeatIcon);

    const buttonStart = document.createElement('button');
    buttonStart.classList.add('button_start');
    buttonStart.innerText = 'Start game';
    buttonStart.addEventListener('click', () => {
      buttonStart.classList.add('hidden');
      buttonRepeat.classList.remove('hidden');
      playGame(wordsCategory);
    });
    playModeFooterForButtons.appendChild(buttonStart);

    const rightAnswersField = document.createElement('div');
    rightAnswersField.classList.add('right_answers_field');
    playModeFooterForButtons.appendChild(rightAnswersField);
  }

  for (let i = 0; i < wordsCategory.length; i += 1) {
    const wordCardWrapper = document.createElement('div');
    wordCardWrapper.classList.add('word_card_wrapper');
    cardsGridSection.appendChild(wordCardWrapper);
    wordCardWrapper.setAttribute('rotated', false);

    const wordCard = document.createElement('div');
    wordCard.classList.add('card');
    wordCard.classList.add('word_card');
    wordCardWrapper.appendChild(wordCard);

    const wordImage = document.createElement('img');
    wordImage.src = wordsCategory[i].image;
    wordImage.classList.add('card_image');
    wordCard.appendChild(wordImage);

    if (mode === 'train') {
      const wordWrapper = document.createElement('div');
      wordWrapper.classList.add('word_wrapper');
      wordCard.appendChild(wordWrapper);

      const wordInCategory = document.createElement('div');
      wordInCategory.innerText = wordsCategory[i].word;
      wordWrapper.appendChild(wordInCategory);

      const buttonRotate = document.createElement('img');
      buttonRotate.src = './img/refresh.svg';
      buttonRotate.classList.add('button_rotate');
      wordWrapper.appendChild(buttonRotate);
      buttonRotate.addEventListener('click', () => {
        rotateImage(i, wordsCategory, wordCardWrapper);
      });

      wordCardWrapper.addEventListener('click', () => {
        playWordPronunciation(i, wordsCategory, wordCardWrapper);
        const object = JSON.parse(localStorage.getItem(wordsCategory[i].word));
        object.clicks += 1;
        localStorage.setItem(wordsCategory[i].word, JSON.stringify(object));
      });
    }

    if (mode === 'play') {
      wordCard.classList.add('play_mode_card');
    }
  }
}
