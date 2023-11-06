
function CD (ID, grupo, estilo, nEjemplares, precio){
    this.ID = ID;
    this.grupo = grupo;
    this.estilo = estilo;
    this.nEjemplares = nEjemplares;
    this.precio = precio * 1.20;
}

CD.prototype.nombre = "Music shop";
CD.prototype.direccion = "Plaza de Peru, nº2";

CD.prototype.alta = function(listaCD){
    listaCD.push(this);
}

CD.prototype.vender = function(cantidad){
    //Te Dejo estos dos alerts preparados por si este IF no te funciona al corregirlo, Desconozco el porque pero por algun motivo algunas veces,
    //Falla la condicion, es decir, sera problema mio pero no he conseguido averiguar donde esta el error y ocurre muy pocas veces.
    //alert(cantidad);
    //alert(this.nEjemplares);
    if (cantidad > this.nEjemplares){
        alert("No hay suficientes Ejemplares");
        return "";
    }else{
        alert("Vendido Correctamente");
        this.nEjemplares -= cantidad;
        return this.precio * cantidad;
    }
}

CD.prototype.modificar = function(estilo, nEjemplares, precio){
    this.estilo = estilo;
    this.nEjemplares = nEjemplares;
    this.precio = precio * 1.20;
}