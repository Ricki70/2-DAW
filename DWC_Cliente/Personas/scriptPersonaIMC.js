window.onload = function() {
    document.getElementById("imc").onclick = crearObjeto;
}

function crearObjeto() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var dni = document.getElementById("dni").value;
    var sexo = document.getElementById("sexo").value;
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    var persona = new Persona(nombre, edad, dni, sexo, peso, altura);

    var pesoCaclulado;
    var imc = persona.calcularIMC();
    switch (imc) {
        case -1:
            pesoCaclulado = "Esta por debajo de su peso ideal";
            break;
        case 0:
            pesoCaclulado = "Esta en su peso ideal";
            break;
        case 1:
            pesoCaclulado = "Tiene sobrepeso";
            break;
    }

    var mayorDeEdad;
    if (persona.esMayorDeEdad()) {
        mayorDeEdad = "Es mayor de edad";
    } else {
        mayorDeEdad = "Es menor de edad";
    }

    var sexo = persona.comprobarSexo();

    var datos = persona.toString();

    document.getElementById("resultado").innerHTML = datos + "<br>" + pesoCaclulado + "<br>" + mayorDeEdad;
}