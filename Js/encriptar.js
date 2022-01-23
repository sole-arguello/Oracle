//texto que ingresa
var textInput = document.querySelector("#textInput");
//el mensaje
var textOutput = document.querySelector("#textOutput");

//capturo el boton
var btnEncriptar = document.querySelector("#btn-encriptar");

//escucho el boton
btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    //recibe el texto
    console.log(textInput.value);
    textOutput.value = encriptar(textInput.value);
});

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/
//mensaje input 
function encriptar(mensaje){
    var mensajeOutput = mensaje.replaceAll("e", "enter")
                         .replaceAll("i", "imes")
                         .replaceAll("a", "ai")
                         .replaceAll("o", "ober")
                         .replaceAll("u", "ufat");
    return mensajeOutput;

}

