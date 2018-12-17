<?php 
include_once "components/header.php"; 
if(!isset($_SESSION["user"])){
    header("Location: index.php");
}

if(isset($_POST["times"])) {
    $nome = $_POST["nome"];
    $tecnico = $_POST["tecnico"];
    $bandeira = $_POST["bandeira"];

    $sql = "INSERT INTO times (nome, tecnico, bandeira) VALUES ('$nome', '$tecnico', '$bandeira')";
    if($conn->query($sql)) {
        $mensagem = "Time cadastrado com sucesso!";
    } else {
        $mensagem = "Error: ".$conn->error;
    } 
}

if(isset($_POST["pontuar"])) {
    $pontos = $_POST["pontos"];
    $pais = $_POST["pais"];
    $categoria = $_POST["categoria"];
    $rodada = $_POST["rodada"];

    $sql = "INSERT INTO classificacao (pontos, id_time, categoria, rodada) VALUES ('$pontos', '$pais', '$categoria', '$rodada')";
    if($conn->query($sql)) {
        $mensagem = "Pontos adicionados com sucesso!";
    } else {
        $mensagem = "Error: ".$conn->error;
    } 
}
?>
<section class="sample-text-area">
<p class="hello-user">Logado como: <?php echo $_SESSION["user"]; ?></p>
<div class="white-bg">
    <div class="container">
        <div class="section-top-border">
            <div class="row">
            <div class="col-lg-8">
                <?php 
                    if(isset($mensagem)){
                        echo "<p class='genric-btn info-border radius'>$mensagem</p>";
                    }
                ?>
                <h3 class="mb-30">Cadastrar Time</h3>            
                <form action="times.php" method="POST">
                    <div class="mt-10">
                        <input type="text" name="nome" placeholder="País do Time" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'País do Time'" required class="single-input">
                    </div>
                    <div class="mt-10">
                        <input type="text" name="tecnico" placeholder="Tecnico do Time" onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Tecnico do Time'" required class="single-input">
                    </div>
                    <h4 id="bandeira">Bandeiras</h4>
                    <div class="input-group-icon mt-10">
                            <div class="icon"><i class="fa fa-globe" aria-hidden="true"></i></div>
                            <div class="form-select">
                                <select name="bandeira" id="bandeira">
                                    <option value="f00.png">Outros</option>
                                    <option value="f1.jpg">Canada</option>
                                    <option value="f2.jpg">Estados Unidos</option>
                                    <option value="f3.jpg">Inglaterra</option>
                                    <option value="f4.jpg">Alemanha</option>
                                    <option value="f5.jpg">Nova Zelandia</option>
                                    <option value="f6.jpg">China</option>
                                    <option value="f7.jpg">Bangladeshi</option>
                                    <option value="f8.jpg">Belgica</option>
                                    <option value="f9.png">Brasil</option>
                                    <option value="f10.png">China Comunista</option>
                                    <option value="f11.png">Egito</option>
                                    <option value="f12.png">França</option>
                                    <option value="f13.png">Japão</option>
                                    <option value="f14.png">Uruguai</option>
                                    <option value="f15.png">Chile</option>
                                </select>
                            </div>
                    </div>
                    <div class="button-group-area">
                        <button type="submit" name="times" class="genric-btn success">Cadastrar</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        <div class="section-top-border">
                <div class="row">
                <div class="col-lg-8">
                    <h3 class="mb-30">Adicionar Pontos</h3>
                    <form action="times.php" method="POST">
                        <div class="mt-10">
                            <input type="text" name="pontos" placeholder="Quantidade de Pontos" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Quantidade de Pontos'" required class="single-input">
                        </div>
                        <div class="single-element-widget mt-30">
                                <h4 class="mb-30">Categoria</h4>
                                <div class="default-select">
                                    <select name="categoria">
                                        <option value="m">Masculino</option>
                                        <option value="f">Feminino</option>
                                    </select>
                                </div>
                        </div>
                        <div class="single-element-widget mt-30">
                                <h4 class="mb-30">Rodadas</h4>
                                <div class="default-select">
                                    <select name="rodada">
                                        <option value="1">Eliminatórias</option>
                                        <option value="2">Oitavas de Final</option>
                                        <option value="3">Quartas de Final</option>
                                        <option value="5">Final</option>
                                    </select>
                                </div>
                            </div>
                        <h4 id="bandeira">Países</h4>
                        <div class="input-group-icon mt-10">
                                <div class="icon"><i class="fa fa-globe" aria-hidden="true"></i></div>
                                <div class="form-select">
                                    <select name="pais" id="pais">
                                        <?php 
                                            $result = $conn->query("SELECT * FROM times");
                                            if($result->num_rows >= 1) {
                                                while($time = $result->fetch_assoc()){
                                        ?>
                                        <option value="<?php echo $time['id']; ?>"><?php echo $time["nome"]; ?></option>
                                        <?php }} ?>
                                    </select>
                                </div>
                        </div>
                        <div class="button-group-area">
                            <button type="submit" name="pontuar" class="genric-btn success">Adicionar Pontos</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div class="section-top-border">
                    <div class="row">
                    <div class="col-lg-8">
                        <h3 class="mb-30">Países Cadastrados</h3>
                        <div class="progress-table-wrap">
                                <div class="progress-table">
                                    <div class="table-head">
                                        <div class="serial">ID</div>
                                        <div class="country">País</div>
                                        <div class="visit">Tecnico</div>
                                    </div>
                                    <?php 
                                        $result = $conn->query("SELECT * FROM times");
                                        if($result->num_rows >= 1) {
                                            while($time = $result->fetch_assoc()){
                                    ?>
                                    <div class="table-row">
                                        <div class="serial"><?php echo $time["id"]; ?></div>
                                        <div class="country"> <img src="img/<?php echo $time['bandeira']; ?>" alt="flag" width="50" height="30"><?php echo $time["nome"]; ?></div>
                                        <div class="visit"><?php echo $time["tecnico"]; ?></div>
                                    </div>
                                <?php }} ?>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</section>
<?php include_once "components/footer.php"; ?>