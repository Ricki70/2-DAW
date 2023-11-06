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

public partial class Modificar : System.Web.UI.Page
{
    MySqlConnection conexion = new MySqlConnection("DataBase=bd1;DataSource=localhost;user=root;Port=3306");
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        MySqlCommand comando1 = new MySqlCommand("update tabla1 set dni = @dni, nombre = @nombre, direccion = @direccion where id = @id", conexion);
        MySqlParameter nombre = comando1.Parameters.Add("@nombre", MySqlDbType.String);
        MySqlParameter dni = comando1.Parameters.Add("@dni", MySqlDbType.String);
        MySqlParameter direccion = comando1.Parameters.Add("@direccion", MySqlDbType.String);
        nombre.Value = TextBox2.Text;
        dni.Value = TextBox3.Text;
        direccion.Value = TextBox4.Text;
        MySqlParameter id = comando1.Parameters.Add("@id", MySqlDbType.Int16);
        id.Value = Convert.ToInt16(TextBox1.Text);
        conexion.Open();
        comando1.ExecuteNonQuery();
        conexion.Close();
    }

    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {
        var comando1 = new MySqlCommand("Select * from tabla1 where id = @idp", conexion);
        MySqlParameter idp = comando1.Parameters.Add("@idp", MySqlDbType.Int16);
        idp.Value = Convert.ToInt16(TextBox1.Text);
        conexion.Open();
        MySqlDataReader datareader = comando1.ExecuteReader();

       
        
        if (datareader.HasRows)
        {
            datareader.Read();
            TextBox2.Text = datareader.GetString(1);
            TextBox3.Text = datareader.GetString(2);
            TextBox4.Text = datareader.GetString(3);
            Button1.Enabled = true;

        }
        else
        {
            MessageBox.Show("no se han encontrado el registro");
            Button1.Enabled = false;
            
        }
        datareader.Close();
        conexion.Close();
    }
}