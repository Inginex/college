<?php 
include_once "components/header.php"; 

if(isset($_POST["submit"])){
    $nome = $_POST["nome"];
    $usuario = $_POST["usuario"];
    $senha = $_POST["senha"];
    $senha2 = $_POST["senha2"];

    if (strlen($usuario) <=  3) {
        $mensagem = "Usuario muito curto.";
    }
    if (strlen($senha) <=  4) {
        $mensagem = "Senha invalida.";
    }
    if ($senha != $senha2) {
        $mensagem = "Senha nao coincidem.";
    }

    if (!isset($mensagem)){
        $result = $conn->query("SELECT * FROM administradores WHERE email = '$email' LIMIT 1");
        if($result->num_rows == 1) {
            $mensagem = "Email ja está em uso";   
        } else {
            $sql = "INSERT INTO administradores (nome, usuario, senha) VALUES ('$nome', '$usuario', '$senha')";   
            if ($conn->query($sql)) {
                header("Location: index.php");    
            } else {
                $mensagem = "Ops, ocorreu um erro. Tente novamente mais tarde!";
            }
        }  
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
                    <h2 class="mb-30">Crie sua conta</h2>
                    <form action="criar-conta.php" method="POST">
                        <div class="mt-10">
                            <input type="text" name="nome" placeholder="Seu Nome" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Seu Nome'" required class="single-input">
                        </div>
                        <div class="mt-10">
                            <input type="text" name="usuario" placeholder="Usuario" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Usuario'" required class="single-input">
                        </div>
                        <div class="mt-10">
                            <input type="password" name="senha" placeholder="Senha" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Senha'" required class="single-input">
                        </div>
                        <div class="mt-10">
                            <input type="password" name="senha2" placeholder="Confirmar senhar" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Confirmar senhar'" required class="single-input">
                        </div>
                        <div class="button-group-area">
                            <button type="submit" name="submit" class="genric-btn success">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    <?php include_once "components/footer.php"; ?>