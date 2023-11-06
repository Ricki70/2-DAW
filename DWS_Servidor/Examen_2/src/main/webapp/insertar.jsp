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
	<h1>Insertar nueva plaza</h1>
	<form action=gestionPlaza method="post">
		<p>
			Selecciona la plaza: <select name="plaza">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
		</p>
		<input type="submit" name="confirmar" value="Añadir plaza"><br>
		<br> <a href="index.jsp">Volver al Index</a>
	</form>
</body>
</html>


