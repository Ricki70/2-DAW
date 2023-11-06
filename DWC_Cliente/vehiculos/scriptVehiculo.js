var arrayCoches = new Array();
//la variable indice la vamos a utilizar para saber en todo momento el índice del registro buscado, de tal forma que si hago clic en el botón ">" sabré a partir de 
//que índice tengo que seguir buscando para comprobar si existe otro vehículo del mismo titular
var indice=0;

window.onload = function () {
    var titular = document.getElementById("titular");
    titular.onchange = mostrarDatos;

    var siguiente = document.getElementById("siguiente");
    siguiente.onclick = cambio;

    var alta = document.getElementById("alta");
    alta.onclick = darAlta;

    var baja = document.getElementById("baja");
    baja.onclick = darBaja;

    var seguro = document.getElementById("seguro");
    seguro.onclick = calcSeguro;

    var tipoSelec = document.getElementsByName("pago");
    for (var i=0; i<tipoSelec.length; i++){
        tipoSelec[i].onclick = mostrarCouta;
    }

    var estadistica = document.getElementById("estad");
    estadistica.onclick = estadisticas;

    var bajas = document.getElementById("Lbajas");
    bajas.onclick = Cochesbajas;
}

 function  darAlta () {
	
    var titulo = document.getElementById("titular").value;
    var tipo = "";
    var tipoSelec = document.getElementsByName("tipo");
    for (var i=0; i<tipoSelec.length; i++){
        if (tipoSelec[i].checked == true){
            tipo = tipoSelec[i].value;
        }
    }
    var color = document.getElementById("color").value;
    var marca = document.getElementById("marca").value;
    var anio = document.getElementById("matriculacion").value;

    
        if(titulo == "" || tipo == "" || color == "" || marca == "" || anio == "") {
            alert('Debes introducir todos los datos');
          			}else{
       
		var coche = new Vehiculo(titulo,tipo,color,marca,anio);

		arrayCoches.push(coche);
    
		alert("dado de alta");
        }
		borrar();
}


function darBaja() {
			//como se da de baja el vehículo que tenemos en pantalla y tenemos el índice del objeto en el array guardado en la variable indice
			// podemos localizarlo directamente en el array sin necesidad de buscarlo con un for
            arrayCoches[indice].baja();
            alert("dado de baja");
			borrar();
        
    }

function mostrarDatos() {
		//esta función se ejecuta cuando cambia el contenido de la caja de testo del titular
		borrarSeguro(); 
        for(var i=0; i<arrayCoches.length;i++){
            if(arrayCoches[i].titular == this.value){
				//utilizamos la función datos para no repetir tanto código puesto que cuando se escribe el titular como cuando se hace clic en 
				//el botón ">" prácticamente tenemos que escribir el mismo código.
                datos(i);
				//pongo un break para que salga del for en cuanto encuentre el titular, porque si tenemos varios vehículos del mismo titular,
				// si continuamos con el for siempre me mostraría el último vehículo del titular que el usuario ha escrito en la caja de texto
                break;
            }
        }
    }
	

function datos(i){

document.getElementById("titular").value = arrayCoches[i].titular;

                var tipo = document.getElementsByName("tipo");
                for (var j=0; j<tipo.length; j++) {
                    if (tipo[j].value == arrayCoches[i].tipo) {
                        tipo[j].checked = true;
                    }
                }
                document.getElementById("color").value =  arrayCoches[i].color;
                document.getElementById("marca").value =  arrayCoches[i].marca;
                document.getElementById("matriculacion").value =  arrayCoches[i].matriculacion;
                
                indice = i;
				
				
}

function cambio() {
	//esta fucnión se ejecuta cuando se hace click en el botón ">"
	nombre=document.getElementById("titular").value;
    for(var i=indice+1; i<arrayCoches.length;i++){
        if(arrayCoches[i].titular == nombre){

            datos(i);
            break;
        }
    }
}

