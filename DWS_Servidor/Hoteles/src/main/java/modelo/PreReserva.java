package modelo;

public class PreReserva {
private int nombreHotel;
private String regimenAloj;
private int dias;
private boolean pk;
private boolean spa;
public PreReserva(int nombreHotel, String regimenAloj, int dias, boolean pk, boolean spa) {
	this.nombreHotel = nombreHotel;
	this.regimenAloj = regimenAloj;
	this.dias = dias;
	this.pk = pk;
	this.spa = spa;
}
public PreReserva(int nombreHotel, String regimenAloj, int dias) {
	this.nombreHotel = nombreHotel;
	this.regimenAloj = regimenAloj;
	this.dias = dias;
}
public int getNombreHotel() {
	return nombreHotel;
}
public String NombreHotel() {
	return alojamientos.hts[nombreHotel][0];
}
public String getRegimenAloj() {
	return regimenAloj;
}
public int getDias() {
	return dias;
}
public void setPk(boolean pk) {
	this.pk = pk;
}
public void setSpa(boolean spa) {
	this.spa = spa;
}
public boolean isPk() {
	return pk;
}
public boolean isSpa() {
	return spa;
}

public int calculaPrecioDia() {
	int totalDia=0;
	switch (this.regimenAloj) {
	case "PC":
		totalDia+=Integer.parseInt(alojamientos.hts[nombreHotel][1]);
		break;
	case "MP":
		totalDia+=Integer.parseInt(alojamientos.hts[nombreHotel][2]);
		break;
	case "AD":
		totalDia+=Integer.parseInt(alojamientos.hts[nombreHotel][3]);
	}
	//ademas sumar extras
	if(this.pk) {
		totalDia+=Integer.parseInt(alojamientos.hts[nombreHotel][4]);
	}
	if(this.spa) {
		totalDia+=Integer.parseInt(alojamientos.hts[nombreHotel][5]);
	}
	return totalDia;
}
public int calculaPrecioTotal() {
	return this.dias*calculaPrecioDia();
}
@Override
public String toString() {
	return "PreReserva: nombreHotel = " + NombreHotel() + " , regimenAloj = " + regimenAloj + " , dias = " + dias + " , pk = " + pk
			+ " , spa = " + spa;
}

}
