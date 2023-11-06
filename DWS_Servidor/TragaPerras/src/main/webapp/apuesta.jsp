<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="modelo.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>Apuesta y gana</h1>
<%
final String[] imagenes= {"7","calavera","fresa","gato","limon","manzana","pera","platano","sandia","uvas"};

int imagenRandom1=(int)(Math.random()*imagenes.length);
int imagenRandom2=(int)(Math.random()*imagenes.length);
int imagenRandom3=(int)(Math.random()*imagenes.length);

int dinero=Integer.parseInt(request.getParameter("dinero"));

Calcular calcular1 =new Calcular(imagenRandom1,imagenRandom2,imagenRandom3,dinero);


%>
<p> tu dinero es <%=dinero %> </p>
<%
calcular1.Jugar(dinero);

int dineroFinal = calcular1.getDinero();

int filas=1;
for(int i=0;i<filas;i++){
%>
<table border=1>
	<tr >
		<td>
		<img src="imagenes/<%=imagenes[imagenRandom1] %>.png" width=250px height=250px/>
		<img src="imagenes/<%=imagenes[imagenRandom2] %>.png" width=250px height=250px/>
		<img src="imagenes/<%=imagenes[imagenRandom3] %>.png" width=250px height=250px/>
		</td>
	</tr>
</table>
<%}%>
<p>tu dinero es <%out.print(dineroFinal); %></p>
<form action="apuesta.jsp">
	<label for="dinero">¿Quieres subir tu apuesta?</label>
	<input type="number" name="dinero" id="dinero" value="<%= dineroFinal %>"> 
	<p><input type="submit" name="enviar" value="enviar datos" /></p>
</form>
</body>
</html>