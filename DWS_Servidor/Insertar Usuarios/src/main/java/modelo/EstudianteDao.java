package modelo;

import java.util.ArrayList;

/*Se crea esta interfaz para asegurarnos que las clases que implementen de esta interfaz tienen todos los métodos,
 * con el objetivo de asegurarnos que la clase universitario va a tener estas funciones
 */
public interface EstudianteDao {

	public ArrayList<Estudiante> obtener();

	public int insertar(Estudiante est);

	public int eliminar(Estudiante est);

	public Estudiante obtenerPorId(int identificador);

	public int cuantos();

	public int actualizar(Estudiante ef);

}
