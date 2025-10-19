const container = document.querySelector('.container');
const bnt = document.querySelector(".btn");

const gridSize = 16;
const containerSize =  450;

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

gridSizeControl(containerSize, gridSize);

bnt.addEventListener('click', () => {
    const sides = prompt("Enter the number of pixel per side (1 to 100).");
    
    if (sides == null || sides >= 101 || sides < 0)  {
        alert("Insert a number within range");
        return;
    }
    container.replaceChildren();
    gridSizeControl(containerSize, sides);
})
container.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = "black"
    }
})
function gridSizeControl(containerSize, numberPerSide) {
    for (let i = 1; i <= Math.pow(numberPerSide, 2); i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.style.width = `${(containerSize / numberPerSide)}px`;
        div.style.height = `${(containerSize / numberPerSide)}px`;
        container.appendChild(div);
    }
}