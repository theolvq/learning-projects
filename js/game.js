const container = document.querySelector(".container");
const button = document.querySelector("#button");
let gridSize = 16;

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

createGrid(gridSize);

const pixel = document.querySelectorAll(".square");

// change square color
function changeColor() {
  pixel.forEach((p) => {
    p.addEventListener("mouseover", function (e) {
      let square = e.target;
      let red = Math.floor(Math.random() * 256 + 1);
      let green = Math.floor(Math.random() * 256 + 1);
      let blue = Math.floor(Math.random() * 256 + 1);

      square.style.backgroundColor = `rgb(${red},${green},${blue})`;

      //   const square = e.target;
      //   square.style.backgroundColor = "black";
    });
  });
}

//reset grid
button.addEventListener("click", function () {
  container.innerHTML = "";
  do {
    gridSize = parseInt(prompt("How many squares per side?"));
  } while (gridSize >= 100);
  createGrid(gridSize);
});

changeColor();
