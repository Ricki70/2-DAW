using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Windows.Forms;

//referencias MySQL
using MySql.Data;
using MySql.Data.MySqlClient;

public partial class BuscarUno : System.Web.UI.Page
{
    MySqlConnection conexion = new MySqlConnection("DataBase=bd1;DataSource=localhost;user=root;Port=3306");
    static MySqlDataReader datareader;


    protected void Page_Load(object sender, EventArgs e)
    {

    }


    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {
        buscar("id", TextBox1.Text);  
    }
    

    


    protected void TextBox2_TextChanged(object sender, EventArgs e)
    {
        buscar("nombre", TextBox2.Text);
    }


    public void buscar(string bus, string contenido)
    {
        limpiar();
        
        Button2.Enabled = false;
        MySqlCommand comando1 = new MySqlCommand("Select * from tabla1 where "+bus+"= @idp", conexion);
       
        if (bus == "id") {
            MySqlParameter idp = comando1.Parameters.Add("@idp", MySqlDbType.Int16);
            idp.Value = Convert.ToInt16(contenido);
        }
        if (bus == "nombre") {
            MySqlParameter idp = comando1.Parameters.Add("@idp", MySqlDbType.String);
            idp.Value = contenido;
        }

        conexion.Close();
        conexion.Open();


         datareader = comando1.ExecuteReader();
                   
        
        mostrar();
        
        
       
        
        
    }
    public void limpiar()
    {

        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";

    }
    public void mostrar()
    {
       //comprobamos si tiene filas el datareader
        if (datareader.HasRows)
        {
            if (datareader.Read())
            {
                Button2.Enabled = true;
                TextBox2.Text = datareader.GetString(1);
                TextBox3.Text = datareader.GetString(2);
                TextBox4.Text = datareader.GetString(3);
            }
            else
            {
                Button2.Enabled = false;
                datareader.Close();
                conexion.Close();

            }
        }
        else
        {
            MessageBox.Show("no se ha encontrado el registro");

        }
    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        
        mostrar();
    }
}