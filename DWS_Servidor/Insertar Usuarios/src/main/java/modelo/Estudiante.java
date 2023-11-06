package modelo;

public class Estudiante {
private int id;
private String dni;
private String nombre;
private String ap1;
private String ap2;
private String carrera;
private int nota;

public Estudiante() {
	
}

public Estudiante(int id, String dni, String nombre, String ap1, String ap2, String carrera, int nota) {
	this.id = id;
	this.dni = dni;
	this.nombre = nombre;
	this.ap1 = ap1;
	this.ap2 = ap2;
	this.carrera = carrera;
	this.nota = nota;
}

public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getDni() {
	return dni;
}
public void setDni(String dni) {
	this.dni = dni;
}
public String getNombre() {
	return nombre;
}
public void setNombre(String nombre) {
	this.nombre = nombre;
}
public String getAp1() {
	return ap1;
}
public void setAp1(String ap1) {
	this.ap1 = ap1;
}
public String getAp2() {
	return ap2;
}
public void setAp2(String ap2) {
	this.ap2 = ap2;
}
public String getCarrera() {
	return carrera;
}
public void setCarrera(String carrera) {
	this.carrera = carrera;
}
public int getNota() {
	return nota;
}
public void setNota(int nota) {
	this.nota = nota;
}
@Override
public String toString() {
	return "Estudiante [id=" + id + ", dni=" + dni + ", nombre=" + nombre + ", ap1=" + ap1 + ", ap2=" + ap2
			+ ", carrera=" + carrera + ", nota=" + nota + "]";
}

}
