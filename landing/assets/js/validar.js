var personas=[]
function validar(){
    
    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("contraseña").value;
    let correo=document.getElementById("correo").value;
    let direccion=document.getElementById("direccion").value;
    
    personas.push(nombre);
    personas.push(apellido);
    personas.push(usuario);
    personas.push(contraseña);
    personas.push(correo);
    personas.push(direccion);
    console.log(personas);

    let persona={
        nombre : nombre,
        apellido : apellido,
        usuario : usuario,
        password : md5(password),
        correo : correo,
        fecha : fecha
    }
    personas.push(persona);
    console.log(validar);
    
        if (traer==null) {
        valido.push(persona);
        localStorage.personas=JSON.stringify(validar);
        document.getElementById("enviar").reset();
        swal ("¡Buen trabajo", "Su pedido se ha procesado", "con éxito!");
    }else {
        swal ("El usuario", "No existe", "error");
    }


    if (nombre==="" || apellido==="" || usuario==="" || contraseña==="" || correo==="" || direccion===""){
        alert("Por favor, llene los campos vacíos");
        return false;
    }
}

var tarjeta=[]
function pago() {
    let mes=document.getElementById("mes");
    let año=document.getElementById("año");
    let ccv=document.getElementById("ccv");
    let nombrecc=document.getElementById("nombrecc");

    tarjeta.push(mes);
    tarjeta.push(año);
    tarjeta.push(ccv);
    tarjeta.push(nombrecc);
    console.log(tarjeta);

    let cc={
        mes : mes,
        año : año,
        ccv : ccv,
        nombrecc : nombrecc
    }

    tarjeta.push(cc);
    console.log(pago);
    if(mes==="" || año==="" || ccv===""){
        alert("Todos los campos son requeridos");
        return false;
    }
    
      let valido= JSON.parse(localStorage.personas==null)
    let traer= valid.find(function(personas){
        return personas.usuario===usuario.value;
    });

}
