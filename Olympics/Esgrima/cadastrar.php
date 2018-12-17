<?php 
include_once "header.php";
if(isset($_POST["submit"])){
    $error = "";
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $password2 = $_POST["password2"];

    //# ETAPA 2
    if (empty(trim($email)) || strlen($email) <=  5) {
        $error = "Email muito curto ou invalido";
    }
    if (empty(trim($password)) || strlen($password) <=  4) {
        $error = "Senha muito curta ou invalida";
    }
    if ($password != $password2) {
        $error = "Senha não são iguais";
    }

    if (empty($error)){
        $result = $conn->query("SELECT * FROM cadastros WHERE email = '$email' LIMIT 1");
        if($result->num_rows == 1) {
            $error = "Email ja está em uso";   
        } else {
            $sql = "INSERT INTO cadastros (nome, sobrenome, email, senha) VALUES ('$nome', '$sobrenome', '$email', '$password')";   
            if ($conn->query($sql)) {
                header("Location: entrar.php");    
            } else {
                $error = "Ops, ocorreu um erro. Tente novamente mais tarde!";
            }
        }  
    }
}
?>

<!-- Section -->
		<section id="first">
			<header>
				<h2>Cadastrar</h2>
			</header>
			<div class="content">
            <?php 
				if(isset($error)){
					echo "<p class='msg-error'>$error</p>";
				}
			?>
    <form method="post" action="cadastrar.php">
        <div class="fields">
            <div class="field half">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" value="" placeholder="Seu Nome" required/>
            </div>
            <div class="field half">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" name="sobrenome" id="nome" value="" placeholder="Sobrenome" required/>
			</div>
            <div class="field full">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" value="" placeholder="email@email.com" required/>
			</div>
			<div class="field full">
                <label for="password">Senha</label>
                <input type="password" name="password" id="password" value="" />
            </div>
            <div class="field full">
                <label for="password2">Confirmar Senha</label>
                <input type="password" name="password2" id="password2" value="" />
            </div>
        </div>
        <ul class="actions">
			<li><input type="submit" name="submit" value="Cadastrar" class="primary" /></li>
			<li><input type="reset" value="Limpar" /></li>
        </ul>
    </form>
</div>
</section>
        
<?php include_once "footer.php"; ?>