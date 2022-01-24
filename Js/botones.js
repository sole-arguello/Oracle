//declaro variables que del Input y Output
var textInput = document.querySelector("#textInput");//texto que ingresa para encriptar y desencriptar
var textOutput = document.querySelector("#textOutput");//el mensaje que recibe para ser copiado(msg)

//capturo el boton encriptar
var btnEncriptar = document.querySelector("#btn-encriptar");
//escucho el boton encriptar
btnEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    //recibe el texto a encriptar
    //console.log(textInput.value);
    validacionCaracteres();
    textOutput.value = encriptar(textInput.value);
    textInput.value = "";
});

//capturo el boton desencriptar
var btnDesencriptar = document.querySelector("#btn-desencriptar");
//escucho el boton desenciptar
btnDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    //recibe el texto a desencriptar
    //console.log(textInput.value);
    validacionCaracteres();
    textOutput.value = Desencriptar(textInput.value);
    //vacia el input de entrada
    textInput.value = "";

});

//capturo el boton copiar
var btnCopiar = document.querySelector("#btn-copy");
// escucho
btnCopiar.addEventListener("click", function(){
    //toma el mensaje del textOutput
    navigator.clipboard.writeText(textOutput.value);
    //vacia el campo mensaje luego de copiar
    textOutput.value = "";
    
    console.log();

});
/*
var btnPegar = document.querySelector("#btn-pegar");
btnPegar.addEventListener("click", function(event){
    event.preventDefault();
    var textoCopiado = document.querySelector("textOutput");
    if(textoCopiado.value.length > 0){
        document.getElementById("textInput").value="";
        document.getElementById("textInput").value = textoCopiado.value;
        console.log(textoCopiado.value);
    }else{
        alert("copie");
    }
});
/*
var btnPegar = document.querySelector("#btn-paste");
btnPegar.addEventListener("click", function(event){
    event.preventDefault();
    var textoCopiado = document.querySelector("#textOutput");
    //textoCopiado.select();
    //document.execCommand("paste");
});*/


