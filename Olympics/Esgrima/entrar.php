<?php 
include_once "header.php";

if(isset($_POST["submit"])){
	$error = "";
	$email = $_POST["email"] ? $_POST["email"] : "";
	$password = $_POST["password"];

	if (empty(trim($email)) || strlen($email) <=  5) {
        $error = "Email invalido!";
    }
    if (empty(trim($password)) || strlen($password) <=  4) {
        $error = "Senha muito curta ou invalida!";
    }
	if (empty($error)){
		$result = $conn->query("SELECT * FROM cadastros WHERE email = '$email'");
		if($result->num_rows == 1) {
			$user = $result->fetch_assoc(); 
			if($password != $user["senha"]){
				$error = "Senha incorreta";        
			}      
		} else {
			$error = "Email nao existe!";   
		}  
		if (empty($error)){
			$_SESSION["user"] = $email;
			header("Location: competidores.php");
		}
	}
}
?>
		<!-- Section -->
		<section id="first">
			<header>
				<h2>Entrar</h2>
			</header>
			<div class="content">
			<?php 
				if(isset($error)){
					echo "<p class='msg-error'>$error</p>";
				}
			?>
    <form method="post" action="entrar.php">
        <div class="fields">
            <div class="field full">
                <label for="demo-email">Email</label>
                <input type="email" name="email" id="demo-email" placeholder="email@email.com" required/>
			</div>
			<div class="field full">
                <label for="demo-password">Senha</label>
                <input type="password" name="password" id="demo-password"/>
            </div>
        </div>
        <ul class="actions">
			<li><input type="submit" name="submit" value="Entrar" class="primary" /></li>
			<a href="cadastrar.php"><li><input type="button" value="Criar Conta" class="primary" /></li></a>
        </ul>
    </form>
</div>
</section>
        
<?php include_once "footer.php"; ?>