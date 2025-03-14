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

const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number-btn");
const equal = document.querySelector("#equal");

let prevNumber = "";
let currNumber = "";
let currOperator = "";

function appendNumber(number) {
  if (currOperator === "") {
    prevNumber += number;
  } else {
    currNumber += number;
  }
}

function appendOperator(operator) {
  currOperator += operator;
}

equal.addEventListener("click", () => {
  console.log(prevNumber);
  console.log(currOperator);

  console.log(currNumber);

  let result = operate(+prevNumber, currOperator, +currNumber);
  display.textContent = result;
});
