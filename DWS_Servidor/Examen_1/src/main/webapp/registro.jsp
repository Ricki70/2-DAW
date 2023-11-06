<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="UTF-8">
        <title>Insert title here</title>
    </head>

    <body>
			
        <form action="Verificacion.jsp" method="post">
            <label for="nombre">Nombre: </label><input type="text" name="nombre" required /><br><br>
            <label for="apellidos">Apellidos: </label><input type="text" name="apellidos" required /><br><br>
            <label for="dni">DNI: </label><input type="text" name="dni" required /><br><br>
            <label for="matricula">Matricula: </label><input type="text" name="matricula" required /><br><br>
            <p>Selecciona la incidencia: </p><br>
            <input type="radio" name="incidencias" id="aceite" value="aceite" required>Aceite<br>
            <input type="radio" name="incidencias" id="filtros" value="filtros" required>Filtros<br>
            <input type="radio" name="incidencias" id="ruedas" value="ruedas" required>Ruedas<br>
            <input type="radio" name="incidencias" id="limpieza" value="limpieza" required>Limpieza<br><br>

            <input type="reset" name="borrar" value="Borrar datos">
            <input type="submit" name="enviar" value="Registrar incidencia">

            <p>Haga Click en <a href="formDNI.jsp">este enlace</a> para consultar las incidencias asociadas a su DNI</p>
        </form>

    </body>

    </html>