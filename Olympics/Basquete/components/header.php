<?php require "data/db_con.php"; ?>
<!DOCTYPE html>
<html lang="pt" class="no-js">
<head>
    <!-- Mobile Specific Meta -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Favicon-->
    <link rel="shortcut icon" href="img/fav.png">
    <!-- Author Meta -->
    <meta name="author" content="CodePixar">
    <!-- Meta Description -->
    <meta name="description" content="">
    <!-- Meta Keyword -->
    <meta name="keywords" content="">
    <!-- meta character set -->
    <meta charset="UTF-8">
    <!-- Site Title -->
    <title>Basquete Site</title>

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,500,600" rel="stylesheet">
    <!--
		CSS
		============================================= -->
    <link rel="stylesheet" href="css/linearicons.css">
    <link rel="stylesheet" href="css/owl.carousel.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/nice-select.css">
    <link rel="stylesheet" href="css/magnific-popup.css">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/main.css">
    <style>
        #criar-conta {
            border: 1px solid;
            color: #f09359 !important;
        }
        #bandeira {
            margin-top: 15px;
        }
        .main-text {
            font-size: 56px !important;
        }
        .hello-user {
            padding-left: 15px; 
        }
    </style>
</head>

<body>
    <div class="main-wrapper-first">
        <header>
            <div class="container">
                <div class="header-wrap">
                    <div class="header-top d-flex justify-content-between align-items-center">
                        <div class="logo"></div>
                        <div class="main-menubar d-flex align-items-center">
                            <nav class="hide">
                                <?php 
                                    if(!isset($_SESSION["user"])){
                                ?>
                                <a href="index.php">Entrar</a>
                                <a href="criar-conta.php">Criar Conta</a>
                                <?php 
                                    } else{
                                ?>
                                <a href="times.php">Times</a>
                                <a href="classificacao.php">Classificação</a>
                                <a href="regras.php">Sobre</a>
                                <a href="sair.php">Sair</a>
                                <?php } ?>
                            </nav>
                            <div class="menu-bar"><span class="lnr lnr-menu"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="banner-area">
            <div class="container">
                <div class="row justify-content-center generic-height align-items-center">
                    <div class="col-lg-8">
                        <div class="banner-content text-center">
                            <span class="text-white top text-uppercase">Genciador</span>
                            <h1 class="text-white text-uppercase main-text">Basquete</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>