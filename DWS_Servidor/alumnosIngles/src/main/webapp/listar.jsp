<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ page import="modelo.*,controlador.*, java.util.ArrayList" %>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Alumnos Ingles</title>
		<style>
			p.notificacion{color:red;}
		</style>
	</head>
	
	<body>
		<h1>Listar alumnos de clase de ingles</h1>
		
		<%
			String notificacion=(String) request.getAttribute("notificacion");
			if (notificacion!=null && !notificacion.isEmpty()){
				out.print("<p class=\"notificacion\">"+notificacion+"</p>");
			}

			ArrayList<Alumno> listaAlumnos =(ArrayList<Alumno>)request.getAttribute("lista");
		%>
		
		<h2>Actualmente son <%=listaAlumnos.size() %> alumnos en ingles </h2>
	
		<table border="1">
			<tr>
				<th>Login</th>
				<th>Nombre</th>
				<th>Nivel</th>
				<th>Clasificacion</th>
			</tr>
	
			<%
				for(int i = 0; i < listaAlumnos.size(); i++) {
					Alumno alumno = listaAlumnos.get(i);
			%>
			<tr>
				<td><%=alumno.getLogin() %></td>
				<td><%=alumno.getNombre() %></td>
				<td><%=alumno.getNivel() %></td>
				<td><%=alumno.getClasificacion() %></td>
			</tr>
	
			<%
				}
			%>
		</table>
	
		<p><a href="index.jsp">Regresar a index</a>
	</body>
</html>