<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="modelo.*,controlador.*, java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Buscar</title>
</head>
<body>
<h1>Buscar una ciudad</h1>
	<form action="gestionCiudades?action=5" method="post">
		<p>Escribe el nombre de la ciudad que quieres buscar: <input type="text" name="nombreBuscar" value="" required></p>
		<input type="submit" name="confirmar" value="Confirmar"><br><br>
		<a href="index.jsp">Regresar al index</a>
	</form>
</body>
</html>
