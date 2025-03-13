//1. FUNCITONS TO ADD, SUBTRACT, MULTIPLY AND DIVIDE
//
//2. THREE VARIABLES THAT CONTAIN THE FIRST
//  NUMBER, AN OPERATOR AND THE SECOND NUMBER
//
//3. FUNCTION OPERATE() THAT TAKES THE VARIABLES
//  FROM 2 AND CALLS ONE OF THE FUNCTION ON IT
//
//4. CREATE THE LAYOUT WITH "=", A DISPLAY AND A CLEAR BUTTON
//
//5. FUNCITON THAT DISPLAYS THE NUMBER WHEN CLICKED
//  STORE THE CONTENT IN A VARIABLE TO USE LATER
//
//6. OPERATE() ON THE INPUT WHEN USER CLICKS "=", ACCORDING TO THE
//  OPERATOR THAT WAS SELECTED BETWEEN NUMBERS
//
//7. HOW TO STORE ALL THE VALUES AND CALL THE OPERATE() WITH THEM
//
//

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "XD";
  }
  return a / b;
}

function operate(firstNum, operator, secondNum) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      break;
    case "*":
      result = multiply(firstNum, secondNum);
      break;
    case "/":
      result = divide(firstNum, secondNum);
      break;
  }
  return result;
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");
const clearBtn = document.querySelector("#AC");
const operatorBtns = document.querySelectorAll(".operator-btn");
const equalBtn = document.querySelector("#equal");
const numberBtns = document.querySelectorAll(".number-btn");

let firstNum = [];
let operator = [];
let secondNum = [];

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator.length === 0) {
      firstNum.push(button.textContent);
    } else if (operator.length === 1) {
      secondNum.push(button.textContent);
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator.length === 0) {
      operator.push(button.textContent);
    } else {
    }
  });
});

clearBtn.addEventListener("click", () => {
  display.textContent = "";
  firstNum = [];
  operator = [];
  secondNum = [];
});

equalBtn.addEventListener("click", () => {
  const isAcceptable =
    firstNum.length > 0 && operator.length === 1 && secondNum.length > 0;
  if (isAcceptable) {
    firstNum = +firstNum.join("");
    secondNum = +secondNum.join("");
    operator = operator.join("");
  }

  console.log(operator);

  let result = operate(firstNum, operator, secondNum);
  display.textContent = result;
});

//Store the first and second number and
// call operate with them when =

//if the button is a number button it should be stored
//store it until I click an operator button
//the operator also has to be stored but separately
//After the operator the second number has to be stored until
//I click = or another operator
//When I click = the operate() has to be called with the
// operator and numbers
//
//
