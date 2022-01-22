

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/




//texto que ingresa
var encriptarTexto = document.querySelector("#input-texto");
//el mensaje
var msg = document.querySelector("#msg");

//capturo el boton
var btnEcriptar = document.querySelector("#btn-encriptar");

//escucho el boton
btnEcriptar.addEventListener("click", function(event){
    event.preventDefault();
    msg.value = encriptar(encriptarTexto.value);
    console.log("clic");
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
function encriptar(encriptarTexto){
    var encriptarTexto = encriptarTexto.replaceAll("e", "enter")
                         .replaceAll("i", "imes")
                         .replaceAll("a", "ai")
                         .replaceAll("o", "ober")
                         .replaceAll("u", "ufat");
    return encriptarTexto;

}

