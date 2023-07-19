//Get user input to determine grid size
//Add event listener to text box and submit buttons

const userChoice = document.getElementById('user-choice');
const hintText = document.getElementById('hint');
const gridText = document.getElementById('grid-text')

userChoice.addEventListener('focus', hint);
userChoice.addEventListener('keyup', byNumber)

function hint() {
    hintText.textContent = "Enter a number between 16 and 100";
}

function byNumber() {
    let userValue = userChoice.value;
    gridText.textContent = "x " + userValue;
}

/*if (userChoice < 16 || userChoice > 100 || isNaN(userChoice)){
    hintText.textContent = "ERROR: Enter a number between 16 and 100"
}*/

//Build grid based on user input
//this will be a function that uses a loop to iterate through adding the correct amount of divs
