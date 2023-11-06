
    var n1 = "0";
    var n2 = "0";
    var operando = "undefined";
    var resultado = 0;
    var muestra ="";
    var control = false;
    
    window.onload = function () {

        var nums = document.getElementsByName("num");
        for (var i = 0; i < nums.length; i++) {
            nums[i].onclick = pulsarNumero;
        }
        
        var operando = document.getElementsByName("operando");
        for (var i = 0; i < operando.length; i++) {
            operando[i].onclick = pulsarOperando;
        }
        
        document.getElementById("coma").onclick = pulsarComa;
        document.getElementById("negativo").onclick = pulsarNegativo;
        
        document.getElementById("del").onclick = pulsarDEL;
        document.getElementById("c").onclick = pulsarC;

        document.getElementById("igual").onclick = pulsarIgual;
    }
    
    function pulsarNumero() {

        if (control) {
            n1 = "0";
            n2 = "0";
            operando = "undefined";
            resultado = 0;
            muestra = "";
        }
        control = false;

        if (n1 == "0" && n1 !== '0.' && n2 != "0") {
            n1 = document.getElementById(this.id).value;
            muestra += document.getElementById(this.id).value;
        }else if(n1 == "0" && n1 !== '0.'){
            n1 = document.getElementById(this.id).value;
            muestra = muestra.concat(document.getElementById(this.id).value);
        
        } else if (n1 == "-0"){
            n1 = "-";
            n1 += document.getElementById(this.id).value;
            muestra = muestra.concat(document.getElementById(this.id).value);
        }else{
            n1 += document.getElementById(this.id).value;
            muestra = muestra.concat(document.getElementById(this.id).value);
        }
       
        mostrar();
    }
    
    function pulsarComa(){
        if(muestra == 0) {
            muestra = '0.';
        } else if(muestra.indexOf('.') == -1) {
            muestra = muestra.concat('.');
        }
        mostrar();
    }
    
    function pulsarNegativo() {
        if(muestra.indexOf('-') == -1) {
            muestra = "-" + muestra;
        }else{
            muestra = muestra.replace('-', '');
        }
        mostrar();
    }
    
    function pulsarOperando() {
        n2 = parseFloat(n1);
        n1 = "0";
        
        if(operando.length != 1) {
            operando = document.getElementById(this.id).value;
            muestra = muestra.concat(operando);
        }
        mostrar();
    }
    
    function pulsarDEL(){
        n1 = n1.slice(0, -1);
        muestra = muestra.slice(0, -1);
        mostrar();
    }
    
    function pulsarC(){
        n1 = "0";
        n2 = "0";
        operando = "undefined";
        muestra = "";
        mostrar();
    }
    
    function mostrar() {
            document.getElementById("texto").value = muestra;
    }

    function pulsarIgual(){
        n1 = parseFloat(n1);
        switch(operando){
            case "+":
                resultado = n2 + n1;
                break;
            case "-":
                resultado = n2 - n1;
                break;
            case "*":
                resultado = n2 * n1;
                break;
            case "/":
                resultado = n2 / n1;
                break;
        }
        document.getElementById("texto").value = resultado;
        control = true;
    }
