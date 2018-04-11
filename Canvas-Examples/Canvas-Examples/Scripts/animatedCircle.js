let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let circleX = Math.random() * canvas.width;
let circleY = Math.random() * canvas.height;
let circleRadius = 50;
let speedInPixelsPerFrameX = (Math.random() - 0.5) * 100;
let speedInPixelsPerFrameY = (Math.random() - 0.5) * 100;
console.log(speedInPixelsPerFrameX + ", " + speedInPixelsPerFrameY);

animateCircle();

function animateCircle() {
    requestAnimationFrame(animateCircle);

    // Bounce off sides
    if ((circleX + circleRadius) >= canvas.width || (circleX - circleRadius) <= 0) {
        speedInPixelsPerFrameX = -speedInPixelsPerFrameX;
    }

    // Bounce off top/bottom
    if ((circleY + circleRadius) >= canvas.height || (circleY - circleRadius) <= 0) {
        speedInPixelsPerFrameY = -speedInPixelsPerFrameY;
    }

    renderingContext.clearRect(0, 0, canvas.width, canvas.height);
    renderingContext.beginPath();
    renderingContext.arc(circleX, circleY, circleRadius, 0, Math.PI * 2, false);
    renderingContext.stroke();

    circleX += speedInPixelsPerFrameX;
    circleY += speedInPixelsPerFrameY;
}