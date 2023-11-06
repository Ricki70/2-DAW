<%@ page import="modelo.*" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%
// 		String[] incidencias;
		String dni = request.getParameter("dni");
	
		LeerCsv csv = new LeerCsv();
		
		out.print(csv.RecorrerCSV(dni));
		
// 		incidencias = csv.RecorrerCSV(dni);
		
// 		for (int i = 0; i < incidencias.length; i++){
// 			out.print(incidencias[i]);
// 		}
		
	%>

</body>
</html>