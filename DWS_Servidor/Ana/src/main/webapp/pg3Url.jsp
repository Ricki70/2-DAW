<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<% String imagenes[]={"1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg",
			"9.jpg"};
	int v=Integer.parseInt(request.getParameter("v")); %>
	<p>El valor de nuestra variable es <%=v %></p>
	
	<p><img alt="imagen" width="100"  src="imagenes/<%=imagenes[v] %>"></p>
	<p><a href="pg2Url.jsp?v=<%=v%>">Ir a pagina 2</a></p>
	<p><a href="pg1Url.jsp">Ir a pagina 1 para obtener otro valor</a></p>
	<p><a href="index.jsp">Ir al index</a></p>
	
</body>
</html>