

function ingresar () {

    var usuario = document.getElementById("txtUsuario").value;
    var password = document.getElementById("txtClave").value;

    var login = {
        usuario:usuario,
        password: md5(password)
    };

    var personasLocalStorage = JSON.parse (localStorage.personas == null ?"[]":
        localStorage.personas);
    var traer = personasLocalStorage.find(function (persona) {
        return persona.usuario == login.usuario && persona.password === login.password;
    });

    if (traer != null){
        location.href='Usuario.html';
    }

    else
        swal({
            type: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos !',
            footer: '<a href="changepass.html">Recuperar su contraseña</a>',
        });

    document.getElementById("formulin2").reset();
};









