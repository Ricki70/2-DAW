package modelo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class CiudadDao {
	public int insertar(Ciudad c) {
		int registrar = 0;

		Statement stm = null;
		Connection con = null;

		String sql = "INSERT INTO ciudad values (NULL,'";
		sql = sql + c.getNombre() + "','" + c.getVotos() + "')";

		try {
			System.out.println(sql);
			con = Conectar.conectar();
			stm = con.createStatement();

			registrar = stm.executeUpdate(sql);
			stm.close();
			con.close();
		} catch (SQLException e) {
			System.out.println("Error: Clase ClienteDaoImple, metodo registrar");
			e.printStackTrace();
		}
		return registrar;
	}

	public ArrayList<Ciudad> obtener() {
		Connection co = null;
		Statement stm = null;
		ResultSet rs = null;
		
		ArrayList<Ciudad> listaCiudades = new ArrayList<Ciudad>();
		String sql = "SELECT * FROM ciudad ORDER BY id";
		System.out.println(sql);
		

		try {
			co = Conectar.conectar();

// Crear la peticion a la base de datos
			stm = (Statement) co.createStatement();
// Añadir la query
			rs = stm.executeQuery(sql);

			while (rs.next()) {
				Ciudad c = new Ciudad();
				c.setNombre(rs.getString(2));
				c.setVotos(rs.getInt(3));
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

	public Ciudad obtenerPorNombre(String nombreCiudad) {
		Connection co = null;
		Statement stm = null;
		ResultSet rs = null;

		String sql = "SELECT * FROM ciudad where nombre='" + nombreCiudad + "' ";
		System.out.println(sql);
		Ciudad c4 = null;

		try {
			co = Conectar.conectar();
			stm = (Statement) co.createStatement();
			rs = stm.executeQuery(sql);
			while (rs.next()) {
				int id = rs.getInt("id");
				String nom = rs.getString("nombre");
				int vts = rs.getInt("votos");
				c4 = new Ciudad(id, nom, vts);
			}
			stm.close();
			rs.close();
			co.close();
		} catch (SQLException ex) {
			System.out.println("Error: Clase ClienteDaoImple, metodo obtenerPorNombre");
			ex.printStackTrace();
		}
		
		return c4;
	}

	public String actualizar(Ciudad c) {
		Connection connect = null;
		Statement stm = null;
		String notificacion = "";
		String sql = "UPDATE ciudad SET votos=votos+1 WHERE nombre='" + c.getNombre() + "' ";
		System.out.println(sql);
		try {
			connect = Conectar.conectar();
			stm = connect.createStatement();

			notificacion = String.valueOf(stm.executeUpdate(sql));
			;
		} catch (SQLException ex) {
			System.out.println("Error: Clase metodo actualizar");
			ex.printStackTrace();
		}
		return notificacion;
	}
}

