var listaCD = new Array(); 
var IDGeneral = 0;


window.onload = function(){

document.getElementById("alta").onclick = añadirCD;
document.getElementById("selectCd").onchange = obtenerObjeto;
document.getElementById("vender").onclick = vender;
document.getElementById("modificar").onclick = modificar;
document.getElementById("listado").onclick = listado;

}


function añadirCD(){
    IDGeneral++;
    var ID = IDGeneral
    document.getElementById("id").value = ID;
    var grupo = document.getElementById("grupo").value;

    var listaEstilo = document.getElementsByName("estilo");
    var estilo;
    for (var i=0; i<listaEstilo.length; i++){
        if (listaEstilo[i].checked == true){
            estilo = listaEstilo[i].value;
            }
    }

    var nEjemplares = document.getElementById("ejem").value;
    var precio = document.getElementById("precio").value;

    var objetoCD = new CD(ID, grupo, estilo, nEjemplares, precio);
    objetoCD.alta(listaCD);

    document.getElementById("selectCd").appendChild(document.createElement("option"));
    document.getElementById("selectCd").options[ID - 1].text = ID + "- " + grupo;
    limpiarInputs();
}

function vender(){
    var selectCd = document.getElementById("selectCd");
    if(selectCd.selectedIndex != -1){
        var cantidad = prompt("Introduzca la cantidad que quiera vender: ");
    }else{
        alert("Seleccione un grupo primero para poder vender sus CDs");
    }

    document.getElementById("tcompra").value = listaCD[selectCd.selectedIndex].vender(cantidad);
    mostrarInputs(listaCD[selectCd.selectedIndex]);
}

function modificar(){
    var selectCd = document.getElementById("selectCd");
    var listaEstilo = document.getElementsByName("estilo");
    var estilo;
    for (var i=0; i<listaEstilo.length; i++){
        if (listaEstilo[i].checked == true){
            estilo = listaEstilo[i].value;
            }
    }

    var nEjemplares = document.getElementById("ejem").value;
    var precio = document.getElementById("precio").value;

    if(selectCd.selectedIndex != -1){
        listaCD[selectCd.selectedIndex].modificar(estilo, nEjemplares, precio)
    }else{
        alert("Seleccione un grupo primero para poder Modificar su Informacion");
    }
    mostrarInputs(listaCD[selectCd.selectedIndex]);
}

function listado(){
    var selectCd = document.getElementById("selectCd");
    if(selectCd.options[0] != undefined){
        var divi = document.createElement("div");
        divi.id = "listado";

        var p = document.createElement("h1");
        p.id = "cabecera";
        p.appendChild(document.createTextNode(listaCD[0].nombre + ", " + listaCD[0].direccion));
        divi.appendChild(p);

        var p = document.createElement("h3");
        p.id = "sucabecera";
        p.appendChild(document.createTextNode("Listado de Cd's bajo minimos"));
        divi.appendChild(p);
        
        for (var i = 0; i < listaCD.length; i++){
            if (listaCD[i].nEjemplares <= 5){
                var p = document.createElement("h5");
                p.id = "grupo" + i;
                p.appendChild(document.createTextNode(listaCD[i].grupo + " - " + listaCD[i].nEjemplares + " Ejemplares"));
                divi.appendChild(p);
            }
        }

        document.body.appendChild(divi);

    }else{
        alert("Aun no has dado de alta ningun grupo");
    }

    
}

function obtenerObjeto(){
    var ID = this.value.split("-");
    var objetoCD = listaCD[ID[0]-1];
    mostrarInputs(objetoCD);
}

function mostrarInputs(objetoCD){
    document.getElementById("id").value = objetoCD.ID;
    document.getElementById("grupo").value = objetoCD.grupo;

    var listaEstilo = document.getElementsByName("estilo");
    for (var i=0; i<listaEstilo.length; i++){
        if(listaEstilo[i].value == objetoCD.estilo){
            listaEstilo[i].checked = true;
        }
    }

    document.getElementById("ejem").value = objetoCD.nEjemplares;
    document.getElementById("precio").value = objetoCD.precio;
}

function limpiarInputs(){
    document.getElementById("id").value = "";
    document.getElementById("grupo").value = "";

    var listaEstilo = document.getElementsByName("estilo");
    for (var i=0; i<listaEstilo.length; i++){
        listaEstilo[i].checked = false;
    }

    document.getElementById("ejem").value = "";
    document.getElementById("precio").value = "";
}
