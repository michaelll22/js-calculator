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
  return a / b;
}

const numbers = document.querySelectorAll(".number");

const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const currentScreen = document.querySelector(".current");
const previousScreen = document.querySelector(".previous");

currentScreen.textContent = "0";

let currentValue = "";
let previousValue = "";
let operator;
let result;

numbers.forEach((numbers) =>
  numbers.addEventListener("click", (e) => {
    if (result !== null && currentValue !== null) {
      result = null;
      currentValue = "";
      handleNum(e);
    } else handleNum(e);
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    if (!currentValue && !previousValue) return;
    handleOp(e);
  })
);

equal.addEventListener("click", () => {
  if (currentValue && previousValue) handleComp(operator);
  return;
});

decimal.addEventListener("click", handleDec);

function handleNum(e) {
  if (currentValue.split("").length === 12) {
    return;
  }
  let number = e.target.textContent;
  currentValue += number;
  currentScreen.textContent = currentValue;
}

function handleOp(e) {
  operator = e.target.textContent;

  previousValue = currentValue;
  currentValue = "";
  previousScreen.textContent = `${previousValue} ${operator} `;
  currentScreen.textContent = currentValue;
}

function handleDec() {
  if (currentValue.includes(".")) {
    return;
  }

  currentValue += ".";
  currentScreen.textContent;
}

function handleComp(operator) {
  let currentNum = parseFloat(currentValue);
  let previousNum = parseFloat(previousValue);

  switch (operator) {
    case "+":
      result = add(currentNum, previousNum);
      break;

    case "-":
      result = subtract(currentNum, previousNum);
      break;

    case "X":
      result = multiply(currentNum, previousNum);
      break;

    case "/":
      result = divide(currentNum, previousNum);
      break;

    default:
      break;
  }
  result = result.toString();
  if (result.split("").length === 14) {
    result = result.splice(result.split("").length, 3) + "...";
  }

  currentValue = result;
  previousScreen.textContent = "";
  currentScreen.textContent = currentValue;
}
