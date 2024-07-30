/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/




//1) Define the required variables used to track the state of the game.

//STEP 1
//a. Use a variable named board to represent the state of the squares on the board.
let board; //represents the state of the squares on the board
let turn; // track whonse turn it is
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

// 🚨 Don’t forget to console.log() your cached element references to ensure you’ve grabbed the correct elements!

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
    board = ['', '', '', '', '', '', '', '', '',];
    turn = 'X';
    winner = false;
    tie = false;
    render();
  
console.log(init);
};
init();


//STEP 4

//4) The state of the game should be rendered to the user.
// a. Create a function called render, then set it aside for now.
// b. Create a function called updateBoard.

function render() {

};

// function updateBoard() {

// };

// c. In the updateBoard function, loop over board and for each element:

const updateBoard = () => {
    board.forEach((box, idx) => {
        if (box === 'X') {
            squareEls[idx].textContent = 'X';
        } else if (box === 'O') {
            squareEls[idx].textContent = 'O';
        } else {
            squareEls[idx].textContent = ''; //Style that square however you wish, dependent on the value contained in the current cell being iterated over ('X', 'O', or ''). To keep it simple, start by just putting a letter in each square depending on the value of each cell.
        }
    });
};

console.log(updateBoard);







//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
