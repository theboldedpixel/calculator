// Basic calculation functions

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => (a * b);
let divide = (a, b) => (a / b);

// Operate function to display results
function operate(a, operator, b) {
  if (operator === '+') {
    let answer = add(a, b);
    return answer;
  } else if (operator === '-') {
    let answer = subtract(a, b);
    return answer;
  } else if (operator === '*') {
    let answer = multiply(a, b);
    return answer;
  } else if (operator === '/') {
    let answer = divide(a, b);
    return answer;
  }
}

let numA = [];
let numB = [];
let numC = [];
let operator = null;

function displayAsPressed() {
  if (operator !== null && numB.length === 0) {
    content.textContent = Number(numA.join('')) + ' ' + operator;
  } else if (operator !== null) {
    content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) 
  } else {
    content.textContent = Number(numA.join(''));
  }
}

// let pressedOne = () => (operator === null ? numA.push('1') : numB.push('1'));

// let pressedTwo = () => (operator === null ? numA.push('2') : numB.push('2'));

// let pressedThree = () => (operator === null ? numA.push('3') : numB.push('3'));

// let pressedFour = () => (operator === null ? numA.push('4') : numB.push('4'));

// let pressedFive = () => (operator === null ? numA.push('5') : numB.push('5'));

// let pressedSix = () => (operator === null ? numA.push('6') : numB.push('6'));

// let pressedSeven = () => (operator === null ? numA.push('7') : numB.push('7'));

// let pressedEight = () => (operator === null ? numA.push('8') : numB.push('8'));

// let pressedNine = () => (operator === null ? numA.push('9') : numB.push('9'));

// let pressedZero = () => (operator === null ? numA.push('0') : numB.push('0'));

function pressedOne() {
  if (operator === null) {
    numA.push('1');
    displayAsPressed();
  } else {
    numB.push('1');
    displayAsPressed();
  }
}

function pressedTwo() {
  if (operator === null) {
    numA.push('2');
    displayAsPressed();
  } else {
    numB.push('2');
    displayAsPressed();
  }
}
function pressedThree() {
  if (operator === null) {
    numA.push('3');
    displayAsPressed();
  } else {
    numB.push('3');
    displayAsPressed();
  }
}
function pressedFour() {
  if (operator === null) {
    numA.push('4');
    displayAsPressed();
  } else {
    numB.push('4');
    displayAsPressed();
  }
}
function pressedFive() {
  if (operator === null) {
    numA.push('5');
    displayAsPressed();
  } else {
    numB.push('5');
    displayAsPressed();
  }
}
function pressedSix() {
  if (operator === null) {
    numA.push('6');
    displayAsPressed();
  } else {
    numB.push('6');
    displayAsPressed();
  }
}
function pressedSeven() {
  if (operator === null) {
    numA.push('7');
    displayAsPressed();
  } else {
    numB.push('7');
    displayAsPressed();
  }
}
function pressedEight() {
  if (operator === null) {
    numA.push('8');
    displayAsPressed();
  } else {
    numB.push('8');
    displayAsPressed();
  }
}
function pressedNine() {
  if (operator === null) {
    numA.push('9');
    displayAsPressed();
  } else {
    numB.push('9');
    displayAsPressed();
  }
}
function pressedZero() {
  if (operator === null) {
    numA.push('0');
    displayAsPressed();
  } else {
    numB.push('0');
    displayAsPressed();
  }
}


// Event listeners for Numpad
const one = document.querySelector('.one');
one.addEventListener('click', pressedOne);

const two = document.querySelector('.two');

two.addEventListener('click', pressedTwo);
const three = document.querySelector('.three');

three.addEventListener('click', pressedThree);

const four = document.querySelector('.four');
four.addEventListener('click', pressedFour);
const five = document.querySelector('.five');
five.addEventListener('click', pressedFive);
const six = document.querySelector('.six');
six.addEventListener('click', pressedSix);
const seven = document.querySelector('.seven');
seven.addEventListener('click', pressedSeven);
const eight = document.querySelector('.eight');
eight.addEventListener('click', pressedEight);
const nine = document.querySelector('.nine');
nine.addEventListener('click', pressedNine);
const zero = document.querySelector('.zero');
zero.addEventListener('click', pressedZero);

// Operators event listeners
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearAll);

const plus = document.querySelector('.plus');
plus.addEventListener('click', addIt);

const minus = document.querySelector('.minus');
minus .addEventListener('click', subractIt);

const times = document.querySelector('.times');
times.addEventListener('click', multiplyIt);

const divided = document.querySelector('.divided');
divided.addEventListener('click', divideIt);

const enter = document.querySelector('.enter');
enter.addEventListener('click', enterData);

function addIt() {
  operator = '+';
  displayAsPressed();
}

function subractIt() {
  operator = '-';
  displayAsPressed();
}

function multiplyIt() {
  operator = '*';
  displayAsPressed();
}

function divideIt() {
  operator = '/';
  displayAsPressed();
}

function clearAll() {
  numA = [];
  numB = [];
  operator = null;
  content.textContent = 'Enter equation here'
}

function enterData() {
  // let answer = operate(Number(numA.join('')), operator, Number(numB.join('')));
  let numACombined = Number(numA.join(''));
  let numBCombined = Number(numB.join(''));

  newAnswer = operate(numACombined, operator, numBCombined);
  console.log(newAnswer);
  content.textContent = newAnswer;
}

// Display text
const content = document.querySelector('.content');




