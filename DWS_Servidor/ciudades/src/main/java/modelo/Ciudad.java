package modelo;

public class Ciudad {
	private int id;
	private String nombre;
	private int votos;
	
	public Ciudad(String nombre) {
		this.nombre = nombre;
	}
	
	public Ciudad() {
		
	}
	
	public Ciudad(String nombre, int votos) {
		this.nombre = nombre;
		this.votos = votos;
	}
	
	public Ciudad(int id, String nombre, int votos) {
		this.id = id;
		this.nombre = nombre;
		this.votos = votos;
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getNombre() {
		return nombre;
	}
	
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public int getVotos() {
		return votos;
	}
	
	public void setVotos(int votos) {
		this.votos = votos;
	}
	
	@Override
	public String toString() {
		return "Ciudad [id=" + id + ", nombre=" + nombre + ", votos=" + votos + "]";
	}
}

