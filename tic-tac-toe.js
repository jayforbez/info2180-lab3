window.onload = function () {
    // Get the game board
    const board = document.getElementById("board");

    // Get all the squares on the board
    const squares = board.getElementsByTagName("div");

    // Keep track of the state of the game
    const gameState = [];

    // Keep track of the current player
    let currentPlayer = "X";

    // Add the square class and event handlers to each square
    for (let i = 0; i < squares.length; i++) {

        // Add the square class
        squares[i].classList.add("square");

        // Add click event
        squares[i].addEventListener("click", function () {

            // Put the current player's mark in the square
            squares[i].textContent = currentPlayer;

            // Add the X or O class
            squares[i].classList.add(currentPlayer);

            // Save the move
            gameState[i] = currentPlayer;

            // Change players
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        // Add mouseover event
        squares[i].addEventListener("mouseover", function () {
            squares[i].classList.add("hover");
        });

        // Add mouseout event
        squares[i].addEventListener("mouseout", function () {
            squares[i].classList.remove("hover");
        });
    }
};