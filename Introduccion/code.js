var canvas = null;
var ctx = null;
var s, w, h;
var click = 0;

var graphics = {

    modelado : null,
    judo : null
    
}

function bodyLoaded()
{
    canvas = document.getElementById("MyCanvas");
    ctx = canvas.getContext("2d");

    if(ctx)
    {
        s = getComputedStyle(canvas);
        w = s.width;
        h = s.height;
    
        //canvas.width = w.split('px')[0];
        //canvas.height = h.split('px')[0];
    }

    graphics.modelado = new Image ();
    graphics.modelado.src = "Introduccion/assets/modelado.png";

    graphics.judo = new Image ();
    graphics.judo.src = "Introduccion/assets/judo.jpg";

    graphics.foto = new Image();
    graphics.foto.src = "Introduccion/assets/imagen_bio.jpg";
    
    graphics.boligrafo = new Image ();
    graphics.boligrafo.src = "Introduccion/assets/boligrafo.png";
    graphics.boligrafo.onload = function() {Draw (ctx)};

}

function Draw(ctx)
{

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "chocolate";
    ctx.fillRect(0,0,canvas.width, canvas.height);


    ctx.font = 'bold 60px Courier New';
    ctx.fillStyle = "#8B4513";
    ctx.fillText('David Martín Almazán', 500, 80);  
    

    ctx.drawImage(graphics.foto, 1300, 30, 150, 200);
      

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white"; 
    ctx.lineWidth = 3;
    ctx.rotate(-10 * Math.PI / 180);
    ctx.strokeRect(270, 200, 150, 200);
    ctx.fillRect(270, 200, 150, 200);
    ctx.fill();
    ctx.stroke();





    canvas.addEventListener("click", function()
    {
        //Informacion Básica
        if(click==0)
        {
            
            //Segunda hoja que aparece encima de la primera que hemos hecho
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white"; 
            ctx.lineWidth = 3;
            ctx.rotate(20 * Math.PI / 180);
            ctx.strokeRect(400, 100, 170, 200);
            ctx.fillRect(400, 100, 170, 200);

            //Titulo de ¿Quién soy?
            ctx.font = 'bold 20px Courier New';
            ctx.fillStyle = "black";
            ctx.fillText('¿Quién soy?', 410, 150);
            ctx.font = 'bold 17px Courier New';
            ctx.fillText('-Programador', 406, 190);
            ctx.fillText('-Edad: 20años', 406, 210);
            ctx.fillText('-Madrid. España', 406, 230);
            ctx.fillText('-Tfno:660387029 ', 406, 250);

            //Pinto todo
            ctx.fill();
            ctx.stroke();
            //Sumo un contador al contador de clicks
            click++;
            
        }
        else if ( click == 1)
        {
            ctx.beginPath();
            ctx.rotate(-10*Math.PI/180);
            ctx.font = 'bold 30px Courier New';
            ctx.fillStyle = "#8B4513";
            ctx.fillText('Sobre mi', 770, 200);

            ctx.beginPath();
            ctx.strokeStye = "black";
            ctx.fillStyle = "white";
            ctx.lineWidth = 3;
            ctx.strokeRect (600, 230, 450, 200);
            ctx.fillRect (600, 230, 450, 200);

            ctx.beginPath();
            ctx.font = 'bold 20px Courier New';
            ctx.fillStyle = "black";
            ctx.fillText('A parte de programar,lo que más hago ', 610, 260);
            ctx.fillText('en mi tiempo libre es hacer deporte, ', 610, 280);
            ctx.fillText('salir a jugar al baloncesto, ', 610, 300);
            ctx.fillText('hacer judo y de vez en cuando ', 610, 320);
            ctx.fillText('modelar en 3D. También me encanta  ', 610, 340);
            ctx.fillText('quedar con mis amigos.', 610, 360);
            click++;                        
        }
        else if (click == 2)
        {
            ctx.beginPath ();
            ctx.strokeStyle = "black";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 3;
            ctx.strokeRect (930, 380, 150, 150);
            ctx.fillRect (930, 380, 150, 150);

            ctx.drawImage(graphics.judo, 940, 390, 130, 130);

            ctx.beginPath ();
            ctx.strokeStyle = "black";
            ctx.fillStyle = "yellow";
            ctx.lineWidth = 3;
            ctx.strokeRect (850, 460, 150, 150);
            ctx.fillRect (850, 460, 150, 150);

            ctx.drawImage(graphics.modelado, 860, 470, 130, 130);

            ctx.fill();
            ctx.stroke();
            click++;
        }
        else if (click == 3)
        {
            ctx.beginPath();
            ctx.font = 'bold 30px Courier New';
            ctx.fillStyle = "#8B4513";
            ctx.fillText('Aptitudes', 1300, 270);

            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.fillStyle = "white";
            ctx.lineWidth = 3;
            ctx.strokeRect (1160, 300, 440, 300);
            ctx.fillRect (1160, 300, 440, 300);

            ctx.font = 'bold 20px Courier New';
            ctx.fillStyle = "black";
            ctx.fillText(' - Lenguajes de Programación: ', 1160, 350);
            ctx.fillText(' -> C++, C# ', 1200, 380);
            ctx.fillText(' - Motores Gráficos: ', 1160, 410);
            ctx.fillText(' -> Unity, Construct', 1200, 440);
            ctx.fillText(' - Lenguajes Orientados a web: ', 1160, 470);
            ctx.fillText(' -> HTML, JavaScript, CSS', 1200, 500);

            ctx.fill();
            ctx.stroke();
        }
    }); 
}

