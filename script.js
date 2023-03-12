function drawSquares(heightOfOneSquare) {
    const container = document.querySelector('.container');
    const widthAndHeightOfTheSquare = container.clientWidth / heightOfOneSquare - 2;
    for (let i = 0; i < heightOfOneSquare * heightOfOneSquare; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${widthAndHeightOfTheSquare}px`;
        div.style.height = `${widthAndHeightOfTheSquare}px`;
        container.appendChild(div);
    }
}

function colorTheSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }));
}

drawSquares(16);
colorTheSquares();

const changeGridSizeButton = document.getElementById('change-grid-size').addEventListener('click', (e) => {
    const heightOfTheNewSquare = +prompt('Enter the height of the square of the new grid (e.g. 64, 32)');
    if (isNaN(heightOfTheNewSquare) || heightOfTheNewSquare < 1 || heightOfTheNewSquare > 100) {
        alert('The number provided is wrong! Please provide a number in the range 1-100');
        return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = '';
    drawSquares(heightOfTheNewSquare);
    colorTheSquares();
});