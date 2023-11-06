//Ricardo de Antonio Aguirre
//No he querido escatimar en variables para que quede los mas claro posible, por eso me declaro cada variable 
//en cada uno de los metodos en lugar de declararlas cmo globales.


/**
=================================
|   Declaracion de variables    |
=================================
 */

//Array tipos de Pera
var Peras = ["Española", "Conferencia"];
//Array precios de Peras
var preciosPeras = [3, 4];

//Array Tipos de Manzana
var Manzanas = ["Golden", "Royal Gala"];
//Array precios de Manzanas
var preciosManzanas = [2, 3];

//Array Tipos de Plátano
var Platanos = ["Banana", "Canario"];
//Array precios de Plátano
var preciosPlatanos = [3, 4];

//Array Tipos de Kiwi
var Kiwis = ["Verde", "Dorado"];
//Array precios de Kiwi
var preciosKiwis = [5, 6];

//Funcion que se ejecutara al cargar la pagina en memoria
window.onload = function () {
    //Select de frutas
    document.getElementById("frutas").onchange = rellenarSelectTipoFruta;

    //Select de Tipo de Frutas
    document.getElementById("variedad").onchange = mostrarPrecio;

    //Boton para caluclar el total
    document.getElementById("total").onclick = calcularTotal;

    //TextBox para introducir el peso
    document.getElementById("Peso").onchange = añadirMagnitud;

    //Creamos una variable de tipo array que contiene los radio butons con el nombre fpago (efectivo y tarjeta)
    var botonesradio = document.getElementsByName("fpago");
    //recorremos el array y declaramos los eventos "onclick"
    for(var i = 0; i < botonesradio.length; i++){
        botonesradio[i].onclick = elegirFormaPago;
    }

    //Boton de pago cuando tienes seleccionado el pago con tarjeta
    document.getElementById("Pago").onclick = comprobarNumTarjeta;

    //TextBox de la cantidad de dinero a pagar cuando tienes seleccionado el pago en efectivo
    document.getElementById("monedas").onchange = calcularCambio;
}

/**
 * @function rellenarSelectTipoFruta
 * @description En funcion del elemento seleccionado en el Select "Frutas", rellena el segundo select "Tipo frutas"
 * con las options correspondientes
 */
function rellenarSelectTipoFruta() {
    //Limpiamos primeramente toda la pagina
    limpiarTodo();
    
    //Me guardo en variables los elementos HTML con los que voy a trabajar en el metodo
    var cajaPrecio = document.getElementById("precio");
    var selectTipoFruta = document.getElementById("variedad");
    
    cajaPrecio.value = "";
    //Creo una primera option que servira como referencia para el usuario, esta sera independiente a lo que hayamos
    //seleccionado en el primer select
    var opcion = document.createElement("option");
    selectTipoFruta.appendChild(opcion);
    selectTipoFruta.options[0].text = "Seleccione Tipo de Fruta";

    //Con este switch controlamos que seleccion hemos hecho en el primer select "Fruta" para saber a que array acceder para rellenar el segundo select
    switch (this.value) {
        case "Peras":   //Peras
            //Con un bucle for recorremos el array que corresponde con los tipos de pera
            for (var i = 0; i < Peras.length; i++){
                //Creamos la option y la insertamos dentro del select en la misma sentencia
                selectTipoFruta.appendChild(document.createElement("option"));
                //Le asignamos el nombre que tendra esa option accediendo al array correspondiente
                selectTipoFruta.options[i + 1].text = Peras[i];
            }
            break;
        case "Manzanas": //Manzanas
            //Con un bucle for recorremos el array que corresponde con los tipos de Manzana
            for (var i = 0; i < Manzanas.length; i++){
                //Creamos la option y la insertamos dentro del select en la misma sentencia
                selectTipoFruta.appendChild(document.createElement("option"));
                //Le asignamos el nombre que tendra esa option accediendo al array correspondiente
                selectTipoFruta.options[i + 1].text = Manzanas[i];
            }
            break;
        case "Plátanos":    //Plátanos
            //Con un bucle for recorremos el array que corresponde con los tipos de Plátano
            for (var i = 0; i < Platanos.length; i++){
                selectTipoFruta.appendChild(document.createElement("option"));
                //Le asignamos el nombre que tendra esa option accediendo al array correspondiente
                selectTipoFruta.options[i + 1].text = Platanos[i];
            }
            break;
        case "Kiwis":   //Kiwis
            //Con un bucle for recorremos el array que corresponde con los tipos de Kiwi
            for (var i = 0; i < Kiwis.length; i++){
                //Creamos la option y la insertamos dentro del select en la misma sentencia
                selectTipoFruta.appendChild(document.createElement("option"));
                //Le asignamos el nombre que tendra esa option accediendo al array correspondiente
                selectTipoFruta.options[i + 1].text = Kiwis[i];
            }
            break;
        //En caso de seleccionar el primer option que habiamos creado anteriormente (Seleccionar Tipo de Fruta) es decir, el option[0]
        //Limpiamos de nuevo toda la pantalla
        default: 
            limpiarTodo();
    }
}

