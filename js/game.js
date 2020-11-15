const container = document.querySelector(".container");
const btnReset = document.querySelector(".btn-reset");
btnResize = document.querySelector(".btn-resize");
let gridSize = 16;

//resize grid
btnResize.addEventListener("click", function () {
  pixel.forEach((p) => p.remove());
  do {
    gridSize = parseInt(prompt("How many squares per side?"));
  } while (gridSize >= 100);
  createGrid(gridSize);
});

//reset grid
btnReset.addEventListener("click", function () {
  pixel.forEach((p) => p.classList.remove("square-black"));
});

// create grid
function createGrid(size) {
  if (size <= 100) {
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  }
}

window.addEventListener("DOMContentLoaded", createGrid(gridSize));

const pixel = document.querySelectorAll(".square");

// change square color
pixel.forEach((p) => {
  p.addEventListener("mouseenter", function (e) {
    let square = e.target;
    square.classList.add("square-black");
  });
});
