//texto que ingresa
var textInput = document.querySelector("#textInput");
//el mensaje
var textOutput = document.querySelector("#textOutput");

//capturo el boton
var btnDesencriptar = document.querySelector("#btn-desencriptar");

//escucho el boton
btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    //recibe el texto
    console.log(textInput.value);
    textOutput.value = Desencriptar(textInput.value);
});


//mensaje input 
function Desencriptar(mensaje){
    var mensajeOutput = mensaje.replaceAll("enter", "e")
                               .replaceAll("imes", "i")
                               .replaceAll("ai", "a")
                               .replaceAll("ober", "o")
                               .replaceAll("ufat", "u");
    return mensajeOutput;

}

//boton copiar
var btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click", function(){

    navigator.clipboard.writeText(textOutput.value);

});

