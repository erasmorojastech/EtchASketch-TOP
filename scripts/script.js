'use strict'

const $board = document.querySelector('#board');
let $grid = [];

for (let i=0; i<256; i++) {
  const cell = document.createElement('div');
  cell.setAttribute('class', 'cell');

  $grid.push(cell);
}

$board.replaceChildren(...$grid);