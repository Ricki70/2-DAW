<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page import="modelo.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Estadisticas</title>
</head>
<body>
<h4>Estadisticas</h4>
<p> El numero de comentarios de cinefilos: <%=Fichero.getNumCinefilos() %> </p>
<p> El numero de comentarios de urbanistas: <%=Fichero.getNumUrbanistas() %> </p>
<p> El numero de comentarios de deportistas: <%=Fichero.getNumDeportistas() %></p>
<p><a href="index.jsp">Dejar un nuevo comentario</a></p>
</body>
</html>