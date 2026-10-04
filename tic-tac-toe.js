window.onload = function () {
    // Get the game board
    const board = document.getElementById("board");

    // Get the status message
    const status = document.getElementById("status");

    // Get the New Game button
    const newGameButton = document.querySelector(".btn");

    // Get all the squares
    const squares = board.getElementsByTagName("div");

    // Keep track of the game
    let gameState = [];

    // Keep track of the current player
    let currentPlayer = "X";

    // Keep track of whether the game has ended
    let gameOver = false;


    // Check if there is a winner
    function checkWinner() {

        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winningCombinations.length; i++) {

            const combination = winningCombinations[i];

            const first = combination[0];
            const second = combination[1];
            const third = combination[2];

            if (
                gameState[first] &&
                gameState[first] === gameState[second] &&
                gameState[first] === gameState[third]
            ) {
                return true;
            }
        }

        return false;
    }


    // Reset the game
    function resetGame() {

        // Empty the game state
        gameState = [];

        // Start with X
        currentPlayer = "X";

        // Allow the game to be played
        gameOver = false;

        // Reset the status message
        status.textContent =
            "Move your mouse over a square and click to play an X or an O.";

        // Remove the winner styling
        status.classList.remove("you-won");

        // Clear all squares
        for (let i = 0; i < squares.length; i++) {

            squares[i].textContent = "";

            squares[i].classList.remove("X");
            squares[i].classList.remove("O");
            squares[i].classList.remove("hover");
        }
    }


    // Set up each square
    for (let i = 0; i < squares.length; i++) {

        // Add the square class
        squares[i].classList.add("square");

        // Handle clicking
        squares[i].addEventListener("click", function () {

            // Do nothing if the square is already occupied
            if (gameState[i]) {
                return;
            }

            // Do nothing if the game is already over
            if (gameOver) {
                return;
            }

            // Put X or O in the square
            squares[i].textContent = currentPlayer;

            // Add the X or O class
            squares[i].classList.add(currentPlayer);

            // Save the move
            gameState[i] = currentPlayer;

            // Check for a winner
            if (checkWinner()) {

                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";

                // Add the winner styling
                status.classList.add("you-won");

                // Stop the game
                gameOver = true;

                return;
            }

            // Change players
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        // Add hover effect
        squares[i].addEventListener("mouseover", function () {
            squares[i].classList.add("hover");
        });

        // Remove hover effect
        squares[i].addEventListener("mouseout", function () {
            squares[i].classList.remove("hover");
        });
    }


    // Add click event to New Game button
    newGameButton.addEventListener("click", resetGame);
};