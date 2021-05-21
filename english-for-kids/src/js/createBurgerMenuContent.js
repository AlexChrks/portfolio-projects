import categories from '../categories.js';
import createCategoriesCards from './categoryCardsList.js';
import setWordsPage from './setWordsPages.js';
import toggleBurgerMenu from './toggleBurgerMenu.js';
import setStatisticsPage from './setStatisticsPage.js';
import initLocalStorage from './initLocalStorage.js';

export default function setBurgerMenuContent() {
  document.querySelector('.dynamic_content').classList.remove('hidden');
  document.querySelector('.statistics').classList.add('hidden');

  const burgerMenuContentContainer = document.querySelector('.burger_menu_content');

  const buttonMainPage = document.createElement('div');
  buttonMainPage.classList.add('burger_menu_category', 'active_burger_menu_category');
  buttonMainPage.innerText = 'Main page';
  buttonMainPage.addEventListener('click', () => {
    toggleBurgerMenu();
    createCategoriesCards();
    document.querySelector('.active_burger_menu_category').classList.remove('active_burger_menu_category');
    buttonMainPage.classList.add('active_burger_menu_category');
  });

  const mainMenuIcon = document.createElement('img');
  mainMenuIcon.src = './img/home.png';
  mainMenuIcon.classList.add('burger_menu_category_image');
  buttonMainPage.prepend(mainMenuIcon);
  burgerMenuContentContainer.appendChild(buttonMainPage);

  for (let i = 0; i < categories.length; i++) {
    const burgerMenuCategory = document.createElement('div');
    burgerMenuCategory.classList.add('burger_menu_category');
    burgerMenuCategory.innerText = categories[i].name;
    burgerMenuCategory.addEventListener('click', () => {
      toggleBurgerMenu();
      setWordsPage(categories[i].name);
      document.querySelector('.active_burger_menu_category').classList.remove('active_burger_menu_category');
      burgerMenuCategory.classList.add('active_burger_menu_category');
    });
    burgerMenuContentContainer.appendChild(burgerMenuCategory);
    const burgerMenuCategoryImage = document.createElement('img');
    burgerMenuCategoryImage.classList.add('burger_menu_category_image');
    burgerMenuCategoryImage.src = categories[i].image;
    burgerMenuCategory.prepend(burgerMenuCategoryImage);
  }

  const buttonStatistics = document.createElement('div');
  buttonStatistics.classList.add('burger_menu_category');
  buttonStatistics.innerText = 'Statistics';
  buttonStatistics.addEventListener('click', () => {
    initLocalStorage();
    setStatisticsPage();
    toggleBurgerMenu();
    document.querySelector('.active_burger_menu_category').classList.remove('active_burger_menu_category');
    buttonStatistics.classList.add('active_burger_menu_category');
  });

  const statisticsIcon = document.createElement('img');
  statisticsIcon.src = './img/statistics.png';
  statisticsIcon.classList.add('burger_menu_category_image');
  buttonStatistics.prepend(statisticsIcon);
  burgerMenuContentContainer.appendChild(buttonStatistics);
}
