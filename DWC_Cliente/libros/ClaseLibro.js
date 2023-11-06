function Libro(titulo, autor, genero, numEjem) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero=genero;
    this.numEjem=numEjem;

    Libro.prototype.nombre="Biblioteca Maria Moliner";
    Libro.prototype.direccion="Plaza de Peru, nº2";
   
    Libro.prototype.PRESTAMO_DEVOLUCION = function(accion) {
        switch (accion) {
            case "prestamo":
			    this.numEjem = this.numEjem - 1;
                break;
            case "devolucion":
                this.numEjem = this.numEjem + 1;
                break;
    }
}

    Libro.prototype.TITULOS_GENERO = function(array) {
    var cadena="";
       for(var i=0;i<array.length;i++){
          if(array[i].genero==this.genero){
              
           cadena=cadena+" Libro: <br> titulo: " + array[i].titulo+" autor: "+array[i].autor+ "<br>";
          }
       }
      
        return cadena;
    }


    Libro.prototype.TITULOS_AUTOR_GENERO = function(array) {
        var cadena="";
        for(var i=0;i<array.length;i++){
           if(array[i].genero==this.genero && array[i].autor==this.autor){

            cadena=cadena+" libro: <br> titulo: " + array[i].titulo+ "<br>";
           }
        }
         return cadena;
    }
    
    Libro.prototype.EJEMPLARES = function() {
        if(this.numEjem>0){
            return true;
        }else{
            return false;
        }
  }
    Libro.prototype.CREAR_ALTA= function(array){
           array.push(this);
    }

    }


