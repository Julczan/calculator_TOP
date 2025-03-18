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
const clear = document.querySelector("#AC");

let prevNumber = "";
let currNumber = "";
let currOperator = "";
let result = "";

function appendNumber(number) {
  if (result !== "") {
    result = "";
  }
  currNumber += number;
  display.textContent = currNumber;
}

function appendOperator(operator) {
  if (result !== "") {
    prevNumber = result;
    currOperator = operator;
    currNumber = "";
  } else {
    currOperator = operator;
    prevNumber = currNumber;
    currNumber = "";
  }
}

equal.addEventListener("click", () => {
  console.log(prevNumber);
  console.log(currOperator);
  console.log(currNumber);

  const isAcceptable =
    prevNumber !== "" && currOperator !== "" && currNumber !== "";
  if (isAcceptable) {
    result = operate(+prevNumber, currOperator, +currNumber);
    currNumber = "";
    currOperator = "";
  }

  display.textContent = result;
});

clear.addEventListener("click", () => {
  display.textContent = "";
  prevNumber = "";
  currNumber = "";
  currOperator = "";
  result = "";
});