function borrar() {
	
    document.getElementById("titular").value = "";
    var tipo = document.getElementsByName("tipo");
    for (var j=0; j<tipo.length; j++) {
        tipo[j].checked = false;
    }
     document.getElementById("color").value = "";
	 document.getElementById("matriculacion").value = "";
	  document.getElementById("marca").value = "";
	borrarSeguro(); 
}
function borrarSeguro(){
	
	document.getElementById("Tseguro").value = "";
	 document.getElementById("cuota").value = "";
   
    var pago = document.getElementsByName("pago");
	 for (var j=0; j<pago.length; j++) {
        pago[j].checked = false;
    }
}


function calcSeguro() {
		//como se calcula el seguro del  vehículo que tenemos en pantalla y tenemos el índice del objeto en el array guardado en la variable indice
			// podemos localizarlo directamente en el array sin necesidad de buscarlo con un for
    
            var seguro = arrayCoches[indice].calcularSeguro();
            document.getElementById("Tseguro").value = seguro;
        
    }

function mostrarCouta() {
   
    var cuota = 0;
    var precioSeguro = document.getElementById("Tseguro").value;
    if(precioSeguro == ""){
        alert("primero calcular seguro!");
    }else{
        if(this.value == "mensual"){
             cuota = precioSeguro / 12;
        }else if(this.value  == "semestral"){
              cuota = precioSeguro / 2;
        }else if(this.value  == "anual") {
              cuota = precioSeguro ;
        }
    }
    document.getElementById("cuota").value = cuota;
}

function estadisticas() {
    
	var contCocheA = 0;
    var contMotoA = 0;
    var contCamionA = 0;
    var contCocheD = 0;
    var contMotoD = 0;
    var contCamionD = 0;
    for(var i=0;i<arrayCoches.length;i++){
		//primero coprobamos que no se haya dado de baja
		if(arrayCoches[i].titular != "XXX"){
        if(arrayCoches[i].matriculacion <  2010 && arrayCoches[i].tipo == "coche"){
            contCocheA++;
        }else if(arrayCoches[i].matriculacion <  2010 && arrayCoches[i].tipo == "moto"){
            contMotoA++;
        }else if(arrayCoches[i].matriculacion <  2010 && arrayCoches[i].tipo == "camion"){
            contCamionA++;
        }else if(arrayCoches[i].matriculacion > 2010 && arrayCoches[i].tipo == "coche"){
            contCocheD++;
        }else if(arrayCoches[i].matriculacion > 2010 && arrayCoches[i].tipo == "moto"){
            contMotoD++;
        }else if(arrayCoches[i].matriculacion > 2010 && arrayCoches[i].tipo == "camion"){
            contCamionD++;
        }
		}
    }
   	
	
	var tit = document.createElement("h2");
    tit.innerHTML = "ESTADÍSTICA";
		
    var div1 = document.createElement("div");
		   
	document.getElementById("division").innerHTML="";
	document.getElementById("division").appendChild(div1);
	div1.appendChild(tit);
   
        div1.innerHTML += "Coches matriculados antes 2010: " + contCocheA + " y despues de 2010: " + contCocheD+"<br/>";
        div1.innerHTML += "Motos matriculados antes 2010: " + contMotoA + " y despues de 2010: " + contMotoD+"<br/>";
        div1.innerHTML += "Camiones matriculados antes 2010: " + contCamionA + " y despues de 2010: " + contCamionD+"<br/>";

        
}

function Cochesbajas() {
		
var div1 = document.createElement("div");
	var tit = document.createElement("h2");
    tit.innerHTML = "LISTADO DE BAJAS";
	
	var div1 = document.createElement("div");
	document.getElementById("division").innerHTML="";
	document.getElementById("division").appendChild(div1);
	div1.appendChild(tit);
	
    for(var i=0; i<arrayCoches.length;i++){
        if(arrayCoches[i].titular == "XXX") {
         
            div1.innerHTML += "TIPO : " +  arrayCoches[i].tipo + "  MARCA : " + arrayCoches[i].marca + "  AÑO MATRICULACION :" + arrayCoches[i].matriculacion+"<br/>";
            
        }
    }
}
