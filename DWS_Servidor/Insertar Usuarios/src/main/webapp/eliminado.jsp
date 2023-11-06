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

<h2>eliminado: </h2>
<%

String ok =(String)request.getAttribute("ok");
int sw=Integer.parseInt(ok);

if (sw>0)
{


out.println("<p>operacion realizada</p>");
}else {
	out.println("<p>No se ha podido eliminar correctamente</p>");	
}
%>


<p><a href="index.jsp">regresar a index</a>
</body>
</html>
