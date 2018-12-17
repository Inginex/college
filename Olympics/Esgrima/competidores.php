<?php
    include_once "header.php";
    if(!isset($_SESSION["user"])){
        header("Location: index.php");
    }
    if (isset($_POST["cadastrar"])){
        $error = "";
        $nome = $_POST["nome"];
        $sobrenome = $_POST["sobrenome"];
        $pais = $_POST["pais"];
        $idade = $_POST["idade"];
        $sexo = $_POST["sexo"];
    
        // cria query de inserção
        $sql = "INSERT INTO competidores (nome, sobrenome, pais, idade, sexo) VALUES ('$nome', '$sobrenome', '$pais', '$idade', '$sexo')";   
        $cadastro = $conn->query($sql);
        if ($cadastro) {
            $error = "Atleta cadastrado com sucesso!";
        } else {
            $error = "Error: ".$conn->error;
        } 
    }

    if (isset($_POST["listar"])){
        // Pesquisa personalizada
        if(isset($_POST["id"]) && (!empty($_POST["id"]))){
            $id = $_POST["id"];
            $sql = "SELECT * FROM competidores WHERE id = $id ORDER BY sexo ASC";  
        }
        if(isset($_POST["nome"]) && (!empty($_POST["nome"]))){
            $nome = $_POST["nome"];
            $sql = "SELECT * FROM competidores WHERE nome LIKE '%$nome%' ORDER BY sexo ASC";        
        }
        if(empty($_POST["id"]) && empty($_POST["nome"])){
            $sql = "SELECT * FROM competidores ORDER BY sexo ASC"; 
        }
        // Verifica se query existe
        if (!empty($sql)) {
            $result = $conn->query($sql);
        }
    }

    if (isset($_POST["limpar"])){
        // Pesquisa personalizada
        $id = $_GET["limpar"];
        $sql = "DELETE FROM classificacao WHERE id_atleta = $id";

        if($conn->query($sql)){
            $error = "Pontos resetados com sucesso!";
        } else {
            $error = "Error: ".$conn->error;
        }
    }

    if (isset($_POST["pontuar"])){
        $pError = "";
        $pontuacao = $_POST["pontuacao"];
        $fase = $_POST["fase"];
        $idAtleta = $_POST["id"];

        if(!is_numeric($pontuacao)){
            $pError = "Pontuação tem que ser numerico!";
        }
        if($pontuacao < 0 || $pontuacao > 10) {
            $pError = "Pontuação tem que ser de 0 ate 10!";
        }
        if(!is_numeric($fase)){
            $pError = "Fase/Etapa tem que ser numerico de 1 a 5!";
        }
        if($fase < 1 || $fase > 6) {
            $pError = "Pontuação tem que ser maior ou igual a 1 e menor que 6!";
        }
        
        if (empty($pError)){
            $sql = "INSERT INTO classificacao (pontuacao, fase, id_atleta, modalidade) VALUES ('$pontuacao', '$fase', '$idAtleta', 'Esgrima')";
            // insere dados no banco de dados
            if($conn->query($sql)) {
                $pError = "Pontuação Adicionada!";
            } else {
                $pError = "Error: ".$conn->error;
            } 
        }
    }
    if(isset($_GET["excluir"])){
        $id = $_GET["excluir"];
        $sql = "DELETE FROM competidores WHERE id = $id";
    
        if($conn->query($sql)){
            $error = "Excluido com sucesso!";
        } else {
            $error = "Error: ".$conn->error;
        }
    
    }
