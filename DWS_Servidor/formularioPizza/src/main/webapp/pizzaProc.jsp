<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="estilo.css"/>
</head>
<body>

<% 
    String nombrePizza = request.getParameter("nombrePizza");
    String pizzeria = request.getParameter("pizzeria");
    String tamaño = request.getParameter("tamaño");
    String ingredientes [] = request.getParameterValues("ingredientes");

    double precio = 0;
    String ingredientesString = "";

    switch (tamaño) {
    case "pequeña":
        precio += 5.00;
        break;
    case "mediana":
        precio += 7.50;
        break;
    case "grande":
        precio += 10.00;
        break;
    }

    	if (ingredientes != null){
    		for (int i = 0; i < ingredientes.length; i++) {
        		ingredientesString += ingredientes[i];
        		if (i < ingredientes.length - 1) {
            		ingredientesString += ", ";
        		}
        		precio += 1.50;
    		}
    	}
	

%>

<h1>Detalles</h1>

<p>Nombre pizza: <%=nombrePizza%></p>
<p>Pizzeria: <%=pizzeria%></p>
<p>Tamaño: <%=tamaño%></p>
<p>Ingredientes: <%=ingredientesString%></p>
<p>Precio: <%=precio%>€</p>

<a href="index.html">Volver a crear una pizza nueva</a>

</body>
</html>