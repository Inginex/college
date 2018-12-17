<?php 
require 'db_con.php';
$result = $conn->query("SELECT * FROM times");
if($result->num_rows >= 1) {
    while($time = $result->fetch_assoc()){
        for($i=1; $i<=5; $i++) {
            $pontos = rand(1,100);
            $IDtime = $time["id"];
            for($j=1; $j<=2; $j++){
                $categoria = $j == 1 ? 'm':'f'; 
                $sql = "INSERT INTO classificacao (pontos, id_time, categoria, rodada) VALUES ('$pontos', '$IDtime', '$categoria', '$i')";
                if($conn->query($sql)) {
                    echo "Pontuação Adicionada para time ".$time['nome']." na categoria ".$categoria.".<br>";
                } else {
                    echo "Error: ".$conn->error;
                } 
            }
        }
    }
}