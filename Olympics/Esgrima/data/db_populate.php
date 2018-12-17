<?php
require "../conexaoDB.php";
$atletas = [];
$sql = "SELECT * FROM competidores";
$result = $conn->query($sql);
if($result->num_rows > 0) {
    while($atleta = $result->fetch_assoc()){
       array_push($atletas, $atleta);
    }
}

foreach($atletas as $atleta) {
    for($i=1; $i<=3; $i++) {
        $pontuacao = rand(1,10);
        $idAtleta = $atleta["id"];
        $sql = "INSERT INTO classificacao (pontuacao, fase, id_atleta, modalidade) VALUES ('$pontuacao', '$i', '$idAtleta', 'Esgrima')";
            // insere dados no banco de dados
        if($conn->query($sql)) {
            echo "Pontuação Adicionada para atleta ".$atleta["nome"]."<br>";
        } else {
            echo "Error: ".$conn->error;
        } 
    }
}