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
int num=-1;
String nota=request.getParameter("nota");
if (nota.length()>0){
	num=Integer.parseInt(nota);
}
%>
<p><%=nota %> nº de caracteres <%=nota.length()%></p>
<%if (num!= -1){ %>
<p><%=num+17 %></p>
<%} %>
<p><a href="index.html">volver a index</a></p>
</body>
</html>