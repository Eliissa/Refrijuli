/**
 * Created by Lenovo on 20/5/2018.
 */

function Registrar() {
    var usuario = document.getElementById("usuario");
    var fechaIngreso = document.getElementById("fechaIngreso");
    var componente = document.getElementById("componente");
    var fechaCaducidad = document.getElementById("fechaCaducidad");
    var cantidad = document.getElementById("cantidad");
    var unidad = document.getElementById("unidad");
    var presentacion = document.getElementById("presentacion");
    var categoria = document.getElementById("categoria");
    var movimiento = document.getElementById("movimiento");
    var precioCompra = document.getElementById("precioCompra");


    var insumo = {
        usuario: usuario.value,
        fechaIngreso: fechaIngreso.value,
        componente: componente.value,
        fechaCaducidad: fechaCaducidad.value,
        cantidad: cantidad.value,
        unidad: unidad.value,
        presentacion: presentacion.value,
        categoria: categoria.value,
        movimiento: movimiento.value,
        precioCompra: precioCompra.value

    };

    adicionarinsumo(insumo);

}

function adicionarinsumo(insumo) {
    var insumos = [];

    if (localStorage.insumos != null) {
        insumos = JSON.parse(localStorage.insumos);
    }
    insumos.push(insumo);
    localStorage.personas = JSON.stringify(insumos);
    document.getElementById("myForm").reset();
    swal("？a sido registrado el Insumo!", "！ngrese un nuevo registro!", "success");
}