/**
 * @function mostrarPrecio
 * @description Esta Funcion se encarga de comprobar que elemento tenemos seleccionado en el select "Tipo de fruta" y nos rellena la caja de texto
 * del precio con el valor correspondiente segun la fruta y el tipo de fruta elegido
 */
function mostrarPrecio(){
    //guardamos en variables los elementos HTML con los que voy a trabajar en este metodo
    var fruta = document.getElementById("frutas");
    var tipoFruta = document.getElementById("variedad");
    var cajaPrecio = document.getElementById("precio");

    //Limpiamos de nuevo toda la pagina
    limpiarPesoYPrecio();
    limpiarPrecioFinal();
    limpiarInfoPago();
    limpiarRadioButtons();

    //Este Switch cotrola que Fruta Hemos Seleccionado (Peras, Manzanas...)
    switch (fruta.value){
        case "Peras": //Peras
            //Asignamos el precio correpondiente a la caja de texto dependiendo de la opcion seleccionada
            cajaPrecio.value = preciosPeras[tipoFruta.selectedIndex - 1] + " €/Kg";
            break;
        case "Manzanas":    //Manzanas
            //Asignamos el precio correpondiente a la caja de texto dependiendo de la opcion seleccionada
            cajaPrecio.value = preciosManzanas[tipoFruta.selectedIndex - 1] + " €/Kg";
            break;
        case "Plátanos":    //Plátanos
            //Asignamos el precio correpondiente a la caja de texto dependiendo de la opcion seleccionada
            cajaPrecio.value = preciosPlatanos[tipoFruta.selectedIndex - 1] + " €/Kg";
            break;
        case "Kiwis":   //Kiwis
            //Asignamos el precio correpondiente a la caja de texto dependiendo de la opcion seleccionada
            cajaPrecio.value = preciosKiwis[tipoFruta.selectedIndex - 1] + " €/Kg";
            break;
    }

    //Aseguramos que en caso de seleccionar la primera opcion creada que no corresponde con ningun tipo de fruta, 
    //nos borre el valor de la caja correspondiente al precio
    if (tipoFruta.selectedIndex == 0){
        cajaPrecio.value = "";
    } 
}

/**
 * @function añadirMagnitud
 * @description Añade el simbolo "Kg" al final de la cadena asignada a la caja de texto
 */
function añadirMagnitud(){
    //Guardamos en una variable el elemento HTML
    var peso = document.getElementById("Peso");
    //En una variale auxiliar lo separamos por el espacio y me quedo con la primera parte correspondiente al valor -> (25 €)
    var aux = peso.value.split(" ");
    
    peso.value = aux[0] + " Kg";
    limpiarPrecioFinal();
}

/**
 * @function calcularTotal
 * @description Calcula el precio final multiplicando el peso elegido por el precio por Kg correspondiente
 */
