function populateGrid(size) {
    grid.innerHTML = ""; // Clear the grid if it's not empty

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");

        div.style.width = `${parseInt(window.getComputedStyle(grid).width) / 
        size}px`;
        div.style.height = `${parseInt(window.getComputedStyle(grid).height) / 
        size}px`;

        grid.appendChild(div);

        div.addEventListener("mouseenter", () => {
            div.classList.add("black");
        });
    }
}


const grid = document.querySelector(".grid");
const btnChangeSize = document.querySelector("#change-size");

let startingSize = 16;
populateGrid(startingSize);

btnChangeSize.addEventListener("click", () => {
    newSize = parseInt(prompt("Enter a whole number from 1 to 100:", 16));

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        console.log("Invalid number! Launching defensive measures");
        populateGrid(startingSize);
        btnChangeSize.textContent = "Change Size: 16x16";
    } else {
        populateGrid(newSize);
        btnChangeSize.textContent = `Change Size: ${newSize}x${newSize}`;
    }
});
