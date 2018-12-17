<?php 
include_once "components/header.php"; 

if(isset($_POST["submit"])) {
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];

    $result = $conn->query("SELECT * FROM administradores WHERE usuario = '$usuario'");
    if($result->num_rows == 1) {
        $user = $result->fetch_assoc(); 
        if($senha != $user["senha"]){
            $mensagem = "Senha incorreta";        
        } else {
            $_SESSION["user"] = $user["nome"];
            header("Location: times.php");
        }      
    } else {
        $mensagem = "Usuario nao cadastrado!";   
    }  
}

?>
<section class="sample-text-area">
    <div class="container">
        <div class="section-top-border">
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <?php 
                        if(isset($mensagem)){
                            echo "<p class='genric-btn info-border radius'>$mensagem</p>";
                        }
                    ?>
                    <h2 class="mb-30">Entrar</h2>
                    <form action="index.php" method="POST">
                        <div class="mt-10">
                            <input type="text" name="usuario" placeholder="Usuario" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Usuario'" required class="single-input">
                        </div>
                        <div class="mt-10">
                            <input type="password" name="senha" placeholder="Senha" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Senha'" required class="single-input">
                        </div>
                        <div class="button-group-area">
                            <button type="submit" name="submit" class="genric-btn success">Entrar</button>
                            <a href="criar-conta.php" id="criar-conta" class="genric-btn default">Criar Conta</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    <?php include_once "components/footer.php"; ?>