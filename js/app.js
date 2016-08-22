
console.log('Hello Frontend!');

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

function click() {
    if (this.id == "cell1") {
        document.getElementById("cell1").innerHTML = "X";
    } else if (this.id == "cell2") {
        document.getElementById("cell2").innerHTML = "X";
    } else if (this.id == "cell3") {
        document.getElementById("cell3").innerHTML = "X";

    } else if (this.id == "cell4") {
        document.getElementById("cell4").innerHTML = "X";
    } else if (this.id == "cell5") {
        document.getElementById("cell5").innerHTML = "X";
    } else if (this.id == "cell6") {
        document.getElementById("cell6").innerHTML = "X";

    } else if (this.id == "cell7") {
        document.getElementById("cell7").innerHTML = "X";
    } else if (this.id == "cell8") {
        document.getElementById("cell8").innerHTML = "X";
    } else if (this.id == "cell9") {
        document.getElementById("cell9").innerHTML = "X";

    }
}

document.getElementById("cell1").onclick = click;
document.getElementById("cell2").onclick = click;
document.getElementById("cell3").onclick = click;
document.getElementById("cell4").onclick = click;
document.getElementById("cell5").onclick = click;
document.getElementById("cell6").onclick = click;
document.getElementById("cell7").onclick = click;
document.getElementById("cell8").onclick = click;
document.getElementById("cell9").onclick = click;

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
