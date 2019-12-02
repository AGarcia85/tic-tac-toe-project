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
}

function Player(board) {
    // Need to create function for each players turn
    this.takeTurn = function() {
        //console.log("player1 turn");
        // Add eventlistener to be able to take turns for each player
        board.positions.forEach(Element => Element.addEventListener('click', p1Turn))
                 
    }
    function p1Turn() {
        //console.log("turn taken")
            // create a way to log which square is clicked
            player1 = event.target.style.background = 'blue';
            console.log(board.position)
            // remove eventlistener after each turn is take to prevent change in squares
            board.positions.forEach(Element => Element.addEventListener('click', p2Turn));
    }
    function p2Turn(){
        player2 = event.target.style.background = 'red';
        board.positions.forEach(Element => Element.removeEventListener('click', p2Turn));
        
    }

}
