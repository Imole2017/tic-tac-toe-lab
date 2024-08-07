/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/




//1) Define the required variables used to track the state of the game.

//STEP 1
//a. Use a variable named board to represent the state of the squares on the board.
let board; //represents the state of the squares on the board
let turn; // track whose turn it is
let winner; // represents if anyone has won yet
let tie; //represents if the game has ended in a tie

//2) Store cached element references.
//STEP 2
// Store cached element references.

// a. In a constant called squareEls, store the nine elements representing the squares on the page.
const squareEls = document.querySelectorAll('.sqr'); // this method makes it possible to store all the 9 qsuare boxes
console.log(squareEls);
// 💡 Notice how each square has a matching class name in your HTML to make this easier!

// b. In a constant called messageEl, store the element that displays the game’s status on the page.
const messageEl = document.querySelector('#message');
console.log(messageEl);

//  Don’t forget to console.log() your cached element references to ensure you’ve grabbed the correct elements!

//(7) (b) Store the new reset button element as a cached element reference in a constant named resetBtnEl.
const resetBtnEl = document.querySelector('#reset');
console.log(resetBtnEl);

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//STEP 3
//a. Create a function called init.
const init = () => { // this is the intial setting for the 9 squares. ; MDN source
    // b. Call the init function when the app loads.
  
//    c. Set the board variable to an array containing nine empty strings ('') representing empty squares.
//d. Set the turn to X - this will represent player X.
// e. Set the winner to false.
// f. Set tie to false.
    board = ['', '', '', '', '', '', '', '', '']; //9 squares 
    turn = 'X';
    winner = false;
    tie = false;
    render();
  
console.log('hello');
};
// init();


//STEP 4

//4) The state of the game should be rendered to the user.
// a. Create a function called render, then set it aside for now.
// b. Create a function called updateBoard.


function render() {
   
    updateBoard();
    updateMessage();
    // checkForWinner();
    // checkForTie();
    // switchPlayerTurn();
    // placePiece();
};



// c. In the updateBoard function, loop over board and for each element:

const updateBoard = () => {
    board.forEach((cell, idx) => {  //using forEach method
        if (cell === 'X') {
            squareEls[idx].textContent = 'X';
            squareEls[idx].style.backgroundColor = 'skyblue'
        } else if (cell === 'O') {
            squareEls[idx].textContent = 'O';
            squareEls[idx].style.backgroundColor = 'orange'
        } else {
            squareEls[idx].textContent = ''; //Style that square however you wish, dependent on the value contained in the current cell being iterated over ('X', 'O', or ''). To keep it simple, start by just putting a letter in each square depending on the value of each cell.
             squareEls[idx].style.backgroundColor = 'pink'
        }
    });
};

// updateBoard();
// init();
// console.log(updateBoard);

// (d) Create a function called updateMessage
// (e) In updateMessage, render a message based on the current game state:
// If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.
// If winner is false, but tie is true, render a tie message.
// Otherwise, render a congratulatory message to the player that has won.

const updateMessage = () => {
    if (winner === false && tie === false) {
        messageEl.textContent = 'Time to play the game!'
    } else if (winner === false && tie === true) {
        messageEl.textContent = 'Tie, No Winners!'
    } else {
        messageEl.textContent = 'Congratulations! You Won!'
    } 

}

// updateMessage();

init();


    
// STEP 5
// 5) Define the required constants.
// a. In a constant called winningCombos, define the eight possible winning combinations as an array of arrays.
const winningCombos = [ //will define nos horizontally, vertically, and diagonally
    [0, 1, 2], // From left to right top row
    [3, 4, 5], // From left to right middle row
    [6, 7, 8], // From left to right bottom row
    [0, 3, 6], // from top to bottom left row
    [1, 4, 7], // from top to bottom middle row
    [2, 5, 8], // from top to bottom right row
    [0, 4, 8], // Diagonally, from top left corner to the bottom right corner 
    [2, 4, 6] // Diagonally, from top right corner to the bottom left corner
    // and so on if any!
  ];
  console.log(winningCombos);


//STEP 6
//6) Handle a player clicking a square with a `handleClick` function.
//a. Create a function called handleClick. It will have an event parameter.
// b. Attach an event listener to the game board using one of the two options below. The first option is the standard path, and the second is the Level Up path.
//c. Obtain the index of the clicked square. To do this, get the index from an id assigned to the target element in the HTML. Assign this to a constant called squareIndex

const handleClick = (event) => {
const squareIndex = event.target.id;
// console.log(squareIdx); testing the code
if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner === 'true') {
    return; //'Game over'; 
} 
if (event.target.innerText === '') {
    // console.log('ok'); testing the code
    board[squareIndex] === 'X'
}
console.log(tie);

//6.1 - placePiece()
// a. Create a function named placePiece that accepts an index parameter.
// b. Update the board array at the index so that it is equal to the current value of turn.
placePiece(squareIndex);
checkForWinner();
checkForTie();
console.log(tie);
switchPlayerTurn();
render();

}

squareEls.forEach((cell) => cell.addEventListener('click', handleClick))

const placePiece = (index) => {
    board[index] = turn;
    console.log(board);
}

//6.2 - checkForWinner()
// a. Create a function called checkForWinner.
// b. Determine if a player has won using one of the two options below. The first option is the standard path, and the second option is the Level Up path.

const checkForWinner = () => {
    winningCombos.forEach(combo => {
        if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]])
        {
            winner = true
        }
    });
}



//6.3 - checkForTie()
// a. Create a function named checkForTie.
// b. Check if there is a winner. If there is, return out of the function.
//c. Check if the board array still contains any elements with a value of ''. If it does, we can leave tie as false. Otherwise, tie should be set to true.
//d. In the handleClick function, call the checkForTie function immediately after calling the checkForWinner function.

const checkForTie = () => {
    if (winner === true) {
        return;
    } else if (board.includes('') === true) {
        tie = false;
    } else {
        tie = true;
    }
}

console.log(tie);

// 6.4 - switchPlayerTurn()
// a. Create a function called switchPlayerTurn.
// b. If winner is true, return out of the function - we don’t need to switch the turn anymore because the person that just played won!
// c. If winner is false, change the turn by checking the current value of turn. If it is 'X' then change turn to 'O'. If it is 'O' then change turn to 'X'.

const switchPlayerTurn = () => {
    console.log(turn, winner);
    if (winner === true) {
        return;
    } else if (winner === false && turn === 'X') {
        turn = 'O'
    } else if (winner === false && turn === 'O') {
        turn = 'X'
    }
}

init();

//STEP 7
// 7) Create Reset functionality.
// a. Add a reset button to the HTML document. Give it an id of reset. DONE
// b. Store the new reset button element as a cached element reference in a constant named resetBtnEl. DONE
// c. Attach an event listener to the resetBtnEl. On the 'click' event, it should call the init function you created in step 3.

resetBtnEl.addEventListener('click', init);