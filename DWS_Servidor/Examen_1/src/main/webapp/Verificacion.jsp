<%@ page import="java.time.*" import="modelo.*" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<%
	LocalDate fechaActual = LocalDate.now();

	String fecha = fechaActual.toString();
	String nombre = request.getParameter("nombre");
	String apellidos = request.getParameter("apellidos");
	String dni = request.getParameter("dni");
	String matricula = request.getParameter("matricula");
	String incidencia = request.getParameter("incidencias");
	CrearCsv csv = new CrearCsv(fecha, nombre, apellidos, dni, matricula, incidencia);
	csv.addIncidencia();
%>

<label>La incidencia para <%=nombre %> <%=apellidos %> con DNI: <%=dni %> </label>
<%if (csv.getControl()){
	out.print("ha sido correctamente creada" + " " + fechaActual);
}else{
	out.print("no se ha creado correctamente");
}
%>

<p>Click en <a href="registro.jsp">este enlace</a> para generar otra incidencia o click en <a href="formDNI.jsp">este enlace</a> para consultar las incidencias asociadas a un DNI</p>

</body>
</html>