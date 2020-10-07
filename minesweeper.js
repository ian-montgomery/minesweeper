document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells:[
    {
      row: 0, 
      col: 0,
      hidden: true,
      isMine: false
    }, 
    {
      row: 0, 
      col: 1,
      hidden: true,
      isMine: true
    }, 
    {
      row: 0, 
      col: 2,
      hidden: true,
      isMine: false
    },
    {
      row: 1, 
      col: 0,
      hidden: true,
      isMine: true
    },
    {
      row: 1, 
      col: 1, 
      hidden: true,
      isMine: false
    },
    {
      row: 1, 
      col: 2, 
      hidden: true,
      isMine: true
    },
    {
      row: 2,
      col: 0, 
      hidden: true,
      isMine: false
    },
    {
      row: 2, 
      col: 1, 
      hidden: true,
      isMine: false
    }, 
    {
      row: 2, 
      col: 2, 
      hidden: true,
      isMine: false
    }
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]) 
  }
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (let i = 0; i < board.cells.length; i++) {
    //console.log(i)
    var cellCheck = board.cells[i]
    if (cellCheck.isMine === true && cellCheck.isMarked === false) {
      return;
    }
    else if (cellCheck.hidden === true && cellCheck.isMine === false) {
      return;
    }
  }
  return lib.displayMessage('You win!')

}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//

//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  var mineCount = 0
  for (let i = 0; i < surrounding.length; i++ ) {
    if (surrounding[i].isMine === true) {
      mineCount++;
    }
  } 
  return mineCount; 
}

