import localStorageInitialData from '../localStorageData.js';
import { directSort, reverseSort } from './sortTable.js';

export default function setStatisticsPage() {
  document.querySelector('.category_name').innerText = 'Statistics';
  document.querySelector('.dynamic_content').classList.add('hidden');
  document.querySelector('.statistics').classList.remove('hidden');

  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML = '';

  if (document.querySelector('.play_mode_footer')) {
    document.querySelector('.play_mode_footer').parentNode.removeChild(document.querySelector('.play_mode_footer'));
  }

  for (let i = 0; i < localStorageInitialData.length; i++) {
    const wordObjectFromLS = JSON.parse(localStorage.getItem(localStorageInitialData[i].word));
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const word = document.createElement('td');
    word.innerText = wordObjectFromLS.word;
    tableRow.appendChild(word);

    const translation = document.createElement('td');
    translation.innerText = wordObjectFromLS.translation;
    tableRow.appendChild(translation);

    const category = document.createElement('td');
    category.innerText = wordObjectFromLS.category;
    tableRow.appendChild(category);

    const clicks = document.createElement('td');
    clicks.innerText = wordObjectFromLS.clicks;
    tableRow.appendChild(clicks);

    const rightClicks = document.createElement('td');
    rightClicks.innerText = wordObjectFromLS.right;
    tableRow.appendChild(rightClicks);

    const wrongClicks = document.createElement('td');
    wrongClicks.innerText = wordObjectFromLS.wrong;
    tableRow.appendChild(wrongClicks);

    const percent = document.createElement('td');
    percent.innerText = wordObjectFromLS.percent;
    tableRow.appendChild(percent);
  }

  const tableHeaders = document.querySelectorAll('.table_header');
  for (let k = 0; k < tableHeaders.length; k++) {
    const arrowDown = document.createElement('img');
    arrowDown.src = './img/arrow_down.svg';
    arrowDown.classList.add('arrows_images', 'arrow_down');
    if (tableHeaders[k].children.length < 2) {
      tableHeaders[k].prepend(arrowDown);
    }
    arrowDown.addEventListener('click', () => {
      directSort(k);
      arrowDown.classList.add('hidden');
      tableHeaders[k].querySelector('.arrow_up').classList.remove('hidden');
    });

    const arrowUp = document.createElement('img');
    arrowUp.src = './img/arrow_up.svg';
    arrowUp.classList.add('arrows_images', 'arrow_up', 'hidden');
    if (tableHeaders[k].children.length < 2) {
      tableHeaders[k].prepend(arrowUp);
    }
    arrowUp.addEventListener('click', () => {
      reverseSort(k);
      arrowUp.classList.add('hidden');
      tableHeaders[k].querySelector('.arrow_down').classList.remove('hidden');
    });
  }
}
