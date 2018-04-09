let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawStar();

function drawStar() {
    renderingContext.moveTo(500, 100);
    renderingContext.lineTo(600, 400);
    renderingContext.lineTo(900, 400);
    renderingContext.lineTo(700, 550);
    renderingContext.lineTo(750, 800);
    renderingContext.lineTo(500, 600);
    renderingContext.lineTo(250, 800);
    renderingContext.lineTo(300, 550);
    renderingContext.lineTo(100, 400);
    renderingContext.lineTo(400, 400);
    renderingContext.closePath();
    renderingContext.strokeStyle = "#1c86ee";
    renderingContext.stroke();
}