function iniciar() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(400, 80, 200, 400);
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

}
window.addEventListener("load", iniciar, false);