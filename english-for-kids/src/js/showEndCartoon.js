import createCategoriesCards from './categoryCardsList.js';

export default function showEndCartoon(elementDOM, sound) {
  elementDOM.classList.remove('hidden');
  window.scrollTo(0, 0);
  document.querySelector('body').classList.add('scroll_lock');
  sound.play();
  setTimeout(() => {
    elementDOM.classList.add('hidden');
    document.querySelector('body').classList.remove('scroll_lock');
    createCategoriesCards();
  }, 5000);
}
