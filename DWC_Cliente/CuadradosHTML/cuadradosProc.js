window.onload = function() {
    var cuadrados = document.getElementsByName("hijos");
    for (var i = 0; i < cuadrados.length; i++) {
      cuadrados[i].onmouseover = resalta;
      cuadrados[i].onmouseout = resalta;
      cuadrados[i].onclick = resalta; 
    }
  }


function resalta(elevento) {
    var evento = elevento || window.event;
    switch(evento.type) {
        case "mouseover":
            document.getElementById("text").value = "Mouse sobre el cuadrado " + this.id;
            break;
        case "mouseout":
          document.getElementById("text").value = "Mouse fuera del cuadrado " + this.id;
            break;
        case "click":
          document.getElementById("text").value = "Has clickado sobre el cuadrado " + this.id;
            break;
    }
  }