/**
 * Created by Lenovo on 12/5/2018.
 */

var personas =[];

function Regitrar() {
    var nombre = document.getElementById("txtNombre");
    var apellido = document.getElementById("txtApellido");
    var correo = document.getElementById("txtCorreo");
    var usuario = document.getElementById("txtUsuario");
    var clave = document.getElementById("txtClave");


    var persona = {

        nombre: nombre.value,
        apellido: apellido.value,
        usuario: usuario.value,
        correo: correo.value,
        clave: md5(clave.value)


    };



    personas.push(persona);
    localStorage.personas = JSON.stringify(personas);
    document.getElementById("Formulario").value = document.getElementById("Formulario").defaultValue;
    alert("Regristo con exito")


}