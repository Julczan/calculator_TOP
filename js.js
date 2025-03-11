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

const numberBtns = document.querySelectorAll(".number-btn");
numberBtns.forEach((button) => {});
//Store the first and second number and
// call operate with them when =

//
//If I click on the operator first nothing happens
// It has to be number -> operator -> number
// if I click on a number it should be stored in the first number
// every number until I click an operator
//if I click an operator it should be stored in the operatr
//then another number stored in second number
//if I click another operator the result has to appear
let firstNum = [];
let secondNum = [];
let operator = [];
