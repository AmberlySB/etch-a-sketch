function update() {
    sliderValue = document.getElementById('myRange').value;
    const rangeText = document.querySelector('.range-text');
rangeText.textContent = `Grid size: ${sliderValue} x ${sliderValue}`;
    console.log(sliderValue);
}


//const rangeText = document.querySelector('.range-text');
//rangeText.textContent = `Grid size: ${sliderValue} x ${sliderValue}`;