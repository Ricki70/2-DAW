﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Contaregistros.aspx.cs" Inherits="Contaregistros" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
        <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="cuantos registros hay?" />
        <br />
        <br />
        <br />
        HAY <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
&nbsp; REGISTROS</div>
    </form>
</body>
</html>
