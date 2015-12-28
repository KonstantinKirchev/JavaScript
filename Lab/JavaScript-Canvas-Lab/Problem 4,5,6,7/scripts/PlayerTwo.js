var PlayerTwo = (function(){
    function PlayerTwo(x, y) {
        this.position = new Vector2(x, y);
        this.movement = {left: false, right : false};
        this.velocity = 20;

        this.width = 128;
        this.height = 45;

        this.animation = new Animation( this.width, this.height, 0, 46, 22, 'images/paddles.PNG', 22, 5, 5);
        this.boundingBox = new Rectangle ( x, y, this.width, this.height)
    }

    PlayerTwo.prototype.update = function() {
        if(this.movement.right) {
            this.position.x += this.velocity;
        } else if(this.movement.left) {
            this.position.x -= this.velocity;
        }

        this.animation.position.set(this.position.x, this.position.y);
        this.boundingBox.x = this.position.x;
        this.boundingBox.y = this.position.y;

        //this.animation.update();
    };

    PlayerTwo.prototype.render = function(ctx) {
        this.animation.draw(ctx);
    };

    return PlayerTwo;
}());
