export default class Updatable {
    constructor(x, y, dx, dy) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }
    update() {
        this.x += this.dx;
        this.y += this.dy;
    }
}