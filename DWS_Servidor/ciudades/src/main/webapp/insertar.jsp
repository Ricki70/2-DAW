<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="modelo.*,controlador.*, java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insertar</title>
</head>
<body>
	<h1>Insertar nueva ciudad</h1>
	<form action="gestionCiudades?action=2" method="post">
		<p>Introduce ciudad: <input type="text" name="nombre" value="" required></p>
		<input type="submit" name="confirmar" value="Confirmar"><br><br>
		<a href="index.jsp">menu</a>
	</form>
</body>
</html>

	
		
		
