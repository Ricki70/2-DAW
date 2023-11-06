// -------------------------------------------
// SCRIPT - IRENE LÓPEZ MELERO
// -------------------------------------------

// NOTAS --> además de lo indicado, he añadido:
//              - una opción más a cada array de variedades que pone "Selecciona variedad", y el precio asociado es vacío ""
//              - dejar deshabilitado el total y el cambio porque el usuario no lo debe cambiar
//              - reiniciar el formulario al cambiar la selección de una fruta o una variedad
//              - reiniciar la parte de forma de pago cuando se pulse Total, ya que cambiará el precio total y puede cambiar la forma de pago,
//                además si se introduce un peso no correcto y Total pasa a ser "" no puede haber un método de pago marcado
//              - mensajes de compra realizada con éxito al pagar y al entregar correctamente
//              - que el peso no pueda ser negativo

// array de los tipos de fruta y sus precios
var Peras = ["Selecciona variedad", "Española", "Conferencia"];
var preciosPeras = ["", 3, 4];

var Manzanas = ["Selecciona variedad", "Golden", "Royal Gala" ];
var preciosManzanas = ["", 2, 3];

var Platanos = ["Selecciona variedad", "Banana", "Canario" ];
var preciosPlatanos = ["", 3, 4];
			
var Kiwis = ["Selecciona variedad", "Verde", "Dorado"];
var preciosKiwis = ["", 5, 6];  

// variable donde almacenamos las distintas formas de pago
var fpago;

window.onload = function() {
    document.getElementById("frutas").onchange = seleccionaFruta;
    document.getElementById("variedad").onchange = seleccionaVariedad;
    document.getElementById("total").onclick = pulsaTotal;
    
    fpago = document.getElementsByName("fpago");
    for(var i=0; i<fpago.length; i++) fpago[i].onclick = seleccionaPago;
    
    document.getElementById("Pago").onclick = pulsaPagar;
    document.getElementById("monedas").onchange = cambiaEntrega;
}

// FUNCIÓN QUE SE EJECUTA AL SELECCIONAR UNA FRUTA
function seleccionaFruta() {
    // se limpia la select de variedades
    document.getElementById("variedad").length = 0;
    
    // se reinicia el formulario
    reinicia();
    
    // rellenamos la select de variedad con las variedades de la fruta
    switch(document.getElementById("frutas").value) {
        case "Peras":
            rellenaVariedad(Peras);
            break;
        case "Manzanas":
            rellenaVariedad(Manzanas);
            break;
        case "Plátanos":
            rellenaVariedad(Platanos);
            break;
        case "Kiwis":
            rellenaVariedad(Kiwis);
            break;  
    }
}

// FUNCIÓN QUE RELLENA LA SELECT VARIEDAD DADO UN ARRAY
function rellenaVariedad(array) {
    for(var i=0; i<array.length; i++){ // creamos una nueva opción para cada variedad
        var opcion = document.createElement("option");
        opcion.text = array[i];
        document.getElementById("variedad").appendChild(opcion);
    }
}

// FUNCIÓN QUE SE EJECUTA AL SELECCIONAR UNA VARIEDAD
function seleccionaVariedad() {
    // se reinicia el formulario
    reinicia();
    
    // obtenemos el índice seleccionado en la select variedad
    var indexVariedad = document.getElementById("variedad").selectedIndex;
    
    // mostramos el precio en función de la fruta y variedad
    switch(document.getElementById("frutas").value) {
        case "Peras":
            document.getElementById("precio").value = preciosPeras[indexVariedad];
            break;
        case "Manzanas":
            document.getElementById("precio").value = preciosManzanas[indexVariedad];
            break;
        case "Plátanos":
            document.getElementById("precio").value = preciosPlatanos[indexVariedad];
            break;
        case "Kiwis":
            document.getElementById("precio").value = preciosKiwis[indexVariedad];
            break;
    }
}

// FUNCIÓN QUE SE EJECUTA AL PULSAR EL BOTÓN TOTAL
function pulsaTotal() {
    // reiniciamos lo relacionado con la forma de pago
    reiniciaPago();
    
    // limpiamos el valor de cantidad total
    // esto se hace por si había un total, y se cambia el peso a un valor no correcto; para 
    // evitar que se quede el valor de total que había antes, lo limpiamos
    document.getElementById("Ptotal").value = "";
    
    // almacenamos el valor de precio y peso para comprobar si hay datos
    var precio = document.getElementById("precio").value;
    var peso = document.getElementById("peso").value; 
        
    // NOTA --> el control se pone con varios if para enviar distintos mensajes al usuario
    // caso en que no hay precio
    if(precio=="") {
        alert("Primero debes seleccionar una fruta y una variedad");
        document.getElementById("peso").value = "";   // limpiamos texto de peso por si lo había introducido, ya que sin precio no debe haber peso
    
    // caso en que no hay peso
    } else if(peso=="") { 
        alert("Debes introducir un peso para calcular el total");
    
    // caso en el que el peso introducido es negativo
    } else if(peso < 0) {
        alert("No se puede introducir un peso negativo");
        document.getElementById("peso").value = "";  // limpiamos el texto de peso
        
    // caso en el que hay precio y peso correctos
    } else {
        var total = precio*peso;   // calculamos el total
        document.getElementById("Ptotal").value = total;  // escribimos la cantidad total
    }
}

