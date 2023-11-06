package modelo;

public class Alumno {
	private String login;
	private String nombre;
	private int nivel;
	
	static final String PRINCIPIANTE = "principiante";
	static final String INTERMEDIO = "intermedio";
	static final String EXPERTO = "experto";
	
	public Alumno(String login, String nombre) {
		this.login = login;
		this.nombre = nombre;
		this.nivel = 1;
	}
	
	public Alumno(String login, String nombre, int nivel) {
		this.login = login;
		this.nombre = nombre;
		this.nivel = nivel;
	}
	
	public Alumno(String login) {
		this.login = login;
	}
	
	public String getLogin() {
		return login;
	}
	
	public void setLogin(String login) {
		this.login = login;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public int getNivel() {
		return nivel;
	}
	
	public void setNivel(int nivel) {
		this.nivel = nivel;
	}

	public String getClasificacion() {
		switch(this.nivel) {
			case 1:
			case 2:
			case 3:
				return PRINCIPIANTE;
			case 4:
			case 5:
			case 6:
				return INTERMEDIO;
			default:
				return EXPERTO;
		}
	}
	
	@Override
	public String toString() {
		return "Alumno [login=" + login + ", nombre=" + nombre + ", nivel=" + nivel + "]";
	}

}