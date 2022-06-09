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