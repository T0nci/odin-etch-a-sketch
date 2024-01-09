const grid = document.querySelector(".grid");
let startingSize = 16;
populateGrid(startingSize, grid);

const btnChangeSize = document.querySelector("#change-size");
btnChangeSize.addEventListener("click", () => {
    newSize = parseInt(prompt("Enter a whole number from 1 to 100:", 16));

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        console.log("Invalid number! Launching defensive measures");
        populateGrid(startingSize, grid);
        btnChangeSize.textContent = "Change Size: 16x16";
    } else {
        populateGrid(newSize, grid);
        btnChangeSize.textContent = `Change Size: ${newSize}x${newSize}`;
    }
});

const arrayButtons = [];
const btnRandomRGB = document.querySelector("#randomRGB");
const btnDarken = document.querySelector("#darken");
arrayButtons.push(btnRandomRGB, btnDarken);
arrayButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.style.backgroundColor === "lightsalmon") {
            btn.style.backgroundColor = "";
        } else {
            arrayButtons.forEach((button) => {
                if (button.style.backgroundColor === "lightsalmon") {
                    button.style.backgroundColor = "";
                }
            });
            btn.style.backgroundColor = "lightsalmon";
        }
    });
});


function populateGrid(size, grid) {
    grid.innerHTML = ""; // Clear the grid if it's not empty

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");

        div.style.width = `${parseInt(window.getComputedStyle(grid).width) / size}px`;
        div.style.height = `${parseInt(window.getComputedStyle(grid).height) / size}px`;
        div.style.backgroundColor = "rgb(255 255 255)"; // white

        grid.appendChild(div);

        div.addEventListener("mouseenter", () => {
            if (btnDarken.style.backgroundColor === "lightsalmon") {
                div.style.backgroundColor = 
                    darkenColor(div.style.backgroundColor);
            } else if (btnRandomRGB.style.backgroundColor === "lightsalmon") {
                div.style.backgroundColor = getRGBColor();
            } else {
                div.style.backgroundColor = "rgb(0 0 0)";
            }
        });
    }
}


function getRandomRGB() {
    return Math.floor(Math.random() * 256); // from 0 to 255
}


function getRGBColor() {
    return `rgb(${getRandomRGB()} ${getRandomRGB()} ${getRandomRGB()})`;
}


function darkenColor(background) {
    const TEN_PERCENT = 255 * (10/100);

    const numbers = background.replace("rgb(", "").replace(")", "").split(" ");
    numbers.forEach((num, index, array) => {
        num = parseInt(num);
        if (num === 0) array[index] = num;
        else array[index] = (num - TEN_PERCENT);
    });

    return `rgb(${numbers[0]} ${numbers[1]} ${numbers[2]})`;
}
