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
<%@ page import="modelo.*,controlador.*, java.util.ArrayList" %>

<h2>Los estudiantes  son: </h2>
<%
ArrayList<Estudiante> lest = null;
lest =(ArrayList<Estudiante>)request.getAttribute("miLista");


//for (Estudiante e: lest)
Estudiante e = new Estudiante();
for (int i=0; i<lest.size();i++){
	e=lest.get(i);
	int ident=e.getId();
	String m=" <a href=\"controladorEstudiante?id="+ident+"&action=3\"> modificar </a> ";
	String b=" <a href=\"controladorEstudiante?id="+ident+"&action=5\"> eliminar </a> ";
	out.println("<p>"+e.toString()+m+" "+b+"</p>");
	}

%>


<p><a href="index.jsp">regresar a index</a>
</body>
</html>
