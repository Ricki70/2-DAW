<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="modelo.*,controlador.*, java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Mostrar</title>
</head>
<body>
<h1>Mostrar una ciudad</h1>

<% String notificacion = (String) request.getAttribute("notificacion"); %>
<% if (notificacion != null) { %>
<p style="color: red;"><%=notificacion%></p>
<% } %>
	
<%
	Plaza c4 = (Plaza)request.getAttribute("c4");
	%>
	<table border="1">
		<tr>
			<th>Ciudad</th>
			<th>Votos</th>
		</tr>
		<tr>
			<td><%=c4.getNombre() %></td>
			<td><%=c4.getVotos() %></td>
		</tr>
	</table>
	<p><a href="index.jsp">Regresar al index</a>
</body>
</html>

		
