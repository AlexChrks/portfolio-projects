import setWordsPage from './setWordsPages.js';

export default function createWordsListToRepeat() {
  const allWordsArr = [];
  let sortWordsArr = [];
  let wordsToRepeat = [];
  for (let i = 0; i < localStorage.length; i++) {
    allWordsArr.push(JSON.parse(localStorage.getItem(`${localStorage.key(i)}`)));
  }

  sortWordsArr = allWordsArr.sort((wordA, wordB) => (wordA.percent
    > wordB.percent ? -1 : 1));

  for (let i = 0; i < sortWordsArr.length; i++) {
    if (sortWordsArr[i].percent >= 30) {
      wordsToRepeat.push(sortWordsArr[i]);
    }
  }

  if (wordsToRepeat.length > 8) {
    wordsToRepeat = wordsToRepeat.slice(0, 8);
  }

  localStorage.setItem('wordsToRepeat', JSON.stringify(wordsToRepeat));

  if (!wordsToRepeat.length) {
    return;
  }

  setWordsPage('Difficult words', wordsToRepeat);
}
