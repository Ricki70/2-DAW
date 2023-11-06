<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="modelo.*,controlador.*, java.util.ArrayList"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Votar</title>
</head>
<body>
	<%
	ArrayList<Plaza> lest2 = (ArrayList<Plaza>) request.getAttribute("miLista2");
	%>
	<h1>Votar</h1>
	<form action="gestionCiudades?action=4" method="post">
		<%
		for (int i = 0; i < lest2.size(); i++) {
			Plaza c2 = new Plaza();
			c2 = lest2.get(i);
		%>
			<input type="radio" name="voto" value="<%=c2.getNombre()%>"> <%=c2.getNombre()%><br>
		<%
		}
		%>
		<br><input type="submit" name="confirmar" value="Confirmar"><br><br>
		
		<a href="index.jsp">Regrasar al index</a>
	</form>
</body>
</html>
		
		
