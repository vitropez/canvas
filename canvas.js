function iniciar() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var alfa = 1;

//cielo
    let grd = ctx.createLinearGradient(0, 0, 0, 500);
    grd.addColorStop(0, "rgba(0,225," + alfa + ")");
    ctx.fillRect(0, 400, 1000, 100);

//montaña
    ctx.beginPath();
    ctx.fillStyle = "rgba(155,0,255" + alfa + ")";
    ctx.moveTo(0, 400);
    ctx.lineTo(200, 100);
    ctx.lineTo(400, 400);
    ctx.fill();

}
window.addEventListener("load", iniciar, false);