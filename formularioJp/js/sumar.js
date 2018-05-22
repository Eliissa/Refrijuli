function sumar()
{
    var valor1= document.getElementById("cantidad1").innerHTML;
    var valor2= document.getElementById("cantidad2").innerHTML;
    var valor3= document.getElementById("cantidad3").innerHTML;
    var total=parseFloat(valor1)+parseFloat(valor2)+parseFloat(valor3);
/*realizamos la suma de los valores y los ponemos en la casilla del
    // formulario que contiene el total*/

    document.getElementById("total").innerHTML=total;
    document.getElementById("contador").innerHTML=3;
}
function insertar1 ()
{
    var valor1= document.getElementById("cantidad1").innerHTML;
    document.getElementById("total").innerHTML=valor1;
    document.getElementById("contador").innerHTML=1;
}

function insertar2 ()
{
    var valor1= document.getElementById("cantidad1").innerHTML;
    var valor2= document.getElementById("cantidad2").innerHTML;
    var total2= parseFloat(valor1)+parseFloat(valor2);
    document.getElementById("total").innerHTML=total2;
    document.getElementById("contador").innerHTML=2;
}




