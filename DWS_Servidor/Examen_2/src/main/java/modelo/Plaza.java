package modelo;

public class Plaza {
	private int id;
	private String estado;
	
	public Plaza(int id, String estado) {
		this.id = id;
		this.estado = estado;
	}
	
	public Plaza(String estado) {
		this.estado = estado;
	}
	
	public Plaza() {
		
	}
	
	public int getId() {
		return id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String getEstado() {
		return estado;
	}
	
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
	@Override
	public String toString() {
		return "Ciudad [id=" + id + ", nombre=" + estado + "]";
	}
}

