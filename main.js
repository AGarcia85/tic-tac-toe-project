console.log("hello");
// Create varible for gamestart
const gamestart = new GameStart();
gamestart.start();
// Create function to start game
function GameStart() {
    //create varibles for board and players
    const board = new Board();
    const player1 = new Player();
    const player2 = new Player();
    //Create way to keep track of turn in game
    let turn = 0;
    
    this.start = function() {
        // Create a way to track changes 
        const changes = { childList: true};
        const observer = new MutationObserver(() => takeTurn());
        
        // Make a way to observe board positions
        board.positions.forEach((el) => observer.observe(el, changes));
        takeTurn();
    }
    // Create new function for takeTurn
    function takeTurn() {
        console.log("change");
        // Create if else statement to determined whose turn it is
        if (turn % 2 === 0) {
            player1.takeTurn();
        }else {
            player2.takeTurn();
        }

        // Create increment for turns
        turn++;
    }
}
// create functions for new varibles
function Board() {
    // Create positions on the board
    this.positions = Array.from(document.querySelectorAll(".square"));
    console.log(this.positions);
}

function Player() {
    // Need to create function for each players turn
    this.takeTurn = function() {
        console.log("player1 turn");
    }
}