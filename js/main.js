let maze;
let ball;
let mazeWidth = 10;
let mazeHeight = 10;
let cellSize;
let ballPosition;
let endPosition;



function setup() {
    createCanvas(windowWidth, windowHeight);
    cellSize = min(width, height) / max(mazeWidth, mazeHeight);
    ballPosition = createVector(1, 1);
    endPosition = createVector(mazeWidth - 2, mazeHeight - 2);
    drawMaze();
}

function draw() {
    background(255);
    drawMaze();
    drawBall();
}

function drawMaze() {
    for (let y = 0; y < mazeHeight; y++) {
        for (let x = 0; x < mazeWidth; x++) {
            if (maze[y][x].top) {
                line(x * cellSize, y * cellSize, (x + 1) * cellSize, y * cellSize);
            }
            if (maze[y][x].right) {
                line((x + 1) * cellSize, y * cellSize, (x + 1) * cellSize, (y + 1) * cellSize);
            }
            if (maze[y][x].bottom) {
                line(x * cellSize, (y + 1) * cellSize, (x + 1) * cellSize, (y + 1) * cellSize);
            }
            if (maze[y][x].left) {
                line(x * cellSize, y * cellSize, x * cellSize, (y + 1) * cellSize);
            }
        }
    }
}

function drawBall() {
    let x = ballPosition.x * cellSize + cellSize / 2;
    let y = ballPosition.y * cellSize + cellSize / 2;
    ellipse(x, y, cellSize * 0.8);
}

