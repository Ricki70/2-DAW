function Renfe (codigo, hsalida, hllegada, tipo, destino, circulacion){
    this.codigo = codigo;
    this.hsalida = hsalida;
    this.hllegada = hllegada;
    this.tipo = tipo;
    this.destino = destino;
    this.circulacion = circulacion;
}

//declaramos array Renfe

//var listaRenfe = new Array();

Renfe.prototype.anadirRenfe = function(listaRenfe){
    listaRenfe.push(this);
	
}

Renfe.prototype.eliminarRenfe = function(listaRenfe){
    //eliminaremos el objeto de la listaRenfe
    //esto se hace con listaRenfe.splice()
    //averiguamos la posición del objeto que queremos borrar

    var posicion = listaRenfe.indexOf(this);
	
    listaRenfe.splice(posicion, 1); //eliminamos desde el index "posicion" 1 elemento

}

