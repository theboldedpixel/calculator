// Basic calculation functions

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => (a * b);
let divide = (a, b) => (a / b);

// Operate function to display results
function operate(a, operator, b) {
  if (operator === '/' && b === 0) {
    alert('You can\'t divide by zero!');
    clearAll();
  } else if (operator === '+') {
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
let numD = [];

let operator = null;
let operator2 = null;
let operator3 = null;


function displayAsPressed() {
  if (operator3 !== null && numD.length > 0) {
    content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + operator2 + ' ' + Number(numC.join('')) + ' ' + operator3 + ' ' + Number(numD.join(''));
  } else if (operator3 !== null && numD.length === 0) {
      content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2 + ' ' + Number(numC.join('')) + ' ' + operator3;
  } else if (operator2 !== null && numC.length > 0) {
    content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2 + ' ' + Number(numC.join(''));
  } else if (operator2 !== null && numC.length === 0) {
    content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2;
  } else if (operator !== null && numB.length > 0) {
    content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join(''));
  } else if (operator !== null && numB.length === 0) {
    content.textContent = Number(numA.join('')) + ' ' + operator;
  } else {
    content.textContent = Number(numA.join(''));
  }
}


// {
//   if (operator3 !== null && numD.length === 0){
//     content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2 + ' ' + Number(numC.join('')) + ' ' + operator3;
//   } else if (operator3 !== null) {
//     content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2 + ' ' + Number(numC.join('')) + ' ' + operator3 + ' ' + Number(numD.join(''));
//   } else if (operator2 !== null && numC.length === 0) {
//     content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2;
//   } else if (operator2 !== null & numC.length > 0) {
//     content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2 + ' ' + Number(numC.join(''));
//   } else if (operator2 !== null) {
//     content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) + ' ' + operator2 + ' ' + Number(numC.join(''));
//   } else if (operator !== null && numB.length === 0) {
//     content.textContent = Number(numA.join('')) + ' ' + operator;
//   } else if (operator !== null) {
//     content.textContent = Number(numA.join('')) + ' ' + operator + ' ' + Number(numB.join('')) 
//   } else {
//     content.textContent = Number(numA.join(''));
//   }
// }



function pressedOne() {
  if (operator3 !== null) {
    numD.push('1')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('1');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('1');
    displayAsPressed();
  } else {
    numB.push('1');
    displayAsPressed();
  }
}

function pressedTwo() {
  if (operator3 !== null) {
    numD.push('2')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('2');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('2');
    displayAsPressed();
  } else {
    numB.push('2');
    displayAsPressed();
  }
}
function pressedThree() {
  if (operator3 !== null) {
    numD.push('3')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('3');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('3');
    displayAsPressed();
  } else {
    numB.push('3');
    displayAsPressed();
  }
}
function pressedFour() {
  if (operator3 !== null) {
    numD.push('4')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('4');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('4');
    displayAsPressed();
  } else {
    numB.push('4');
    displayAsPressed();
  }
}
function pressedFive() {
  if (operator3 !== null) {
    numD.push('5')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('5');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('5');
    displayAsPressed();
  } else {
    numB.push('5');
    displayAsPressed();
  }
}
function pressedSix() {
  if (operator3 !== null) {
    numD.push('6')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('6');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('6');
    displayAsPressed();
  } else {
    numB.push('6');
    displayAsPressed();
  }
}
function pressedSeven() {
  if (operator3 !== null) {
    numD.push('7')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('7');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('7');
    displayAsPressed();
  } else {
    numB.push('7');
    displayAsPressed();
  }
}
function pressedEight() {
  if (operator3 !== null) {
    numD.push('8')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('8');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('8');
    displayAsPressed();
  } else {
    numB.push('8');
    displayAsPressed();
  }
}
function pressedNine() {
  if (operator3 !== null) {
    numD.push('9')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('9');
    displayAsPressed();
  } else if (operator === null) {
    numA.push('9');
    displayAsPressed();
  } else {
    numB.push('9');
    displayAsPressed();
  }
}
function pressedZero() {
  if (operator3 !== null) {
    numD.push('0')
    displayAsPressed();
  } else if (operator2 !== null) {
    numC.push('0');
    displayAsPressed();
  } else if (operator === null) {
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
  if (operator !== null && operator2 !== null) {
    operator3 = '+';
    displayAsPressed();
  } else if (operator !== null) {
    operator2 = '+';
    displayAsPressed();
  } else {

  operator = '+';
  displayAsPressed();
  }
}

function subractIt() {
  if (operator !== null && operator2 !== null) {
    operator3 = '-';
    displayAsPressed();
  } else if (operator !== null) {
    operator2 = '-';
    displayAsPressed();
  } else {
  operator = '-';
  displayAsPressed();
 }
}

function multiplyIt() {
  if (operator !== null && operator2 !== null) {
    operator3 = '*';
    displayAsPressed();
  } else if (operator !== null) {
    operator2 = '*';
    displayAsPressed();
  } else {
  operator = '*';
  displayAsPressed();
  }
}

function divideIt() {
  if (operator !== null && operator2 !== null) {
    operator3 = '/';
    displayAsPressed();
  } else if (operator !== null) {
    operator2 = '/';
    displayAsPressed();
  } else {

  operator = '/';
  displayAsPressed();
  }
}

function clearAll() {
  numA = [];
  numB = [];
  numC = [];
  numD = [];
  operator = null;
  operator2 = null;
  operator3 = null;
  content.textContent = 'Enter equation here'
}

// function enterData() {
//   let numACombined = Number(numA.join(''));
//   let numBCombined = Number(numB.join(''));

//   newAnswer = operate(numACombined, operator, numBCombined);
//   console.log(newAnswer);
//   content.textContent = newAnswer;
// }

// Display text
const content = document.querySelector('.content');


// Switch for enterData()

function enterData() {
  // Simple math with 2 integers
  if (operator2 === null){
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));

    newAnswer = operate(numACombined, operator, numBCombined);
    console.log(newAnswer);
    content.textContent = newAnswer;
    // Three integers, first operator division. GOes in direct order
  } else if (operator3 === null && operator === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));

    newAnswer = operate(numACombined, operator, numBCombined);
    nextAnswer = operate(newAnswer, operator2, numCCombined);
    content.textContent = nextAnswer;
    // Three integers, first operator multiplication. Goes in direct order
  } else if (operator3 === null && operator === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = operate(newAnswer, operator2, numCCombined);
    content.textContent = nextAnswer;
    console.log(nextAnswer);
  // Three integers, second operator multiplication. B * C = D. A + D
  } else if (operator3 === null && operator2 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));

    newAnswer = Number(operate(numBCombined, operator2, numCCombined));
    nextAnswer = operate(numACombined, operator, newAnswer);
    content.textContent = nextAnswer;
    console.log(nextAnswer);
    // Three integers, second operator division. B * C = D. A + D
  } else if (operator3 === null && operator2 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));

    newAnswer = Number(operate(numBCombined, operator2, numCCombined));
    nextAnswer = operate(numACombined, operator, newAnswer);
    content.textContent = nextAnswer;
    console.log(nextAnswer);
    // Everything else without 4th integer
  } else if (operator3 === null) {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = operate(newAnswer, operator2, numCCombined);
    content.textContent = nextAnswer;
    console.log(nextAnswer);

    // 4th integer

    // Brain hurts. First & Second Operator division. Straight Order.
  } else if (operator === '/' && operator2 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(newAnswer, operator2, numCCombined));
    nextNextAnswer = operate(nextAnswer, operator3, numDCombined);
    content.textContent = nextNextAnswer;
  } else if (operator === '/' && operator2 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(newAnswer, operator2, numCCombined));
    nextNextAnswer = operate(nextAnswer, operator3, numDCombined);
    content.textContent = nextNextAnswer;
} else if (operator === '*' && operator2 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(newAnswer, operator2, numCCombined));
    nextNextAnswer = operate(nextAnswer, operator3, numDCombined);
    content.textContent = nextNextAnswer;
} else if (operator === '*' && operator2 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(newAnswer, operator2, numCCombined));
    nextNextAnswer = operate(nextAnswer, operator3, numDCombined);
    content.textContent = nextNextAnswer;
    // First operator divide. Third multiply. 
} else if (operator === '/' && operator3 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(numCCombined, operator3, numDCombined));
    nextNextAnswer = operate(newAnswer, operator2, nextAnswer);
    content.textContent = nextNextAnswer;
} else if (operator === '/' && operator3 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(numCCombined, operator3, numDCombined));
    nextNextAnswer = operate(newAnswer, operator2, nextAnswer);
    content.textContent = nextNextAnswer;
} else if (operator === '*' && operator3 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(numCCombined, operator3, numDCombined));
    nextNextAnswer = operate(newAnswer, operator2, nextAnswer);
    content.textContent = nextNextAnswer;
} else if (operator === '*' && operator3 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(numCCombined, operator3, numDCombined));
    nextNextAnswer = operate(newAnswer, operator2, nextAnswer);
    content.textContent = nextNextAnswer;
    // Only operator2.
}  else if (operator2 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numBCombined, operator2, numCCombined));
    nextAnswer = Number(operate(numACombined, operator, numACombined));
    nextNextAnswer = operate(nextAnswer, operator2, numDCombined);
    content.textContent = nextNextAnswer;
} else if (operator2 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numBCombined, operator2, numCCombined));
    nextAnswer = Number(operate(numACombined, operator, numACombined));
    nextNextAnswer = operate(nextAnswer, operator2, numDCombined);
    content.textContent = nextNextAnswer;
    // Only operator3
} else if (operator3 === '*') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numCCombined, operator3, numDCombined));
    nextAnswer = Number(operate(numACombined, operator, numBCombined));
    nextNextAnswer = operate(nextAnswer, operator2, newAnswer);
    content.textContent = nextNextAnswer;
} else if (operator3 === '/') {
    let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numCCombined, operator3, numDCombined));
    nextAnswer = Number(operate(numACombined, operator, numBCombined));
    nextNextAnswer = operate(nextAnswer, operator2, newAnswer);
    content.textContent = nextNextAnswer;
} else {
  let numACombined = Number(numA.join(''));
    let numBCombined = Number(numB.join(''));
    let numCCombined = Number(numC.join(''));
    let numDCombined = Number(numD.join(''));

    newAnswer = Number(operate(numACombined, operator, numBCombined));
    nextAnswer = Number(operate(newAnswer, operator2, numCCombined));
    nextNextAnswer = operate(nextAnswer, operator3, numDCombined);
    content.textContent = nextNextAnswer;
}
}