using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Windows.Forms;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {//con las siguiente sentencias estoy cambiando la fecha actual del calendario
        //si no pongo nada se marca la fecha actual por defecto
        DateTime tomorrow = DateTime.Today.AddDays(1);
        
        Calendar1.TodaysDate = tomorrow;
        Calendar1.SelectedDate = Calendar1.TodaysDate;

    }

    protected void Calendar1_SelectionChanged(object sender, EventArgs e)
    {
        // Calendar1.SelectionMode
        // propiedad para cambiar el tipo de selección en el calendario

        //Calendar1.SelectionMode = CalendarSelectionMode.Day;
        //Calendar1.SelectionMode = CalendarSelectionMode.DayWeekMonth;
        
        Calendar1.SelectionMode = CalendarSelectionMode.DayWeek;


        //Fecha única. Si el usuario seleccionó una fecha única, la propiedad SelectedDate contiene esta fecha. 
        //Si el usuario seleccionó varias fechas, esta propiedad contiene la primera fecha del intervalo.

        TextBox1.Text = Calendar1.SelectedDate.ToLongDateString();


        //SelectedDates es una colección que contiene todas las fechas seleccionadas. 
        //Las fechas de esta colección están ordenadas y son únicas. 
        //Dado que el control Calendar no permite que el usuario seleccione varias fechas individuales, 
        //las fechas de la colección son, además, consecutivas.

        string s ="";
       
        foreach (DateTime d in Calendar1.SelectedDates){
            s = s + " " + d.ToShortDateString();        }
        
        TextBox2.Text = s;

        // Obtener número de fechas seleccionadas                
        int fechas    = Calendar1.SelectedDates.Count;
        //TextBox3.Text = fechas.ToString();
        //Convert.???(variable), convierte una variable a otro tipo de dato
        
        TextBox3.Text = Convert.ToString(fechas);
        



        SelectedDatesCollection theDates = Calendar1.SelectedDates;
        if (theDates.Count > 1)
        {
            DateTime firstDate = theDates[0];
            DateTime lastDate = theDates[theDates.Count - 1];
            TextBox4.Text = firstDate.ToShortDateString();
            TextBox5.Text = lastDate.ToString();
        }

        SelectedDatesCollection theDates1 = Calendar1.SelectedDates;
        TimeSpan timeSpan = theDates1[theDates1.Count - 1] - theDates1[0];

        // muestra los días que van desde la última a la primera fecha seleccionada
        
        TextBox6.Text =  timeSpan.Days.ToString() + " días";
     


        //Fecha creada 
        DateTime fecha = new DateTime(2016, 12, 10);
        TextBox7.Text = Convert.ToString(fecha);

        TextBox8.Text = Calendar1.SelectedDate.ToShortDateString();

    }
}