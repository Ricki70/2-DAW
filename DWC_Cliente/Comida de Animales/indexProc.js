var comidasperro = ["Pedigree", "Royal Canin", "Eukanuba", "Hills", "Purina"];
var comidasgato = ["Whiskas", "Purina", "Eukanuba", "Hills", "Royal Canin"];

var preciosPerro = ["123", "256", "365", "463", "578"];
var preciosGato = ["86", "90", "255", "300", "479"];

var aux;

window.onload = function () {
    document.getElementById("animal").onchange = mostrarImagen;
    document.getElementById("marca").onchange = mostrarPrecioComida;
    document.getElementById("mostrar").onclick = mostrarPrecioComida;
}

function mostrarImagen() {
    aux = this.value;

    document.getElementById("imagenAnimal").src = "Imagenes/" + this.value + ".png";
    document.getElementById("precio").innerHTML = "0"
    switch (aux) {
        case "borrar":
            document.getElementById("marca").options.length = 0;
            break;
        case "perro":
            document.getElementById("marca").options.length = 0;
            for (var i =  0; i < comidasperro.length; i++) {
                document.getElementById("marca").appendChild(document.createElement("option"));
                document.getElementById("marca").options[i].text = comidasperro[i];
            }
            break;
        case "gato":
            document.getElementById("marca").options.length = 0;
            for (var i =  0; i < comidasgato.length; i++) {
                document.getElementById("marca").appendChild(document.createElement("option"));
                document.getElementById("marca").options[i].text = comidasgato[i];
            }
            break;
    }

    mostrarPrecioComida();  
}

function mostrarPrecioComida() {
    if (document.getElementById("mostrar").checked) {
        switch (aux) {
            case "perro":
                document.getElementById("precio").innerHTML = preciosPerro[document.getElementById("marca").selectedIndex];
                break;
            case "gato":
                document.getElementById("precio").innerHTML = preciosGato[document.getElementById("marca").selectedIndex];
                break;
        } 
    }else{
        document.getElementById("precio").innerHTML = "";
    }
}