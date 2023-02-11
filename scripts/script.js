'use strict'

const gridBtn = document.querySelector('#grid-size');
const $board = document.querySelector('#board');
let gridSize;

gridBtn.addEventListener('click', () => {
  gridSize = Number(prompt('Insert a Grid Size'));

  /* Validations */
  if (Number.isInteger(gridSize) === false) return alert('Enter a valid Number between 2 and 100');
  if (gridSize <= 1 || gridSize > 100) return alert('The Grid Size must be between 2 and 100');

  /* Rendering the Board */
  let $grid = [];

  for (let i = 0; i < gridSize * gridSize; i++) {
    let cellSide = 480 / gridSize;

    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    cell.style.cssText = `width: ${cellSide}px; height: ${cellSide}px;`;

    $grid.push(cell);
  }

  $board.replaceChildren(...$grid);
});

/* Adding Hover effect to the board cells */
$board.addEventListener('mouseenter', ()=>{
  const $display = $board.childNodes;
  $display.forEach((element)=>{
    element.addEventListener('mouseenter', () => {
      element.setAttribute('class', 'cell passed-over');
    });
  })
});