?>
<!-- Section -->
<section id="first">
			<header>
				<h2>Cadastrar Competidores</h2>
			</header>
			<div class="content">
                <?php 
                    if(isset($error)){
                        echo "<p class='msg-error'>$error</p>";
                    }
			    ?>
                <h2>Cadastrar</h2>
            <form method="post" action="competidores.php#first">
        <div class="fields">
            <div class="field full">
                <label for="nome">Nome</label>
                <input type="text" name="nome" id="nome" value="" placeholder="Nome do Atleta" required/>
            </div>
            <div class="field full">
                <label for="sobrenome">Sobrenome</label>
                <input type="text" name="sobrenome" id="nome" value="" placeholder="Sobrenome" required/>
			</div>
            <div class="field half">
                <label for="pais">Pais</label>
                <input type="text" name="pais" id="nome" value="" placeholder="Pais" required/>
			</div>
			<div class="field half">
                <label for="Idade">Idade</label>
                <input type="text" name="idade" id="nome" value="" placeholder="01/01/0001" onkeyup="
                var v = this.value;
                if (v.match(/^\d{2}$/) !== null) {
                    this.value = v + '/';
                } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
                    this.value = v + '/';
                }"
                maxlength="10" required/>
			</div>
            <div class="field">
                <label for="sexo">Sexo</label>
                <select name="sexo" id="sexo">
                    <option value="m">Masculino</option>
                    <option value="f">Feminino</option>
                </select>
            </div>
        </div>
        <ul class="actions">
			<li><input type="submit" name="cadastrar" value="Cadastrar" class="primary" /></li>
			<li><input type="reset" value="Limpar" /></li>
        </ul>
    </form>
			</div>
</section>

        <section id="listar">
			<header>
				<h2>Lista Competidores</h2>
			</header>
			<div class="content">
                <h2>Listar</h2>
                <form method="post" action="competidores.php#listar">
                    <div class="fields">
                        <div class="field half">
                            <label for="id">ID</label>
                            <input type="text" name="id" id="id" value="" placeholder="ID do Atleta" />
                        </div>
                        <div class="field half">
                            <label for="nome">Nome</label>
                            <input type="text" name="nome" id="nome" value="" placeholder="Nome do Atleta"/>
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" name="listar" value="Listar" class="primary" /></li>
                        <li><input type="reset" value="Limpar" /></li>
                    </ul>
                </form>
                <?php if(isset($result)){ ?>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Data Nascimento</th>
                                <th>País</th>
                                <th>Sexo</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php
                            if($result->num_rows > 0) {
                                while($atleta = $result->fetch_assoc()){
                                    echo "<tr>
                                            <td>".$atleta['id']."</td>
                                            <td>".$atleta['nome']."</td>
                                            <td>".$atleta['sobrenome']."</td>
                                            <td>".$atleta['idade']."</td>
                                            <td>".$atleta['pais']."</td>
                                            <td>".$atleta['sexo']."</td>
                                            <td><a href='competidores.php?limpar=".$atleta['id']."'>Limpar Pontos</a> | <a href='competidores.php?excluir=".$atleta['id']."#first'>Excluir</a></td>
                                        </tr>";
                                }
                            }
                        ?>
                        </tbody>
                    </table>
                </div>
                <?php } ?>
		    </div>
    </section>

<section id="pontos">
			<header>
				<h2>Pontuar Competidores</h2>
			</header>
			<div class="content">
                <?php 
                    if(isset($pError)){
                        echo "<p class='msg-error'>$pError</p>";
                    }
			    ?>
                <h2>Pontuação</h2>
            <form method="post" action="competidores.php#pontos">
        <div class="fields">
            <div class="field half">
                <label for="id">ID</label>
                <input type="text" name="id" id="id" value="" placeholder="ID do Atleta" required/>
            </div>
            <div class="field half">
                <label for="pontuacao">Pontuacao</label>
                <input type="text" name="pontuacao" id="pontuacao" value="" placeholder="pontuacao" required/>
			</div>
            <div class="field">
                <label for="fase">Fase</label>
                <select name="fase" id="fase">
                    <option value="1">Eliminatorias</option>
                    <option value="2">Semi Final</option>
                    <option value="3">Final</option>
                </select>
            </div>
        </div>
        <ul class="actions">
			<li><input type="submit" name="pontuar" value="Adicionar Pontos" class="primary" /></li>
			<li><input type="reset" value="Limpar" /></li>
        </ul>
    </form>
			</div>
</section>
        
<?php include_once "footer.php"; ?>