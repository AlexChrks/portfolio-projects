import categories from '../categories.js';
import setWordsPage from './setWordsPages.js';

export default function createCategoriesCards() {
  document.querySelector('.dynamic_content').classList.remove('hidden');
  document.querySelector('.statistics').classList.add('hidden');

  document.querySelector('.category_name').innerText = 'Categories';
  if (document.querySelector('.play_mode_footer')) {
    document.querySelector('.play_mode_footer').parentNode.removeChild(document.querySelector('.play_mode_footer'));
  }
  const cardsGridSection = document.querySelector('.dynamic_content');
  cardsGridSection.innerHTML = '';

  const mode = document.querySelector('.switcher').getAttribute('data');

  for (let i = 0; i < categories.length; i++) {
    const categoryCard = document.createElement('div');
    categoryCard.classList.add('card');
    categoryCard.classList.add('category_card');
    if (mode === 'play') {
      categoryCard.classList.add('play_mode_card');
    }

    const categoryImage = document.createElement('img');
    categoryImage.src = categories[i].image;
    categoryImage.classList.add('card_image');
    categoryCard.appendChild(categoryImage);
    cardsGridSection.appendChild(categoryCard);

    const categoryName = document.createElement('div');
    categoryName.innerText = categories[i].name;
    categoryCard.appendChild(categoryName);

    categoryCard.addEventListener('click', () => {
      setWordsPage(categories[i].name);
      const burgerMenuCategories = document.querySelectorAll('.burger_menu_category'); // make separate func?
      document.querySelector('.active_burger_menu_category').classList.remove('active_burger_menu_category'); //
      burgerMenuCategories[i + 1].classList.add('active_burger_menu_category'); //
    });
  }
}
