const zeroButton = document.getElementById('zero');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const equalsButton = document.getElementById('equals');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const clearButton = document.getElementById('ac');
const screen = document.getElementById('screen');

clearButton.addEventListener('click', () => screen.value = '');
zeroButton.addEventListener('click', () => screen.value += 0);
oneButton.addEventListener('click', () => screen.value += 1);
twoButton.addEventListener('click', () => screen.value += 2);
threeButton.addEventListener('click', () => screen.value += 3);
fourButton.addEventListener('click', () => screen.value += 4);
fiveButton.addEventListener('click', () => screen.value += 5);
sixButton.addEventListener('click', () => screen.value += 6);
sevenButton.addEventListener('click', () => screen.value += 7);
eightButton.addEventListener('click', () => screen.value += 8);
nineButton.addEventListener('click', () => screen.value += 9);


function add(a, b){
    let sum = a + b;
    return sum;
};

function subtract(a, b){
    let sum = a - b;
    return sum;
};

function multiply(a, b){
    let sum = a * b;
    return sum;
};

function divide(a, b){
    let sum = a/b;
    return sum;
}

function operate(operator, firstNumber, secondNumber){
    let sum;

    if(operator === 'add'){
        sum = add(firstNumber, secondNumber);
    } else if(operator === 'substract'){
        sum = subtract(firstNumber, secondNumber);
    } else if(operator === 'multiply'){
        sum = multiply(firstNumber, secondNumber);
    } else if(operator === 'divide'){
        sum = divide(firstNumber, secondNumber);
    } else {
        return 'ERROR';
    };

    return sum;
};