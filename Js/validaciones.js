



 /* 
  function validarTexto(texto) {
    var reglaValidacion = new RegExp("[°!$%&/()=?¡'¿áéíóú]|[0-9]", "g");
    var ingresado = texto.value;
  
    if (ingresado == "") {
      alert("Por favor, ingrese el texto a encriptar.");
      return false;
    } else {
      if (!reglaValidacion.test(ingresado)) {
        return true;
      } else {
        alert(
          "No se permiten letras con acentos, números ni caracteres especiales, por favor intente de nuevo."
        );
        return false;
      }
    }
  }
  

/*function limpiarEntrada(){
    var entrada = document.getElementById("input-texto");
    entrada.value='';
}*/

