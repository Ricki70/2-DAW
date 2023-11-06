var ListaLibros = new Array();

window.onload = function() {
var div= document.createElement("div");
    div.id="divi";
document.body.appendChild(div);
		   
   document.getElementById("alta").onclick=DarAlta;
   document.getElementById("selectTitulo").onclick=llenarDatos;
   document.getElementById("prestamo").onclick=Accion;
   document.getElementById("devolucion").onclick=Accion;
   document.getElementById("btnG").onclick=MostrarGenero;
   document.getElementById("btnGA").onclick=MostrarGeneroAutor;

}
function DarAlta(){
    
    var titulo1= document.getElementById("titulo").value;
    var autor=document.getElementById("autor").value;
    var radios=document.getElementsByName("genero");
    for(var i=0; i<radios.length;i++){
       if(radios[i].checked){
           var genero=radios[i].value;
       }
    }

    var numEjem=document.getElementById("ejem").value;
// Creamos el objeto libro con todos los valores que ha puesto el usuario 
   var libro=new Libro(titulo1,autor,genero,numEjem);
 // llamamos al método CREAR_ALTA para añadir el objeto al array ListaLibros
   libro.CREAR_ALTA(ListaLibros);
 //llamamos al método rellenarSelect para añadir el título a la select 
   rellenarSelect(titulo1);
   limpiar();
}
    
function rellenarSelect(titulo1){
  
    var select=document.getElementById("selectTitulo");
    var opt = document.createElement('option');
    
    var txt=document.createTextNode(titulo1);
    opt.appendChild(txt);
    select.appendChild(opt);

} 

function llenarDatos() {
	// llamamos a la función libroSeleccionado para obtener el objeto correspondiente del array y mostrar sus datos en el formulario
    var libro = libroSeleccionado();
    document.getElementById("titulo").value=libro.titulo;
    document.getElementById("autor").value=libro.autor;
    var generos=document.getElementsByName("genero");
    document.getElementById("ejem").value=libro.numEjem;
    
    for (var j=0; j<generos.length; j++){
      if (generos[j].value == libro.genero){
          generos[j].checked = true;
          
      }
  }
}


 function libroSeleccionado() {
	 //Esta función devuelve el objeto libro del array que corresponde con el seleccionado en la select
          var select = document.getElementById("selectTitulo");
          var indice = select.selectedIndex;
          var libroSel = ListaLibros[indice];
          return libroSel;
        }

 function limpiar(){
          document.getElementById("titulo").value="";
          document.getElementById("autor").value="";
          document.getElementById("ejem").value="";
          var radios=document.getElementsByName("genero");
          for(var i=0; i<radios.length;i++){
             if(radios[i].checked){
                 radios[i].checked=false;
             }
          }
        }
function Accion(){
	// Esta función se ejecuta tanto si se pulsa el botón préstamo como el de devolución
   
   var accion="";
   //this es el objeto donde ha ocurrido el evento, en este caso el click, por tanto this.id es el id
   //del botón donde el usuario ha hecho click, preguntamos si es prestamo para saber en cual ha hecho click el 
   //usuario
   if(this.id=="prestamo"){
	   //si es prestamo, llamamos al metodo EJEMPLARES del libro Seleccionado para saber si tenemos ejemplares o no
    var sw= libroSeleccionado().EJEMPLARES();
    if(sw){
       // si sw es igual a true es que hay ejemplares y si es false es que no hay
      accion=this.id;
    }else{
        alert("lo sentimos,no tenemos ningun ejemplar disponible de ese libro");
    }
   }else{
    
       accion=this.id;
   }
   // en la variable accion nos guardamos el id del boton para pasárselo al método PRESTAMO_DEVOLUCION y
   //así saber en el método si lo que tenemos que hacer es un préstamo o una devolución
   libroSeleccionado().PRESTAMO_DEVOLUCION(accion);
   
   document.getElementById("ejem").value=libroSeleccionado().numEjem;
}
function MostrarGenero (){
       //llamamos al método TITULOS_GENERO del libro seleccionado y nos devuelve una cadena con los libros que corresponden
       var cadena= libroSeleccionado().TITULOS_GENERO(ListaLibros);
       Mostrar(cadena);
}

function MostrarGeneroAutor(){

    //llamamos al método TITULOS_AUTOR_GENERO del libro seleccionado y nos devuelve una cadena con los libros que corresponden
           var cadena= libroSeleccionado().TITULOS_AUTOR_GENERO(ListaLibros);
           Mostrar(cadena);
           
             
}
function Mostrar(cadena){
	
	
	document.getElementById("divi").innerHTML="";
	
    document.getElementById("divi").innerHTML=cadena;
    
}