package controlador;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.SQLException;
import java.util.ArrayList;

import modelo.Estudiante;
import modelo.EstudianteDao;
import modelo.EstudianteImplementa;

/**
 * Servlet implementation class controladorEstudiante
 */
@WebServlet("/controladorEstudiante")
public class controladorEstudiante extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public controladorEstudiante() {
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
		response.getWriter().append("Served at: ").append(request.getContextPath());
		int action = Integer.parseInt(request.getParameter("action"));
		System.out.println(action);
		try {
			switch (action) {
			case 1:
				mostrar(request, response);
				break;
			case 2:
				String dni = request.getParameter("dni");
				String nombre = request.getParameter("nombre");
				String ape1 = request.getParameter("ape1");
				String ape2 = request.getParameter("ape2");
				String carrera = request.getParameter("carrera");
				int nota = Integer.parseInt(request.getParameter("nota"));
				Estudiante e = new Estudiante();
				e.setDni(dni);
				e.setNombre(nombre);
				e.setAp1(ape1);
				e.setAp2(ape2);
				e.setCarrera(carrera);
				e.setNota(nota);
				insertar(request, response, e);
				break;

			case 3:
				String id = request.getParameter("id");
				System.out.println(id);
				modificar(request, response, id);
				break;
			case 4:
				String dnif = request.getParameter("dni");
				String nombref = request.getParameter("nombre");
				String ape1f = request.getParameter("ape1");
				String ape2f = request.getParameter("ape2");
				String carreraf = request.getParameter("carrera");
				int notaf = Integer.parseInt(request.getParameter("nota"));
				int idf = Integer.parseInt(request.getParameter("ident"));
				Estudiante ef = new Estudiante();
				ef.setDni(dnif);
				ef.setNombre(nombref);
				ef.setAp1(ape1f);
				ef.setAp2(ape2f);
				ef.setCarrera(carreraf);
				ef.setNota(notaf);
				ef.setId(idf);
				modificarf(request, response, ef);
				break;
			case 5:
				int idborrar = Integer.parseInt(request.getParameter("id"));
				Estudiante eborrar = new Estudiante();
				eborrar.setId(idborrar);
				eliminar(request, response, eborrar);
				break;

			}
		} catch (SQLException e) {
			e.getStackTrace();
		}
	}

	private void mostrar(HttpServletRequest request, HttpServletResponse response)
			throws SQLException, IOException, ServletException {
		// Inicializar lista de estudiantes
		ArrayList<Estudiante> lista = new ArrayList<Estudiante>();

		// Inicializar un objeto estudiante implementa
		EstudianteDao dao = new EstudianteImplementa();

		// Obtener lista de estudiantes
		lista = dao.obtener();

		// Almacenar la lista de estudiantes en el atributo
		request.setAttribute("miLista", lista);

		javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/despliegaListaEstudiantes.jsp");
		dispatcher.forward(request, response);
	}

	private void insertar(HttpServletRequest request, HttpServletResponse response, Estudiante e)
			throws SQLException, IOException, ServletException {

		try {
			EstudianteDao dao = new EstudianteImplementa();
			String sw = String.valueOf(dao.insertar(e));
			request.setAttribute("ok", sw);
			javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/insertado.jsp");
			dispatcher.forward(request, response);
		} catch (IOException Error) {
			Error.printStackTrace();
		}
	}

	private void modificar(HttpServletRequest request, HttpServletResponse response, String id)
			throws SQLException, IOException, ServletException {

		int ident = Integer.parseInt(id);
		EstudianteDao dao = new EstudianteImplementa();
		Estudiante e = dao.obtenerPorId(ident);
		System.out.println(e);
		request.setAttribute("estudiante", e);
		javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/modificado.jsp");
		dispatcher.forward(request, response);
	}

	private void modificarf(HttpServletRequest request, HttpServletResponse response, Estudiante ef)
			throws SQLException, IOException, ServletException {

		EstudianteDao dao = new EstudianteImplementa();
		String sw = String.valueOf(dao.actualizar(ef));

		request.setAttribute("ok", sw);
		javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/insertado.jsp");
		dispatcher.forward(request, response);
	}

	private void eliminar(HttpServletRequest request, HttpServletResponse response, Estudiante eborrar)
			throws SQLException, IOException, ServletException {

		EstudianteDao dao = new EstudianteImplementa();
		String sw = String.valueOf(dao.eliminar(eborrar));

		request.setAttribute("ok", sw);
		javax.servlet.RequestDispatcher dispatcher = request.getRequestDispatcher("/eliminado.jsp");
		dispatcher.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);

	}

}
