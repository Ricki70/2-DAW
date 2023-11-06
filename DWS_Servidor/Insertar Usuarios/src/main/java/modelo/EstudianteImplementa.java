package modelo;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class EstudianteImplementa implements EstudianteDao{
	public int cuantos() {
		int filas=0;
		Connection co =null;
		Statement stm= null;
		ResultSet rs=null;
		
		String sql="SELECT count(*) FROM estudiantes";
		try {			
			co= Conexion.conectar();
			stm=(Statement)co.createStatement();
			rs=stm.executeQuery(sql);
			if (rs.next()) {
				
				 filas=(rs.getInt(1));
			}
			stm.close();
			rs.close();
			co.close();
		} catch (SQLException e) {
			System.out.println("Error: Clase ClienteDaoImple, m�todo obtener");
			e.printStackTrace();
		}
		
		return filas;
	}
	public int insertar(Estudiante est) {
		int registrar = 0;
		
		Statement stm= null;
		Connection con=null;
		
		String sql="INSERT INTO estudiantes values (NULL,'";
		sql =sql+est.getDni()+"','"+est.getNombre()+"','"+est.getAp1()+"','"+est.getAp2()+"','"
				+est.getCarrera()+"','"+est.getNota()+"')";
		
		try {			
			System.out.println(sql);
			con=Conexion.conectar();
			stm= con.createStatement();
			
			registrar=stm.executeUpdate(sql);
			stm.close();
			con.close();
		} catch (SQLException e) {
			System.out.println("Error: Clase ClienteDaoImple, m�todo registrar");
			e.printStackTrace();
		}
		return registrar;
	}
	public ArrayList<Estudiante> obtener() {
		Connection co =null;
		Statement stm= null;
		ResultSet rs=null;
		
		String sql="SELECT * FROM estudiantes  ORDER BY idestudiantes";
		System.out.println(sql);
		ArrayList<Estudiante> listaEstudiante= new ArrayList<Estudiante>();
		
		try {			
			co= Conexion.conectar();
			
			// Crear la peticion a la base de datos
			stm=(Statement)co.createStatement();
			// Añadir la query
			rs=stm.executeQuery(sql);
			
			while (rs.next()) {
				Estudiante e=new Estudiante();
				e.setId(rs.getInt(1));
				e.setDni(rs.getString(2));
				e.setNombre(rs.getString(3));
				e.setAp1(rs.getString(4));
				e.setAp2(rs.getString(5));
				e.setCarrera(rs.getString(6));
				e.setNota(rs.getInt(7));
				listaEstudiante.add(e);
			}
			stm.close();
			rs.close();
			co.close();
		} catch (SQLException e) {
			System.out.println("Error: Clase ClienteDaoImple, m�todo obtener");
			e.printStackTrace();
		}
		
		return listaEstudiante;
	}
	public Estudiante obtenerPorId(int identificador) {
		Connection co =null;
		Statement stm= null;
		ResultSet rs=null;
		
		String sql="SELECT * FROM estudiantes WHERE idestudiantes="+identificador;
		System.out.println(sql);
		Estudiante e= new Estudiante();
		
		try {			
			co= Conexion.conectar();
			stm=(Statement)co.createStatement();
			rs=stm.executeQuery(sql);
			while (rs.next()) {
				
				e.setId(rs.getInt(1));
				e.setNombre(rs.getString(3));
				e.setAp1(rs.getString(4));
				e.setAp2(rs.getString(5));
				e.setDni(rs.getString(2));
				e.setCarrera(rs.getString(6));
				e.setNota(rs.getInt(7));
				
			}
			stm.close();
			rs.close();
			co.close();
		} catch (SQLException ex) {
			System.out.println("Error: Clase ClienteDaoImple, m�todo obtener");
			ex.printStackTrace();
		}
		
		return e;
	}
	public int actualizar(Estudiante e) {
		Connection connect= null;
		Statement stm= null;
		
		int actualizar=0;
				
		String sql="UPDATE estudiantes SET dni='"+e.getDni()+"', nombre='"
		+e.getNombre()+"', ape1='"+e.getAp1()+"', ape2='"+e.getAp2()+
		"',carrera='"+e.getCarrera()+"',nota="+e.getNota()+" WHERE id="+e.getId()+" ";
		System.out.println(sql);
		try {
			connect=Conexion.conectar();
			stm=connect.createStatement();
			
			actualizar=stm.executeUpdate(sql);;
		} catch (SQLException ex) {
			System.out.println("Error: Clase  m�todo actualizar");
			ex.printStackTrace();
		}		
		return actualizar;
	}
	public int eliminar(Estudiante e) {
		Connection connect= null;
		Statement stm= null;
		
		int eliminar=0;
				
		String sql="DELETE FROM estudiantes WHERE idestudiantes="+e.getId()+"";
		try {
			connect=Conexion.conectar();
			stm=connect.createStatement();
			
			eliminar=stm.executeUpdate(sql);
		} catch (SQLException ex) {
			System.out.println("Error: Clase ClienteDaoImple, m�todo eliminar");
			ex.printStackTrace();
		}		
		return eliminar;
	}
}
