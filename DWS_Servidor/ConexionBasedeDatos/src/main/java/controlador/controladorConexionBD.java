package controlador;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import modelo.Conexion;

/**
 * Servlet implementation class controladorConexionDB
 */
@WebServlet("/controladorConexionBD")
public class controladorConexionBD extends HttpServlet {
    private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public controladorConexionBD() {
        super();
        // TODO Auto-generated constructor stub
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        Connection con = Conexion.conectar();
       
        String mensaje = "";
        if (con != null) {
            mensaje = "La base de datos está conectada";
        }
        else {
            mensaje = "La base de datos no se ha podido conectar, comprueba logs en Console";
        }
       
        request.setAttribute("mensaje", mensaje);
       
        request.getRequestDispatcher("/estadoConexion.jsp").forward(request, response);
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
     */
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}