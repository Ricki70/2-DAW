<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ page import="modelo.*,controlador.*, java.util.ArrayList" %>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Ciudades</title>
	</head>
	
	<body>
		<%
			ArrayList<Plaza> l =(ArrayList<Plaza>)request.getAttribute("lista");
		%>
		
		<h2>Actualmente son <%=l.size() %> plazas diferentes </h2>
	
		<table border="1">
			<tr>
				<th>Id</th>
				<th>Estado</th>
			</tr>
	
			<%
				for(int i = 0; i < l.size(); i++) {
					Plaza a = l.get(i);
			%>
			<tr>
				<td><%=a.getId() %></td>
				<td><%=a.getEstado() %></td>
			</tr>
	
			<%
				}
			%>
		</table>
	
		<p><a href="index.jsp">regresar a index</a>
	</body>
</html>