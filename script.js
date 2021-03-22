let body = document.getElementsByTagName('body');
let container = document.getElementById('container');

let createDivs = (x) => {
    for (let i = 0; i < x; i++) {
        for (let n = 0; n < x; n++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('box');
            container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
            container.appendChild(newDiv);
        }
    }
}

let sizeBtn = document.getElementById('change-size-btn');

let reset = () => {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

sizeBtn.addEventListener('click', () => {
    let val = parseInt(prompt('Enter a value:'));
    if (val > 100 || val < 1) {
        alert("Please enter a value between 1 and 100");
        return;
    }
    reset();
    createDivs(val);
    let boxes = container.childNodes;

function randomColor () {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0);
}

boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    });
})
});
