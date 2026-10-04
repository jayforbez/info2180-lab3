window.onload = function () {
    // Get the game board
    const board = document.getElementById("board");

    // Get the status message
    const status = document.getElementById("status");

    // Get all the squares
    const squares = board.getElementsByTagName("div");

    // Keep track of the game
    const gameState = [];

    // Keep track of the current player
    let currentPlayer = "X";

    // Check if there is a winner
    function checkWinner() {

        // All possible winning combinations
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

        // Check each combination
        for (let i = 0; i < winningCombinations.length; i++) {

            const combination = winningCombinations[i];

            const first = combination[0];
            const second = combination[1];
            const third = combination[2];

            // Check if all three squares contain the same player
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


    // Set up each square
    for (let i = 0; i < squares.length; i++) {

        // Add the square class
        squares[i].classList.add("square");

        // Handle clicking
        squares[i].addEventListener("click", function () {

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

                // Add the winner class
                status.classList.add("you-won");
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
};