<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p>
	<% 	int v=Integer.parseInt(request.getParameter("v")); %>
	
	
	<% if (v<=9) {
		v++;
	}
     else {  
		v=1;
		
     } %> 
     <img alt="100" width="100" src="imagenes/<%=v%>.jpg" >
		
		
		<p><a href="index.jsp" >Volver al inicio</a></p>
	

</body>
</html>