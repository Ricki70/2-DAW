<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ page import="modelo.*" %>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Alumnos Ingles</title>
		<style>
			p.notificacion{color:red;}
		</style>
	</head>
	
	<body>
		<h1>Insertar un nuevo alumno</h1>
		
		<%	
			String notificacion=(String) request.getAttribute("notificacion");
			if (notificacion!=null && !notificacion.isEmpty()){
				out.print("<p class=\"notificacion\">"+notificacion+"</p>");
			}
		%>
		
		<h2>Informacion nuevo alumno</h2></br>

		<form method="post" action="gestionAlumnos">
			<label for="login">Login</label><br>
			<input type="text" name="login"  required /><br>
			
			<label for="nombre">Nombre</label><br>
			<input type="text"  name="nombre"  required /><br><br>

		 	<input type="hidden" value="1" name="accion">
			<input type="submit" value="confirmar" name="enviar">
		</form>
		
		<p><a href="index.jsp">Regresar a index</a>
	</body>
</html>