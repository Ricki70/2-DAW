<%@ page import="modelo.*" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Prereserva</title>
</head>
<body>
	<form action="reserva.jsp" method="post">
		<p>Elige hotel</p>
		<%
		String dato;
		for(int i=1; i< alojamientos.hts.length;i++){
			dato = alojamientos.hts[i][0];
		%>
		<input type="radio" name="hotel" value="<%=i%>" checked/>
		<%=dato %><br>
		<%} %>
		<P> regimen de alojamiento elegido </P>
		<input type="radio" name="regimen" value="PC" checked>PC <br>
		<input type="radio" name="regimen" value="MP"> MP <br>
		<input type="radio" name="regimen" value="AD"> AD <br>
		<p> Extras </p>
			<input type="checkbox" name="parking" value="Parking" > Parking <br>
			<input type="checkbox" name="spa" value="Spa" > Spa <br>
		<p> nº de dias </p>
		<input type="number" name="dias" min="1"><br>
		<p><input type="submit" name="enviar" value="enviar datos"/></p>
	</form>	
</body>
</html>