<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type"
content="text/html; charset=UTF-8">
<title>Despliega Alumnos</title>
</head>
<body>
<h1>hola</h1>
<%@ page import="modelo.*,controlador.*" %>

<h2>modificacion: </h2>
<%

Estudiante e =(Estudiante)request.getAttribute("estudiante");


if (e!=null)
{
%>
<form action="controladorEstudiante?action=4" method="post">
 		Dni:<br>
		<input type="text" name="dni"  value="<%=e.getDni() %>"  ><br>
		Nombre:<br>
		<input type="text" name="nombre" id="nombre" value="<%=e.getNombre() %>" ><br>
		Apellido1:<br>
		<input type="text" name="ape1"  value="<%=e.getAp1() %>" ><br>
		Apellido2:<br>
		<input type="text" name="ape2" value="<%=e.getAp2() %>"><br>
		Carrera:<br>
		<input type="text" name="carrera" value="<%=e.getCarrera() %>"><br>
		Nota:<br>
		<input type="number" name="nota" min="0" max="10" value="<%=e.getNota() %>"><br>
		<input type="hidden" name="ident"  value="<%=e.getId() %>"><br>
		<input type="submit" name="enviar" value="enviar" ><br>
	</form>
<%
}else {
	out.println("<p>datos incorrectos intentalo de nuevo</p>");	
}
%>


<p><a href="index.jsp">regresar a index</a>
</body>
</html>
