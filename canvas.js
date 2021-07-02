    function iniciar() {

        document.getElementById("boton").addEventListener("click", reir, false)
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

//FRENTE
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
            ctx.rect(400, 80, 200, 400);
            ctx.strokeStyle = 'yellow';
            ctx.stroke();
            ctx.fill();

//CUERPO
            ctx.beginPath();
            ctx.lineWidth = "3";
            ctx.moveTo(400, 80);
            ctx.lineTo(320, 20);
            ctx.lineTo(320, 400);
            ctx.lineTo(400,480)
            ctx.stroke();
            ctx.fill();
            ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
//CABEZA
            ctx.beginPath();
            ctx.moveTo(320, 20);
            ctx.lineTo(500, 20);
            ctx.lineTo(600,80);
            ctx.lineTo(400,80);
            ctx.closePath()
            ctx.stroke();
            ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
            ctx.fill();

//OREJAS
            ctx.beginPath();
            ctx.arc(440, 80, 40, 3, 2 * Math.PI);
            ctx.moveTo(500, 80);
            ctx.arc(540, 80, 40, 3, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "yellow";
            ctx.fill();


//LETRAS INTERIOR
            ctx.beginPath();
            ctx.fillStyle = "orange"
            ctx.font = "normal small-caps bold 50px verdana";
            ctx.fillText("MILK", 430, 300);
            ctx.stroke();

//OJOS
            ctx.beginPath();
            ctx.arc(560, 200, 20, 0, 2 * Math.PI);
            ctx.moveTo(480, 200);
            ctx.arc(460, 200, 20, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "black";
            ctx.fill();
//BOCA

        ctx.beginPath();
        ctx.arc(510, 350, 40, 3, 2 * Math.PI, false);
        ctx.stroke();

        function reir() {
            ctx.beginPath();
            ctx.arc(510, 350, 40, 3, 2 * Math.PI, true);
            ctx.stroke();


//BRAZOS
            for(i=400;i>=200;i-=1) {
                ctx.beginPath();
                ctx.lineWidth = "3";
                ctx.strokeStyle = 'yellow';
                ctx.moveTo(400, 250);
                ctx.lineTo(i, 250);
                ctx.lineCap = "round"
                ctx.stroke();
            }

                for(j=600;j<=800;j+=1) {
                    ctx.beginPath();
                    ctx.lineWidth = "3";
                    ctx.strokeStyle = 'yellow';
                    ctx.moveTo(600, 250);
                    ctx.lineTo(j, 250);
                    ctx.lineCap="round"
                    ctx.stroke();
                }
//EXCLAMACIÓN
                ctx.beginPath();
                ctx.fillStyle = "blue"
                ctx.font = "normal small-caps bold 30px verdana";
                ctx.fillText(". . .o o o oOOOH!!!", 520, 380);
                ctx.stroke();


            ctx.beginPath();
            ctx.fillStyle = "red"
            ctx.font = "normal small-caps bold 40px verdana";
            ctx.fillText("QUÉ MIEDO!!!",680 , 100);
            ctx.stroke();
        }


    }

window.addEventListener("load", iniciar, false);

