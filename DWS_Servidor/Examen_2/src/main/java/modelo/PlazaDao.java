package modelo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class PlazaDao {
	public int insertar(String id) {
		int registrar = 0;

		Statement stm = null;
		Connection con = null;

		String sql = "INSERT INTO plaza values ";
		sql = sql + "('" + id + "','ocupado')";

		try {
			System.out.println(sql);
			con = Conectar.conectar();
			stm = con.createStatement();

			registrar = stm.executeUpdate(sql);
			stm.close();
			con.close();
		} catch (SQLException e) {
			System.out.println("Error: Clase PlazaDao, metodo insertar");
			e.printStackTrace();
			System.out.println(e);
		}
		return registrar;
	}

	public ArrayList<Plaza> obtener() {
		Connection co = null;
		Statement stm = null;
		ResultSet rs = null;
		
		ArrayList<Plaza> listaCiudades = new ArrayList<Plaza>();
		String sql = "SELECT * FROM plaza ORDER BY id";
		System.out.println(sql);
		

		try {
			co = Conectar.conectar();

// Crear la peticion a la base de datos
			stm = (Statement) co.createStatement();
// Añadir la query
			rs = stm.executeQuery(sql);

			while (rs.next()) {
				Plaza c = new Plaza();
				c.setEstado(rs.getString(2));
				listaCiudades.add(c);
			}
			stm.close();
			rs.close();
			co.close();
		} catch (SQLException e) {
			System.out.println("Error: Clase ClienteDaoImple, metodo obtener");
			e.printStackTrace();
		}

		return listaCiudades;
	}
}

