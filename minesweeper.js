document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0,col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 0,col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 0,col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 2}, 
    {row: 1,col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 1,col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 1,col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 2,col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 2,col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    {row: 2,col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 2},
    
  ]
}




function startGame () {
  // Don't remove this function call: it makes the game work!
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForwin)
    
     for ( var i = 0; i < board.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])}
  
    lib.initBoard()
     }

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i =0; i < board.celss.length; i++) {
    var 
    if (isMine && isMarked === true)
  }  lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(cells.row, cells.col);

  var count = 0
  for ( var i = 0; i < surroundingCells.length; i++) {
     if (getSurroundingCells[i].isMine = true) {
       count++
     }
    }
    return count;     

  }
