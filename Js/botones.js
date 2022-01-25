//declaro variables que del Input y Output
var textInput = document.querySelector("#textInput");//texto que ingresa para encriptar y desencriptar
var textOutput = document.querySelector("#textOutput");//el mensaje que recibe para ser copiado(msg)
var errorTexto = document.querySelector("#error-texto");

textInput.addEventListener("input", function(){
    var expresiones = /[A-Zéáíóú]/;
    
    if(textInput.value.length > 0 && expresiones.test(textInput.value)){
        errorTexto.classList.remove("invisible");
        swal({
            title:"Error!!",
            text: "Carracter Invalido",
            icon: "error",
            buttons :false,
            timer:3000
        });        
    }else{
        errorTexto.classList.add("invisible");
        //capturo el boton encriptar
        var btnEncriptar = document.querySelector("#btn-encriptar");
        //escucho el boton encriptar
        btnEncriptar.addEventListener("click", function(event){
            event.preventDefault();
            //recibe el texto a encriptar
            textOutput.value = encriptar(textInput.value);
        });
        //capturo el boton desencriptar
        var btnDesencriptar = document.querySelector("#btn-desencriptar");
        //lo escucho
        btnDesencriptar.addEventListener("click", function(event){
            event.preventDefault();
            //recibe el texto a desencriptar
            textOutput.value = Desencriptar(textInput.value);
        });
    }
});

//capturo el boton copiar
var btnCopiar = document.querySelector("#btn-copy");
// lo escucho
btnCopiar.addEventListener("click", function(){
    //alerta copiado
    swal({
        title:"Texto Copiado!!",
        text : "LO PEGA EN ENTRADA",
        icon: "success",
        buttons :false,
        timer:3000
    });
    //toma el mensaje del textOutput
    navigator.clipboard.writeText(textOutput.value);
    //vacia salida del mensaje luego de copiar
    textOutput.value = "";
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


