let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawRandomCircles(200);

function drawRandomCircles(numberOfCircles) {
    let maxCircleSize = 100;

    for (i = 1; i <= numberOfCircles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let radius = Math.random() * maxCircleSize;
        let color = getRandomRgbColor();

        renderingContext.beginPath();
        renderingContext.arc(x, y, radius, 0, Math.PI * 2, false);
        renderingContext.strokeStyle = color;
        renderingContext.stroke();
    }
}

function getRandomRgbColor() {
    let red = Math.floor(Math.random() * 255.99);
    let green = Math.floor(Math.random() * 255.99);
    let blue = Math.floor(Math.random() * 255.99);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}