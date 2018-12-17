<?php 
include_once "components/header.php"; 
if(!isset($_SESSION["user"])){
    header("Location: index.php");
}

?>
<section class="sample-text-area">
    <div class="container">
        <div class="section-top-border">
            <div class="row">
                <div class="col-lg-8">
                    <h3 class="mb-30">Rodadas</h3>
                    <form action="classificacao.php" method="POST">
                        <div class="single-element-widget mt-30">
                            <div class="default-select">
                                <select name="rodada">
                                    <option value="1">Eliminatórias</option>
                                    <option value="2">Oitavas de Final</option>
                                    <option value="3">Quartas de Final</option>
                                    <option value="4">Final</option>
                                </select>
                            </div>
                        </div>
                        <div class="button-group-area">
                            <button type="submit" name="lista" class="genric-btn success">Listar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <?php if(isset($_POST["lista"])) { ?>
        <div class="section-top-border">
            <h2 class="mb-30">Classificação <?php if($_POST["rodada"] == 4){echo "- Medalistas";} ?></h2>
            <h4>Masculino</h4>
            <div class="progress-table-wrap">
                <div class="progress-table">
                    <div class="table-head">
                        <div class="serial">Pos.</div>
                        <div class="country">País</div>
                        <div class="visit">Tecnico</div>
                        <div class="visit">Pontos</div>
                        <div class="visit">Categoria</div>
                    </div>
                    <?php 
                        $i=1;
                        $rodada = $_POST["rodada"];
                        switch($rodada){
                            case "1":
                                $qt = 12;
                                break;
                            case "2":
                                $qt = 8;
                                break;
                            case "3":
                                $qt = 4;
                                break;
                            case "4":
                                $qt = 3;
                                break;
                            default:
                                $qt = 12;
                        }
                        
                        if($rodada == 4) {
                            $sql = "SELECT times.nome, times.tecnico, times.bandeira, classificacao.categoria, SUM(classificacao.pontos) as pontos FROM times JOIN classificacao ON classificacao.id_time = times.id WHERE classificacao.categoria = 'm' GROUP BY times.nome ORDER BY pontos DESC LIMIT $qt";
                        } else {
                            $sql = "SELECT times.nome, times.tecnico, times.bandeira, classificacao.categoria, SUM(classificacao.pontos) as pontos FROM times JOIN classificacao ON classificacao.id_time = times.id WHERE classificacao.rodada = '$rodada' AND classificacao.categoria = 'm' GROUP BY times.nome ORDER BY pontos DESC LIMIT $qt";
                        }
                        $result = $conn->query($sql);
                            if($result->num_rows >= 1) {
                                while($time = $result->fetch_assoc()){
                        ?>
                    <div class="table-row">
                        <div class="serial">
                            <?php echo $i++; ?>
                        </div>
                        <div class="country"> <img src="img/<?php echo $time['bandeira']; ?>" alt="flag" width="50" height="30">
                            <?php echo $time['nome']; ?>
                        </div>
                        <div class="visit">
                            <?php echo $time['tecnico']; ?>
                        </div>
                        <div class="visit">
                            <?php echo $time['pontos']; ?>
                        </div>
                        <div class="visit">
                            <?php echo $time['categoria']; ?>
                        </div>
                    </div>
                    <?php }} ?>
                </div>
            </div>
            <h4>Feminino</h4>
            <div class="progress-table-wrap">
                <div class="progress-table">
                    <div class="table-head">
                        <div class="serial">Pos.</div>
                        <div class="country">País</div>
                        <div class="visit">Tecnico</div>
                        <div class="visit">Pontos</div>
                        <div class="visit">Categoria</div>
                    </div>
                    <?php 
                            $i=1;
                            $rodada = $_POST["rodada"];
                            switch($rodada){
                                case "1":
                                    $qt = 12;
                                    break;
                                case "2":
                                    $qt = 8;
                                    break;
                                case "3":
                                    $qt = 4;
                                    break;
                                case "4":
                                    $qt = 3;
                                    break;
                                default:
                                    $qt = 12;
                            }
                            
                            if($rodada == 4){
                                $sql = "SELECT times.nome, times.tecnico, times.bandeira, classificacao.categoria, SUM(classificacao.pontos) as pontos FROM times JOIN classificacao ON classificacao.id_time = times.id WHERE classificacao.categoria = 'f' GROUP BY times.nome ORDER BY pontos DESC LIMIT $qt";
                            } else {
                                $sql = "SELECT times.nome, times.tecnico, times.bandeira, classificacao.categoria, SUM(classificacao.pontos) as pontos FROM times JOIN classificacao ON classificacao.id_time = times.id WHERE classificacao.rodada = '$rodada' AND classificacao.categoria = 'f' GROUP BY times.nome ORDER BY pontos DESC LIMIT $qt";
                            }
                            $result = $conn->query($sql);
                                if($result->num_rows >= 1) {
                                    while($time = $result->fetch_assoc()){
                            ?>
                    <div class="table-row">
                        <div class="serial">
                            <?php echo $i++; ?>
                        </div>
                        <div class="country"> <img src="img/<?php echo $time['bandeira']; ?>" alt="flag" width="50" height="30">
                            <?php echo $time['nome']; ?>
                        </div>
                        <div class="visit">
                            <?php echo $time['tecnico']; ?>
                        </div>
                        <div class="visit">
                            <?php echo $time['pontos']; ?>
                        </div>
                        <div class="visit">
                            <?php echo $time['categoria']; ?>
                        </div>
                    </div>
                    <?php }} ?>
                </div>
            </div>
        </div>
        <?php } ?>
    </div>
    </div>
</section>
<?php include_once "components/footer.php"; ?>