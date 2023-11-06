/**
 * He querido hacer diferentes funciones de validacion para cada caso concreto aun sabiendo que se podrian hacer en una sola funcion o por lo menos
 * en menos funciones usando expresiones regulares mas completas, pero lo he querido hacer asi para poder diferenciar los errores y mostrarlos.
 */

/**
 * =====================================
 * | Declaracion de variables globales |
 * =====================================
 */

var label1, label2;
var input, inputTf;
var p, h1, boton1, boton2;
var mensajeError = "";

/**
 * ==========================================
 * | Funciones Estructurales del Formulario |
 * ==========================================
 */

//Funcion que se ejecuta al cargar la pagina
window.onload = function () {
    document.getElementById("metodoIdentificacion").onchange = inputIdentificacion;
    document.getElementById("rangoEdad").onmousedown = function () {
        document.getElementById("rangoEdad").oninput = valorEdad;
    }
    document.getElementById("checkTf").onclick = crearInputTf;

    document.getElementById("validar").onclick = validacionDatos;
}

//Detecta que opcion se ha seleccionado en el select y crea el input correspondiente
function inputIdentificacion() {
    switch (this.value) {
        case "identificacion:":
            eliminarInput();
            break;
        case "dni":
            eliminarInput();
            crearInput("dni");
            break;
        case "pasaporte":
            eliminarInput();
            crearInput("pasaporte");
            break;
        case "nie":
            eliminarInput();
            crearInput("nie");
            break;
    }
}

//Elimina el input y el label que se encuentren en la celda
function eliminarInput(){
    var celda = document.getElementById("identificacion");
    if (label1 != null && input != null){
        celda.removeChild(label1);
        celda.removeChild(input);
        label1 = null; input = null;
    }
    eliminarLabel("IdUsuario");

}

//Crea el input y el label que le pases por parametro
function crearInput(identificacionUsuario) {
    var celda = document.getElementById("identificacion");

    label1 = document.createElement("label");
    label1.id = "label" + identificacionUsuario;
    label1.for = identificacionUsuario;
    label1.innerHTML = identificacionUsuario.charAt(0).toUpperCase() + identificacionUsuario.slice(((identificacionUsuario.length -1) * -1)) + ": ";

    celda.appendChild(label1);

    input = document.createElement("input");
    input.type = "text";
    input.name = identificacionUsuario;
    input.id = "IdUsuario";
    //input.value = "";
    input.placeholder = identificacionUsuario;
    input.required = true;
    
    celda.appendChild(input);
}

//Controla el valor del rango de edad y lo muestra a tiempo real en una label
function valorEdad() {
    var edad = document.getElementById("valorEdad");
    edad.innerHTML = this.value + " años.";
}

//Crea el input del telefono Fijo en caso de tener activar la checkbox correspondiente
function crearInputTf() {
    var celda = document.getElementById("tf");
    if (label2 != null && inputTf != null){
        celda.removeChild(label2);
        celda.removeChild(inputTf);
        label2 = null; input = null;
        eliminarLabel("telefonoFijo");
    }else{

        label2 = document.createElement("label");
        label2.id = "tfFijo";
        label2.for = "tfFijo";
        label2.innerHTML = "Telefono Fijo: ";

        celda.appendChild(label2);

        inputTf = document.createElement("input");
        inputTf.type = "text";
        inputTf.name = "telefonoFijo";
        inputTf.id = "telefonoFijo";
        inputTf.placeholder = "9 digitos";
        inputTf.required = true;
        
        celda.appendChild(inputTf);
    }
}

/**
 * ==================================================
 * | Conjunto de llamadas a funciones de validacion |
 * ==================================================
 */

