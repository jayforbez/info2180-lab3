window.onload = function () {
    // Get the game board
    const board = document.getElementById("board");

    // Get all the squares on the board
    const squares = board.getElementsByTagName("div");

    // Array to keep track of the state of the game
    const gameState = [];

    // Keep track of whose turn it is
    let currentPlayer = "X";

    // Add the "square" class and click event to each square
    for (let i = 0; i < squares.length; i++) {
        // Add the square class
        squares[i].classList.add("square");

        // Add a click event to the square
        squares[i].addEventListener("click", function () {

            // Do nothing if the square has already been clicked
            if (gameState[i]) {
                return;
            }

            // Put the current player's mark on the square
            squares[i].textContent = currentPlayer;

            // Add the X or O class for the correct colour
            squares[i].classList.add(currentPlayer);

            // Save the move in the game state
            gameState[i] = currentPlayer;

            // Switch players
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    }
};