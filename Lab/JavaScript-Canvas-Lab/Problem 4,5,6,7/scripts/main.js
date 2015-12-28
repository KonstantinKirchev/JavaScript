var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var input = new Input();
attachListeners(input);

var playerOne = new PlayerOne(canvas.width - 200, 10);
var playerTwo = new PlayerTwo(canvas.width - 200, 550);
var ball = new Ball(100, 100);

var previousTime = Date.now();


function update() {
    this.tick();
    this.render(ctx);
    //return;
    requestAnimationFrame(update);
}

function tick() {
    movePlayerOne();
    movePlayerTwo();
    modifyBallSpeed();

    //ball.movement.right = true;

    if(playerOne.boundingBox.intersects(ball.boundingBox)) {
        ball.animation.setRow(2);
        ball.animation.setColumn(2);
        ball.animation.setLimit(1);

        //ball.isHit = true;
        ball.movement.down = true;
        ball.movement.up = false;
    }
    if(playerTwo.boundingBox.intersects(ball.boundingBox)) {
        ball.animation.setRow(2);
        ball.animation.setColumn(2);
        ball.animation.setLimit(1);

        //ball.isHit = true;
        ball.movement.up = true;
        ball.movement.down = false;
    }

    ball.update();
    playerOne.update();
    playerTwo.update();
}

function render(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerOne.render(ctx);
    playerTwo.render(ctx);
    ball.render(ctx);
}

function movePlayerOne() {
    playerOne.movement.right = !!input.right;
    playerOne.movement.left = !!input.left;
}

function movePlayerTwo() {
    playerTwo.movement.right = !!input.right;
    playerTwo.movement.left = !!input.left;
}

function modifyBallSpeed() {
    var now = Date.now();
    var difference = Math.abs(now - previousTime) / 1000;
    if(difference >= 10) {
        previousTime = now;
        ball.velocityModifier += 0.1;
    }
}

update();