function validacionDatos() {
    var primerError;                //Variable que almacena el primer error encontrado en el formulario
    var controlFormulario = true;   //Controla si hay algun error en el formulario

    //===== | Validacion de Nombre | =====
    if (validarNombre()){
        document.getElementById("nombre").style.borderColor = "green";
        eliminarLabel("nombre");
    }else{
        document.getElementById("nombre").style.borderColor = "red";
        eliminarLabel("nombre");
        crearLabel(mensajeError, "nombre");
        if (controlFormulario) primerError = document.getElementById("nombre");
        controlFormulario = false;
    }

    //===== | Validacion de Apellidos | =====
    if (validarApellidos()){
        document.getElementById("apellidos").style.borderColor = "green";
        eliminarLabel("apellidos");
    }else{
        document.getElementById("apellidos").style.borderColor = "red";
        eliminarLabel("apellidos");
        crearLabel(mensajeError, "apellidos");
        if (controlFormulario) primerError = document.getElementById("apellidos");
        controlFormulario = false;
    }

    //===== | Validacion del metodo de identificacion (DNI, Pasaporte, NIE) | ===== 
    if (validarSelect()){
        eliminarLabel("metodoIdentificacion");
        if (validarIdentificacion()){
            document.getElementById("IdUsuario").style.borderColor = "green";
            eliminarLabel("IdUsuario");
        }else{
            document.getElementById("IdUsuario").style.borderColor = "red";
            eliminarLabel("IdUsuario");
            crearLabel(mensajeError, "IdUsuario");
            if (controlFormulario) primerError = document.getElementById("idUsuario");
            controlFormulario = false;
        }
    }else{
        eliminarLabel("metodoIdentificacion");
        crearLabel(mensajeError, "metodoIdentificacion");
        if (controlFormulario) primerError = document.getElementById("metodoIdentificacion");
        controlFormulario = false;
    }

    //===== | Validacion de la Edad (entre 18 y 80) | =====
    if (validarEdad()){
        document.getElementById("valorEdad").style.color = "green";
        eliminarLabel("rangoEdad");
    }else{
        document.getElementById("valorEdad").style.color = "red";
        eliminarLabel("rangoEdad");
        crearLabel(mensajeError, "rangoEdad");
        if (controlFormulario) primerError = document.getElementById("rangoEdad");
        controlFormulario = false;
    }

    //===== | Validacion del Email | =====
    if (validarEmail()){
        document.getElementById("email").style.borderColor = "green";
        eliminarLabel("email");
    }else{
        document.getElementById("email").style.borderColor = "red";
        eliminarLabel("email");
        crearLabel(mensajeError, "email");
        if (controlFormulario) primerError = document.getElementById("email");
        controlFormulario = false;
    }

    //===== | Validacion de la fecha de nacimiento | =====
    if(validarFecha()){
        eliminarLabel("fecha");
    }else{
        eliminarLabel("fecha");
        crearLabel(mensajeError, "fecha");
        if (controlFormulario) primerError = document.getElementById("fecha");
        controlFormulario = false;
    }

    //===== | Validacion Telefono Movil | =====
    if (validarTfMovil()){
        document.getElementById("telefono").style.borderColor = "green";
        eliminarLabel("telefono");
    }else{
        document.getElementById("telefono").style.borderColor = "red";
        eliminarLabel("telefono");
        crearLabel(mensajeError, "telefono");
        if (controlFormulario) primerError = document.getElementById("telefono");
        controlFormulario = false;
    }

    //===== | Validacion del Telefono Fijo | =====
    if(document.getElementById("checkTf").checked){
        if (validarTfFijo()){
            document.getElementById("telefonoFijo").style.borderColor = "green";
            eliminarLabel("telefonoFijo");
        }else{
            document.getElementById("telefonoFijo").style.borderColor = "red";
            eliminarLabel("telefonoFijo");
            crearLabel(mensajeError, "telefonoFijo");
            if (controlFormulario) primerError = document.getElementById("telefonoFijo");
            controlFormulario = false;
        }
    }  
    
    //===== | Validacion del color | =====
    if(validarColor()){
        eliminarLabel("color");
    }else{
        eliminarLabel("color");
        crearLabel(mensajeError, "color");
        if (controlFormulario) primerError = document.getElementById("color");
        controlFormulario = false;
    }

    //===== | Validacion de Numero de Hermanos | =====
    if (validarHermanos()){
        document.getElementById("hermanos").style.borderColor = "green";
        eliminarLabel("hermanos");
    }else{
        document.getElementById("hermanos").style.borderColor = "red";
        eliminarLabel("hermanos");
        crearLabel(mensajeError, "hermanos");
        if (controlFormulario) primerError = document.getElementById("hermanos");
        controlFormulario = false;
    }

    if (controlFormulario){
        mostrarResumen();
    }else{
        primerError.focus();
    }
}

/**
 * ====================================================
 * | Funciones de Validacion y Comprobacion Generales |
 * ====================================================
 */

