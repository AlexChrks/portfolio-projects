export default function rotateImage(index, wordsCategory, card) {
  const cards = document.querySelectorAll('.card');
  cards[index].children[1].children[0].innerText = wordsCategory[index].translation;

  cards[index].style.transform = 'rotateY(180deg)';
  cards[index].children[1].style.transform = 'rotateY(180deg)';
  cards[index].children[1].children[1].style.display = 'none';
  card.setAttribute('rotated', 'true');

  cards[index].parentNode.addEventListener('mouseleave', () => {
    cards[index].children[1].children[0].innerText = wordsCategory[index].word;
    cards[index].style.transform = 'rotateY(0deg)';
    cards[index].children[1].style.transform = 'rotateY(0deg)';
    cards[index].children[1].children[1].style.display = 'block';
    card.setAttribute('rotated', false);
  });
}
