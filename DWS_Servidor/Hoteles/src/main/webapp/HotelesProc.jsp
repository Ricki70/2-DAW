<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
out.print("Has elegido el hotel "+hotel);
out.print(" con regimen "+regimen);
out.print(" con estos extras: ");
if(spa==null && parking==null){
	out.print("sin extras");
}
if(spa!=null){
	out.print(spa+" ");
}
if(parking!=null){
	out.print(parking+" ");
}
out.print(" y te quieres hospedar "+dias+" dias");
%>
<p><a href="indexHoteles.html">volver a index</a></p>
</body>
</html>