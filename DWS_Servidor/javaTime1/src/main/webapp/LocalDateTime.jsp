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
		LocalDateTime fechaCompleta = LocalDateTime.now();
		LocalDateTime fechaCompletaMasUno = fechaCompleta.plusMonths(1);
		LocalDateTime fechaCompletaMenosTresMinutos = fechaCompleta.minusMinutes(3);
		LocalDateTime fechaNacimiento = LocalDateTime.of(2001, 04, 16, 23, 35);

		int año;
		if (fechaCompleta.getMonthValue() < fechaNacimiento.getMonthValue()){
			año = LocalDate.now().getYear();
		}else{
			año = LocalDate.now().getYear() + 1;
		}
		LocalDateTime fechaCumpleaños = LocalDateTime.of(año, 04, 16, 23, 35);
			
		
		%>
	

	<p>La fecha completa es: <%= fechaCompleta %></p>
	<p>La fecha completa mas un mes es: <%= fechaCompletaMasUno %></p>
	<p>La fecha completa menos tres minutos es: <%= fechaCompletaMenosTresMinutos %></p>
	<p>La fecha de nacimiento es: <%= fechaNacimiento %></p>
	<p>La fecha de cumpleaños es: <%= fechaCumpleaños %></p>


</body>
</html>