var nCursos;
var cursos = new Array();

window.onload = function () {
    crearDivs1(prompt("Introduce un numero de DIVS a crear:"));
}

function crearDivs1(n) {
    nCursos = n;
    for (var i = 0; i < n; i++) {
        var div = document.createElement("div");
        div.className = "div";
        div.id = "div" + i;
        div.onmouseenter = cambiarClase;
        div.onmouseleave = resetClase;
        document.body.appendChild(div);

        crearCabecera(div, i);
        crearCajaTexto(div, i);
        crearBotones(div, i);
        crearSelect(div, i);

        for (var j = 0; j < 3; j++) {
            document.body.appendChild(document.createElement("br"));
        }
    }
    if (parseInt(n) < 1) {
        crearDivs1(prompt("El numero de Divs debe ser mayor que 0"));
    } else if (n != null) {
        crearDivs2();
    }
}

function crearCabecera(div, i) {
    var cabecera = document.createElement("h2");
    cabecera.id = "cabecera" + i;

    var nombreCurso = prompt("Introduzca el texto de la cabecera " + (i + 1) + ":");
    cabecera.appendChild(document.createTextNode(nombreCurso));
    cursos[i] = nombreCurso;
    div.appendChild(cabecera);
}

function crearCajaTexto(div, i) {
    var cajaTexto = document.createElement("input");
    cajaTexto.type = "text";
    cajaTexto.className = "cajatexto";
    cajaTexto.id = "cajatexto" + i;
    cajaTexto.placeholder = "Introduzca ALUMNO";

    div.appendChild(cajaTexto);
}

function crearBotones(div, i) {
    var boton = document.createElement("input");
    boton.type = "button";
    boton.className = "guardar";
    boton.id = "guardar" + i;
    boton.value = "guardar";
    boton.onclick = añadirAlumno;

    div.appendChild(boton);

    boton = document.createElement("input");
    boton.type = "button";
    boton.className = "listado";
    boton.id = "listado" + i;
    boton.value = "listado";
    boton.onclick = mostrarListado;

    div.appendChild(boton);
}

function crearSelect(div, i) {
    for (var j = 0; j < 2; j++) {
        insertarSaltoLinea(div);
    }

    var seleccion = document.createElement("select");
    seleccion.className = "select";
    seleccion.id = "select" + i;
    seleccion.onchange = eliminarAlumno;

    div.appendChild(seleccion);

    var opcion = document.createElement("option");
    seleccion.appendChild(opcion);
    seleccion.options[0].text = "Seleccione alumno a eliminar";
}

function crearDivs2() {
    var div = document.createElement("div");
    div.className = "div";
    div.id = "divaux";
    document.body.appendChild(div);

    var boton = document.createElement("input");
    boton.type = "button";
    boton.className = "almacenar";
    boton.id = "almacenar";
    boton.value = "almacenar";
    boton.onclick = almacenarLocalHost;

    div.appendChild(boton);

    var boton = document.createElement("input");
    boton.type = "button";
    boton.className = "mostrar";
    boton.id = "mostrar";
    boton.value = "mostrar";
    boton.onclick = mostrarLocalHost;

    div.appendChild(boton);
}

function cambiarClase() {
    this.className = "clasecss";
}

function resetClase() {
    this.className = "div";
}

function añadirAlumno() {
    var seleccion = document.getElementById("select" + this.id.slice(-1));
    var cajatexto = document.getElementById("cajatexto" + this.id.slice(-1))

    for (var i = 1; i < seleccion.options.length; i++) {
        if (seleccion.options[i].text == cajatexto.value) {
            alert("El alumno ya existe");
            cajatexto.value = "";
            return;
        } else if (cajatexto.value == "") {
            alert("El campo esta vacio");
            return;
        }
    }
    var opcion = document.createElement("option");
    seleccion.appendChild(opcion);
    seleccion.options[seleccion.options.length - 1].text = cajatexto.value;
    alert("Alumno añadido");
    cajatexto.value = "";
    return;
}

function eliminarAlumno() {
    var seleccion = document.getElementById(this.id);
    seleccion.remove(seleccion.selectedIndex);
    alert("Alumno eliminado");
}

function mostrarListado() {
    var seleccion = document.getElementById("select" + this.id.slice(-1));

    if (seleccion.options.length > 1) {
        if (document.getElementById("divaux2") != null) {
            document.getElementById("divaux2").remove();
        }
        var div = document.createElement("div");
        div.className = "div";
        div.id = "divaux2";
        document.body.appendChild(div);

        var cabecera = document.createElement("h2");
        cabecera.appendChild(document.createTextNode("Listado " + document.getElementById("cabecera" + this.id.slice(-1)).innerHTML));
        div.appendChild(cabecera);
        for (var i = 1; i < seleccion.options.length; i++) {
            var p = document.createElement("p");
            p.appendChild(document.createTextNode(seleccion.options[i].text));
            div.appendChild(p);
        }
    } else {
        alert("No hay alumnos para mostrar");
        return;
    }

}

function almacenarLocalHost(){
    localStorage.clear();
    localStorage.setItem("nCursos", nCursos);
    for (var i = 0; i < cursos.length; i++) {
        localStorage.setItem("nombreCursos"+i, cursos[i]);
    }
    alert("Datos almacenados");
}

function mostrarLocalHost(){
    if (document.getElementById("mostrarLocalStorage") != null) {
        document.getElementById("mostrarLocalStorage").remove();
    }
    var div = document.getElementById("divaux");
    var string = document.createElement("p");
    string.id = "mostrarLocalStorage";

    var texto = "Tiene " + localStorage.getItem("nCursos") + " cursos dados de alta. Los cursos son: ";

    for (var i = 0; i < localStorage.getItem("nCursos"); i++) {
        texto += localStorage.getItem("nombreCursos"+i) + ", ";
    }

    string.appendChild(document.createTextNode(texto));
    div.appendChild(string);
}

function insertarSaltoLinea(div) {
    div.appendChild(document.createElement("br"));
}