function Vehiculo (titular, tipo, color, marca, matriculacion){
    this.titular = titular;
    this.tipo=tipo;
	if(tipo=="moto" ){
		this.impuesto = 100;
	}
	if(tipo=="coche"  ){
		this.impuesto = 150;
	}
	if(tipo=="camion" ){
		this.impuesto = 250;
	}
    this.color = color;
    this.marca = marca;
    this.matriculacion = matriculacion;
}




Vehiculo.prototype.calcularSeguro = function () {
    var precio = 0;
    if(this.tipo == "coche"){
        precio = 1000;
	}
    else if(this.tipo == "moto"){
         precio = 500;
         }
    else if(this.tipo == "camion") {
         precio = 2000;
        
        }
    
	if(this.color == "blanco"){
            precio -= 100;
        }
    if(this.matriculacion < 2010){
            precio += 200;
        }

    return precio;
}


Vehiculo.prototype.baja = function () {
    this.titular = 'XXX';
}





