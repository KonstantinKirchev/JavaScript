var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//house
ctx.beginPath();
ctx.rect(100,180,300,200);
ctx.fillStyle = 'brown';
ctx.lineWidth = 2;
ctx.fill();
ctx.stroke();

//roof
ctx.beginPath();
ctx.moveTo(100,180);
ctx.lineTo(250,50);
ctx.lineTo(400,180);
ctx.moveTo(250,50);
ctx.fillStyle = 'brown';
ctx.lineWidth = 2;
ctx.fill();
ctx.stroke();

//chimney

ctx.beginPath();
ctx.rect(300,60,30,100);
ctx.fillStyle = 'brown';
ctx.fill();


ctx.beginPath();
ctx.moveTo(300,60);
ctx.lineTo(300,150);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(330,60);
ctx.lineTo(330,150);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.ellipse(315,60,15,6, 0, 0,Math.PI*2);
ctx.strokeStyle = 'black' ;
ctx.lineWidth = 3;
ctx.stroke();
ctx.fillStyle = 'brown';
ctx.fill();

//door

ctx.beginPath();
ctx.moveTo(130,300);
ctx.lineTo(130,380);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(170,279);
ctx.lineTo(170,380);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210,300);
ctx.lineTo(210,380);
ctx.lineWidth = 2;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 300);
ctx.bezierCurveTo(130, 270, 210, 270, 210, 300);
ctx.stroke();

//door knobs

ctx.beginPath();
ctx.arc(160, 350, 5, 0, 10);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();

ctx.beginPath();
ctx.arc(180, 350, 5, 0, 10);
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();

//window one

ctx.beginPath();
ctx.rect(120,200,100,60);
ctx.fillStyle = 'black';
ctx.lineWidth = 2;
ctx.fill();


ctx.beginPath();
ctx.moveTo(170,199);
ctx.lineTo(170,270);
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(119,230);
ctx.lineTo(300,230);
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.stroke();

//window two

ctx.beginPath();
ctx.rect(260,200,100,60);
ctx.fillStyle = 'black';
ctx.lineWidth = 2;
ctx.fill();

ctx.beginPath();
ctx.moveTo(310,200);
ctx.lineTo(310,270);
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(259,230);
ctx.lineTo(370,230);
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.stroke();

//window three

ctx.beginPath();
ctx.rect(260,285,100,60);
ctx.fillStyle = 'black';
ctx.lineWidth = 2;
ctx.fill();

ctx.beginPath();
ctx.moveTo(310,285);
ctx.lineTo(310,360);
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230,315);
ctx.lineTo(360,315);
ctx.lineWidth = 2;
ctx.strokeStyle = 'brown';
ctx.stroke();