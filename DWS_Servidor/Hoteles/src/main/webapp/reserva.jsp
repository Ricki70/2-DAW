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
<%
String hotel=request.getParameter("hotel");
String regimen=request.getParameter("regimen");
String parking=request.getParameter("parking");
String spa=request.getParameter("spa");	
String dias=request.getParameter("dias");
int indice=Integer.parseInt(hotel);
PreReserva res=new PreReserva(indice, regimen, Integer.parseInt(dias));
if(parking!=null) res.setPk(true);
if(spa!=null) res.setSpa(true);
//todo tiene que salir a los métodos de la clase
%>
<p><%=res%></p>
<p>El precio por dia es = <%=res.calculaPrecioDia() %>
<p>El precio total de la estancia es = <%=res.calculaPrecioTotal() %>
<p><a href="indexHoteles.html">volver a index</a></p>
</body>
</html>