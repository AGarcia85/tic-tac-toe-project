console.log("hello");
// Create varible for gamestart
const gamestart = new GameStart();
gamestart.start();
// Create function to start game
function GameStart() {
    //create varibles for board and players
    const board = new Board();
    const player1 = new Player(board);
    const player2 = new Player(board);
    //Create way to keep track of turn in game
    let turn = 0;
    
    this.start = function() {
        // Create a way to track changes 
        const changes = { childList: true};
        const observer = new MutationObserver(() => takeTurn());
        
        // Make a way to observe board positions
        board.positions.forEach((Element) => observer.observe(Element, changes));
        takeTurn();
    }
    // Create new function for takeTurn
    function takeTurn() {
        //console.log("change");
        // Need way to check for winner
        if (board.checkForWinner()) {
            return;
        }
        // Create if else statement to determined whose turn it is
        if (turn % 2 === 0) {
            player1.takeTurn();
        }else  {
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
    // checking for winner
    // 0 1 2
    // 3 4 5
    // 6 7 8
    this.checkForWinner = function (){
        // start with no winner when game starts
        let winner = false;
        // store winning combos as an array within an array
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        const positions = this.positions;
    }
}

function Player(board) {
    // Need to create function for each players turn
    this.takeTurn = function() {
        //console.log("player1 turn");
        // Add eventlistener to be able to take turns for each player
        board.positions.forEach(Element => Element.addEventListener('click', p1Turn))
                 
    }
    function p1Turn() {
        console.log("Player2 turn");
            // create a way to log which square is clicked
            player1 = event.target.style.background = 'blue';
            
            // remove eventlistener after each turn is take to prevent change in squares
            board.positions.forEach(Element => Element.addEventListener('click', p2Turn));
    }
    function p2Turn(){
        console.log("Player1 turn");
        player2 = event.target.style.background = 'red';
        board.positions.forEach(Element => Element.removeEventListener('click', p2Turn));
        
    }

}
