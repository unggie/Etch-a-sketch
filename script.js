const container = document.querySelector('.container');

const gridSize = 20;
const containerSize =  450;

container.style.width = `${containerSize}px`;
container.style.height = `${containerSize}px`;

gridSizeControl(containerSize, gridSize);

function gridSizeControl(containerSize, numberPerSide) {
    for (let i = 1; i < Math.pow(numberPerSide, 2); i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        div.style.width = `${containerSize / gridSize}px`;
        div.style.height = `${containerSize / gridSize}px`;
        container.appendChild(div);
    }
}