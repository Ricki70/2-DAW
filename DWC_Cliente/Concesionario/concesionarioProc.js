var marca;
var tipo;
var precio;

var cochesPeugeot = ["Selecciona Modelo", "108", "208", "308",
                     "508", "2008", "3008", "5008","partner", "traveller"];
var preciosPeugeot = [6000, 8000, 9500, 10000, 11500, 12000, 12500, 13000,
                      13500 ];

var cochesCitroen = ["Selecciona Modelo", "C3", "C4", "C5", "cactus", "berlingo",
                     "spacetourer", "DS3", "DS7", "DS9"];
var preciosCitroen = [5800, 6700, 8300, 11500, 11950, 12200, 14950, 16900, 19000];

var cochesNissan = ["Selecciona Modelo", "micra", "juke", "qashqai",
                    "x-trail", "leaf", "ariya", "primastar", "townstar"];
var preciosNissan = [6700, 7900, 9600, 12000, 13500, 15000, 17500, 21000];


window.onload = function () {
    document.getElementById("marca").onchange = crearDDLModelos;
    document.getElementById("tipo").onchange = mostrarModelo;

    var extras = document.getElementsByName("extras");
    for (var i = 0; i < extras.length; i++) {
        extras[i].onclick = calcularPrecio;
    }

    var color = document.getElementsByName("color");
    for (var i = 0; i < color.length; i++) {
        color[i].onclick = calcularPrecio;
    }
}

function crearDDLModelos() {
    marca = this.value;
    tipo = document.getElementById("tipo");

    document.getElementById("imagenMarca").src = "Imagenes/" + marca + "/" + marca + ".png";

    switch (marca) {
        case "Selecciona Marca":
            document.getElementById("imagenMarca").src = "";
            document.getElementById("imagenTipo").src = "";
            tipo.options.length = 0;
            break;
        case "Peugeot":
            document.getElementById("imagenTipo").src = "";
            tipo.options.length = 0;
            for (var i =  0; i < cochesPeugeot.length; i++) {
                tipo.appendChild(document.createElement("option"));
                tipo.options[i].text = cochesPeugeot[i];
            }
            break;
        case "Citroen":
            document.getElementById("imagenTipo").src = "";
            tipo.options.length = 0;
            for (var i =  0; i < cochesCitroen.length; i++) {
                tipo.appendChild(document.createElement("option"));
                tipo.options[i].text = cochesCitroen[i];
            }
            break;
        case "Nissan":
            document.getElementById("imagenTipo").src = "";
            tipo.options.length = 0;
            for (var i =  0; i < cochesNissan.length; i++) {
                tipo.appendChild(document.createElement("option"));
                tipo.options[i].text = cochesNissan[i];
            }
            break;
        }
        calcularPrecio();
}

function mostrarModelo() {
    if (tipo.value == "Selecciona Modelo") {
        document.getElementById("imagenTipo").src = "";
        
    } else {
        document.getElementById("imagenTipo").src = "Imagenes/" + marca + "/" + tipo.value + ".png";
    }
    calcularPrecio();
}

function calcularPrecio(){
    precio = 0;

    switch (marca) {
        case "Peugeot":
            precio += preciosPeugeot[tipo.selectedIndex - 1];
            break;
        case "Citroen":
            precio += preciosCitroen[tipo.selectedIndex - 1];
            break;
        case "Nissan":
            precio += preciosNissan[tipo.selectedIndex - 1];
            break;
    }
    if (tipo.selectedIndex == 0) {
        precio = 0;
    }

    if (precio != 0) {
        if (document.getElementById("conExtras").checked) {
            precio += 1500;
        }
        if (document.getElementById("negro").checked == true) {
            precio += 700;
        } 
        if (document.getElementById("rojo").checked == true) {
            precio += 500;
        }
    }


    document.getElementById("celda").innerHTML = precio.toString();
}