// FUNCIÓN QUE SE EJECUTA AL SELECCIONAR UNA FORMA DE PAGO
function seleccionaPago() {
    // comprobamos si hay algún dato en el precio total
    var total = document.getElementById("Ptotal").value;
    
    // caso en que no hay una cantidad en total --> no podemos seleccionar forma de pago
    if(total=="") {
        alert("No se puede seleccionar una forma de pago si no hay un precio total");
        this.checked = false;
        
    // caso en que hay una cantidad total --> se selecciona una forma de pago
    } else {
        if(fpago[0].checked) {  // se marcó TARJETA
            // se habilita la tarjeta
            document.getElementById("Ntarjeta").disabled = false;
            document.getElementById("Pago").disabled = false;
            
            // se deshabilita la entrega y se limpia el texto de entrega y cambio
            document.getElementById("monedas").disabled = true;
            document.getElementById("monedas").value = "";
            document.getElementById("cambio").value = "";
            
        } else if(fpago[1].checked) {  // se marcó EFECTIVO
            // se habilita la entrega
            document.getElementById("monedas").disabled = false;
            
            // se deshabilita la tarjeta y se limpia el texto de tarjeta
            document.getElementById("Ntarjeta").disabled = true;
            document.getElementById("Pago").disabled = true;
            document.getElementById("Ntarjeta").value = ""; 
        }
    }
}

// FUNCIÓN QUE SE EJECUTA AL PULSAR EL BOTÓN PAGAR
function pulsaPagar() {
    // NOTA --> como en el método pulsaTotal no dejaba marcar una opción de pago si no había una cantidad total, 
    // en este punto la cantidad total no es vacío, luego no es necesario comprobarlo
    
    // comprobamos si se ha escrito alguna tarjeta
    var tarjeta = document.getElementById("Ntarjeta").value;
    
    if(tarjeta=="") {  // no se introduce tarjeta
        alert("Se debe introducir una tarjeta para pagar");
        
    } else {  // se introduce tarjeta
        alert("Has realizado tu compra con éxito");
    }
}

// FUNCIÓN QUE SE EJECUTA AL HACER ALGÚN CAMBIO EN EL VALOR DE ENTREGA
function cambiaEntrega() {
    // NOTA --> como en el método pulsaTotal no dejaba marcar una opción de pago si no había una cantidad total, 
    // en este punto la cantidad total no es vacío, luego no es necesario comprobarlo
    
    // comprobamos si la cantidad entregada es mayor o igual a la cantidad total
    // NOTA --> se convierte a Float porque queremos comparar de forma numérica, no como si fuesen String
    var total = parseFloat(document.getElementById("Ptotal").value);
    var entregado = parseFloat(document.getElementById("monedas").value);
    
    if(total > entregado) {  // se entrega menos de lo necesario
        alert("No se ha introducido suficiente dinero");
        document.getElementById("monedas").value = "";   // se reinicia entrega
        document.getElementById("cambio").value = "";    // se reinicia cambio
        
    } else {  // se entrega cantidad suficiente
        alert("Has realizado tu compra con éxito");
        var cambio = entregado - total;    // se calcula el cambio
        document.getElementById("cambio").value = cambio;   
    }
}

// FUNCIÓN QUE REINICIA EL FORMULARIO COMPLETO
function reinicia() {
    // limpiamos las cajas de texto
    document.getElementById("precio").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("Ptotal").value = "";
    document.getElementById("Ntarjeta").value = "";
    document.getElementById("monedas").value = "";
    document.getElementById("cambio").value = "";
    
    // deshabilitamos las cajas que deben deshabilitarse
    document.getElementById("Ntarjeta").disabled = true;
    document.getElementById("Pago").disabled = true;
    document.getElementById("monedas").disabled = true;
    
    // desmarcamos las opciones de pago
    fpago[0].checked = false;
    fpago[1].checked = false;
}  

// FUNCIÓN PARA REINICIAR LO RELACIONADO CON LA FORMA DE PAGO (se usa al pulsar el botón Total)
function reiniciaPago() {
    // limpiamos lo relacionado con la forma de pago
    document.getElementById("Ntarjeta").value = "";
    document.getElementById("monedas").value = "";
    document.getElementById("cambio").value = "";
    
    // deshabilitamos lo relacionado con la forma de pago
    document.getElementById("Ntarjeta").disabled = true;
    document.getElementById("Pago").disabled = true;
    document.getElementById("monedas").disabled = true;
    
    // desmarcamos las opciones de pago
    fpago[0].checked = false;
    fpago[1].checked = false;
}