<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% int random=(int)(Math.ceil(Math.random()*8)); %>

<% String v=request.getParameter("v"); %>

<% if (v !=null) { 
	int foto=Integer.parseInt(v);
}
else {
	v=Integer.toString(random);
}
	%>
	
	<p>El valor de v es <%=v %></p>
	<br>
	<p><a href="pg3Url.jsp?v=<%=v%>">Ir a la pagina pg3Url</a>


</body>
</html>