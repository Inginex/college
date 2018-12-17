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
                <div class="col-lg-8 col-md-8">
                    <h3 class="text-heading" style="text-align: center;">Regras</h3>
					<p class="sample-text">
                    <p style="text-align: justify;">O basquete está no calendário dos Jogos Olímpicos desde a edição de 1936 (disputada em Berlim, na Alemanha). Inicialmente, apenas os homens competiam. O basquete feminino entrou nas Olimpíadas em 1976, em Montreal, no Canadá. Os Estados Unidos são os maiores vencedores tanto no masculino quanto no feminino. Na história do basquete olímpico, o Brasil ganhou cinco medalhas: uma prata no feminino em 1996 e quatro bronzes na modalidade masculina.</p>

<p style="text-align: justify;">Por ser um esporte coletivo, seis medalhas estão em jogo no basquete (três no masculino e três no feminino). Neste ano, as competições do basquete começam no dia 6 e vão até o dia 21 de agosto. Nas Olimpíadas, 12 equipes masculinas e 12 equipes femininas participam da competição. No Rio 2016, as partidas dos homens serão na Arena Carioca 1, na Barra da Tijuca, enquanto as mulheres jogarão na Arena da Juventude, em Deodoro.</p>

<p style="text-align: justify;">As regras do basquete olímpico são as seguintes: dois times de cinco jogadores disputam as partidas. As substituições são permitidas a todo momento. Ao todo, sete jogadores podem ficar no banco. A pontuação é contada por cestas. Lances livres, cobrados após infrações, valem um ponto. Cestas de dentro da área (que mede 6m75), valem dois pontos. Cestas de fora da área valem três pontos. A equipe que ao final dos quatro tempos de dez minutos fizer mais pontos será vencedora. A quadra de basquete mede 25x15m.</p>

<p style="text-align: justify;">A fórmula da competição do torneio olímpico será idêntica na modalidade masculina e feminina. Doze times estão divididos em dois grupos de seis. Os quatro melhores de cada grupo vão para o mata-mata. As quartas de final são definidas por cruzamento olímpico (o primeiro de um grupo joga contra o quarto de outro. Segundo e terceiro colocados se enfrentam). Os vencedores disputam as semifinais. Os vencedores das semifinais disputam a medalha de ouro. Os perdedores disputam o bronze.</p>

<p style="text-align: justify;">O basquete passou a valer medalha nos Jogos de Berlim 1936 e de lá pra cá, os Estados Unidos somam 21 ouros, sendo 14 no masculino e sete no feminino. O Brasil foi vice-campeão entre as mulheres em Atlanta 1996 e quatro vezes medalha de bronze.</p>

<p style="text-align: justify;">O basquete é gerido pela Fiba (Federação Internacional de Basquete). No Brasil, o responsável é CBB (Confederação Brasileira de Basquete).</p>
					</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    <?php include_once "components/footer.php"; ?>