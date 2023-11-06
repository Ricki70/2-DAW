<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<form action="dniProc.jsp" method="post">
    	<label for="dni">DNI: </label><input type="text" name="dni" required /><br><br>
    	 <input type="reset" name="borrar" value="Borrar datos">
        <input type="submit" name="enviar" value="Consultar incidencias">
    </form>
	
</body>
</html>