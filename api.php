<?php
$username = "root";
$server="localhost";
$senha = "";
$database = "crmpixerama";
$connect = mysqli_connect($server,$username,$senha,$database);

if(isset($_POST['nome'])){
    mysqli_query($connect,"INSERT INTO leads (NMLead,NMCidadeLead,NUTelefoneLead,UF,NMEmailLead,DSMensagem) VALUES ('".$_POST['nome']."','".$_POST['cidade']."','".$_POST['telefone']."','".$_POST['estado']."','".$_POST['email']."','".$_POST['mensagem']."')");
}