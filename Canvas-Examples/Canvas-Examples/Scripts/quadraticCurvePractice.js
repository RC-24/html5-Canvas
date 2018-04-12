let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawQuadraticCurve();

function drawQuadraticCurve() {
    let startX = 500;
    let startY = 500;
    let endX = 450;
    let endY = 600;

    renderingContext.moveTo(startX, startY);
    renderingContext.quadraticCurveTo(300, 300, endX, endY)
    renderingContext.stroke();
}