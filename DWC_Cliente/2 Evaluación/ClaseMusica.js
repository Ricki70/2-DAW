// -------------------------------------------
// CLASE - IRENE LÓPEZ MELERO
// -------------------------------------------

// Constructor Musica
function Cd(id, grupo, estilo, numEjem, precio) {
    this.id = id;
    this.grupo = grupo;
    this.estilo = estilo;
    this.numEjem = numEjem;
    this.precio = parseFloat(precio + precio*0.2).toFixed(2);
}

// Propiedades de la clase
Cd.prototype.nombre = "Music Shop";
Cd.prototype.direccion = "Plaza de Perú, nº2";

// Métodos de la clase
Cd.prototype.alta = function(array) {
    array.push(this);
};

Cd.prototype.modificacion = function(estilo, numEjem, precio) {
    this.estilo = estilo;
    this.numEjem = numEjem;
    this.precio = parseFloat(precio + precio*0.2).toFixed(2);
};

Cd.prototype.vender = function(cantidad) {
    if(cantidad > this.numEjem) {
        alert("No hay ejemplares suficientes");
    } else {
        this.numEjem -= cantidad;
        alert("Venta realizada correctamente");
        return cantidad*this.precio;
    }
};