<%@ page import="java.time.*" language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

    <h1>LOCAL TIME</h1>

    <% 
        LocalTime HoraActual = LocalTime.now();
        LocalTime HoraMasUno = HoraActual.plusHours(1);
        LocalTime Amanecer = LocalTime.of(8,40);

        int Horas = HoraActual.getHour();
        int Minutos = HoraActual.getMinute();
        int Segundos = HoraActual.getSecond();

        LocalTime HoraCompuesta = LocalTime.of(Horas, Minutos, Segundos);
    %>

    <p>La hora actual es: <%= HoraActual %></p>
    <p>La hora actual + 1 es: <%= HoraMasUno %></p>
    <p>El amanecer es a las: <%= Amanecer %></p>
    <p>La hora compuesta es: <%= HoraCompuesta %></p>

</body>
</html>