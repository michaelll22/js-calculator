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

function operate(numOne, numTwo, operation) {
  if (numOne == null || numTwo == null || operation == null) {
    return 0;
  } else if (operation === "+") {
    console.log(`${numOne} + ${numTwo} = ${add(numOne, numTwo)}`);
    return add(numOne, numTwo);
  } else if (operation === "-") {
    console.log(`${numOne} - ${numTwo} = ${subtract(numOne, numTwo)}`);
    return subtract(numOne, numTwo);
  } else if (operation === "x") {
    console.log(`${numOne} x ${numTwo} = ${multiply(numOne, numTwo)}`);
    return multiply(numOne, numTwo);
  } else if (operation === "/") {
    console.log(`${numOne} / ${numTwo} = ${divide(numOne, numTwo)}`);
    return divide(numOne, numTwo);
  }
}

const cal = document.querySelector(".cal");
const operators = document.querySelectorAll(".operation");

function getNum() {
  let value = 0;
  cal.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let currentValue = e.target.textContent;
      value += currentValue;
      value = Number(value);
      console.log(value);
    }
  });
  return value;
}

function calc(operation) {
  let numOne = getNum();
  //   numTwo = getNum();
}

operators.forEach((operator) => {
  numTwo = operator.addEventListener("click", () => getNum());
});

// cal.addEventListener("click", (e) => {
//         if (e.target.tagName === "BUTTON") {
//             let currentValue = e.target.textContent;
//             value += currentValue;
//             value = Number(value);
//             console.log(value);
//     if (e.target.querySelector === ".operation") {
//       console.log("click");
//     }

//     // if (!numOne) {
//     //   numOne = value;
//     //   console.log("NumOne:", numOne);
//     // } else if (!operation && ["+", "-", "x", "/"].includes(value)) {
//     //   operation = value;
//     //   console.log("Operation:", operation);
//     // } else if (!numTwo) {
//     //   numTwo = value;
//     //   console.log("NumTwo:", numTwo);

//     //   // now both numbers and operation are ready
//     //   console.log(
//     //     "Result:",
//     //     operate(Number(numOne), Number(numTwo), operation)
//     //   );
//     // }
//   }
// });
