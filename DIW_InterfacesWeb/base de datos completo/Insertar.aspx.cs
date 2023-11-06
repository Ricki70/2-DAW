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

public partial class _Default : System.Web.UI.Page
{
    MySqlConnection conexion = new MySqlConnection("DataBase=aero_espa__a;DataSource=localhost;user=root;Port=3306");
    //user=Visual2;Password=Visual2;
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
    MySqlCommand comando1=new MySqlCommand("INSERT INTO tabla1 VALUES(NULL, @nombre, @dni, @direccion)",conexion);
        MySqlParameter nombre = comando1.Parameters.Add("@nombre", MySqlDbType.String);
        MySqlParameter dni = comando1.Parameters.Add("@dni", MySqlDbType.String);
        MySqlParameter direccion = comando1.Parameters.Add("@direccion", MySqlDbType.String);
        nombre.Value = TextBox1.Text;
        dni.Value = TextBox2.Text;
        direccion.Value = TextBox3.Text;

        conexion.Open();
        comando1.ExecuteNonQuery();
        conexion.Close();


    }

    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {

    }
}