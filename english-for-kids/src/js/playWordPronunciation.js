export default function playWordPronunciation(index, wordsCategory, card) {
  const audio = document.createElement('audio');
  audio.src = wordsCategory[index].audioSrc;
  audio.currentTime = 0;
  if (card.getAttribute('rotated') === 'false') {
    audio.play();
  }
}