function calcularTotal(){
    var precioInicial = document.getElementById("precio").value.split(" ");
    var peso = document.getElementById("Peso").value.split(" ");
    var precioFinal = document.getElementById("Ptotal");

    if (precioInicial.value == ""){
        alert("Tienes que seleccionar una fruta, su tipo, y el peso para poder calcular su precio")
    }else if(peso[0] <= 0 || peso[0] >= 100 || peso == ""){
        alert ("Debes Introducir un peso mayor que 0 y menor que 100");
    }else{
        precioFinal.value = parseInt(precioInicial[0]) * parseInt(peso[0]) + " €";
    }

}

/**
 * @function elegirFormaPago
 * @description Habilita o deshabilita los elementos correspondientes para el metodo de pago seleccionado
 */
function elegirFormaPago(){
    var tarjeta = document.getElementById("T");
    var efectivo = document.getElementById("E");

    var numTarjeta = document.getElementById("Ntarjeta");
    var botonPago = document.getElementById("Pago");
    var entrega = document.getElementById("monedas");
    var cambio = document.getElementById("cambio");

    if (tarjeta.checked){
        limpiarInfoPago();
        numTarjeta.disabled = false;
        botonPago.disabled = false;
        entrega.disabled = true;
        cambio.disabled = true;
    }else if (efectivo.checked){
        limpiarInfoPago();
        numTarjeta.disabled = true;
        botonPago.disabled = true;
        entrega.disabled = false;
        cambio.disabled = false;
    }else{
        limpiarInfoPago();
        numTarjeta.disabled = true;
        botonPago.disabled = true;
        entrega.disabled = true;
        cambio.disabled = true;
    }
}

function comprobarNumTarjeta(){
    var numTarjeta = document.getElementById("Ntarjeta");
    var precioFinal = document.getElementById("Ptotal").value.split(" ");

    if (precioFinal[0] != "" && numTarjeta.value != ""){
        alert("Pago Realizado Correctamente");
    }else if (precioFinal[0] == ""){
        alert("Tienes que seleccionar una fruta, su tipo, y el peso y calcular el total para poder pagarla")
    }else{
        alert("Tienes que introducir el numero de tarjeta")
    }
}

function calcularCambio(){
    var precioFinal = document.getElementById("Ptotal").value.split(" ");
    var cambio = document.getElementById("cambio");

    var entrega = document.getElementById("monedas");
    aux = entrega.value.split(" ");
    entrega.value = aux[0] + " €";

    var entregaaux = entrega.value.split(" ");

    if (precioFinal[0] == ""){
        alert("Tienes que seleccionar una fruta, su tipo, y el peso y calcular el total para poder pagarla")
    }else if(parseInt(entregaaux[0]) < parseInt(precioFinal[0])){
        alert("La cantidad de dinero introducida no es suficiente");
        cambio.value = "";
        entrega.value = "";
    }else{
        cambio.value = (parseInt(entregaaux[0]) - parseInt(precioFinal[0])).toString() + " €";
    }

    if (entregaaux[0] == ""){
        cambio.value = "";
    }
}

function limpiarTipoFruta() {
    document.getElementById("variedad").options.length = 0;
}

function limpiarPesoYPrecio(){
    document.getElementById("precio").value = "";
    document.getElementById("Peso").value = "";
}

function limpiarRadioButtons(){
    document.getElementById("T").checked = false;
    document.getElementById("E").checked = false;
}

function limpiarInfoPago(){
    document.getElementById("Ntarjeta").value = "";
    document.getElementById("cambio").value = "";
    document.getElementById("monedas").value = "";
}

function limpiarPrecioFinal(){
    document.getElementById("Ptotal").value = "";
}

function limpiarTodo(){
    limpiarTipoFruta();
    limpiarPesoYPrecio();
    limpiarRadioButtons();
    limpiarInfoPago();
    limpiarPrecioFinal();
}
