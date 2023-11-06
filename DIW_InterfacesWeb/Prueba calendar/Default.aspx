<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <p>
        <br />
    </p>
    <form id="form1" runat="server">
        <p>
            <asp:ScriptManager ID="ScriptManager1" runat="server">
            </asp:ScriptManager>
        </p>
        <asp:UpdatePanel ID="UpdatePanel1" runat="server">
            <ContentTemplate>
                <asp:Calendar ID="Calendar1" runat="server" OnSelectionChanged="Calendar1_SelectionChanged" ForeColor="#660066" DayNameFormat="Full">
                    <SelectedDayStyle BackColor="#000099" />
                    <TodayDayStyle BackColor="#FFCCFF" />
                </asp:Calendar>
                <asp:Label ID="Label1" runat="server" Text="Día seleccionado:"></asp:Label>
                &nbsp;&nbsp;&nbsp;&nbsp;<asp:TextBox ID="TextBox1" runat="server" Width="403px"></asp:TextBox>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <asp:Label ID="Label2" runat="server" Text="Fechas seleccionadas:"></asp:Label>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <asp:TextBox ID="TextBox2" runat="server" Width="881px"></asp:TextBox>
                <br />
                <asp:Label ID="Label3" runat="server" Text="Nª fechas seleccionadas:"></asp:Label>
                <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                <br />
                <br />
                <br />
                <asp:Label ID="Label4" runat="server" Text="Primera fecha seleccionada:"></asp:Label>
                <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <asp:Label ID="Label5" runat="server" Text="Última fecha seleccionada:"></asp:Label>
                <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                <br />
                <br />
                <asp:Label ID="Label6" runat="server" Text="cuantos días van entre la primera y la última fecha seleccionada:"></asp:Label>
                <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
                <br />
                <br />
                <asp:Label ID="Label7" runat="server" Text="Mi fecha:"></asp:Label>
                <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
                <br />
                <br />
                <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
            </ContentTemplate>
        </asp:UpdatePanel>
    <div>
    
    </div>
    </form>
</body>
</html>
