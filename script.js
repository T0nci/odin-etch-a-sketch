const grid = document.querySelector(".grid");
let size = 16;

for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.style.width = `${parseInt(window.getComputedStyle(grid).width) / 
    size}px`;
    div.style.height = `${parseInt(window.getComputedStyle(grid).height) / 
    size}px`;
    grid.appendChild(div);
}
