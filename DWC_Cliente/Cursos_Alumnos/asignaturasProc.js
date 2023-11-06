var auxiliar;
var asignaturas;

var wem1=["SI","BD","PROG","LM","ENTORNOS"];
var ntwem1=["","","","",""];
var wem2=["DWS","DWC","DIW","DAW"];
var ntwem2=["","","",""];
var wem3=["SGE","DI","PSP","AND"];
var ntwem3=["","","",""];

window.onload = function() {
    document.getElementById("cursos").onchange = rellenarArray;
    document.getElementById("asignaturas").onchange = procesado;
    document.getElementById("A").onclick = calcularPorcentaje;
    document.getElementById("S").onclick = calcularPorcentaje;
    document.getElementById("aprobados").onchange = calcularPorcentaje;
    
}

function rellenarArray() {
    auxiliar = this.value;
    asignaturas = document.getElementById("asignaturas");

    limpiar();
    asignaturas.options.length = 0;
    switch (auxiliar) {
        case "1wem":
            for (var i =  0; i < wem1.length; i++) {
                asignaturas.appendChild(document.createElement("option"));
                asignaturas.options[i].text = wem1[i];
            }
            break;
        case "2wem":
            for (var i =  0; i < wem2.length; i++) {
                asignaturas.appendChild(document.createElement("option"));
                asignaturas.options[i].text = wem2[i];
            }
            break;
        case "3wem":
            for (var i =  0; i < wem3.length; i++) {
                asignaturas.appendChild(document.createElement("option"));
                asignaturas.options[i].text = wem3[i];
            }
            break;
    }
}

function procesado() {
    document.getElementById("aprobados").disabled = false;
    document.getElementById("num").disabled = false;

    limpiar();
    switch (document.getElementById("cursos").selectedIndex) {
        case 1:
            if (ntwem1[asignaturas.selectedIndex] == "") {
                ntwem1[asignaturas.selectedIndex] = prompt("Introduce el numero de alumnos de " + asignaturas.value + ": ");
                document.getElementById("num").value = ntwem1[asignaturas.selectedIndex];
            }else{
                document.getElementById("num").value = ntwem1[asignaturas.selectedIndex];
            }
            break;
        case 2:
            if (ntwem2[asignaturas.selectedIndex] == "") {
                ntwem2[asignaturas.selectedIndex] = prompt("Introduce el numero de alumnos de " + asignaturas.value + ": ");
                document.getElementById("num").value = ntwem2[asignaturas.selectedIndex];
            }else{
                document.getElementById("num").value = ntwem2[asignaturas.selectedIndex];
            }
            break;
        case 3:
            if (ntwem3[asignaturas.selectedIndex] == "") {
                ntwem3[asignaturas.selectedIndex] = prompt("Introduce el numero de alumnos de " + asignaturas.value + ": ");
                document.getElementById("num").value = ntwem3[asignaturas.selectedIndex];
            }else{
                document.getElementById("num").value = ntwem3[asignaturas.selectedIndex];
            }
            break;
    }
}

function calcularPorcentaje(){
    if (parseInt(document.getElementById("num").value) >= parseInt(document.getElementById("aprobados").value)) {
        if (document.getElementById("A").checked) {
            document.getElementById("resultado").innerHTML = ((document.getElementById("aprobados").value * 100) / document.getElementById("num").value).toString() + "%";
        }
        
        if (document.getElementById("S").checked) {
        document.getElementById("resultado").innerHTML = (((document.getElementById("num").value - document.getElementById("aprobados").value) * 100) / document.getElementById("num").value).toString() + "%";        
        }
    }else{
        alert("El numero de aprobados no puede ser mayor que el numero de alumnos");
    }
}

function limpiar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("aprobados").value = "";
    document.getElementById("num").value = "";
    document.getElementById("A").checked = false;
    document.getElementById("S").checked = false;
}