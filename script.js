let body = document.getElementsByTagName('body');
let container = document.getElementById('container');
let sizeBtn = document.getElementById('change-size-btn');

// Generate a random rgb color;
function randomColor () {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

let createDivs = (x) => {

    /* Make a grid of (x) number of boxes, outside of the for loop 
       because we only need to do this once */
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
    
    for (let i = 0; i < x; i++) {
        for (let n = 0; n < x; n++) {
            // Create a new 'div' element for every iteration
            let newDiv = document.createElement('div');

            // Style it using css class
            newDiv.classList.add('box');
            
            // Make the new 'div' element a child node of the main container
            container.appendChild(newDiv);
            
        };
    };
    // Finaly make the grid interactive
    createDynamicBoxes();
};

// When user changes size of grid, we need to remove the old grid
let reset = () => {
    // While there are child 'div's remove them one by one
    while (container.firstChild) {
        container.firstChild.remove();
    };
};

function createDynamicBoxes () {
    // Get a NodeList of every box we created
    let boxes = container.childNodes;
    
    // Make all boxes change color when mouse over them
    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        });
    });
};

// Logic for the 'change size button'
sizeBtn.addEventListener('click', () => {
    let val = parseInt(prompt('Enter a value:'));
    if (val > 100 || val < 1) {
        alert("Please enter a value between 1 and 100");
        // Too big of a value can cause delays and performance problems
        return;
    }

    // When the user enters a valid value, remake the grid
    reset();
    createDivs(val);
    createDynamicBoxes();
})

// This is ran when the page is accessed making the default a 16x16 grid
createDivs(16);