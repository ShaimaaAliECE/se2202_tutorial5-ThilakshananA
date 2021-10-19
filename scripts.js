let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializeButton = document.createElement('button');
initializeButton.innerText = 'Start'
document.getElementById('game over - lbl').appendChild(initializeButton);
// use the value stored in the nextPlayer variable to indicate who the next player is
let p = document.querySelector('b');
let ptext = 'Next Player';
p.innerText = playerText;

//This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    //For loop
    for(i = 0; i<9; i++){
        let ID = 'c' +(i +1);
        var newButton = document.createElement('button');
        document.getElementById(ID).appendChild(newButton);
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */
   event.target.innerText = nextP;
   if(nextP == 'X'){
       nextP = 'O'
   }else if (nextP == 'O'){
       nextP = 'X';
   }
   }
   let pText = "Next player" + nextP;
   p.innerText = ptext;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById('game over - lbl');
        var newHeader = document.createElement('Hello');
        newHeader.innerText = 'Game over';
        label.appendChild(headerNew);
    
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 


function isGameOver()
{
    let buttonClicked = true;
    for (i = 0; i <btns.length; i++) {
        if(!btns[i].disabled){
            buttonClicked = false;
        }
        return buttonClicked;
    }
    // This function returns true if all the buttons are disabled and false otherwise 
   
}
