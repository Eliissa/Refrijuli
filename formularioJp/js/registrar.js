var personas = [];

function registrar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var usuario = document.getElementById("txtUsuario").value;
    var correo = document.getElementById("txtCorreo").value;
    var password = document.getElementById("txtClave").value;

    var personaje = {

        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        correo: correo,
        password: md5(password)

    };
    personas.push(personaje);
    console.log(personas);


    var nombrevalido = document.getElementById('txtNombre').checkValidity();
    var apellidovalido = document.getElementById('txtApellido').checkValidity();
    var usuariovalido = document.getElementById('txtUsuario').checkValidity();
    var correovalido = document.getElementById('txtCorreo').checkValidity();
    var passwordvalido = document.getElementById('txtClave').checkValidity();

    if (nombrevalido && apellidovalido && usuariovalido && correovalido && passwordvalido) {
        swal({
            title: 'Usuario Registrado',
            imageUrl: 'http://www.mtbstyle.net/kekkonn4/images/good.jpg',
            imageWidth: 200,
            imageHeight: 190,
            imageAlt: 'Custom image',
            footer: '<a href="Login.html">Ingresar como usuario registrado</a>',
            animation: true });


    }else{
        swal("Oops", "Datos incorrectos", "error");

    }


    localStorage.personas = JSON.stringify(personas);
    document.getElementById("Formulario").reset();




};




