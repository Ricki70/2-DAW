package modelo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class AlumnoDao {
	private Connection con;
	
	public AlumnoDao(String base) throws SQLException, ClassNotFoundException  {
		this.con=Conectar.conec(base);
	}

	public void desconectar() throws SQLException {
		this.con.close();
	}

	public ArrayList <Alumno> listar()  {
		ArrayList <Alumno> listaAlumnos = new ArrayList <Alumno>();
		Alumno alumno;

		String sql = "SELECT * FROM alumno order by nivel desc ";
		 
		System.out.println(sql);
		
		Statement s;
		try {
			s = (Statement) con.createStatement();
			ResultSet res = s.executeQuery (sql);
			
			while (res.next()) {	
				String login =res.getString("login");
				String nombre =res.getString("nombre");

				int nivel =res.getInt("nivel");
				
				alumno = new Alumno (login, nombre, nivel);
				
				listaAlumnos.add(alumno);
			}
			
			res.close();
			desconectar();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		
		return listaAlumnos;
	}
	
	public String insertar (Alumno alumno)  {
		int nreg;
		Statement sentencia;
		String notificacion="";
		String sql="INSERT INTO alumno VALUES ('";
		sql+=alumno.getLogin()+"','"+alumno.getNombre()+"',"+alumno.getNivel()+")";
		
		System.out.println(sql);
		
		try {
			sentencia=con.createStatement();
			nreg=sentencia.executeUpdate(sql);
			notificacion=String.valueOf(nreg);
			sentencia.close();
			desconectar();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			notificacion=e.getMessage();
			notificacion+=" error insertando el alumno";
		}
		
		return notificacion;
	}
	
	public String subirNivel (Alumno a)  {
		Statement sentencia;
		String notificacion="";
		String sql="UPDATE alumno set nivel=nivel+1 WHERE login='"+a.getLogin()+"' ";
		
		System.out.println(sql);
		
		try {
			sentencia=con.createStatement();
			notificacion=String.valueOf(sentencia.executeUpdate(sql));
			sentencia.close();
			desconectar();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			notificacion=e.getMessage();
		}
		
		return notificacion;
	}

}