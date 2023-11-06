//CONSTRUCTOR
var CuentaBancaria = function(ncuenta, nombreTitular, saldo) {
    this.ncuenta = ncuenta;
    this.nombreTitular = nombreTitular;
    this.saldo = saldo;
}
CuentaBancaria.prototype.Nombresucursal="Bankia2";
CuentaBancaria.prototype.Direccion="C/ Pez, 2";
//MÉTODOS DE LA CLASE


//MÉTODO PARA REALIZAR UN MOVIMIENTO EN LA CUENTA
CuentaBancaria.prototype.realizaMovimiento = function(movimiento, cantidad) {
    switch (movimiento) {
        case "reintegro":
            this.saldo = this.saldo - cantidad;
            break;
        case "ingreso":
            this.saldo = this.saldo + cantidad;
            break;
    }
}
