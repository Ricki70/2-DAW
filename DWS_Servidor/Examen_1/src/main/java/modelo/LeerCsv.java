package modelo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
//import java.util.Arrays;

public class LeerCsv {
	
//	private String[] incidencias;
	private String ruta = "R:\\WorkspaceDWS\\Ricardo_de_Antonio_Aguirre\\CSV\\";
	private static final String SEPARADOR = ";";

	public String RecorrerCSV( String dni) {
		BufferedReader bufferLectura = null;
		try {
			bufferLectura = new BufferedReader(new FileReader(ruta + "archivo.csv"));
			String linea = bufferLectura.readLine();
		  
			bufferLectura.readLine();
			while (linea != null) {
				String[] campos = linea.split(SEPARADOR);	
				return campos[3];
//					if (campos[3] == dni) {
//						for(int i = 0 ; i < campos.length; i++) {
//							incidencias[i] = campos[i];
//						}
//					}
				}
				linea = bufferLectura.readLine();
		} 
		catch (IOException e) {
			e.printStackTrace();
		}
		finally {
			if (bufferLectura != null) {
				try {
					bufferLectura.close();
				} 
				catch (IOException e) {
					e.printStackTrace();
				}
			}
		 
		}
		return "prueba";
//		return incidencias;
	}
}

