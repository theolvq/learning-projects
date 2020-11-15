const container = document.querySelector(".container");
const btnReset = document.querySelector(".btn-reset");
btnResize = document.querySelector(".btn-resize");
const pixel = document.querySelectorAll(".square");
let gridSize = 16;

// change square color
function changeColor(e) {
  e.classList.add("square-black");
}

// create grid
function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseenter", () => changeColor(square));
    container.appendChild(square);
  }
}

window.addEventListener("DOMContentLoaded", createGrid(gridSize));

//resize grid
btnResize.addEventListener("click", function () {
  do {
    gridSize = parseInt(prompt("How many squares per side?"));
  } while (gridSize >= 100);
  createGrid(gridSize);
});

//reset grid
btnReset.addEventListener("click", function () {
  pixel.forEach((p) => p.classList.remove("square-black"));
});
