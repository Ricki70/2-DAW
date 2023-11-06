<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

    <h1>Examen Software</h1>

    <form action="calcularNota.jsp">

        <label for="nombre">Nombre: </label><input type="text" name="nombre" id="nombre"><br><br>
        <label for="apellido">Apellido: </label><input type="text" name="apellido" id="apellido"><br><br><br>

        <label for="pregunta1">1. ¿Cual de los siguientestipos de datos en Java tiene mas precision?</label><br>
        <input type="radio" name="pregunta1" value="0">int<br>
        <input type="radio" name="pregunta1" value="1" checked>double<br>
        <input type="radio" name="pregunta1" value="0">float<br>

        <br><br>

        <label for="pregunta2">2. ¿Cual es el lenguaje que se utiliza en hacer consultas en las bases de datos?</label><br>
        <input type="radio" name="pregunta2" value="0">XML<br>
        <input type="radio" name="pregunta2" value="0">SELECT<br>
        <input type="radio" name="pregunta2" value="1" checked>SQL<br>

        <br><br>

        <label for="pregunta3">3. Para insertar un hipervinculo en una pagina se utiliza la etiqueta...</label><br>
        <input type="radio" name="pregunta3" value="0">href<br>
        <input type="radio" name="pregunta3" value="1" checked>a<br>
        <input type="radio" name="pregunta3" value="0">link<br>

        <br><br>

        <label for="pregunta4">4. ¿Cual de las siguientes memorias es volatil?</label><br>
        <input type="radio" name="pregunta4" value="1" checked>RAM<br>
        <input type="radio" name="pregunta4" value="0">EPROM<br>
        <input type="radio" name="pregunta4" value="0">ROM<br>

        <br><br>

        <label for="pregunta5">5. En java para definir una subclase de otra se utiliza...</label><br>
        <input type="radio" name="pregunta5" value="1" checked>extends<br>
        <input type="radio" name="pregunta5" value="0">inherit<br>
        <input type="radio" name="pregunta5" value="0">subclass<br>

        <br><br>

        <label for="pregunta6">6. ¿Java Soporta la herencia multiple?</label><br>
        <input type="radio" name="pregunta6" value="0">Si<br>
        <input type="radio" name="pregunta6" value="0">No<br>
        <input type="radio" name="pregunta6" value="1" checked>A veces<br>

        <br><br>

        <input type="submit" name="submit" id="submit">

    </form>

</body>
</html>