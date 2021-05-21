import createCategoriesCards from './categoryCardsList.js';
import setBurgerMenuContent from './createBurgerMenuContent.js';
import toggleBurgerMenu from './toggleBurgerMenu.js';
import toggleMode from './toggleMode.js';
import initLocalStorage from './initLocalStorage.js';
import resetStatistics from './resetStatistics.js';
import setStatisticsPage from './setStatisticsPage.js';
import createWordsListToRepeat from './createWordsListToRepeat.js';

import '../css/reset.css';
import '../css/style.css';

const imagesContext = require.context('../img', true, /.(png|svg)$/);
const imagesObj = {};
imagesContext.keys().forEach((key) => {
  const code = key.split('./').pop() // remove the first 2 characters
    .substring(0, key.length - 6); // remove the file extension
  imagesObj[code] = imagesContext(key);
});
export { imagesObj };

const audioContext = require.context('../sounds', true, /.mp3$/);
const audioObj = {};
audioContext.keys().forEach((key) => {
  const code = key.split('./').pop()
    .substring(0, key.length - 6);
  audioObj[code] = audioContext(key);
});
export { audioObj };

document.onload = createCategoriesCards();
document.onload = setBurgerMenuContent();
document.onload = initLocalStorage();

const burgerIcon = document.querySelector('.burger_icon');
burgerIcon.addEventListener('click', () => {
  toggleBurgerMenu();
});

document.querySelector('.blackout').addEventListener('click', () => {
  toggleBurgerMenu();
});

const modeSwitcher = document.querySelector('.switcher');
modeSwitcher.addEventListener('click', () => {
  toggleMode(modeSwitcher);
});

document.querySelector('.reset_statistics').addEventListener('click', () => {
  resetStatistics();
  setStatisticsPage();
});

document.querySelector('.repeat_difficult_words').addEventListener('click', () => {
  createWordsListToRepeat();
});
