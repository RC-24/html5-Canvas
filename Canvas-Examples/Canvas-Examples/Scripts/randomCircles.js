let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawRandomCircles(20);

function drawRandomCircles(numberOfCircles) {
    let maxCircleSize = 100;

    for (i = 1; i <= numberOfCircles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * maxCircleSize;

        renderingContext.beginPath();
        renderingContext.arc(x, y, radius, 0, Math.PI * 2, false);
        renderingContext.stroke();
    }
}