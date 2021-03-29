// All selections needed
const numBtns = document.querySelectorAll("button.num");
numBtns.forEach(btn => {
    btn.addEventListener('click', btnPress);
});

const display = document.getElementById("display");

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', setOperator);

const subtractBtn = document.getElementById('subtract')
subtractBtn.addEventListener('click', setOperator);

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', setOperator);

const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', setOperator);

const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', operate);

const backspaceBtn = document.getElementById('backspace');
backspaceBtn.addEventListener('click', backspace);

const signBtn = document.getElementById("sign");
signBtn.addEventListener('click', changeSign);

// Variables to store the needed values in string format
let firstVal = "",
    secondVal = "",
    operator = "",
    result = "",
    currentVal = "";


// Functions to make the calculator work
function btnPress() {
    if (result > 0) {
        clear();
    }
    currentVal += this.value;
    updateDisplay();
};

function updateDisplay() {
    if (result || result === 0) {
        display.textContent = result;
    } else {
        display.textContent = currentVal;
    }
};

function clear() {
    firstVal = "";
    secondVal = "";
    operator = "";
    result = "";
    currentVal = "";
    updateDisplay();
};

function setOperator() {
    if (!operator) {
        if (!firstVal) {
            firstVal = currentVal;
        }
    }
    if (result) {
        firstVal = result.toString(10);
        result = "";
    }
    operator = this.value;
    currentVal = "";
};

function operate(event) {
        secondVal = currentVal;
        let a, b;
    
        if (secondVal.includes("%")) {
            a = parseFloat(firstVal);
            b = (parseFloat(secondVal) / 100) * a;
        } else if (firstVal.includes('.') || secondVal.includes('.')) {
            a = parseFloat(firstVal);
            b = parseFloat(secondVal);
        } else {
            a = parseInt(firstVal, 10)
            b = parseInt(secondVal, 10);
        }
    
        currentVal = "";
    
        switch (operator) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case '*':
                result = +a * b.toPrecision(3);
                break;
            case '/':
                if (b == 0) {
                    result = "NO GOD NO!";
                    break;
                }
                result = +(a / b).toPrecision(3);
                break;
        }
        updateDisplay();
};

function backspace() {
    let tempVal = Array.from(currentVal);
    tempVal.splice(tempVal.length - 1, 1);
    if (tempVal.length < 1) {
        currentVal = "";
    } else {
        currentVal = tempVal.join('');
    }
    updateDisplay();
};

function changeSign() {
    let arr = Array.from(currentVal);

    if (!arr.includes("-")) {
        arr.splice(0, 0, "-");
    } else {
        arr.splice(0, 1);
    }
    currentVal = arr.join('');
    updateDisplay();
};