<%@ page import="java.time.*" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%
    	LocalDate fechaActual = LocalDate.now();
        Month Mes = fechaActual.getMonth();
	%>
	

    <p>La fecha actual es: <%= fechaActual %></p>
    <p>El mes actual es: <%= Mes %></p>

</body>
</html>