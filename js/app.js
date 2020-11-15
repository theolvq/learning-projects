// operation functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

//button selection
const btns = document.querySelectorAll(".btn");
const operand = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");

//capture button data
const number = [];
operand.forEach((n) =>
  n.addEventListener("click", () => number.push(n.dataset.id))
);
let operation = operator.forEach((o) =>
  o.addEventListener("click", () => o.dataset.id)
);

const calculator = () => {
  let result;
  if (operation === "+") {
    result = add(number[0], number[1]);
  } else if (operation === "-") {
    result = sub(number[0], number[1]);
  } else if (operation === "/") {
    result = div(number[0], number[1]);
  } else if (operation === "x") {
    result = mult(number[0], number[1]);
  }
  return result;
};

const displayResult = () => {
  display.textContent = result;
};

equal.addEventListener("click", () => {
  calculator();
});
