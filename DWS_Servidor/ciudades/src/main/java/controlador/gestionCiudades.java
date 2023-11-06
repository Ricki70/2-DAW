package controlador;

import java.io.*;

import java.util.*;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.Ciudad;
import modelo.CiudadDao;

/**
 * Servlet implementation class controladorUniversitario
 */
@WebServlet("/gestionCiudades")
public class gestionCiudades extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public gestionCiudades() {
		super();
// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
// TODO Auto-generated method stub
		int action = Integer.parseInt(request.getParameter("action"));
		System.out.println(action);
		switch (action) {
		case 1:
			listar(request, response);
			break;
		case 3:
			listarVotacion(request, response);
			break;
		case 5:
			String nombreBuscar = request.getParameter("nombreBuscar");
			mostrarCiudad(request, response, nombreBuscar);
			break;
		}
		
	}

	private void listar(HttpServletRequest request, HttpServletResponse response) {
// TODO Auto-generated method stub
// Inicializar lista de estudiantes
		ArrayList<Ciudad> lista = new ArrayList<Ciudad>();

// Inicializar un objeto estudiante implementa
		CiudadDao dao = new CiudadDao();

// Obtener lista de estudiantes
		lista = dao.obtener();

// Almacenar la lista de estudiantes en el atributo
		request.setAttribute("miLista", lista);

		RequestDispatcher dispatcher = request.getRequestDispatcher("/listar.jsp");
		try {
			dispatcher.forward(request, response);
		} catch (ServletException e) {
// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private void insertar(HttpServletRequest request, HttpServletResponse response, Ciudad c) {
// TODO Auto-generated method stub
		CiudadDao dao = new CiudadDao();
		String sw = String.valueOf(dao.insertar(c));
		request.setAttribute("ok", sw);
		String notificacion  = "Inserción realizada ...";
		request.setAttribute("notificacion", notificacion);
		RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp"); // SE PUEDE CON TRY/CATCH
		try {
			dispatcher.forward(request, response);
		} catch (ServletException e1) {
// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	}

	private void listarVotacion(HttpServletRequest request, HttpServletResponse response) {
// TODO Auto-generated method stub
		ArrayList<Ciudad> lista2 = new ArrayList<Ciudad>();
		CiudadDao dao2 = new CiudadDao();
		lista2 = dao2.obtener();
		request.setAttribute("miLista2", lista2);
		
		javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/votar.jsp"); // SE PUEDE CON
																										// JAVAX EN VEZ
																										// DE JAKARTA
		try {
			dispatcher.forward(request, response);
		} catch (ServletException e1) {
// TODO Auto-generated catch block
			e1.printStackTrace();
		} catch (IOException e1) {
// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	}

	private void votar(HttpServletRequest request, HttpServletResponse response, String voto) {
// TODO Auto-generated method stub
		Ciudad c = new Ciudad(voto);
		CiudadDao dao = new CiudadDao();
		String sw = (dao.actualizar(c));
		request.setAttribute("ok", sw);
		String notificacion  = "Voto realizado ...";
		request.setAttribute("notificacion", notificacion);
		javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/index.jsp");
		try {
			dispatcher.forward(request, response);
		} catch (ServletException e) {
// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	private void mostrarCiudad(HttpServletRequest request, HttpServletResponse response, String nombreBuscar) {
		CiudadDao dao3 = new CiudadDao();
		Ciudad c4 = new Ciudad(nombreBuscar);
		c4 = (dao3.obtenerPorNombre(nombreBuscar));
		if (c4 == null) {
			javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/ciudadNoEncontrada.jsp");
			try {
				dispatcher.forward(request, response);
			} catch (ServletException e) {
	// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
	// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			String notificacion  = "Ciudad encontrada";
			request.setAttribute("notificacion", notificacion);
			request.setAttribute("c4", c4);
			javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/mostrarCiudad.jsp");
			try {
				dispatcher.forward(request, response);
			} catch (ServletException e) {
	// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
	// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		int action = Integer.parseInt(request.getParameter("action"));
		System.out.println(action);
		switch (action) {
		case 2:
			String nombre = request.getParameter("nombre");
			Ciudad c = new Ciudad();
			c.setNombre(nombre);
			c.setVotos(0);
			insertar(request, response, c);
			break;
		case 4:
			String vt = request.getParameter("voto");
			votar(request, response, vt);
			break;
		}
// TODO Auto-generated method stub
		try {
			doGet(request, response);
		} catch (ServletException e) {
// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}