// operation functions
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;
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
  display.textContent = result;
  return result;
};

//button selection
const btns = document.querySelectorAll(".btn");
const digits = document.querySelectorAll(".operand");
const operator = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");

//capture button data
let num1;
let num2;
digits.forEach((d) =>
  d.addEventListener("click", () => {
    if (!num1) {
      num1 = d.dataset.id;
    } else if (num1) {
      num2 = num1;
      num1 = d.dataset.id;
    }
    display.textContent = num1;
  })
);

let op;
operator.forEach((o) =>
  o.addEventListener("click", () => {
    op = o.dataset.id;
  })
);

equal.addEventListener("click", () => operate(num1, num2, op));
