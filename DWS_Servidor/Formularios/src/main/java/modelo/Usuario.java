package modelo;

public class Usuario {
	private String usuario;
	private String clave;
	
	public Usuario(String usuario, String clave) {
		this.usuario = usuario;
		this.clave = clave;
	}
	
	public boolean identifica() {
		boolean encontrado = false;
		for(int i=0; i<Claves.usuarios.length; i++) {
			if(Claves.usuarios[i][0].equals(usuario)) {
				if(Claves.usuarios[i][1].equals(clave)) {
					encontrado = true;
				}
				break;  // no se puede repetir el usuario, si se encuentra el usuario sale
			}
		}
		return encontrado;
	}
	
	
}
