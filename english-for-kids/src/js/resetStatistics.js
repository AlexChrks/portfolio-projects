import localStorageInitialData from '../localStorageData.js';

export default function resetStatistics() {
  localStorage.clear();
  for (let i = 0; i < localStorageInitialData.length; i++) {
    const wordObj = localStorageInitialData[i];
    localStorage.setItem(wordObj.word, JSON.stringify(wordObj));
  }
}
