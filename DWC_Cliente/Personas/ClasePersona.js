function Persona (nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

Persona.prototype.calcularIMC = function () {
    var imc = this.peso / ((this.altura/100) * (this.altura/100));
    if (imc < 20) {
        return -1;
    } else if (imc >= 20 && imc <= 25) {
        return 0;
    } else {
        return 1;
    }
}

Persona.prototype.esMayorDeEdad = function () {
    if (this.edad >= 18) {
        return true;
    } else {
        return false;
    }
}

Persona.prototype.comprobarSexo = function () {
    if (this.sexo != "H" && this.sexo != "M") {
        this.sexo = "H";
    }
}

Persona.prototype.toString = function () {
    return  "Nombre: " + this.nombre + 
            "\nEdad: " + this.edad + 
            "\nDNI: " + this.dni + 
            "\nSexo: " + this.sexo + 
            "\nPeso: " + this.peso + 
            "\nAltura: " + this.altura;
}