var Ball = (function () {
    function Ball(x, y) {
        this.width = 29;
        this.height = 30;
        this.velocity = 1.5;
        this.velocityModifier = 0;
        this.movement = {left: false, right : false, up: false, down: true};
        //this.isHit = false;


        this.position = new Vector2(x, y);
        this.animation = new Animation(this.width, this.height, 0, 0, 8, 'images/ball.PNG', 8, 3, 3);
        this.boundingBox = new Rectangle(x, y, this.width, this.height);
    }

    Ball.prototype.update = function () {
        if(this.movement.up) {
            this.position.y -= this.velocity + this.velocityModifier;
        }

        if(this.movement.down) {
            this.position.y += this.velocity + this.velocityModifier;
        }

        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;

    };

    Ball.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return Ball;
}());
