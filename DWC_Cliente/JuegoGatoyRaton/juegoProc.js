/**
*================================
*|  Declaracion de Variables    |
*================================
*/
//Variable jugador, contendra el elemento HTML que se movera por la pantalla.
var jugador;

//Variable timer, contendra el ID que devuelve la funcion setinterval() para poder pararla posteriormente usando clearinterval().
var timer;
var delay;

/**
*================================
*|  Declaracion de Funciones    |
*================================
*/

/**
*@function setPosicionJugador.
*@param coordenadaX, coordenadaY.
*@dexcription Establece la posicion del jugador en la pantalla.
*/
function setPosicionJugador(coordenadaX, coordenadaY){
    jugador.style.left = coordenadaX + "px";
    jugador.style.top = coordenadaY + "px";
}

/**
 * @function init
 * @description Inicializa el juego y establece los valores iniciales de las variables asi como asigna los eventos a los elementos HTML.
 */
window.onload = function() {

    jugador = document.getElementById("objetivo");

    setPosicionJugador(50, 50);

    document.onkeydown = movimiento;
}

/**
 * @function movimiento
 * @param {e} elEvento 
 * @description Se encarga de comprobar si hemos pulsado el <Enter> y en caso afirmativo, asigna el elemento HTML con el que vamos
 * a interactuar a la variable jugador, establece la posicion inicial del elemento HTML "buscar", Habilita el elemento HTML "cuenta",
 * llama a la funcion setinterval() para que se ejecute la funcion reloj() cada 1000 milisegundos, y por ultimo establece el atributo
 * "hidden" del jugador inicial y elimina el mismo atributo para el jugador "buscar".
 */
