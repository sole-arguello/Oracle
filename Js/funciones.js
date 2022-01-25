//mensaje --> es el input ya sea para encriptar o desencriptar
function encriptar(mensaje){
    swal({
        text:"Mensaje Encriptado",
        icon: "success",
        buttons :false,
        timer:3000
    });    
    var mensajeOutput = mensaje.replaceAll("e", "enter")
                               .replaceAll("i", "imes")
                               .replaceAll("a", "ai")
                               .replaceAll("o", "ober")
                               .replaceAll("u", "ufat");
    return mensajeOutput;
    
}
function Desencriptar(mensaje){
    swal({
        text:"Mensaje Desencriptado",
        icon: "success",
        buttons :false,
        timer:3000
    });
    var mensajeOutput = mensaje.replaceAll("enter", "e")
                               .replaceAll("imes", "i")
                               .replaceAll("ai", "a")
                               .replaceAll("ober", "o")
                               .replaceAll("ufat", "u");
    return mensajeOutput;
}

//----------------------------------------------------------------------------------




   

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