<%@ page import="modelo.*" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%
		CrearCsv csv = new CrearCsv();
		csv.crearFichero();
	%>

<h1>Taller Mecanico</h1>

<ol>
    <li><a href="registro.jsp">Registrar incidencia</a></li><br>
    <li><a href="formDNI.jsp">Consultar mis incidencias</a></li>
</ol>

</body>
</html>