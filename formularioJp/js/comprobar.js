
function comprobar () {

    var correo = document.getElementById("correo").value;


    var correcto = {
        correo:correo,
    };
    //Aqui se compara el registro del mismo atributo en ambos objetos personaje y correcto
    var personasLocalStorage = JSON.parse (localStorage.personas == null ?"[]":
        localStorage.personas);
    var traer = personasLocalStorage.find(function (personaje) {
        return personaje.correo == correcto.correo;
    });

    if (traer != null)
        swal(
            'Good job!',
            'Su nueva contraseña será enviada a su correo',
            'success');
    else
        swal("Oops", "Su correo no está registrado", "error");

    document.getElementById("formulin3").reset();
};