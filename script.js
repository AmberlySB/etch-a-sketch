//Get user input to determine grid size
//Add event listener to text box and submit buttons


const grid = document.getElementById('grid');
const userChoice = document.getElementById('user-choice');
const hintText = document.getElementById('hint');
const gridText = document.getElementById('grid-text');
const submitButton = document.getElementById('submit-button');

userChoice.addEventListener('focus', hint);
userChoice.addEventListener('keyup', byNumber);
submitButton.addEventListener('click', makeGrid);

function hint() {
    hintText.textContent = "Enter a number between 16 and 100";
    hintText.classList.remove('error');
}

function byNumber() {
    let userValue = userChoice.value;
    gridText.textContent = "x " + userValue;
}

function validateEntry () {
    let userInput = userChoice.value;
    if (userInput < 16 || userInput > 100 || isNaN(userInput)) {
        hintText.textContent = "ERROR: Enter a number between 16 and 100"
        hintText.classList.add('error')
        return false;
    }
    else {
        hintText.textContent = "";
        hintText.classList.remove('error');
        return true;
    }
}

//Build grid based on user input
//this will be a function that uses a loop to iterate through adding the correct amount of divs

function makeGrid () {
    if (validateEntry()) {
        resetGrid(true);
        let gridSize = userChoice.value;
        let gridElementSize = 500 / gridSize - 2;
        for (i = 0; i < (gridSize * gridSize); i++) {
            const makeDiv = document.createElement('div');
            makeDiv.classList.add('grid-element');
            makeDiv.style.width = `${gridElementSize}px`;
            makeDiv.style.height = `${gridElementSize}px`;
            grid.appendChild(makeDiv);
            console.log(gridElementSize);
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