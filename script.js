function drawSquares(heightOfOneSquare) {
    const container = document.querySelector('.container');
    for (let i = 0; i < heightOfOneSquare * heightOfOneSquare; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

drawSquares(16);

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', (e) => {
    e.target.classList.add('colored');
}));