window.onload = function () {
    document.getElementById("play").onclick = empezar;
    document.getElementById("stop").onclick = terminar;
    document.getElementById("boton1").onclick = boton1;
    document.getElementById("boton2").onclick = boton2;
    document.getElementById("boton3").onclick = boton3;
	/*var botones=document.getElementsByName("b");
	for(var i=0; i<botones.length; i++){
		botones[i].onclick=FBoton;
	}*/
	
	
    document.getElementById("img1").onclick = imagen1;
    document.getElementById("img2").onclick = imagen2;
    document.getElementById("img3").onclick = imagen3;
}


function empezar() {
	/*var inputs=document.getElementsByTagName("input");
	for (var i=0; i<inputs.length; i++){
		if (inputs[i].type=="Button"){
		if(inputs[i].id =="play"){
			document.getElementById("play").disabled = true;
		}
		else {
			inputs[i].disabled = false;
		}
		}
	}*/
    document.getElementById("boton1").disabled = false;
    document.getElementById("boton2").disabled = false;
    document.getElementById("boton3").disabled = false;
    document.getElementById("play").disabled = true;
    document.getElementById("stop").disabled = false;
}

function terminar() {
    document.getElementById("play").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("boton1").disabled = true;
    document.getElementById("boton2").disabled = true;
    document.getElementById("boton3").disabled = true;
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("text1").value = "";
    document.getElementById("text2").value = "";
    document.getElementById("text3").value = "";
}

function boton1() {
    document.getElementById("img1").style.display="initial";
}

function boton2() {
    document.getElementById("img2").style.display="initial";
}

function boton3() {
    document.getElementById("img3").style.display="initial";
}
/*function FBoton(){
	alert(this.id);
	
}*/

function imagen1() {
    document.getElementById("text1").value=document.getElementById("img1").src;
  
}

function imagen2() {
    document.getElementById("text2").value=document.getElementById("img2").src;
  
}

function imagen3() {
    document.getElementById("text3").value=document.getElementById("img3").src;
  
}


