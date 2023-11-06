package controlador;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.Alumno;
import modelo.AlumnoDao;

/**
 * Servlet implementation class gestionAlumnos
 */
@WebServlet("/gestionAlumnos")
public class gestionAlumnos extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public gestionAlumnos() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int accion=Integer.parseInt(request.getParameter("accion"));

		switch (accion) {
		// Listar
		case 1:
			try {
				listarPorNivel(request, response);
			} catch (ClassNotFoundException|SQLException e) {	
				e.printStackTrace();
			}
			
			break;
		// Listar para subir nivel
		case 2:
			try {
				subirNivelMenu(request, response);
			} catch (ClassNotFoundException|SQLException e) {	
				e.printStackTrace();
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int accion=Integer.parseInt(request.getParameter("accion"));
		
		switch (accion) {
		// Insertar
		case 1:
			try {
				insertarAlumno(request, response);
			} catch (ClassNotFoundException|SQLException e) {	
				e.printStackTrace();
			}
			
			break;
		// Subir nivel
		case 2:
			try {
				subirNivelConParametros(request, response);
			} catch (ClassNotFoundException|SQLException e) {	
				e.printStackTrace();
			}
		}
	}

	private void listarPorNivel(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException , ServletException, ClassNotFoundException{
		getListaPorNivel(request, response);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/listar.jsp");
		dispatcher.forward(request, response);
	}
	
	private void subirNivelMenu(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException , ServletException, ClassNotFoundException{
		getListaPorNivel(request, response);
		
		RequestDispatcher dispatcher = request.getRequestDispatcher("/subirNivel.jsp");
		dispatcher.forward(request, response);
	}
	
	private void getListaPorNivel(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException , ServletException, ClassNotFoundException{
		AlumnoDao alumnoDao = new AlumnoDao("alumno_ingles");
		ArrayList <Alumno> listaAlumnos = alumnoDao.listar();
		
		request.setAttribute("lista", listaAlumnos);
	}
	
	private void insertarAlumno(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException , ServletException, ClassNotFoundException{
		String login = request.getParameter("login").replaceAll("\\s+","").toLowerCase();
		String nombre = request.getParameter("nombre");
		
		String notificacion = "";
		
		if (login.isEmpty() || nombre.isEmpty()) {
			notificacion=" datos incompletos ";
			request.setAttribute("notificacion", notificacion);
			
			RequestDispatcher dispatcher = request.getRequestDispatcher("/insertar.jsp");
			dispatcher.forward(request, response);
		} else {
			agregar(request, response, login, nombre);
			
			// Después de agregar redirigimos a la pagina de listar 
			getListaPorNivel(request, response);
			
			RequestDispatcher dispatcher = request.getRequestDispatcher("/listar.jsp");
			dispatcher.forward(request, response);	
		}
	}
	
	private void subirNivelConParametros(HttpServletRequest request, HttpServletResponse response) throws SQLException, IOException , ServletException, ClassNotFoundException{
		String login = request.getParameter("login");
	
		String notificacion = "";
		
		if (login.isEmpty()) {
			notificacion=" login incompletos ";
			request.setAttribute("notificacion", notificacion);
			
			// Obtener la lista por nivel
			getListaPorNivel(request, response);
			
			RequestDispatcher dispatcher = request.getRequestDispatcher("/subirNivel.jsp");
			dispatcher.forward(request, response);
		} else {
			subirNivel(request, response, login);
			
			// Obtener la lista por nivel
			getListaPorNivel(request, response);
			
			RequestDispatcher dispatcher = request.getRequestDispatcher("/listar.jsp");
			dispatcher.forward(request, response);	
		}
	}
	
	private void agregar(HttpServletRequest request, HttpServletResponse response,String login, String nombre) throws SQLException, IOException , ServletException, ClassNotFoundException{ 
        String notificacion="";
        
        Alumno alumno = new Alumno(login, nombre);
        AlumnoDao alumnoDao = new AlumnoDao("alumno_ingles");
        
        String ps = alumnoDao.insertar(alumno);

		if (ps.equals("1")) {
			notificacion="inserccion realizada....... ";
		} else if (ps.equals("0")) {
			notificacion="alumno ya existe";
		} else {
			notificacion=ps;
		}
		
		request.setAttribute("notificacion",notificacion);
	}
	
	private void subirNivel(HttpServletRequest request, HttpServletResponse response, String login) throws SQLException, IOException , ServletException, ClassNotFoundException{
		String notificacion="";
		
		Alumno alumno = new Alumno(login);
		AlumnoDao alumnoDao = new AlumnoDao("alumno_ingles");
		
		String ps = alumnoDao.subirNivel(alumno);
		
		if (ps.equals("1")) {
			notificacion="nivel para "+login+" subido...... ";
		} else if (ps.equals("0")) {
			notificacion="notificacion al subir nivel ";
		} else {
			notificacion=ps;
		}
		
		request.setAttribute("notificacion",notificacion);
	}
}
