let container = document.getElementById('container-for-etchasketch');

let buttonForNumberOfSquares = document.getElementById('number-of-squares');
let buttonForReset = document.getElementById('reset');
let buttonForClear = document.getElementById('clear');
let buttonForRainbow = document.getElementById('rainbow-mode');
let buttonForPlainColoring = document.getElementById('plain-coloring');
let buttonForFaddingIn = document.getElementById('fade-in');

creatingSquares(16);

buttonForNumberOfSquares.addEventListener('click', (number) => {
    number = prompt(`Enter the number of squares: `);
    if(number > 100){
        alert(`Maximum number of squares is 100!`);
    }else{
        resetingSquares(); //had to do this since it creates new squares on top of the number of old squares
        creatingSquares(number);
    }
});

buttonForReset.addEventListener('click', () => {
    resetingSquares();
    creatingSquares(16);
});

buttonForClear.addEventListener('click', () => {
    clearingSquares();
});

function creatingSquares(number){
    for(let i = 0; i < number * number; i++){
        let square = document.createElement('div');
        container.appendChild(square);
        square.classList.add('square');
        container.style.gridTemplateColumns = `repeat(${number}, auto)`;
        container.style.gridTemplateRows = `repeat(${number}, auto)`;
        buttonForRainbow.addEventListener('click', () => {
            coloringSquaresRainbow(square);
        });
        buttonForPlainColoring.addEventListener('click', () => {
            coloringSquaresBlack(square);
        });
        buttonForFaddingIn.addEventListener('click', () => {
            FadingSquares(square);
        });
    };
};

function coloringSquaresBlack(squares){
    squares.addEventListener('mouseenter', () => {
        squares.style.backgroundColor = 'black';
        squares.style.opacity = '1'; //since if FadingSquares function is active it applies the opacity of it to all other functions as well
    });
};

function coloringSquaresRainbow(squares){
    squares.addEventListener('mouseenter', () => {
        squares.style.backgroundColor = randomisingColors();
        squares.style.opacity = '1'; //since if FadingSquares function is active it applies the opacity of it to all other functions as well
    });
};

function FadingSquares(squares){
    let opacityIncrement = 0;
    squares.addEventListener('mouseenter', () => {
        if(opacityIncrement < 0.9){
            opacityIncrement += 0.1;
        }
        squares.style.backgroundColor = 'black';
        squares.style.opacity = `${opacityIncrement}`;
    });
}

function resetingSquares(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        container.removeChild(square);
    });
}

function clearingSquares(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
        square.style.opacity = '1';
    });
}

function randomisingColors(){
    let R = Math.floor(Math.random() * 255),
        G = Math.floor(Math.random() * 255),
        B = Math.floor(Math.random() * 255);
    return `rgb(${R}, ${G}, ${B})`;
};