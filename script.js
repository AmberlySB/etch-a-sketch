let color = "black";
let click = false;
const grid = document.getElementById('grid');
const userChoice = document.getElementById('user-choice');
const hintText = document.getElementById('hint');
const gridText = document.getElementById('grid-text');
const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear');

//This is "toggling" the click variable between true and false
document.querySelector('#grid').addEventListener('click', () => {click = !click});


userChoice.addEventListener('focus', hint);
userChoice.addEventListener('keyup', printChoice);
submitButton.addEventListener('click', makeGrid);

//This simulates a click in order to draw the board on page load
submitButton.click();
clearButton.addEventListener('click', clearBoard);
grid.addEventListener('click', activatePen);

function hint() {
    hintText.textContent = "Enter a number between 16 and 100";
    hintText.classList.remove('error');
}

function printChoice() {
    let userValue = userChoice.value;
    gridText.textContent = "x " + userValue;
}

function validateUserInput () {
    let userInput = userChoice.value;
    if (userInput < 16 || userInput > 100 || isNaN(userInput)) {
        hintText.textContent = "ERROR: Enter a number between 16 and 100"
        hintText.classList.add('error')
        return false;
    }else {
        hintText.textContent = "";
        hintText.classList.remove('error');
        return true;
    }
}

function makeGrid () {
    if (validateUserInput()) {
        resetGrid(true);
        let gridSize = userChoice.value;
        let gridElementSize = 500 / gridSize;
        for (i = 0; i < (gridSize * gridSize); i++) {
            const makeDiv = document.createElement('div');
            makeDiv.classList.add('grid-element');
            makeDiv.style.width = `${gridElementSize}px`;
            makeDiv.style.height = `${gridElementSize}px`;
            grid.appendChild(makeDiv);
        }
    }
}

function resetGrid (){
    if (true) {
       const gridElement = document.querySelectorAll('.grid-element')
       gridElement.forEach(div => {
        div.remove();
       });
    }
}

function activatePen() {
    let gridCells = document.getElementsByClassName('grid-element');
    for (i = 0; i < gridCells.length; i++) {
        gridCells[i].addEventListener('mouseover', colorGrid);
    }
}

function colorGrid() {
    if (click) {
            if (color === "Rainbow"){
            console.log(color);
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            this.style.backgroundColor = "#" + randomColor;
        }else{
            console.log(color);
            this.style.backgroundColor = color;
        }
    }
}

function changeColor (choice) {
    color = choice;
}

function clearBoard() {
    const gridElement = document.querySelectorAll('.grid-element')
    gridElement.forEach(div => {
        div.style.backgroundColor = 'lightgray';
    });
}