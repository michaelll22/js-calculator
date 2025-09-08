let previousNum = "";
let currentNum = "";
let operator = "";

const screen = document.querySelector(".screen");
const current = document.querySelector(".currentNum");
const previous = document.querySelector(".previousNum");

window.addEventListener("keydown", handleKeyPress);

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  if (currentNum != "" && previousNum != "") {
    calculate();
  }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", addDecimal);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearCalc);

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    numHandler(e.target.textContent);
  });
});

function numHandler(num) {
  if (previousNum !== "" && currentNum !== "" && operator === "") {
    previousNum = "";
    current.textContent = currentNum;
  }

  if (currentNum.length <= 11) {
    currentNum += num;
    current.textContent = currentNum;
  }
}

operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (currentNum !== "") {
      opHandler(e.target.textContent);
    }
  });
});

function opHandler(op) {
  if (previousNum === "") {
    previousNum = currentNum;
    opCheck(op);
  } else if (currentNum === "") {
    opCheck(op);
  } else {
    calculate();
    operator = op;
    current.textContent = "0";
    previous.textContent = previousNum + ` ${operator}`;
  }
}

function opCheck(text) {
  operator = text;
  previous.textContent = previousNum + ` ${operator}`;
  current.textContent = "0";
  currentNum = "";
}

function calculate() {
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);

  if (operator === "+") {
    previousNum = add(previousNum, currentNum);
  }
  if (operator === "-") {
    previousNum = sub(previousNum, currentNum);
  }
  if (operator === "x") {
    previousNum = mul(previousNum, currentNum);
  }
  if (operator === "/") {
    previousNum = div(previousNum, currentNum);
  }

  previousNum = previousNum.toString();
  displayResult();
}

function displayResult() {
  if (previousNum.length <= 11) {
    current.textContent = previousNum;
  } else {
    current.textContent = previousNum.slice(0, 11) + "...";
  }
  previous.textContent = "";
  operator = "";
  currentNum = "";
}

function clearCalc() {
  previousNum = "";
  currentNum = "";
  operator = "";

  current.textContent = "";
  previous.textContent = "";
}

function addDecimal() {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    current.textContent = currentNum;
  }
}

// main calc
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  if (b == 0) {
    return "ERROR";
  }
  return a / b;
}

function handleKeyPress(e) {
  e.preventDefault();
  console.log(e.key);

  if (e.key >= 0 && e.key <= 9) {
    numHandler(e.key);
  }

  if (e.key === "+") {
    opHandler(e.key);
  } else if (e.key === "-") {
    opHandler(e.key);
  } else if (e.key === "/") {
    opHandler(e.key);
  } else if (e.key === "*") {
    opHandler("x");
  }

  if (
    e.key === "Enter" ||
    (e.key === "=" && currentNum !== "" && previousNum !== "")
  ) {
    calculate();
  }

  if (e.key === "Backspace") {
    handleDelete();
  }
}

function handleDelete() {
  if (currentNum !== "") {
    currentNum = currentNum.slice(0, -1);
  }
  current.textContent = currentNum;
  if (currentNum === "") {
    current.textContent = "0";
  }
}
