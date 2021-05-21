import createCategoriesCards from './categoryCardsList.js';
import setWordsPage from './setWordsPages.js';

export default function toggleMode(elem) {
  const circle = document.querySelector('.circle');

  if (elem.getAttribute('data') === 'train') {
    elem.setAttribute('data', 'play');
    elem.classList.add('switcher_active');
    circle.classList.add('circle_active');
    document.querySelector('.mode_text').innerText = 'Play';
  } else {
    elem.setAttribute('data', 'train');
    elem.classList.remove('switcher_active');
    circle.classList.remove('circle_active');
    document.querySelector('.mode_text').innerText = 'Train';
  }

  if (document.querySelector('.category_card') && document.querySelector('.statistics').classList.contains('hidden')) {
    createCategoriesCards();
  } else if (document.querySelector('.word_card') && document.querySelector('.statistics').classList.contains('hidden')) {
    setWordsPage(document.querySelector('.category_name').innerText, JSON.parse(localStorage.getItem('wordsToRepeat')));
  }
}
