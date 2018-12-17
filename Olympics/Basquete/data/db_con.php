<?php
session_start();
$conn = new mysqli("localhost", "root", "", "basquete");
// Testa a conexão
if($conn->connect_error) {
    die("Connection failed:". $conn->connect_error);
}