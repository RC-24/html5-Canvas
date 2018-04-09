let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

DrawTriangle();

function DrawTriangle() {
    renderingContext.beginPath();
    renderingContext.moveTo(canvas.width * 0.5, canvas.height * 0.1);
    renderingContext.lineTo(canvas.width * 0.75, canvas.height * 0.9);
    renderingContext.lineTo(canvas.width * 0.25, canvas.height * 0.9);
    renderingContext.closePath();
    renderingContext.stroke();
}