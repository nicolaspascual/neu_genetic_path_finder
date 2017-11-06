require('./updatable');
require('../lib/p5/p5');

export default class Car extends Updatable {
    constructor(velocity) {
        super(10, 10, 0, 0);
        this.angle = 0.0;

        this.velocity = velocity;
        this._recalculate_velocity();
    }

    turn_right() {
        this.angle += PI / 90;
        this._recalculate_velocity();
    }

    turn_left() {
        this.angle -= PI / 90;
        this._recalculate_velocity();
    }

    _recalculate_velocity() {
        this.dx = Math.sin(this.angle) * this.velocity;
        this.dy = Math.cos(this.angle) * this.velocity;
    }


    draw() {
        var side_long = 30,
            side_small = side_long / 2;
        translate(this.x, this.y);
        rotate(-this.angle);
        triangle(0, 0,
            0 - (side_small / 2), 0 - side_long,
            0 + (side_small / 2), 0 - side_long);
    }
}