<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="modelo.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Enviar</title>
</head>
<body>
<%
String nombre = request.getParameter("nombre");
String apellidos = request.getParameter("apellidos");
String identificacion = request.getParameter("identificacion");
String comentarios = request.getParameter("comentarios");
Fichero f1 = new Fichero(nombre, apellidos, identificacion, comentarios);
f1.AñadirComentario();
%>
<h4>ForoCine - Comentarios</h4>
<p> Nombre: <%=nombre %> </p>
<p> Apellidos: <%=apellidos %> </p>
<p> Identificacion: <%=identificacion %> </p>
<p> Comentarios: <%=comentarios %> </p><br>
	<ul>
		<li><a href="index.jsp">Añadir otro comentario</a></li><br>
		<li><a href="VerEstadisticas.jsp">Ver estadisticas</a></li>
	</ul>
</body>
</html>