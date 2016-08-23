console.log('Hello Frontend!');

// Codes from David
gridArray = [ 0,0,0,
              0,0,0,
              0,0,0]

// Understanding Game Logic (Use an if else to wrap for vs human or com)
var currentPlayer = 'x'

function playerMove (ab) {
  if (ab.target.textContent === '' && currentPlayer === 'x') {
      //this equals to false
    ab.target.textContent = 'x' //can I change ev to something else like ab?
    var i = ab.target.id
    gridArray[i] = 'x'
    checkWinner()
    isGameOver()

    currentPlayer = 'o'
  } else if (ab.target.textContent === '' && currentPlayer === 'o') {
    ab.target.textContent = 'o'
    var i = ab.target.id
    gridArray[i] = 'o'
    checkWinner()
    isGameOver()

    currentPlayer = 'x'
  }
  console.log(gridArray);
}


function checkWinner() {
  if        (gridArray[0] === gridArray[1] && gridArray[1] === gridArray[2]) {
    winner = gridArray[0]
  } else if (gridArray[3] === gridArray[4] && gridArray[4] === gridArray[5]) {
    winner = gridArray[3]
  } else if (gridArray[6] === gridArray[7] && gridArray[7] === gridArray[8]) {
    winner = gridArray[6]
  } else if (gridArray[0] === gridArray[3] && gridArray[3] === gridArray[6]) {
    winner = gridArray[0]
  } else if (gridArray[1] === gridArray[4] && gridArray[4] === gridArray[7]) {
    winner = gridArray[1]
  } else if (gridArray[2] === gridArray[5] && gridArray[5] === gridArray[8]) {
    winner = gridArray[2]
  } else if (gridArray[0] === gridArray[4] && gridArray[4] === gridArray[8]) {
    winner = gridArray[0]
  } else if (gridArray[2] === gridArray[4] && gridArray[4] === gridArray[6]) {
    winner = gridArray[2]
  } else {
    winner = 'it\'s a draw'
  }
}

function isGameOver() {
  if (winner === "x" || winner === "o") {
    document.getElementById('game-status').innerHTML = 'winner is: ' + winner
  } else if (!gridArray.includes(0)){
    document.getElementById('game-status').innerHTML = 'it\'s a draw!'
  }
} //why is this code responsible for pushing out O?


// DOM manipulation
var grids = document.querySelectorAll('td.cell')

for (var i = 0; i < grids.length; i++) {
grids[i].addEventListener('click', playerMove)
}


// checkWinner()
// isGameover()
//
// gridArray
//
// DOM. textContent
// DOM. event.target
// DOM. addEventListener
//
// GameLogic.
//
// if statement
// function 1) okayer nive
// 2)check winner
// 3) is game over


// var player1 = "x";
// var player2 ="o";
// var totalMoves = 0;
//
//
// var checkWin; // function that checks the board for winning combo
// var xWin = false; // true if X wins
// var oWin = false; // true if O wins
//
// var newGame;
// var clearBoard;

// (1)My code. A Simple IF statement if computer detects that there are two X in a
//row and will place it O in the empty cell above it to block the player from winning.
// var computerMove = function () {
// if (cell1x1 == "" && (cell1x2 == "x" & cell1x3 ="x")) || (cell2x2 == "x" & cell3x3 ="x")) || (cell2x1 == "x" & cell3x1 ="x")) {
// cell1x1.inner.HTML = "O";
// turn = 0;
// } else
//..... and so on, and all other permutation need to be factored in.
//
//(2) for the computer to move.
// it needs to place an O in one of the cell in the board randomly when one of the cell is clicked.
// }
//

//
// function clickCheck() = {
// if (cell.innerHTML ==="X" || cell.innerHTML === "O") {
//     window.alert("You have clicked on here before.");
// }
// }


// function gameOver () = {
//
// if moves = 9, games end
//
// show message. game is over.
//
// } //check if game is over
//
//
// function playerSelection () = {
//
// var gameBoard =[box-1,box-2,box-3,box-4,box-5,box-6,box-7,box-8,box-9];
//
// if (click === null) {
//   alert("Please press a box within the board.")
// } else {
// var guessBoard = get the object that it is clicked;
//
// }
// } //check when someone has clicked on the board
//
// element.addEventListener("click", playerSelection);
//
// function
//
// var selectionInput = document.getElementByID("selectionInput")
