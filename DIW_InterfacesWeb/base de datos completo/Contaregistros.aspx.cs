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



public partial class Contaregistros : System.Web.UI.Page
{
    
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        MySqlConnection conexion = null;
        MySqlCommand comando1 = null;

        try
        {
            conexion = new MySqlConnection("DataBase=bd1;DataSource=localhost;user=root;Port=3306");
            comando1 = new MySqlCommand("Select count(*) From tabla1", conexion);
            conexion.Open();

            Label1.Text = comando1.ExecuteScalar().ToString();
            
        }
        catch (Exception ex)
        {
            Label1.Text = "Error: " + ex.Message;
         }
        finally
        {
            if (conexion != null && conexion.State != System.Data.ConnectionState.Closed)
            {
                conexion.Close();
            }
        }

    }
}
