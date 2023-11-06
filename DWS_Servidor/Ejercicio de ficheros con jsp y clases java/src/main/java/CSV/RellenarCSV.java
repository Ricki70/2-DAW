package CSV;

import java.io.*;

public class RellenarCSV {
	private String ruta = "R:\\WorkspaceDWS\\Ejercicio de ficheros con jsp y clases java\\CSV\\";
	private String nombre;
	private String apellido;
	private String resultado;

	public RellenarCSV(String nombre, String apellido, String resultado) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.resultado = resultado;
	}

	public void rellenarCSV() {
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter(ruta + "prueba.csv"));
			bw.write(nombre + ";" + apellido + ";" + resultado);
			bw.close();
			System.out.println("Fichero creado correctamente");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error al escribir en el fichero");
		}
	}
}
