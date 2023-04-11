// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas=new fabric.Canvas("myCanvas");

//Define el ancho inicial y el alto del cloque de imágenes 
var medida=30;

//Define el inicio de las coordenadas  y Y del jugador 
var X=50;
var Y=50;

// Define una variable llamada player_object para almacenar la imagen del jugador
var jugador="";
var bloque="";
// Agrega una función llamada player_update() para agregar la imagen del jugador 
function dibujarJugador(){
    fabric.Image.fromURL("player.png",function(img){
        jugador=img;
        jugador.scaleToWidth(150);
        jugador.scaleToHeight(150);
        jugador.set({left:X,top:Y});
        canvas.add(jugador);
    })
}
window.addEventListener("keydown" , teclaPulsar);
function teclaPulsar(e){
    tecla=e.keyCode;
    if(tecla == "39" && X < 855 ){
        X = X + medida;
        canvas.remove(jugador);
        dibujarJugador();
    }
    if(tecla == "37" && X > 0){
        X = X + medida;
        canvas.remove(jugador);
        dibujarjugador();
    }
    if(tecla == "40" && Y < 450){
        Y = Y - medida;
        canvas.remove(jugador);
        dibujarJugador();
    }
    if(tecla == "38" && Y > 0){
        Y = Y - medida;
        canvas.remove(jugador);
        dibujarJugador();
    }
    if(e.shiftKey && tecla == "187"){
        medida = medida + 10;
        document.getElementById("ancho").innerHTML = medida;
        document.getElementById("alto").innerHTML = medida;
    }
    if(e.shiftKey && tecla == "189"){
        medida = medida - 10;
        document.getElementById("ancho").innerHTML = medida;
        document.getElementById("alto").innerHTML = medida;
    }
    if(tecla == "49"){
      nuevoBloque("ground.png")
    }
}





// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.

