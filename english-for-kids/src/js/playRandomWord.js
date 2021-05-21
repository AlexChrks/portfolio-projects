export default function playRandomWord(wordsCategory, randomArray) {
  const audio = document.createElement('audio');
  audio.src = wordsCategory[randomArray[randomArray.length - 1]].audioSrc;
  audio.currentTime = 0;
  audio.play();
}
