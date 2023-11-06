// -------------------------------------------
// SCRIPT - IRENE LÓPEZ MELERO
// -------------------------------------------

// NOTAS --> además de lo indicado, he añadido:
//              - comprobación de que los campos numEjem y precio son enteros positivos al dar de alta
//              - comprobación que la cantidad introducida al vender es un número entero y positivo
//              - comprobación al pulsar los botones 'vender' y 'modificar' de que hay algún CD seleccionado en la select, 
//                  en caso de que no haya seleccionado un CD al pulsar muestra un mensaje

// creamos el array de cd's
var arrayCds = new Array();

// inicializamos el id a 1
var id = 1;

window.onload = function() {
    document.getElementById("selectCd").onclick = mostrar;
    document.getElementById("alta").onclick = darAlta;
    document.getElementById("modificar").onclick = modificar;
    document.getElementById("vender").onclick = vender;
    document.getElementById("listado").onclick = listar;
    
    // creamos division en tiempo de ejecución
    var div = document.createElement("div");
    div.id = "divListado";
    
    // creamos boton en tiempo de ejecución
    var boton = document.createElement("input");
    boton.type = "button";
    boton.id = "btnListado";
    boton.hidden = "hidden";
    boton.value = "Limpiar listado";
    boton.onclick = borrar;
    
    document.body.appendChild(div);
    document.body.appendChild(boton);
}

// FUNCIÓN DAR DE ALTA
function darAlta() {
    // recogemos los campos del formulario
    var grupo = document.getElementById("grupo").value;
    var estilo = opcionMarcada(document.getElementsByName("estilo"));
    var numEjem = document.getElementById("ejem").value;
    var precio = document.getElementById("precio").value;
    
    // NOTA. Los campos numEjem y precio se recogen sin parseInt porque al hacer parseInt nunca tomarían valor "", y no saldría
    // el mensaje de 'Debes rellenar los campos' si alguno de esos campos fuese "". En los segundos condicionales compruebo si es
    // numérico y positivo. En caso de que lo sean, en el else ya tomo los valores parseInt de ambos campos. No lo cojo así simplemente
    // porque se pueda mostrar el mensaje 'Debes rellenar los campos' en caso de que sean "".
    
    // campos vacíos
    if(grupo == "" || estilo == "" || numEjem == "" || precio == "") {
        alert("Debes rellenar todos los campos");
        
    // no se ha introducido un entero positivo para numEjem
    } else if(isNaN(parseInt(numEjem)) || parseInt(numEjem) < 0) {
            alert("El valor de 'numEjem' debe ser un número positivo");
    
    // no se ha introducido un entero positivo para precio
    } else if(isNaN(parseInt(precio)) || parseInt(precio) < 0) {
            alert("El valor de 'precio' debe ser un número positivo");
    
    // todos los campos son correctos  
    } else {
        numEjem = parseInt(numEjem);
        precio = parseInt(precio);
        
        // creamos el objeto Musica
        var cd = new Cd(id, grupo, estilo, numEjem, precio);
        cd.alta(arrayCds);
        
        // añadimos el objeto a la select
        anadirSelect(cd.id);
        
        // incrementamos el id
        id++; // incrementamos el id
    
		alert("Dado de alta correctamente");
        limpiar();
    }
    
    // limpiamos campo de venta
    document.getElementById("venta").value = "";
}

// FUNCIÓN MOSTRAR
function mostrar() {
    // recogemos el cd seleccionado
    var cd = cdSeleccionado();
    
    // mostramos los datos del cd seleccionado
    document.getElementById("id").value = cd.id;
    document.getElementById("grupo").value = cd.grupo;
    document.getElementById(cd.estilo).checked = true;
    document.getElementById("ejem").value = cd.numEjem;
    document.getElementById("precio").value = cd.precio;
    
    // limpiamos campo de venta
    document.getElementById("venta").value = "";
}

// FUNCIÓN MODIFICAR
function modificar() {
    // recogemos el cd seleccionado
    var cd = cdSeleccionado();
    
    // comprobamos que hay un cd seleccionado
    if(document.getElementById("selectCd").selectedIndex < 0) {  // NO SELECCIONADO
        alert("Es necesario seleccionar un CD");
    
    } else {  // SELECCIONADO
        // recogemos los datos que hay en los campos de estilo, numEjem, precio
        var nuevoEstilo = opcionMarcada(document.getElementsByName("estilo"));
        var nuevoNumEjem = document.getElementById("ejem").value;
        var nuevoPrecio = document.getElementById("precio").value;

        // realizamos la modificación
        cd.modificacion(nuevoEstilo, nuevoNumEjem, nuevoPrecio);

        // mostramos el nuevo cd
        mostrar();  // llamamos a esta función para mostrar los datos del cd modificado (se verá como cambia el precio)
        alert("Modificado correctamente");
    }
    
    // limpiamos campo de venta
    document.getElementById("venta").value = "";
}

