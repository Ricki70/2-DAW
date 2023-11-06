<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="modelo.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Bienvenida</title>
</head>
<body>
<%
Fichero.AñadirFichero();
%>
<h1>Bienvenido</h1>
<p><a href="index.jsp">Deja un comentario</a></p>
</body>
</html>