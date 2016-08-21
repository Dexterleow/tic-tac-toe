// Code from: http://jsfiddle.net/zG3pm/4/

// My code. A Simple IF statement if computer detects that there are two X in a
//row and will place it O in the empty cell above it to block the player from winning.
// var computerMove = function () {
// if (cell1x1 == "" && (cell1x2 == "x" & cell1x3 ="x")) || (cell2x2 == "x" & cell3x3 ="x")) || (cell2x1 == "x" & cell3x1 ="x")) {
// cell1x1.inner.HTML = "O";
// turn = 0;
// } else
//
//
// }

//


var cell;
var nextTurn = 'X';

function playersTurn(){
if(nextTurn == 'X'){
    nextTurn = 'O';
    }
else {
    nextTurn = 'X';
    }
}

function mouseMotion(ref,motion){
if(motion == 'over')
    {
        ref.style.borderColor='#E00';
    }
    else if(motion == 'out')
    {
        ref.style.borderColor='#CCC';
    }
}

function cellClick(cell){

        if (document.getElementById("winnerIs").style.display == "block") {
        alert('Game has already been won!');
       return
    }


if (cell.innerHTML === 'X' || cell.innerHTML === 'O')
{ alert ('Square has already been choosen, please select another square');
return
}
cell.innerHTML = nextTurn;
playersTurn();
winnerIs();

 }


function winnerIs(){

if (document.getElementById("cell1x1").innerHTML == 'X' &&    document.getElementById("cell1x2").innerHTML == 'X' && document.getElementById("cell1x3").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';

}

else if (document.getElementById("cell2x1").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell2x3").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell3x1").innerHTML == 'X' && document.getElementById("cell3x2").innerHTML == 'X' && document.getElementById("cell3x3").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell1x1").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell3x3").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell1x3").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell3x1").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if(document.getElementById("cell1x1").innerHTML == 'X' && document.getElementById("cell2x1").innerHTML == 'X' && document.getElementById("cell3x1").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if(document.getElementById("cell1x2").innerHTML == 'X' && document.getElementById("cell2x2").innerHTML == 'X' && document.getElementById("cell3x2").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if(document.getElementById("cell1x3").innerHTML == 'X' && document.getElementById("cell2x3").innerHTML == 'X' && document.getElementById("cell3x3").innerHTML == 'X')
{document.getElementById('winnerIs').innerHTML = 'Player 1 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell1x2").innerHTML == 'O' && document.getElementById("cell1x3").innerHTML == 'O')
{document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell2x1").innerHTML == 'O' && document.getElementById("cell2x2").innerHTML == 'O' && document.getElementById("cell2x3").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell3x1").innerHTML == 'O' && document.getElementById("cell3x2").innerHTML == 'O' && document.getElementById("cell3x3").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell2x2").innerHTML == 'O' && document.getElementById("cell3x3").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if (document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell1x2").innerHTML == 'O' && document.getElementById("cell1x3").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if(document.getElementById("cell1x1").innerHTML == 'O' && document.getElementById("cell2x1").innerHTML == 'O' && document.getElementById("cell3x1").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if(document.getElementById("cell1x2").innerHTML == 'O' && document.getElementById("cell2x2").innerHTML == 'O' && document.getElementById("cell3x2").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
else if(document.getElementById("cell1x3").innerHTML == 'O' && document.getElementById("cell2x3").innerHTML == 'O' && document.getElementById("cell3x3").innerHTML == 'O')
    {document.getElementById('winnerIs').innerHTML = 'Player 2 Wins!';
 document.getElementById('winnerIs').style.display = 'block';
 }
}


function startNewGame(){
    location.reload(true);
}

// Code from: http://jsfiddle.net/zG3pm/4/