// FUNCIÓN VENDER
function vender() {
    // recogemos el cd seleccionado
    var cd = cdSeleccionado();
    
    // limpiamos campo de venta
    document.getElementById("venta").value = "";
    
    // comprobamos que hay un cd seleccionado
    if(document.getElementById("selectCd").selectedIndex < 0) {  // NO SELECCIONADO
        alert("Es necesario seleccionar un CD");
        
    } else {  // SELECCIONADO
        // recogemos la cantidad de cd's que quiere vender
        var cantidad = parseInt(prompt("¿Cuántas unidades quieres vender?"));
    
        // comprobamos que se ha introducido una cantidad positiva
        if(isNaN(cantidad) || cantidad < 0) {  // CANTIDAD NO VÁLIDA
            alert("La cantidad debe ser un número positivo");
        
        } else {  // CANTIDAD VÁLIDA
            // realizamos la venta
            var venta = cd.vender(cantidad);
            
            // actualizamos campos de numEjem y total venta
            document.getElementById("ejem").value = cd.numEjem;
            document.getElementById("venta").value = venta;
            
            // si no se ha realizado venta, limpiamos el campo de venta para que no se muestre el mensaje undefinied en el campo venta
            if(isNaN(venta)) document.getElementById("venta").value = "";
        }
    }
}

// FUNCIÓN PARA LISTAR
function listar() {
    var division = document.getElementById("divListado");
    
    // escribimos nombre y dirección de la tienda
    division.innerHTML = "<h3>" +Cd.prototype.nombre+ ", " +Cd.prototype.direccion+ "</h3>";
    division.innerHTML += "<h3>Listado de cd's bajo mínimos</h3>";
    
    // recorremos el array para buscar los cd que están bajo mínimos
    var hayBajoMinimos = false;  // variable para controlar si hay bajo mínimos
    for(var i=0; i<arrayCds.length; i++) {
        var cd = arrayCds[i];
        if(cd.numEjem < 5) {  // comprobamos que están bajo mínimos
            division.innerHTML += "grupo: " + cd.grupo+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; nº ejemplares: " + cd.numEjem + "<br>"; 
            hayBajoMinimos = true;
        }
    }
    
    // mostramos otro mensaje si no hay bajo mínimos
    if(!hayBajoMinimos) division.innerHTML += "No hay cd's bajo mínimos<br>";
    
    // desocultamos el botón de limpiar
    division.innerHTML += "<br>";
    document.getElementById("btnListado").hidden = "";
}

// FUNCIÓN PARA BORRAR LISTADO
function borrar() {
    // limpiamos el divListado
    document.getElementById("divListado").innerHTML = "";
    
    // ocultamos el botón de borrar listado
    document.getElementById("btnListado").hidden = "hidden";
}

// ----------------------------------------------------------
// FUNCIONES AUXILIARES
// ----------------------------------------------------------

// FUNCIÓN PARA LIMPIAR LOS CAMPOS DEL FORMULARIO
function limpiar() {
    var estilos = document.getElementsByName("estilo");
    for (var i=0; i<estilos.length; i++) {
        if (estilos[i].checked) estilos[i].checked = false;
    }
    document.getElementById("id").value = "";
    document.getElementById("grupo").value = "";
    document.getElementById("ejem").value = ""; 
    document.getElementById("precio").value = ""; 
}

// FUNCIÓN PARA ENCONTRAR LA OPCIÓN MARCADA DE UN RADIO BUTTON
// return id de la opción marcada en el radio button
function opcionMarcada(radioList) {
    for(var i=0; i<radioList.length; i++) {
        if(radioList[i].checked) return radioList[i].id;
    }
    return "";  // en caso de que no se haya marcado ninguna opción 
}

// FUNCIÓN PARA AÑADIR UNA OPCIÓN A LA SELECT
function anadirSelect(id){
	var opcion = document.createElement("option");
    opcion.text = id;
    document.getElementById("selectCd").appendChild(opcion);
}

// FUNCIÓN QUE TE DEVUELVE EL CD SELECCIONADO
function cdSeleccionado() {
    var indice = document.getElementById("selectCd").selectedIndex;
    var cdSelected = arrayCds[indice];
    return cdSelected;
}