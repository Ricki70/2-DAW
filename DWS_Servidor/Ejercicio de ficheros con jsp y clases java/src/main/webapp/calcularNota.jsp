<%@ page import="CSV.*" import="java.time.*" import="java.time.format.*" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <%
        int nota = 0;
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        for (Integer i = 1; i < 7; i++) {
            nota += Integer.parseInt(request.getParameter("pregunta" + String.valueOf(i)));
        }

		RellenarCSV prueba = new RellenarCSV(nombre, apellido, Integer.toString(nota));
		prueba.rellenarCSV();
    %>

    <p>Nombre: <%=nombre%></p>
    <p>Apellido: <%=apellido%></p>
    <p>Nota: <%=nota%></p>


</body>
</html>