/**
 * Created by Elisa_PC on 19/05/2018.
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
    var insumos = obtenerInsumos();
    insumos.push(insumo);
    localStorage.insumos = JSON.stringify(insumos);
    document.getElementById("myForm").reset();
    cargarTabla();
}

function cargarTabla() {
    limpiarTabla();

    var insumos = obtenerInsumos();

    for (var i = 0; i < insumos.length; i++) {
        insertarInsumoEnTabla(insumos[i]);
    }
}

function limpiarTabla() {
    document.getElementById("userTableBody").innerHTML="";
}

function insertarInsumoEnTabla(insumo){
    var linea = ""
    var tr= document.createElement("tr");
    linea = linea.concat(
        "<td>" + insumo.usuario + "</td>",
        "<td>" + insumo.fechaIngreso + "</td>",
        "<td>" + insumo.componente + "</td>",
        "<td>" + insumo.fechaCaducidad + "</td>",
        "<td>" + insumo.cantidad + "</td>",
        "<td>" + insumo.unidad + "</td>",
        "<td>" + insumo.presentacion + "</td>",
        "<td>" + insumo.categoria + "</td>",
        "<td>" + insumo.movimiento + "</td>",
        "<td>" + insumo.precioCompra + "</td>"

    );
    tr.innerHTML=linea;
    document.getElementById("userTableBody").appendChild(tr);
}

function obtenerInsumos(){
    var insumos = [];

    if (localStorage.insumos != null) {
        insumos = JSON.parse(localStorage.insumos);
    }
    return insumos;
}

