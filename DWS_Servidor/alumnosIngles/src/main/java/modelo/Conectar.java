/*package modelo;

import java.sql.Connection; 
import java.sql.DriverManager;
import java.sql.SQLException;


public class Conectar {
public static Connection conectar() {
    Connection con = null;
   
    String password = "Tortuga8";
    String usuario = "root";
    String url = "jdbc:mysql://localhost:3308/alumno_ingles";
    try {
        Class.forName("com.mysql.jdbc.Driver");
    } catch (ClassNotFoundException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }    
    try {
        con = DriverManager.getConnection(url,usuario,password);
        if (con != null) {
            System.out.println("Conectado");
        }
    } catch (SQLException e) {
        System.out.println("No se pudo conectar a la base de datos");
        e.printStackTrace();
    }
    return con;
}
}*/

package modelo;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class Conectar {
	public static Connection conec(String base) throws ClassNotFoundException {
		Connection con = null;
		String password = "1234";
		String usuario = "root";
		String url = "jdbc:mysql://localhost:3307/"+base;
				
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(url,usuario,password);
			if (con != null) {
				System.out.println("Conectado");
			}
		} catch (SQLException e) {
			System.out.println("No se pudo conectar a la base de datos");
			e.printStackTrace();
		}
		
		return con;
	}
}
