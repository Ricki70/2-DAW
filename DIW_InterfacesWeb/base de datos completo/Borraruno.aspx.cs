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
public partial class Borraruno : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        
        
        
    }
    MySqlConnection conexion = new MySqlConnection("DataBase=bd1;DataSource=localhost;user=root;Port=3306");
    protected void Button1_Click(object sender, EventArgs e)
    {
       
        conexion.Open();  
        var comando = new MySqlCommand("Delete from tabla1 where id=" + TextBox1.Text, conexion);
        comando.ExecuteNonQuery();
        conexion.Close();
        limpiar();
        Button1.Enabled = false;

    }

    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {
        Button1.Enabled = false;
        var comando1 = new MySqlCommand("Select * from tabla1 where id = @idp", conexion);
        MySqlParameter idp = comando1.Parameters.Add("@idp", MySqlDbType.Int16);
        idp.Value = Convert.ToInt16(TextBox1.Text);
        conexion.Open();
        MySqlDataReader datareader=  comando1.ExecuteReader();

        

         
        if (datareader.HasRows)
        {
            datareader.Read();
            TextBox2.Text = datareader.GetString(1);
            TextBox3.Text = Convert.ToString(datareader.GetInt16(0));
            TextBox4.Text = datareader.GetString(2);
            TextBox5.Text = datareader.GetString(3);
            Button1.Enabled = true;
            
        }
        else
        {
            MessageBox.Show("no se han encontrado el registro");
            Button1.Enabled = false;
            limpiar();
        }
        datareader.Close();
        conexion.Close();


    }
    public void limpiar()
    {
        TextBox1.Text = "";
        TextBox2.Text = "";
        TextBox3.Text = "";
        TextBox4.Text = "";
        TextBox5.Text = "";
    }
}


