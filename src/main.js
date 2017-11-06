require('./car')

var car;

function setup() {
    createCanvas(windowWidth, windowHeight);
    car = new Car(5);
}

function draw() {
    background(51);
    car.update();
    car.draw();
    if (keyIsPressed) keyDown(keyCode);
}

function keyDown(keyCode) {
    if (keyCode === LEFT_ARROW) {
        car.turn_left();
    } else if (keyCode === RIGHT_ARROW) {
        car.turn_right();
    }
}

