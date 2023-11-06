<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% String v=request.getParameter("v"); %>
<p>El valor de v es <%=v %>;</p>
<br>
<p>Disponemos de un repositorio de 12 imágenes</p>
<br>
<p>Si quieres ver alguna imagen pulsa <a href="pg2Url.jsp">aqui</a></p>


</body>
</html>