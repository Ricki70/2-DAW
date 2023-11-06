package modelo;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class CrearCsv {
	private String ruta = "R:\\WorkspaceDWS\\Ricardo_de_Antonio_Aguirre\\CSV\\";
	private static Boolean control;
	
	private String fecha;
	private String nombre;
	private String apellido;
	private String dni;
	private String matricula;
	private String incidencia;

	public CrearCsv(String fecha, String nombre, String apellido, String dni, String matricula, String incidencia) {
		this.fecha = fecha;
		this.nombre = nombre;
		this.apellido = apellido;
		this.dni = dni;
		this.matricula = matricula;
		this.incidencia = incidencia;
	}

	public CrearCsv() {

	}

	public void crearFichero() {
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter(ruta + "archivo.csv"));
			bw.write("Fecha" + ";" + "Nombre" + ";" + "Apellido" + ";" + "DNI" + ";" + "Matricula" + ";" + "Incidencia");
			bw.write("\n");
			bw.close();
			System.out.println("<p>Se ha añadido la informacion correctamente</p>");
			control = true;
		} catch (IOException ioe) {
			System.out.println("<p>Error al crear el fichero</p>");
			control = false;
		}
	}
	
	public void addIncidencia() {
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter(ruta + "archivo.csv", true));
			bw.write(this.fecha + ";" + this.nombre + ";" + this.apellido + ";" + this.dni + ";" + this.matricula + ";" + this.incidencia);
			bw.write("\n");
			bw.close();
			System.out.println("<p>Se ha añadido la informacion correctamente</p>");
			control = true;
		} catch (IOException ioe) {
			System.out.println("<p>Error al crear el fichero</p>");
			control = false;
		}
	}
	
	public Boolean getControl(){
		return control;
	}
}