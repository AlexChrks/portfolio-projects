import localStorageInitialData from '../localStorageData.js';

export default function initLocalStorage() {
  for (let i = 0; i < localStorageInitialData.length; i++) {
    const wordObj = localStorageInitialData[i];
    if (localStorage.getItem(wordObj.word) === null) {
      localStorage.setItem(wordObj.word, JSON.stringify(wordObj));
    }
  }
}
