window.onload = function() {
   
    //código introducido
    var codigo = document.getElementById("codigo");
    //botón de alta
    var botonAlta = document.getElementById("alta");
    //botón de baja
    var botonBaja = document.getElementById("baja");


    codigo.onchange = adminRelleno;
    botonAlta.onclick = anadirObjeto;
    botonBaja.onclick = borrarObjeto;
}

//declaramos el array de objetos
var listaRenfe = new Array(); 


function anadirObjeto(){
    
    var codigoIn = document.getElementById("codigo").value;
    var hsalida = document.getElementById("hsalida").value;
    var hllegada = document.getElementById("hentrada").value;
    
    var tipolista = document.getElementsByName("tipo");
    var destino = document.getElementById("destino").value;
    
    var circulacionlista = document.getElementsByName("circulacion");

    var tipo;
    var circulacion;

    
    for (var i=0; i<tipolista.length; i++){
        if (tipolista[i].checked == true){
            tipo = tipolista[i].value;
            }
        
    }

    for (var i=0; i<circulacionlista.length; i++){
        if (circulacionlista[i].checked == true){
            circulacion = circulacionlista[i].value;
            
        }
        
    }
 
    
    var r1 = new Renfe(codigoIn, hsalida, hllegada, tipo, destino, circulacion);
    
    //lamada al método de la clase Renfe para añadir el objeto al array
    r1.anadirRenfe(listaRenfe);
    
   

    limpia();

}

function adminRelleno(){
	
    //en esta función se recogerá el valor del código que se ha introducido en el formulario
    //si el código está en el array de objetos, existe el tren. Por tanto rellenaremos los demás campos
    //si no existe no rellenaremos los campos
   
    
   var codigoIn = document.getElementById("codigo").value;
   var hsalida = document.getElementById("hsalida");
   var hllegada = document.getElementById("hentrada");
   var tipolista = document.getElementsByName("tipo");
   var circulacionlista = document.getElementsByName("circulacion");
    var destino = document.getElementById("destino");

	var encontrado=false;
    for (var i=0; i<listaRenfe.length; i++){
        if (listaRenfe[i].codigo == codigoIn){
			encontrado=true;
            //rellenar los demás campos con sus datos
            hsalida.value = listaRenfe[i].hsalida;
            hllegada.value = listaRenfe[i].hllegada;
            for (var j=0; j<tipolista.length; j++){
                if (tipolista[j].value == listaRenfe[i].tipo){
                    tipolista[j].checked = true;
                    
                }
            }

            for (var j=0; j<circulacionlista.length; j++){
                if (circulacionlista[j].value == listaRenfe[i].circulacion){
                    circulacionlista[j].checked = true;
                }
                
            }

            destino.value = listaRenfe[i].destino;

           
        }
    }
	if (!encontrado){
		limpia();
	}

}

function borrarObjeto(){
    

    var codigoIn = document.getElementById("codigo").value;
   

    for (var i=0; i<listaRenfe.length; i++){
        if (codigoIn == listaRenfe[i].codigo){
           
            listaRenfe[i].eliminarRenfe(listaRenfe);
			alert("tren dado de baja");
			limpia();
            
        }
    }
	
    
}

function limpia(){
    
    document.getElementById("hsalida").value = "";
    document.getElementById("hentrada").value = "";
    var tipolista =  document.getElementsByName("tipo");
    for (var i=0; i<tipolista.length; i++){
        tipolista[i].checked = false;
    }
    var circulacionlista = document.getElementsByName("circulacion");
    for (var i=0; i<circulacionlista.length; i++){
        circulacionlista[i].checked = false;
    }
     
    document.getElementById("destino").value = "avila";
}