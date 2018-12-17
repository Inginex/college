<?php
session_start();
/* Database Config */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "esgrima";

$conn = new mysqli($servername, $username, $password, $dbname);
// Testa a conexão
if($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}