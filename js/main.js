const container = document.querySelector(".container");
let gridSize = parseInt(prompt("What grid size would you like?"));
let pixel = document.getElementsByClassName('.square')

function createDivs(gridSize) {
  for (i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("square")
    

    for (let j = 0; j < gridSize; j++) {
      const column = document.createElement("div");
      column.classList.add("square");
      column.style.width = `${960/gridSize}px`
      column.style.height = `${500/gridSize}px`
      container.appendChild(column);
    }
    container.appendChild(row);
  }
}
createDivs(gridSize);

function getGridSize() {
  container.style.flexBasis = `${100 / gridSize}%;`;
}
getGridSize();


container.addEventListener("mouseover", changeColor);

function changeColor(e) {
    let square = e.target;
    let red = Math.floor(Math.random() * 256 + 1);
    let green = Math.floor(Math.random() * 256 + 1);
    let blue = Math.floor(Math.random() * 256 + 1);
                     
    return (square.style.backgroundColor = `rgb(${red},${green},${blue})`);
}

// function getColor(event) {let square = event.target ... rest of your code}

const grid = document.querySelectorAll("div");
// grid.forEach((div) => div.addEventListener('mouseenter', changeColor))

// function changeColor() {
//     grid.forEach((div) =>{
//         div.style.background = 'black'

//     })
//     console.log('Kinda works')
// }
