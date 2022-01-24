//mensaje --> es el input ya sea para encriptar o desencriptar
function encriptar(mensaje){
    
    var mensajeOutput = mensaje.replaceAll("e", "enter")
                               .replaceAll("i", "imes")
                               .replaceAll("a", "ai")
                               .replaceAll("o", "ober")
                               .replaceAll("u", "ufat");
    return mensajeOutput;

}
function Desencriptar(mensaje){
    var mensajeOutput = mensaje.replaceAll("enter", "e")
                               .replaceAll("imes", "i")
                               .replaceAll("ai", "a")
                               .replaceAll("ober", "o")
                               .replaceAll("ufat", "u");
    return mensajeOutput;
}

function aletaError(){
    swal({
        title:"Error!!",
        text: "Caracter Incorrecto",
        icon: "error",
        buttons :false,
        timer:2000
        
    });
}
//----------------------------------------------------------------------------------
function validacionCaracteres(textoInput){

    var reglaValidacion = new RegExp("^[A-Zéáíóú]", "g");
    var ingresado = textoInput.value;

    if(ingresado == ""){

        alert("encriptar");
        return false;
    }else if(!reglaValidacion.test(ingresado)){
        return true;
    }else{
        aletaError();
        //return false;
    }
}


/*
function validacionCaracteres(){
    var campoForm = document.querySelector("#textInput");
    console.log(campoForm.value);
    campoForm.addEventListener("input", function(){
        var expresiones= /^[A-Zéáíóú]/g;
        console.log(expresiones)
        var errorTexto = document.querySelector("#error-texto");
        console.log(expresiones.test(campoForm.value))
        if(campoForm.value.length > 0 && !expresiones.test(campoForm.value)){
            errorTexto.classList.remove("invisible");
            console.log("malo")
            aletaError();
        }else{
            errorTexto.classList.add("invisible");
            console.log("bueno")
        }
        
    });
}

   

/*
var validacion = (e) => {
    switch (e.target.name){
        case "text-Input":
            if(expresiones.textInput.test(e.target.value)){


            }else{
                document.getElementById("textInput").classList.add()
            }
        break;

    }
}

inputs.forEach((input) =>{
    input.addEventListener("keyup", validacion);
    input.addEventListener("blur", validacion);
});

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
});*/