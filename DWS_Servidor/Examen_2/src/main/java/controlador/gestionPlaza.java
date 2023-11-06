package controlador;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.Plaza;
import modelo.PlazaDao;

/**
 * Servlet implementation class gestionPlaza
 */
@WebServlet("/gestionPlaza")
public class gestionPlaza extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public gestionPlaza() {
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
		listar(request, response);
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	private void listar(HttpServletRequest request, HttpServletResponse response) {
		// TODO Auto-generated method stub
		// Inicializar lista de estudiantes
				ArrayList<Plaza> lista = new ArrayList<Plaza>();

		// Inicializar un objeto estudiante implementa
				PlazaDao dao = new PlazaDao();

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

	private void insertar(HttpServletRequest request, HttpServletResponse response, String id) {
		// TODO Auto-generated method stub
		PlazaDao dao = new PlazaDao();
		String sw = String.valueOf(dao.insertar(id));
		request.setAttribute("ok", sw);
		String notificacion = "Inserción realizada ...";
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

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		String id = request.getParameter("plaza");
		System.out.println(id);
		Plaza c = new Plaza();
		insertar(request, response, id);
//TODO Auto-generated method stub
		try {
			doGet(request, response);
		} catch (ServletException e) {
//TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
//TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
