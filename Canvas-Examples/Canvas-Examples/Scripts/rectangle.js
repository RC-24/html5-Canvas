let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawRectangles();

function drawRectangles() {
    // Rectangle 1
    renderingContext.fillRect(90, 90, 150, 70);

    // Rectangle 2
    renderingContext.strokeRect(400, 90, 250, 400);

    // Rectangle 3
    renderingContext.fillRect(800, 90, 200, 90);
    renderingContext.clearRect(810, 100, 180, 70);
}