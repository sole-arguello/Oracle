
var encriptarTexto = document.querySelector("#btn-encriptar");
var inputResultado = document.querySelector("#msg");

//boton desencriptar
var desencriptarTexto = document.querySelector("#btn-desencriptar");

desencriptarTexto.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Hice clic");
    //hasta aca capture el boton
    inputResultado.value = desencriptarTexto(desencriptarTexto.value);
    console.log(inputResultado.value);
});



/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function desencriptar(desencriptarTexto){
    //var textoIngresado = encriptarTexto.value.toLowerCase();
    var desencriptarTexto = desencriptarTexto.replaceAll("enter", "e")
                                       .replaceAll("imes", "i")
                                       .replaceAll("ai", "a")
                                       .replaceAll("ober", "o")
                                       .replaceAll("ufat", "u");

return desencriptarTexto;
}


