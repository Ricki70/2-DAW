window.onload=function() {

    document.getElementById("validar").onclick=validar;

    document.getElementById("identificacion").onchange = CrearIdentificacion;


}

function CrearIdentificacion() {
    var select=document.getElementById("identificacion");
    var prueba = document.getElementById("prueba");
    if (document.getElementById("label")!=null) {
        prueba.removeChild(document.getElementById("label"));
    }


    var etiqueta=document.createElement("label");
        etiqueta.innerHTML=select.value;
        etiqueta.id="label";
        etiqueta.for=select;
    var cajaTexto=document.createElement("input");

    insertAfter(select,etiqueta);

}

function insertAfter(referencia,insertar){ 
    if(referencia.nextSibling){ 
        referencia.parentNode.insertBefore(insertar,referencia.nextSibling); 
    } else { 
        referencia.parentNode.appendChild(insertar); 
    }
}