function movimiento(elEvento){
    var evento = window.event || elEvento;                                          //Obtenemos el objeto que ha generado el navegador a raiz del evento sucedido.
    var keycode = evento.keyCode;                                                   //Obtenemos el codigo de la tecla pulsada.
    if (keycode == 13 && document.getElementById("cuenta").disabled) {              //Comprueba si has pulsado la tecla <Enter> por primera vez.
                jugador = document.getElementById("buscar");                        //Asigna el elemento HTML con el que vamos a interactuar a la variable jugador.
                setPosicionJugador(50, 50);                                         //Establece la posicion inicial del elemento HTML "buscar".
                document.getElementById("cuenta").disabled = false;                 //Habilita el elemento HTML "cuenta".
                timer = setInterval(reloj, 1000);                                   //Llama a la funcion setinterval() para que se ejecute la funcion reloj() cada 1000 milisegundos.
                document.getElementById("objetivo").setAttribute("hidden", "true"); //Establece el atributo "hidden" del jugador inicial.
                document.getElementById("buscar").removeAttribute("hidden");        //Elimina el atributo "hidden" del jugador "buscar".
                delay = setTimeout(comprobarVictoria(), 10000);                         //Llama a la funcion comprobarVictoria().
    }else{                                                                          //Si no has pulsado la tecla <Enter> por primera vez.                                             
        moverJugador(keycode);                                                      //Llama a la funcion moverJugador() pasandole como parametro el codigo de la tecla pulsada.
        delay = setTimeout(comprobarVictoria(), 10000);                                    //Llama a la funcion comprobarVictoria().
    }
    

    /**
     * @function moverJugador
     * @param {*} keycode 
     * @description Se encarga de mover el elemento HTML correspondiente a "jugador" por la pantalla.
     */
    function moverJugador(keycode){
        switch (keycode) {                                //Comprueba el codigo de la tecla pulsada.
            case 38: // flecha arriba
                if (jugador.style.top != "50px") {        //Comprueba si el elemento HTML "jugador" no se encuentra en la posicion superior del tablero de juego.
                    jugador.style.top = (parseInt(jugador.style.top.slice(0, (jugador.style.top.length - 2))) - 50).toString() + "px"; //ID Movimiento (Explicado al final del codigo)
                }
                break;
            case 40: // flecha abajo
                if (jugador.style.top != "500px") {       //Comprueba si el elemento HTML "jugador" no se encuentra en la posicion inferior del tablero de juego.
                    jugador.style.top = (parseInt(jugador.style.top.slice(0, (jugador.style.top.length - 2))) + 50).toString() + "px"; //ID Movimiento (Explicado al final del codigo)
                }
                break;
            case 37: // flecha izquierda
                if (jugador.style.left != "50px") {       //Comprueba si el elemento HTML "jugador" no se encuentra en la posicion izquierda del tablero de juego.
                    jugador.style.left = (parseInt(jugador.style.left.slice(0, (jugador.style.left.length - 2))) - 50).toString() + "px"; //ID Movimiento (Explicado al final del codigo)
                }
                break;
            case 39: // flecha derecha
                if (jugador.style.left != "1000px") {     //Comprueba si el elemento HTML "jugador" no se encuentra en la posicion derecha del tablero de juego.
                    jugador.style.left = (parseInt(jugador.style.left.slice(0, (jugador.style.left.length - 2))) + 50).toString() + "px"; //@ID Movimiento (Explicado al final del codigo)
            }
            break;
        }
    }

    /**
     * @function reloj
     * @description Se encarga de Obtener el valor del elemento HTML "Cuenta" y le resta 1 segundo tras diferentes conversiones explicadas al final del codigo.
     * por ultimo comprueba que la cuenta atras no haya llegado a 0, en dicho caso llama a la funcion derrota().
     */
    function reloj(){
        document.getElementById("cuenta").value = ("0" + Math.floor(getSegundos() / 60).toString().slice(-2)) + ":" + ("0" + Math.floor(getSegundos() % 60).toString()).slice(-2); //@ID Cuenta Atras (Explicado al final del codigo)
        if (document.getElementById("cuenta").value == "00:00") {   //Comprueba que la cuenta atras no haya llegado a 0.
            derrota();                                              //Llama a la funcion derrota().
            document.getElementById("cuenta").value = "00:10";      //Establece el valor del elemento HTML "cuenta" a 10 segundos de nuevo para reiniciar el contador en la siguiente iteracion del juego.
        }
    }

    /**
     * @function getSegundos
     * @returns {Number} Devuelve el valor del elemento HTML "cuenta" en segundos.
     */
    function getSegundos(){
        return (parseInt(document.getElementById("cuenta").value.slice(-5, -3))*60 + parseInt(document.getElementById("cuenta").value.slice(-2)) - 1); //@ID getSegundos (Explicado al final del codigo)
    }

    /**
     * @function derrota
     * @description Se encarga de resetear las posiciones de los jugadores llamando a la funcion resetPosiciones(), limpia la ejecucion de la funcion setInterval()
     * llamando a la funcion clearInterval(), deshabilita el elemento HTML "cuenta" para que no se pueda seguir jugando, muestra un mensaje de derrota.
    */
    function derrota(){
        resetPosiciones();                                  //Llama a la funcion resetPosiciones() para establecer las posiciones de los jugadores a su posicion inicial en el tablero de juego.
        clearInterval(timer);                               //Llama a la funcion clearInterval() para limpiar el bucle de ejecucion.
        document.getElementById("cuenta").disabled = true;  //Deshabilita el elemento HTML "cuenta" para que no se pueda seguir jugando.
        alert("¡Has perdido!");                             //Muestra un mensaje de derrota.
    }

    /**
     * @function victoria
     * @description Se encarga de resetear las posiciones de los jugadores llamando a la funcion resetPosiciones(), limpia la ejecucion de la funcion setInterval()
     * llamando a la funcion clearInterval(), deshabilita el elemento HTML "cuenta" para que no se pueda seguir jugando, muestra un mensaje de victoria.
    */
     function victoria(){
        resetPosiciones();                                  //Llama a la funcion resetPosiciones() para establecer las posiciones de los jugadores a su posicion inicial en el tablero de juego.
        clearInterval(timer);                               //Llama a la funcion clearInterval() para limpiar el bucle de ejecucion.
        document.getElementById("cuenta").disabled = true;  //Deshabilita el elemento HTML "cuenta" para que no se pueda seguir jugando.
        alert("¡Has ganado!");                              //Muestra un mensaje de victoria.         
     }

     /**
      * @function resetPosiciones
      * @description Se encarga de establecer las posiciones de los jugadores a su posicion inicial en el tablero de juego y oculta el segundo jugador para mostrar
      * de nuevo el primero y que puedas continuar jugando.
      */
    function resetPosiciones(){
        document.getElementById("buscar").setAttribute("hidden", "true");   //Oculta el elemento HTML "buscar" para que no se pueda seguir jugando.
        document.getElementById("objetivo").removeAttribute("hidden");      //Muestra el elemento HTML "objetivo" para que puedas continuar jugando.

        setPosicionJugador(50, 50);                                         //Llama a la funcion setPosicionJugador() para establecer la posicion del jugador a su posicion inicial en el tablero de juego.
        jugador = document.getElementById("objetivo");                      //Establece el elemento HTML "objetivo" como el jugador principal.
        setPosicionJugador(50, 50);                                         //Llama a la funcion setPosicionJugador() para establecer la posicion del jugador a su posicion inicial en el tablero de juego.
    }   

    /**
     * @function comprobarVictoria
     * @description Se encarga de comprobar si el jugador principal se encuentra en la posicion del jugador secundario, en dicho caso llama a la funcion victoria().
     */
    function comprobarVictoria(){
        if (document.getElementById("objetivo").style.left == document.getElementById("buscar").style.left && document.getElementById("objetivo").style.top == document.getElementById("buscar").style.top) {
            victoria();                                             //Llama a la funcion victoria().                    
            document.getElementById("cuenta").value = "00:10";      //Establece el valor del elemento HTML "cuenta" a 10 segundos de nuevo para reiniciar el contador en la siguiente iteracion del juego.
        }
    }
}

