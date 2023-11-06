var n;
var m;

window.onload = function() {
    document.getElementById("prompt").onclick = pulsarPrompt;
    document.getElementById("parrafo").onclick = pulsarParrafo;
    
   } 

function pulsarPrompt(){
    n = prompt("Introduce un numero de botones:");
    if (n>0){
        
        var b = document.createElement("input");
        b.className = "control";
        b.type = "button";
        b.id = "Borrar1";
        b.value = "Borrar";
        b.onclick = pulsarBorrar1;
            document.getElementById("p1").appendChild(b);

        for (var i=1; i<=n; i++){
            var b = document.createElement("input");
            b.className = "boton";
            b.type = "button";
            b.id = "boton"+i;
            b.value = "boton "+i;
            b.onclick = pulsarBoton;
            document.getElementById("div1").appendChild(b);
        }

    }else{
        alert("El numero debe ser mayor que 0");
    }
}

function pulsarParrafo(){
    m = prompt("Introduce un numero de parrafos:");
    if (m>0){
        
        var p = document.createElement("input");
        p.className = "control";
        p.type = "button";
        p.id = "Borrar2";
        p.value = "Borrar";
        p.onclick = pulsarBorrar2;
            document.getElementById("p2").appendChild(p);

        for (var i=1; i<=m; i++){
            var p = document.createElement("p");
            p.className = "parrafo";
            p.id = "parrafo"+i;
            p.appendChild(document.createTextNode(prompt("Introduzca el texto del parrafo: "+i)));
            document.getElementById("div2").appendChild(p);
        }

    }else{
        alert("El numero debe ser mayor que 0");
    }
}

function pulsarBoton(){
    alert("Has pulsado el "+this.value);
}

function pulsarBorrar1(){
    for(var i = 1; i <= n; i++){
        var caja = document.getElementById("boton"+ i);
        caja.parentNode.removeChild(caja);
    }

    document.getElementById("Borrar1").parentNode.removeChild(document.getElementById("Borrar1"));
}

function pulsarBorrar2(){
    for(var i = 1; i <= m; i++){
        var parr = document.getElementById("parrafo"+ i);
        parr.parentNode.removeChild(parr);
    }

    document.getElementById("Borrar2").parentNode.removeChild(document.getElementById("Borrar2"));
}