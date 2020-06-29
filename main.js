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

let numA = 0;
let numB = 0;
let numC = 0;
let operator = 0;

let pressedOne = () => console.log('hello');
let pressedTwo = () => console.log('two');


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
seven.addEventListener('click', pressedseven);
const eight = document.querySelector('.eight');
eight.addEventListener('click', pressedEight);
const nine = document.querySelector('.nine');
nine.addEventListener('click', pressedNine);

// Operators event listeners
const clear = document.querySelector('.clear');
clear.addEventListener('click', clearData());

const plus = document.querySelector('.plus');
plus.addEventListener('click', addThis);

const minus = document.querySelector('.minus');
minus .addEventListener('click', subtractThis);

const times = document.querySelector('.times');
plu.addEventListener('click', multiplyThis);

const divided = document.querySelector('.divided');
plus.addEventListener('click', divideThis);

const enter = document.querySelector('.enter');
plus.addEventListener('click', enterData);

