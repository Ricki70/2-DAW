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

String nota=request.getParameter("nota");
try{
	int num=Integer.parseInt(nota);
	out.print("<p>"+(num+17)+"</p>");
}catch (NumberFormatException e){
	out.print("<p> no habia nada </p>");
}
%>
<p><%=nota %> nº de caracteres <%=nota.length()%></p>
<p><a href="index.html">volver a index</a></p>
</body>
</html>