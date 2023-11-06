<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 	int v=Integer.parseInt(request.getParameter("v"));   %>

<% if (v>9) { 
	v=0;
} 
else {
	
	v++;
}
%>


<img alt="100" width="100" src="imagenes/<%=v%>.jpg" >

<p><a href="pag3.jsp?v=<%=v%>" >ir a la pagina 3</a></p>
	
	


</body>
</html>