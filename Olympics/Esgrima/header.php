<?php require "conexaoDB.php"; ?>
<html>
<head>
	<title>Projeto Esgrima</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<link rel="stylesheet" href="assets/css/main.css" />
	<link rel="shortcut icon" type="image/png" href="images/icon2.png"/>
	<style>
		.msg-error {
			border: 1px solid #4db79f;
			border-radius: 15px;
			padding: 10px;
			text-align: center;
		}
	</style>
</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Intro -->
		<section class="intro">
			<header>
				<h1>Esgrima</h1>
				<p>A esgrima é um esporte de combate em que os competidores (esgrimistas) utilizam armas brancas (florete, sabre e
					espada) para atacar e defender.</a>
                    <ul class="action" style="list-style:none;">
						<li><a href="index.php">Inicio</a></li>
						<?php if(!isset($_SESSION["user"])){ ?>
                        <li><a href="entrar.php">Entrar</a></li>
						<li><a href="cadastrar.php">Cadastrar</a></li>
						<?php } else { ?>
						<li><a href="competidores.php">Competidores</a></li>
						<li><a href="resultado.php">Resultado</a></li>
						<li><a href="sair.php">Sair</a></li>
						<?php } ?>
					</ul>
					<ul class="actions">
						<li><a href="#first" class="arrow scrolly"><span class="label">Next</span></a></li>
					</ul>
			</header>
			<div class="content">
				<span class="image fill" data-position="center"><img src="images/pic1.jpg" alt="" /></span>
			</div>
		</section>