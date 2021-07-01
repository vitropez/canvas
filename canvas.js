function iniciar() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle="rgba(0, 255, 0, 0.6)";
    ctx.fillRect(400, 80, 200, 400);
    ctx.strokeStyle = '#000099';
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(400,80);
    ctx.lineTo(320,20);
    ctx.lineWidth="3";
    ctx.moveTo(400,480);
    ctx.lineTo(320,400);
    ctx.lineWidth="3";
    ctx.moveTo(320,20);
    ctx.lineTo(320,400);
    ctx.lineWidth="3";
    ctx.moveTo(600,80);
    ctx.lineTo(500,20);
    ctx.lineWidth="3";
    ctx.moveTo(500,20);
    ctx.lineTo(320,20);
    ctx.lineWidth="3";
    ctx.moveTo(400,80);
    ctx.arc(440,80,40,3,2*Math.PI);
    ctx.moveTo(500,80);
    ctx.arc(540,80,40,3,2*Math.PI)

    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle="orange"
    ctx.font="normal small-caps bold 50px verdana";
    ctx.fillText("MILK",430,300);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.arc(560,200,20,0,2*Math.PI);
    ctx.moveTo(480,200);
    ctx.arc(460,200,20,0,2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(510,350,40,3,2*Math.PI,true);
    ctx.moveTo(480,200);
    ctx.arc(460,200,20,0,2*Math.PI);
    ctx.stroke();



}
window.addEventListener("load", iniciar, false);