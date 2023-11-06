package modelo;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Fichero {
	private String nombre;
	private String apellido;
	private String ide;
	private String coment;
	private static int numCinefilos = 0;
	private static int numUrbanistas = 0;
	private static int numDeportistas = 0;

	public Fichero(String nombre, String apellido, String ide, String coment) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.ide = ide;
		this.coment = coment;
	}

	public Fichero() {

	}

	public static void AñadirFichero() {
		numCinefilos = 0;
		numUrbanistas = 0;
		numDeportistas = 0;
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("comentarios.csv", true));
			bw.write("nombre" + "\t" + "apellido" + "\t" + "identificacion" + "\t" + "comentario" + "\t");
			bw.write("\n");
			bw.close();
			System.out.println("<p>Se ha añadido la informacion correctamente</p>");
		} catch (IOException ioe) {
			System.out.println("<p>Error al crear el fichero</p>");
		}
	}

	public void AñadirComentario() {
		try {
			BufferedWriter bw = new BufferedWriter(new FileWriter("comentarios.csv", true));
			bw.write(this.nombre + "\t" + this.apellido + "\t" + this.ide + "\t" + this.coment + "\t");
			bw.write("\n");
			bw.close();
			if(ide.equals("Cinefilo")) {
				numCinefilos++;
			}else if(ide.equals("Urbanista")) {
				numUrbanistas++;
			}else if(ide.equals("Deportista")) {
				numDeportistas++;
			}
			System.out.println("<p>Se ha añadido la informacion correctamente</p>");
		} catch (IOException ioe) {
			System.out.println("<p>Error al crear el fichero</p>");
		}
	}

	public static int getNumCinefilos() {
		return numCinefilos;
	}
	public static int getNumUrbanistas() {
		return numUrbanistas;
	}
	public static int getNumDeportistas() {
		return numDeportistas;
	}
}
