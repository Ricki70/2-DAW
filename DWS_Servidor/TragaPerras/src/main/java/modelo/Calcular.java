package modelo;

public class Calcular {
	private int imagenRandom1;
	private int imagenRandom2;
	private int imagenRandom3;
	public int dinero;
public Calcular(int imagenRandom1,int imagenRandom2,int imagenRandom3,int dinero) {
	this.imagenRandom1=imagenRandom1;
	this.imagenRandom2=imagenRandom2;
	this.imagenRandom3=imagenRandom3;
	this.dinero=dinero;
}
public void Jugar(int dinero) {
	if(imagenRandom1==imagenRandom2 && imagenRandom1==imagenRandom3){
		if(imagenRandom1==0){
			this.dinero=dinero*=10;
		}else {
			this.dinero=dinero*=5;
		}
	}else if(imagenRandom1==0 || imagenRandom2==0 || imagenRandom3==0 ){
	 if(imagenRandom1==imagenRandom2 || imagenRandom2==imagenRandom3 || imagenRandom1==imagenRandom3){
		 if(imagenRandom1==0 && imagenRandom1==imagenRandom2){
			 this.dinero=dinero*=4;
		 }else if(imagenRandom2==0 && imagenRandom3==imagenRandom2){
			 this.dinero=dinero*=4;
		 }else if(imagenRandom3==0 && imagenRandom3==imagenRandom1){
			 this.dinero=dinero*=4;
		 }else if(imagenRandom1==0 || imagenRandom2==0 || imagenRandom3==0){
			 this.dinero=dinero*=3;
		 }}else this.dinero=dinero;
	 }else if (imagenRandom1==imagenRandom2 || imagenRandom2==imagenRandom3 || imagenRandom1==imagenRandom3){
		 this.dinero=dinero*=2;
	}else{
		this.dinero=0;
	}
	
}

public int getDinero() {
	return dinero;
}
public void setDinero(int dinero) {
	this.dinero = dinero;
}

}
