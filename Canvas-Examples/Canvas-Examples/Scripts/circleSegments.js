let canvas = document.getElementById("example");
let renderingContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawCircleSegments();

function drawCircleSegments() {
    for (j = 1; j <= 2; j++) {
        renderingContext.moveTo(140, 200 * j);
        for (i = 1; i <= 4; i++) {
            let x = 100 * i;
            let y = 200 * j;
            let endRadian = (Math.PI / 2) * i;
            renderingContext.arc(x, y, 40, 0, endRadian);
            renderingContext.closePath();
            renderingContext.moveTo((100 * (i + 1)) + 40, 200 * j);
        }
        (j % 2 === 0) ? renderingContext.stroke() : renderingContext.fill();
    }
}