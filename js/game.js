const container = document.querySelector(".container");
const btnReset = document.querySelector(".btn-reset");
const btnResize = document.querySelector(".btn-resize");
const btnBlack = document.querySelector(".btn-black");
const btnRainbow = document.querySelector(".btn-rainbow");
const pixel = document.querySelectorAll(".square");
let gridSize = 16;
let color = "black";

//reset grid
btnReset.addEventListener("click", () => {
  resetGrid();
});

btnBlack.addEventListener("click", () => ((color = "black"), resetGrid()));
btnRainbow.addEventListener("click", () => ((color = "rainbow"), resetGrid()));

// change square color
function changeColor(e) {
  if (color === "black") {
    e.style.backgroundColor = "black";
  } else if (color === "rainbow") {
    let red = Math.floor(Math.random() * 256 + 1);
    let green = Math.floor(Math.random() * 256 + 1);
    let blue = Math.floor(Math.random() * 256 + 1);
    e.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }
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
btnResize.addEventListener("click", () => {
  do {
    gridSize = parseInt(prompt("How many squares per side?"));
  } while (gridSize >= 100);
  createGrid(gridSize);
});

function resetGrid() {
  const square = document.querySelectorAll(".square");
  square.forEach((s) => (s.style.backgroundColor = "white"));
}
