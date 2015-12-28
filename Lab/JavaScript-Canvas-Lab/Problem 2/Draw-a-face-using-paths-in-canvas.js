var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//face
ctx.beginPath();
ctx.arc(250, 250, 100, 0, 10);
ctx.lineWidth = 5;
ctx.fillStyle = 'lightblue';
ctx.fill();

ctx.arc(250, 250, 100, 0, 10);
ctx.lineWidth = 5;
ctx.strokeStyle = 'grey';
ctx.stroke();

//nose
ctx.beginPath();
ctx.moveTo(250,200);
ctx.lineTo(230,250);
ctx.lineTo(250,250);
ctx.stroke();

//left eye
ctx.beginPath();
ctx.ellipse(200,220,20,10,0,0,Math.PI*2);
ctx.strokeStyle = 'grey' ;
ctx.lineWidth = 3;
ctx.stroke();

//left pupil
ctx.beginPath();
ctx.ellipse(195,220,6,10,0,0,Math.PI*2);
ctx.fillStyle = 'grey';
ctx.fill();

//right eye
ctx.beginPath();
ctx.ellipse(280,220,20,10,0,0,Math.PI*2);
ctx.strokeStyle = 'grey' ;
ctx.lineWidth = 3;
ctx.stroke();

//right pupil
ctx.beginPath();
ctx.ellipse(275,220,6,10,0,0,Math.PI*2);
ctx.fillStyle = 'grey';
ctx.fill();

//mouth
ctx.beginPath();
ctx.ellipse(230,300,40,15, 0.2, 0,Math.PI*2);
ctx.strokeStyle = 'grey' ;
ctx.lineWidth = 3;
ctx.stroke();

//hat
ctx.beginPath();
ctx.ellipse(250,170,100,20, 0, 0,Math.PI*2);
ctx.strokeStyle = 'black' ;
ctx.lineWidth = 3;
ctx.stroke();
ctx.fillStyle = 'darkblue';
ctx.fill();



ctx.beginPath();
ctx.moveTo(190,50);
ctx.lineTo(190,150);
ctx.lineTo(310,150);
ctx.lineTo(310,50);
ctx.stroke();
ctx.fillStyle = 'darkblue';
ctx.fill();

ctx.beginPath();
ctx.ellipse(250,50,60,20, 0, 0,Math.PI*2);
ctx.strokeStyle = 'black' ;
ctx.lineWidth = 3;
ctx.stroke();
ctx.fillStyle = 'darkblue';
ctx.fill();

ctx.beginPath();
ctx.moveTo(190, 150);
ctx.bezierCurveTo(190, 190, 310, 190, 310, 150);
ctx.stroke();
ctx.fillStyle = 'darkblue';
ctx.fill();

function drawCircle(x, y, z, fillColor, strokeColor){
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;

    ctx.beginPath();
    ctx.arc(y, x, r, 0, 360);
    ctx.fill();
    ctx.stroke();
}
function convertDegToRad(deg){
    return deg * 180 / Math.PI;
}