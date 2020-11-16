//button selection
const btns = document.querySelectorAll(".btn");
const digits = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");

// operation functions
const add = (a, b) => parseInt(a) + parseInt(b);
const sub = (a, b) => parseInt(a) - parseInt(b);
const mult = (a, b) => parseInt(a) * parseInt(b);
const div = (a, b) => parseInt(a) / parseInt(b);
const operate = (n1, n2, operator) => {
  let result;
  if (operator === "+") {
    result = add(n1, n2);
  } else if (operator === "-") {
    result = sub(n1, n2);
  } else if (operator === "*") {
    result = mult(n1, n2);
  } else if (operator == "/") {
    result = div(n1, n2);
  }
  display.textContent = result.toFixed(6);
  return result;
};

//capture button data
let num1;
let num2;
digits.forEach((d) =>
  d.addEventListener("click", () => {
    if (!num1) {
      num1 = d.dataset.id;
      display.textContent = num1;
    } else if (num1) {
      num2 = d.dataset.id;
      display.textContent = num2;
    }
    if (!op) {
    }
  })
);

let op;
operator.forEach((o) =>
  o.addEventListener("click", () => {
    op = o.dataset.id;
  })
);

equal.addEventListener("click", () => operate(num1, num2, op));

const clearFn = () => {
  display.textContent = "";
  num1 = "";
  num2 = "";
};

clear.addEventListener("click", () => clearFn());
