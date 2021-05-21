export function directSort(numberOfColumn) {
  const table = document.querySelector('table');

  const sortingRows = Array.from(table.rows).slice(1);
  let sortedRows = [];

  sortedRows = sortingRows.sort((rowA, rowB) => (rowA.cells[numberOfColumn].innerHTML
        > rowB.cells[numberOfColumn].innerHTML ? 1 : -1));

  table.tBodies[0].append(...sortedRows);
}

export function reverseSort(numberOfColumn) {
  const table = document.querySelector('table');

  const sortingRows = Array.from(table.rows).slice(1);
  let sortedRows = [];

  sortedRows = sortingRows.sort((rowA, rowB) => (rowA.cells[numberOfColumn].innerHTML
        > rowB.cells[numberOfColumn].innerHTML ? -1 : 1));

  table.tBodies[0].append(...sortedRows);
}
