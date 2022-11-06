let btn = document.getElementsByClassName("btn");
const container = document.querySelector(".container");
let grid 

function CreateAGrid(num) {
  for (i = 0; i < num * num; i++) {
    const div = document.createElement("div");
    div.classList.add("ele");
    container.appendChild(div);
  }
  container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
}


container.addEventListener("mouseover", (event) => {
  event.target.style.background = "black";
});

btn[0].addEventListener("click", () => {
  container.innerHTML = "";
  grid = prompt("Enter number of grid: ");
  CreateAGrid(grid);
});

btn[1].addEventListener("click", () => {
  container.innerHTML = "";
  container.style.background = "beige";
  CreateAGrid(grid);
});