//Nombre
function validarNombre() {
    var nombre = document.getElementById("nombre").value;

    if (!comprobarCampoVacio(nombre)){
        return false;
    }else if (!comprobarEspacios(nombre)){
        return false;
    }else if (!comprobarLongitud(nombre)){
        return false;
    }else if(!comprobarPrimeraMayuscula(nombre)){
        return false;
    }else if(!comprobarCaracteres(nombre)){
        return false;
    }

    return true;
}

//Apellidos
function validarApellidos(){
    var apellidos = document.getElementById("apellidos").value;

    if (comprobarEspacios(apellidos)){
        mensajeError = "Es obligatorio poner minimo 2 apellidos.";
        return false;
    }else if(!comprobarCampoVacio(apellidos)){
        return false;
    } else{
        var apellidosArray = apellidos.split(" ");
        for (var i = 0; i < apellidosArray.length; i++) {
            if (!comprobarLongitud(apellidosArray[i])){
                return false;
            }else if(!comprobarPrimeraMayuscula(apellidosArray[i])){
                mensajeError = "La primera letra de cada apellido debe ser mayuscula";
                return false;
            }else if(!comprobarCaracteres(apellidosArray[i])){
                return false;
            }
        }
    }
    return true;
}

//Select
function validarSelect(){
    var select = document.getElementById("metodoIdentificacion").value;
    if (select == "identificacion:"){
        mensajeError = "Es obligatorio seleccionar un metodo de identificacion.";
        return false;
    }
    return true;
}

//Identificacion
function validarIdentificacion(){
    var identificacion = document.getElementById("IdUsuario").value;
    if (!comprobarCampoVacio(identificacion)){
        return false;
    }else if (!comprobarEspacios(identificacion)){
        return false;
    }

    switch (document.getElementById("metodoIdentificacion").value) {
        case "dni":
            if (!comprobarDNI()){
                return false;
            }
            break;
        case "nie":
            if (!comprobarNIE()){
                return false;
            }
            break;
        case "pasaporte":
            if (!comprobarPasaporte()){
                return false;
            }
            break;
    }


    return true;
}

//Edad
function validarEdad(){
    var edad = document.getElementById("rangoEdad").value;
    if (edad < 18 || edad > 80){
        mensajeError = "La edad debe estar entre 18 y 80 años";
        return false;
    }
    return true;
}

//Email
function validarEmail(){
    var email = document.getElementById("email").value;
    if (!comprobarCampoVacio(email)){
        return false;
    }else if (!comprobarEmail(email)){
        return false;
    }
    return true;
}

//Fecha
function validarFecha(){
    var rango = document.getElementById("rangoEdad").value;
    var fecha = document.getElementById("fecha").value;
    if (!comprobarCampoVacio(fecha)){
        return false;
    }else if(!validarEdad()){
        mensajeError = "No puedes ser menor de 18 años ni mayor de 80";
        return false;
    }else if (calcularEdad(fecha) != parseInt(rango)){
        return false;
    }
    return true;
}

//Telefono Movil
function validarTfMovil(){
    var tfMovil = document.getElementById("telefono").value;
    if (!comprobarCampoVacio(tfMovil)){
        return false;
    }else if(!comprobarEspacios(tfMovil)){
        return false;
    }else if(!comprobarTfMovil(tfMovil)){
        return false;
    }else if (!comprobarPrimerDigitoMovil(tfMovil)){
        return false;
    }
    return true;
}

//Telefono Fijo
function validarTfFijo(){
    
    var tfFijo = document.getElementById("telefonoFijo").value;
    if (!comprobarCampoVacio(tfFijo)){
        return false;
    }else if(!comprobarEspacios(tfFijo)){
        return false;
    }else if(!comprobarTfFijo(tfFijo)){
        return false;
    }else if (!comprobarPrimerDigitoFijo(tfFijo)){
        return false;
    }  
    return true;
}

//Color
function validarColor(){
    var color = document.getElementById("color").value;
    if (color == "#000000" || color == "#ffffff"){
        mensajeError = "El color nopuede ser BLANCO ni NEGRO";
        return false;
    }
    return true;
}

//Hermanos
function validarHermanos(){
    var hermanos = document.getElementById("hermanos").value;
    if (!comprobarCampoVacio(hermanos)){
        return false;
    }else if (!comprobarHermanos(hermanos)){
        return false;
    }
    return true;
}

