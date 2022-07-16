let container = document.getElementById('container-for-etchasketch');

let buttonForNumberOfSquares = document.getElementById('number-of-squares');

creatingSquares(16);

buttonForNumberOfSquares.addEventListener('click', (number) => {
    number = prompt(`Enter the number of squares: `);
    if(number > 100){
        alert(`Maximum number of squares is 100!`);
    }else{
        creatingSquares(number);
    }
});

function creatingSquares(number){
    for(let i = 0; i < number * number; i++){
        let square = document.createElement('div');
        container.appendChild(square);
        square.classList.add('square');
        container.style.gridTemplateColumns = `repeat(${number}, 5fr)`;
        container.style.gridTemplateRows = `repeat(${number}, 5fr)`;
        coloringSquares(square);
    };
};

function coloringSquares(squares){
    squares.addEventListener('mouseenter', () => {
        squares.style.backgroundColor = 'black';
    });
};

function randomisingColors(){
    let R = Math.floor(Math.random() * 255),
        G = Math.floor(Math.random() * 255),
        B = Math.floor(Math.random() * 255);
    return `rgb(${R}, ${G}, ${B})`;
};