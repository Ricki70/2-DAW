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
		<h1>Subir nivel de un alumno de clase de ingles</h1>
		<%	
			String notificacion=(String) request.getAttribute("notificacion");
			if (notificacion!=null && !notificacion.isEmpty()){
				out.print("<p class=\"notificacion\">"+notificacion+"</p>");
			}
		%>
		
		
		<%
			ArrayList<Alumno> listaAlumnos =(ArrayList<Alumno>)request.getAttribute("lista");
		%>
		
		<h2>Selecciona el alumno a subir de nivel</h2>
		
		<form action="gestionAlumnos?accion=2" method="post">
			<label for ="login">Elige el alumno</label>
			<select name="login">
				<% for(int i=0; i < listaAlumnos.size(); i++) {
					Alumno alumno = listaAlumnos.get(i);
				%>
					<option value=<%=alumno.getLogin()%>>
						<%=alumno.getLogin()%>
					</option>
				<% } %>
			</select></br></br>
			
			<input type="hidden" value="2" name="accion">
			<input type="submit" value="Subir nivel" name="enviar">
		</form>
	
		<p><a href="index.jsp">Regresar a index</a>
	</body>
</html>