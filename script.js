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

let previousKeyType;
const calculator = document.getElementById('calculator');
calculator.addEventListener('click', e => {
    if(e.target.matches('.sign')){
        previousKeyType = 'sign';
    } else if(e.target.matches('.number')){
        previousKeyType = 'number'
    };
});

screen.value = 0;

clearButton.addEventListener('click', function(){
    screen.value = 0;
    total = 0;
    operator = '';
    currentNumber = 0;
    previousNumber = 0;
});
zeroButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 0;
    } else {
        screen.value += 0;}
});
oneButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 1;
    } else if(previousKeyType = 'number' && screen.value != 0) {
        screen.value += 1;
    };
});
twoButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 2;
    } else {
        screen.value += 2;}
});
threeButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 3;
    } else {
        screen.value += 3;}
});
fourButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 4;
    } else {
        screen.value += 4;}
});
fiveButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 5;
    } else {
        screen.value += 5;}
});
sixButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 6;
    } else {
        screen.value += 6;}
});
sevenButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 7;
    } else {
        screen.value += 7;}
});
eightButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 8;
    } else {
        screen.value += 8;}
});
nineButton.addEventListener('click', () => {
    if(previousKeyType === 'sign' || Number(screen.value) === 0){
        screen.value = 9;
    } else {
        screen.value += 9;}
});


let total = 0;
let operator = '';
let previousNumber;
let currentNumber = 0;

addButton.addEventListener('click', () => {
    if(operator === '') {
    previousNumber = Number(screen.value);
    operator = 'add';
    }else if(previousKeyType != 'sign' && previousKeyType != 'equals' && operator != ''){
        currentNumber = Number(screen.value);
        operate(operator, previousNumber, currentNumber);
    }else{
        return;
    };
});

subtractButton.addEventListener('click', () => {
    if(operator === '') {
    previousNumber = Number(screen.value);
    operator = 'subtract';
    }else if(previousKeyType != 'sign' && previousKeyType != 'equals' && operator != ''){
        currentNumber = Number(screen.value);
        operate(operator, previousNumber, currentNumber);
    }else{
        return;
    };
});

equalsButton.addEventListener('click', () => {
    if(previousKeyType != 'equals' && previousKeyType === 'number'){
        currentNumber = Number(screen.value);
        operate(operator, previousNumber, currentNumber);
    }else {
        return;
    };
    previousKeyType = 'equals';
});

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
    } else if(operator === 'subtract'){
        sum = subtract(firstNumber, secondNumber);
    } else if(operator === 'multiply'){
        sum = multiply(firstNumber, secondNumber);
    } else if(operator === 'divide'){
        sum = divide(firstNumber, secondNumber);
    } else {
        return 'ERROR';
    };

    total = sum;
    screen.value = total;
    previousNumber = total;
    currentNumber = 0;
    operator = '';
};