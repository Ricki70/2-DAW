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
	<h1>Plazas de parking</h1>

<% String notificacion = (String) request.getAttribute("notificacion"); %>
<% if (notificacion != null) { %>
<p style="color: red;"><%=notificacion%></p>
<% } %>

	<h1>Menu principal ciudades</h1>
	<ul>
		<li><a href="gestionPlaza?action=1">Listar todas las plazas del parking</a></li>
		<li><a href="insertar.jsp">Insertar nuevas plazas</a></li>
	</ul>
</body>
</html>