/**
 * ======================================================
 * | Funciones de Validacion y Comprobacion Especificas |
 * ======================================================
 */

//Comprueba que el campo no este vacio
function comprobarCampoVacio(elementoHTML) {
    if (elementoHTML == ""){
        mensajeError = "El campo no puede estar vacio";
        return false;
    }
    return true;
}

//Comprueba que la cadena no contenga espacios
function comprobarEspacios(elementoHTML){
    if (elementoHTML.indexOf(" ") != -1){
        mensajeError = "El campo no puede contener espacios";
        return false;
    }
    return true;
}

//Comprueba que la cadena no contenga menos de 2 o mas de 20 caracteres
function comprobarLongitud(elementoHTML){
    if (elementoHTML.length < 2 || elementoHTML.length > 20){
        mensajeError = "El campo debe contener entre 3 y 20 caracteres";
        return false;
    }
    return true;
}

//Comprueba que la primera letra sea mayuscula
function comprobarPrimeraMayuscula(elementoHTML){
    if (elementoHTML.charAt(0) != elementoHTML.charAt(0).toUpperCase()){
        mensajeError = "La primera letra debe ser mayuscula";
        return false;
    }
    return true;
}

//Comprueba que la cadena contenga solo letras
function comprobarCaracteres(elementoHTML){
    var expresionRegular = /^[a-zA-Z]+$/;
    if (!expresionRegular.test(elementoHTML)){
        mensajeError = "El campo solo puede contener letras";
        return false;
    }
    return true;
}

//Comprueba que la cadena tenga el formato de DNI
function comprobarDNI(){
    var dni = document.getElementById("IdUsuario").value;
    var expresionRegular = /^\d{8}[a-zA-Z]$/;
    if (!expresionRegular.test(dni)){
        mensajeError = "El DNI debe contener 8 numeros y una letra";
        return false;
    }
    return true;
}

// Comprueba que la cadena tenga el formato de NIE
function comprobarNIE(){
    var nie = document.getElementById("IdUsuario").value;
    var expresionRegular = /^[XYZ]\d{7}[a-zA-Z]$/;
    if (!expresionRegular.test(nie)){
        mensajeError = "El NIE debe contener una letra, 7 numeros y una letra";
        return false;
    }
    return true;
}

// Comprueba que la cadena tenga el formato de Pasaporte
function comprobarPasaporte(){
    var pasaporte = document.getElementById("IdUsuario").value;
    var expresionRegular = /^[a-zA-Z]{2}\d{7}$/;
    if (!expresionRegular.test(pasaporte)){
        mensajeError = "El pasaporte debe contener 2 letras y 7 numeros";
        return false;
    }
    return true;
}

// Comprueba que la cadena tenga el formato de Email
function comprobarEmail(elementoHTML){
    var expresionRegular = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expresionRegular.test(elementoHTML)){
        mensajeError = "El email no es valido";
        return false;
    }
    return true;
}

//Calcula la edad supuesta que tienes en funcion de la fecha de nacimiento introducida
function calcularEdad(elementoHTML){
    var hoy = new Date();
    var cumpleanos = new Date(elementoHTML);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    if (edad < 0){
        mensajeError = "No puedes haber nacido en el futuro";
    }else{
        mensajeError = "Segun tu fecha de nacimiento tienes: " + edad + " años, Debe coincidir con la edad introducida anteriormente (" + document.getElementById("rangoEdad").value + ")";
    }
    return edad;
}

//Comproueba que el primer digito sea 6 o 7 (movil en España)
function comprobarPrimerDigitoMovil(elementoHTML){
    var expresionRegular = /^(6|7)/;
    if (!expresionRegular.test(elementoHTML)){
        mensajeError = "El primer digito debe ser 6 o 7";
        return false;
    }
    return true;
}

//Comproueba que el primer digito sea 8 o 9 (fijo en España)
function comprobarPrimerDigitoFijo(elementoHTML){   
    var expresionRegular = /^(8|9)/;
    if (!expresionRegular.test(elementoHTML)){
        mensajeError = "El primer digito debe ser 8 o 9";
        return false;
    }
    return true;
}

