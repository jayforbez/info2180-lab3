window.onload = function () {
    // Get the game board
    const board = document.getElementById("board");

    // Get all the divs inside the game board
    const squares = board.getElementsByTagName("div");

    // Add the "square" class to each square
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");
    }
};