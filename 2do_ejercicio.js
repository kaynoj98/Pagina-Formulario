//Alerta en pantalla con los datos ingresados
var nombre, apellido, edad, correo;
function obtenerDatos(){
    if (validacion()==true){
        nombre = document.getElementById("nombre").value;
        apellido = document.getElementById("apellido").value;
        edad = document.getElementById("edad").value;
        correo = document.getElementById("correo").value;
        alert( "Nombre: " + nombre +" "+ 
            "Apellido: " + apellido +" "+ 
            "Edad: " + edad +" "+
            "Nacimiento: " + nacimiento +" "+
            "E-mail: " + correo);
    }
}

//Validacion de datos//
function validacion() {

    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad = document.getElementById("edad").value;
    correo = document.getElementById("correo").value;

        if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
            alert('ERROR!!! Los campos no debe estar vacios');
            return false;
        } else if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
            alert('ERROR!!! Los campos no deben estar vacios'); 
            return false;
        } else if (edad == null || edad.length == 0 || /^\s+$/.test(edad)) {
            alert('ERROR!!! El campo de Edad debe tener un valor de numerico');
            return false;
        } else if (correo == null || correo.length == 0 || /^\s+$/.test(correo)) {
            alert('ERROR!!! El correo es es incorrecto');
            return false    
        } 
    return true;
}
