//This code was written with the help of a tutorial, but I (Emily S.) wrote all the comments
//Javascript "Global" Variables
var painted;
var content;
var winningCombinations;
var turn = 0;
var theCanvas;
var c;
var cxt;
var squaresFilled = 0;
var w;
var y;

//Arrays
window.onload = function() {
    
    painted = new Array();
    content = new Array();
    winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    
    for (var l = 0; l <= 8; l++) {
        painted[l] = false;
        content[l] = '';
    }
}

//When things get clicked,"Game methods"
function canvasClicked(canvasNumber) {
    //taking number and adding the word canvas to it
    theCanvas = "canvas" + canvasNumber;
    //using getElementById to get the element that is the id with a particular string
    c = document.getElementById(theCanvas);
    //canvases in html...
    cxt = c.getContext("2d");
    
    //Testing if painted is still false
    if (painted[canvasNumber - 1] == false) {
        //Testing if turn is even  
        if (turn % 2 == 0) { 
            //draw an x
            cxt.beginPath();
            cxt.moveTo(10, 10);
            cxt.lineTo(40, 40);
            cxt.moveTo(40, 10);
            cxt.lineTo(10, 40);
            cxt.stroke();
            cxt.closePath();
            
            //out of a set of canvases, a particular canvas is now an x //-1 because count starts at 0
            content[canvasNumber - 1] = 'X';
        } 
        
        //draw a circle
        else {
            cxt.beginPath();
            cxt.arc(25, 25, 20, 0, Math.PI * 2, true);
            cxt.stroke();
            cxt.closePath();
            content[canvasNumber - 1] = 'O';
        }
        
        //add one, switch to the next turn
        turn++;
        //out of an array of painted, a specific canvas# is set to true so that it doesn't get changed
        painted[canvasNumber - 1] = true;
        //add one, count # of squares filled
        squaresFilled++;
        
        //call function to check if one in an array of painted, if x or o is a winner
        checkForWinners(content[canvasNumber - 1]);
        
        if (squaresFilled == 9) {
            alert("GAME OVER :(");
            location.reload(true);
        }
    
    } 
    else {
        alert("THAT SPACE IS ALREADY OCCUPIED");
    }

}

function checkForWinners(symbol) {
    
    //going through and compairing winning combinations to symbol
    for (var a = 0; a < winningCombinations.length; a++) {
        if (content[winningCombinations[a][0]] == symbol && content[winningCombinations[a][1]] == symbol && content[winningCombinations[a][2]] == symbol) {
            alert(symbol + " WON!");
            playAgain();
        }
    }

}

function playAgain() {
    y = confirm("Would you like to play again?");
    if (y == true) {
        alert("Yes! ^^/>");
        location.reload(true);
    } 
    else {
        alert("See you later :)");
    }

}
