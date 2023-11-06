<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="modelo.*,controlador.*, java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Listar</title>
</head>
<body>
	<%

		ArrayList<Plaza> lest = (ArrayList<Plaza>) request.getAttribute("miLista");
	%>
	<h1>Actualmente son <%=l.lest.size%> ciudades diferentes</h1>
	<table border="1">
		<tr>
			<th>Ciudad</th>
			<th>Votos</th>
		</tr>
	<%

		for (int i = 0; i < lest.size(); i++) {
			Plaza c = new Plaza();
			c = lest.get(i);
	%>
		<tr>
			<td><%=c.getNombre() %></td>
			<td><%=c.getVotos() %></td>
		</tr>
	<%
	}
	%>
	</table>
	<p><a href="index.jsp">Regresar a index</a>
</body>
</html>
