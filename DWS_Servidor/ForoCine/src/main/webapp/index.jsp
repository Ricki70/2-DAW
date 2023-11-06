<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ForoCine</title>
</head>
<body>
	<h2>Deja tu comentario de cine</h2>
	<form action="EnviarComentario.jsp" method="post">
		<p>Nombre: <input type="text" name="nombre" required/></p>
		<p>Apellido: <input type="text" name="apellidos" required/></p>
		<h4>Como te identificas:</h4>
		<input type="radio" name="identificacion" id="cnf" value="Cinefilo" checked>Cinefilo<br> 
		<input type="radio" name="identificacion" id="urb" value="Urbanista">Urbanista<br> 
		<input type="radio" name="identificacion" id="dpt" value="Deportista">Deportista<br> 
		<br>
		Comentarios:
		<textarea name="comentarios" rows=6 cols=40 placeholder="Abc..."></textarea><br>
		<br>
		<input type="submit" name="enviar" value="Enviar comentario">
		</form>
</body>
</html>