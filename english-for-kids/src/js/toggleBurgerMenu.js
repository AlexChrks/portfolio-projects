export default function toggleBurgerMenu() {
  window.scrollTo(0, 0);
  const burgerMenu = document.querySelector('.burger_menu');
  burgerMenu.classList.toggle('hidden_burger');
  document.querySelector('.burger_icon').classList.toggle('burger_active');
  document.querySelector('.blackout').classList.toggle('hidden_blackout');
  document.querySelector('body').classList.toggle('scroll_lock');
}
