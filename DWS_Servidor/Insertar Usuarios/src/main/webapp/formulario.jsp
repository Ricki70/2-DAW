<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<h1>nuevo estudiante rellene los datos</h1>
<%
int action=Integer.parseInt(request.getParameter("action"));
%>
<form action="controladorEstudiante?action=<%=action%>" method="post">
 		Dni:<br>
		<input type="text" name="dni"  value="" required><br>
		Nombre:<br>
		<input type="text" name="nombre" id="nombre" value="" required><br>
		Apellido1:<br>
		<input type="text" name="ape1"  required><br>
		Apellido2:<br>
		<input type="text" name="ape2" ><br>
		Carrera:<br>
		<input type="text" name="carrera" required><br>
		Nota:<br>
		<input type="number" name="nota" min="0" max="10" required><br>
		<input type="submit" name="enviar" value="enviar" ><br>
	</form>


</body>
</html>