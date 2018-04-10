let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

drawSmileyFace();

function drawSmileyFace() {
    // Outer circle
    renderingContext.arc(500, 500, 300, 0, 2 * Math.PI);

    // Eyes
    renderingContext.moveTo(450, 400);
    renderingContext.arc(400, 400, 50, 0, 2 * Math.PI);
    renderingContext.moveTo(650, 400);
    renderingContext.arc(600, 400, 50, 0, 2 * Math.PI);

    // Smile
    renderingContext.moveTo(700, 500);
    renderingContext.arc(500, 500, 200, 0, Math.PI);

    renderingContext.stroke();
}