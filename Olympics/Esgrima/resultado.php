<?php
    include_once "header.php";
    if(!isset($_SESSION["user"])){
        header("Location: index.php");
    }
    $atletasF1 = [];
    $sql = "SELECT competidores.nome, competidores.sobrenome, competidores.pais, competidores.idade, competidores.sexo, SUM(classificacao.pontuacao) as pontuacao FROM competidores JOIN classificacao ON classificacao.id_atleta = competidores.id WHERE classificacao.fase = 1 GROUP BY competidores.sobrenome ORDER BY pontuacao DESC";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        while($atleta = $result->fetch_assoc()){
            array_push($atletasF1, $atleta);
        }
    }
    $atletasF2 = [];
    $sql = "SELECT competidores.nome, competidores.sobrenome, competidores.pais, competidores.idade, competidores.sexo, SUM(classificacao.pontuacao) as pontuacao FROM competidores JOIN classificacao ON classificacao.id_atleta = competidores.id WHERE classificacao.fase = 2 GROUP BY competidores.sobrenome ORDER BY pontuacao DESC";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        while($atleta = $result->fetch_assoc()){
            array_push($atletasF2, $atleta);
        }
    }
    $atletasF3 = [];
    $sql = "SELECT competidores.nome, competidores.sobrenome, competidores.pais, competidores.idade, competidores.sexo, SUM(classificacao.pontuacao) as pontuacao FROM competidores JOIN classificacao ON classificacao.id_atleta = competidores.id WHERE classificacao.fase = 3 GROUP BY competidores.sobrenome ORDER BY pontuacao DESC";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        while($atleta = $result->fetch_assoc()){
            array_push($atletasF3, $atleta);
        }
    }

    $atletasF4m = [];
    $sql = "SELECT competidores.nome, competidores.sobrenome, competidores.pais, competidores.idade, competidores.sexo, SUM(classificacao.pontuacao) as pontuacao FROM competidores JOIN classificacao ON classificacao.id_atleta = competidores.id WHERE competidores.sexo = 'm' GROUP BY competidores.sobrenome ORDER BY pontuacao DESC LIMIT 3";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        while($atleta = $result->fetch_assoc()){
            array_push($atletasF4m, $atleta);
        }
    }
    $atletasF4f = [];
    $sql = "SELECT competidores.nome, competidores.sobrenome, competidores.pais, competidores.idade, competidores.sexo, SUM(classificacao.pontuacao) as pontuacao FROM competidores JOIN classificacao ON classificacao.id_atleta = competidores.id WHERE competidores.sexo = 'f' GROUP BY competidores.sobrenome ORDER BY pontuacao DESC LIMIT 3";
    $result = $conn->query($sql);
    if($result->num_rows > 0) {
        while($atleta = $result->fetch_assoc()){
            array_push($atletasF4f, $atleta);
        }
    }
?>

<section id="ganhadore">
	<header>
		<h2>Premiação</h2>
	</header>
	<div class="content">
    <h2>Masculino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF4m as $atleta) {
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
<h2>Feminino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF4f as $atleta) {
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
	</div>
</section>

<section id="first">
	<header>
		<h2>Final</h2>
	</header>
	<div class="content">
    <h2>Masculino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF1 as $atleta) {
                    if($atleta["sexo"] == "f" || $i == 3){continue;}
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
<h2>Feminino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF1 as $atleta) {
                    if($atleta["sexo"] == "m" || $i == 3){continue;}
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
	</div>
</section>

<section id="second">
	<header>
		<h2>Semi Final</h2>
	</header>
	<div class="content">
    <h2>Masculino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF2 as $atleta) {
                    if($atleta["sexo"] == "f" || $i == 5){continue;}
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
<h2>Feminino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF2 as $atleta) {
                    if($atleta["sexo"] == "m" || $i == 5){continue;}
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
	</div>
</section>

<section id="third">
	<header>
		<h2>Eliminatorias</h2>
	</header>
	<div class="content">
    <h2>Masculino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF3 as $atleta) {
                    if($atleta["sexo"] == "f"){continue;}
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
<h2>Feminino</h2>
    <div class="table-wrapper">
    <table>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Pais</th>
                <th>Data Nascimento</th>
                <th>Pontos</th>
            </tr>
        </thead>
        <tbody>
            <?php
                $i=1;
                foreach($atletasF3 as $atleta) {
                    if($atleta["sexo"] == "m"){continue;}
                    echo "<tr>
                        <td>".$i."</td>
                        <td>".$atleta['nome']."</td>
                        <td>".$atleta['sobrenome']."</td>
                        <td>".$atleta['pais']."</td>
                        <td>".$atleta['idade']."</td>
                        <td>".$atleta['pontuacao']."</td>
                    </tr>";
                    $i++;
                }
            ?>
        </tbody>
    </table>
</div>
	</div>
</section>

<?php include_once "footer.php"; ?>