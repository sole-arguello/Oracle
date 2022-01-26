//---------------- VARIABLES DE INICIALIZACION (Input y Output) -------------
//texto que ingresa para encriptar y desencriptar
var textInput = document.querySelector("#textInput");
//el mensaje que recibe para ser copiado(msg)
var textOutput = document.querySelector("#textOutput");
//mensaje que recibe del html para los errores
var errorTexto = document.querySelector("#error-texto");

//----------------- VALIDACION DEL TEXTO ------------------------------------
textInput.addEventListener("input", function(){

    var expresionesInvalidas = /[A-Zéáíóú]/;
    
    if(textInput.value.length > 0 && expresionesInvalidas.test(textInput.value)){
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
//----------------------------------------------------------------------------
        //capturo el boton ENCRIPTAR
        var btnEncriptar = document.querySelector("#btn-encriptar");
        //escucho el boton encriptar
        btnEncriptar.addEventListener("click", function(event){
            event.preventDefault();
            //recibe el texto a encriptar
            textOutput.value = encriptar(textInput.value);
        });
//-----------------------------------------------------------------------------
        //capturo el boton DESENCRIPTAR
        var btnDesencriptar = document.querySelector("#btn-desencriptar");
        //lo escucho
        btnDesencriptar.addEventListener("click", function(event){
            event.preventDefault();
            //recibe el texto a desencriptar
            textOutput.value = Desencriptar(textInput.value);
        });
    }
});
//------------------------------------------------------------------------------
//capturo el boton COPIAR
var btnCopiar = document.querySelector("#btn-copy");
// lo escucho
btnCopiar.addEventListener("click", function(){
    //alerta copiado
    swal({
        title:"Texto Copiado!!",
        text : "LO PEGA EN ENTRADA",
        icon: "success",
        buttons :false,
        timer:2500//tiempo que se muestra y desaparece automaticamente
    });
    //toma el mensaje del textOutput
    navigator.clipboard.writeText(textOutput.value);
    //vacia salida del mensaje luego de copiar
    textOutput.value = "";
    textInput.value = "";
});
//-------------------------------------------------------------------------------
//capturo el boton PEGAR
var btnPegar = document.querySelector("#btn-paste");
// lo escucho
btnPegar.addEventListener("click", function(){
    //alerta copiado
    swal({
        title:"Texto Pegado!!",
        text : "Listo para Encriptar / Desencriptar",
        icon: "success",
        buttons :false,
        timer:2500//tiempo que se muestra y desaparece automaticamente
    });
    //toma el mensaje del textOutput
    navigator.clipboard.readText().then(function(textoCopiado){
        //lo asigno desde a la variable recibido
        textInput.value = textoCopiado;
    });
    //vacia salida del mensaje luego de copiar
    textOutput.value = "";
});
//-------------------------------------------------------------------------------

/* seria otra forma pero funciona mas como copy-paste

var btnPegar = document.querySelector("#btn-paste");
btnPegar.addEventListener("click", function(event){
    event.preventDefault();
    var textoCopiado = textOutput.value;
    textInput.value = textoCopiado;
    console.log(textoCopiado);
});*/