//Comprueba que el fromato de telefono movil sea correcto (9 caracteres)
function comprobarTfMovil(elementoHTML){
    var expresionRegular = /^\d{9}$/;
    if (!expresionRegular.test(elementoHTML)){
        mensajeError = "El telefono fijo debe contener 9 numeros";
        return false;
    }
    return true;
}

//Comprueba que el fromato de telefono fijo sea correcto (9 caracteres)
function comprobarTfFijo(elementoHTML){
    var expresionRegular = /^\d{9}$/;
    if (!expresionRegular.test(elementoHTML)){
        mensajeError = "El telefono movil debe contener 9 numeros";
        return false;
    }
    return true;
}

//Comprueba que no tengas mas de 10 hermanos o menos de 0
function comprobarHermanos(elementoHTML){
    if (elementoHTML < 0 || elementoHTML > 10){
        mensajeError = "El numero de hermanos debe estar entre 0 y 10";
        return false;
    }
    return true;
}

/**
 * ========================================================
 * | Funciones de creacion y gestion de mensajes de error |
 * ========================================================
 */

//Crea la Label con el Mensaje de error y el valor que le introduzcas por parametro
function crearLabel(mensajeError, idElemento) {
    var elementoDOM = document.getElementById(idElemento);
    var label = document.createElement("label");
    label.id = "label" + idElemento;
    label.innerHTML = "* " + mensajeError;
    label.style.color = "red";
    label.style.display = "block";

    insertAfter(elementoDOM, label);
}

//Elimina la Label con el id que le pases por parametro
function eliminarLabel(idElemento){
    var label = document.getElementById("label" + idElemento);
    if (label != null){
        label.parentNode.removeChild(label);
    }
}

//Inserta la label que le pasas como nodoInsertar despues del nodoReferencia
function insertAfter(nodoReferencia,nodoInsertar){ 
    if(nodoReferencia.nextSibling){ 
        nodoReferencia.parentNode.insertBefore(nodoInsertar,nodoReferencia.nextSibling); 
    } else { 
        nodoReferencia.parentNode.appendChild(nodoInsertar); 
    }
}
    
/**
 * =================================
 * | Funciones Gestion del Resumen |
 * =================================
 */

//Crea el resumen con todos los datos recopilados
function mostrarResumen() {

    eliminarResumen();

    h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Resumen de Datos"));

    p = document.createElement("p");
    p.appendChild(document.createTextNode("Nombre Completo: " + document.getElementById("nombre").value + " " + document.getElementById("apellidos").value));
    p.appendChild(document.createElement("br"));
    if (validarSelect()){
        p.appendChild(document.createTextNode(document.getElementById("metodoIdentificacion").value + ": " + document.getElementById("IdUsuario").value));
    }
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("Edad: " + document.getElementById("rangoEdad").value));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("Email: " + document.getElementById("email").value));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("Fecha de Nacimiento: : " + document.getElementById("fecha").value));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("Telefono Movil: " + document.getElementById("telefono").value));
    p.appendChild(document.createElement("br"));
    if (document.getElementById("checkTf").checked){
        p.appendChild(document.createTextNode("Telefono Fijo: " + document.getElementById("telefonoFijo").value));
    }else{
        p.appendChild(document.createTextNode("Telefono Fijo: No proporcionado"));
    }
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("Color Favorito: " + document.getElementById("color").value));
    p.appendChild(document.createElement("br"));
    p.appendChild(document.createTextNode("Numero de Hermanos: " + document.getElementById("hermanos").value));

    boton1 = document.createElement("input");
    boton1.type = "button";
    boton1.id = "borrar";
    boton1.value = "Modificar";
    boton1.onclick = eliminarResumen;

    boton2 = document.createElement("input");
    boton2.type = "button";
    boton2.id = "enviar";
    boton2.value = "Enviar";
    boton2.onclick = function(){alert("ENVIANDO...")};

    document.body.appendChild(h1);
    document.body.appendChild(p);
    document.body.appendChild(boton1);
    document.body.appendChild(boton2);

}

//Elimina el resumen
function eliminarResumen(){
    if (p != null && h1 != null && boton1 != null && boton2 != null){
        h1.remove();
        p.remove();
        boton1.remove();
        boton2.remove();

        h1 = null;
        p = null;
        boton1 = null;
        boton2 = null;

        document.getElementById("nombre").focus();
    }
}