/**
 * @ID movimiento
 * jugador.style.left = (parseInt(jugador.style.left.slice(0, (jugador.style.left.length - 2))) + 50).toString() + "px";
 * Asigna el nuevo valor del contador al estilo del elemento HTML "jugador" en la propiedad "left" para moverlo a la derecha, para ello primero
 * obtiene el valor del elemento "jugador" como cadena, a traves de la funcion string.prototype.slice() extrae la cadena correspondiente al valor
 * de la posicion sin la unidad de medida "px" y la convierte a entero para poder sumarle 50, una vez sumado lo convierte a cadena y le añade la unidad
 * de medida "px".
 * 
 * Este proceso se repite para cada una de las direcciones.
 */

/**
 * @ID Cuenta Atras
 * document.getElementById("cuenta").value = ("0" + Math.floor(getSegundos() / 60).toString().slice(-2)) + ":" + ("0" + Math.floor(getSegundos() % 60).toString()).slice(-2);
 * Asigna al valor del elemento HTML "cuenta" el valor de la cuenta atras, para ello primero obtiene el valor del elemento HTML "cuenta" y lo convierte en segundos a traves de la funcion getSegundos(),
 * una vez obtenido el valor en segundos lo divide entre 60 para obtener los minutos y lo convierte a cadena, a traves de la funcion string.prototype.slice() extrae la cadena correspondiente a los dos ultimos
 * caracteres de la cadena concatenandolo a un 0, para que en caso de que el contador baje de 10 segundos aparezca ese 0 a la izquierda, por ultimo redondea dicha cantidad para evitar decimales al no ser un lenguaje tipado y no poder especificar
 * que el numero sea de tipo entero, posteriormente realiza el mismo proceso para los minutos con la difernecia de que en lugar de dividirlo entre 60, se le aplica el operador "%" -> modulo para obtener asi los minutos.
 */
        
/**
 * @ID getSegundos
 * parseInt(document.getElementById("cuenta").value.slice(-5, -3))*60 + parseInt(document.getElementById("cuenta").value.slice(-2)) - 1);
 * Obtiene el valor de el elemento HTML "cuenta" y lo convierte a segundos, para ello primero obtiene el valor del elemento HTML "cuenta" y extrae la parte de los minutos
 * a traves de la funcion string.prototype.slice() lo convierte a entero y lo multiplica por 60 para pasarlo a segundos, a este valor se le suma a traves del mismo proceso los segundos
 * obteniendo esta vez la parte correspondiente a los segundos del elemento HTML "cuenta" y se le resta 1 para que el contador vaya disminuyendo 1 segundo con cada iteracion de la funcion
 * setInterval().
 */