<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="modelo.*,controlador.*, java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
</head>
<body>
	<h1>Bienvenido a la web de las mejores ciudades españolas</h1>

<% String notificacion = (String) request.getAttribute("notificacion"); %>
<% if (notificacion != null) { %>
<p style="color: red;"><%=notificacion%></p>
<% } %>

	<h1>Menu principal ciudades</h1>
	<ul>
		<li><a href="gestionCiudades?action=1">Listar todas las ciudades votadas</a></li>
		<li><a href="gestionCiudades?action=3">Votar por una ciudad</a></li>
		<li><a href="insertar.jsp">Insertar una ciudad nueva</a></li>
		<li><a href="buscarCiudad.jsp">Buscar una ciudad por nombre</a></li>
	</ul>
</body>
</html>