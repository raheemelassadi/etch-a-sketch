//container for all the boxes
const container = document.querySelector('.container');

//define reset button
const reset = document.querySelector('.reset');

const userInput = document.querySelector('#size');

//creates the divs boxes shown on screen
function createDivs() {
    for (let i = 0; i < 256; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
};

//update grid from user input
function updateGrid(){
    container.innerHTML = "";
    container.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr)`
    );
    
    if(userInput > 100) {
        alert('error: thats more than 100. enter a new number or hit reset');
    } else {
        for (let i = 0; i < userInput.value * userInput.value; i++){
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
    }
}

userInput.addEventListener("change", updateGrid);

//add event listener to each box
const square = document.querySelector('div');
square.addEventListener('mouseover', function(event){
    event.target.classList.replace('square', 'color');
})



reset.addEventListener("click", function() {
    container.innerHTML = "";
    userInput.value = "";
    container.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    container.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createDivs();
  });


// runs function on page load
window.onload = createDivs();



