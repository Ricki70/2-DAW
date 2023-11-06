<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="modelo.*" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Autentificacion</title>
</head>
<body>
	<%
	String usuario = request.getParameter("usuario");
	String clave = request.getParameter("clave");
	Usuario u=new Usuario(usuario , clave);
	boolean registro=u.identifica();
	if(registro){
		response.sendRedirect("acceso.html");
	}else {
		out.print("La contrase o el usuario no son correctos");
		out.print("<p><a href=\"autentificacion.html\">volver a acreditarse</a></p>");
	}
	%>
</body>
</html>