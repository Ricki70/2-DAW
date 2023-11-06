var Cuentas = new Array();
var cuenta1 = new CuentaBancaria(1, "David", 1000);
var cuenta2 = new CuentaBancaria(2, "Laura", 2000);

window.onload = function() {


    
	Cuentas.push(cuenta1);
	Cuentas.push(cuenta2);
    for (var i = 0; i < Cuentas.length; i++) {
		anadirselect(i) ;       
    }

     document.getElementById("listaCuentas").onclick = mostrarCuenta;
	  

    var btnAlta = document.getElementById("alta");
    btnAlta.onclick = nuevaCuenta;
    var btnIngreso = document.getElementById("ingreso");
    btnIngreso.onclick = nuevoIngreso;
    var btnReintegro = document.getElementById("reintegro");
    btnReintegro.onclick = nuevoReintegro;
    var btnSaldoNegativo = document.getElementById("negativo");
    btnSaldoNegativo.onclick = listarCuentasNegativas;
}

//FUNCIÓN QUE DEVUELVE EL OBJETO CuentaBancaria SELECCIONADO DE LA LISTA
function cuentaSeleccionada() {

    var select = document.getElementById("listaCuentas");
    var indice = select.selectedIndex;

    var cuentaSel = Cuentas[indice];

    return cuentaSel;
}

//FUNCIÓN QUE MUESTRA LOS DATOS DE LA CUENTA SELECCIONADA DE LA LISTA

function mostrarCuenta() {
    var cuenta = cuentaSeleccionada();
    document.getElementById("nombre").value = cuenta.nombreTitular;
    document.getElementById("saldo").value = cuenta.saldo;
}

//FUNCIÓN QUE DA DE ALTA UNA NUEVA CUENTA
function nuevaCuenta() {
    var nombre = document.getElementById("nombre").value;
    var saldo = document.getElementById("saldo").value;
    saldo = parseInt(saldo);
    if (isNaN(saldo)) {
        alert("Alta incorrecta: Debe introducir una cantidad en el campo SALDO.");
    } else {
        var num = Cuentas.length ;
        var cuenta = new CuentaBancaria(num+1, nombre, saldo);
		
        Cuentas.push(cuenta);
		anadirselect(num);
		 
        alert("Nueva cuenta bancaria añadida correctamente.");
    }
}
//FUNCIÓN PARA AÑADIR UNA OPCIÓN A LA SELECT
function anadirselect(ia){
	
	var option = document.createElement("option");
	
        var textoOption = document.createTextNode("Cuenta nº: " + Cuentas[ia].ncuenta);
        option.appendChild(textoOption);
        option.value = Cuentas[ia].ncuenta;
        document.getElementById("listaCuentas").appendChild(option);
}

//FUNCIÓN QUE REALIZA UN INGRESO EN UNA CUENTA BANCARIA
function nuevoIngreso() {
    var cantidad = parseInt(prompt("Introduzca la cantidad que quiere ingresar:"));
    if (isNaN(cantidad)) {
        alert("La cantidad introducida debe ser un número.");
    } else {
        var cuenta = cuentaSeleccionada();
        cuenta.realizaMovimiento("ingreso", cantidad);
        
        mostrarCuenta();
    }
}

//FUNCIÓN QUE REALIZA UN REINTEGRO EN UNA CUENA BANCARIA
function nuevoReintegro() {
    var cantidad = parseInt(prompt("Introduzca la cantidad del reintegro:"));
    if (isNaN(cantidad)) {
        alert("La cantidad introducida debe ser un número.");
    } else {
        var cuenta = cuentaSeleccionada();
        cuenta.realizaMovimiento("reintegro", cantidad);
        Cuentas[cuenta.ncuenta - 1] = cuenta;
        mostrarCuenta();
    }
}

//FUNCIÓN QUE DEVUELVE UN LISTADO DE LAS CUENTAS CON SALDO NEGATIVO

function listarCuentasNegativas() {

    var numNegativas = 0;
    var f = new Date();
	var parrafo = document.createElement("p");
        var texto = document.createTextNode(Cuentas[0].Nombresucursal);
		parrafo.appendChild(texto);
        document.body.appendChild(parrafo);
		
		var parrafo = document.createElement("p");
        var texto = document.createTextNode(Cuentas[0].Direccion);
		parrafo.appendChild(texto);
        document.body.appendChild(parrafo);
		
    for (i = 0; i < Cuentas.length; i++) {
        if (Cuentas[i].saldo < 0) {
            numNegativas++;
            var fechalimite = (f.getDate() + 10) + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
            var parrafo = document.createElement("p");
            var texto = document.createTextNode("Cuenta nº: " + Cuentas[i].ncuenta + " | Saldo: " + Cuentas[i].saldo + " | Fecha límite: " + fechalimite);
            parrafo.appendChild(texto);
            document.body.appendChild(parrafo);
        }
    }

    if (numNegativas == 0) {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode("No existen cuentas con saldo negativo a fecha de hoy.");
        parrafo.appendChild(texto);
        document.body.appendChild(parrafo);
    }
}
