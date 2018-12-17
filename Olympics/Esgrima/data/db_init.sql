DROP DATABASE IF EXISTS esgrima;
CREATE DATABASE esgrima character set UTF8 collate utf8_bin;

use esgrima;

DROP TABLE IF EXISTS competidores;
CREATE TABLE competidores (
	id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	nome VARCHAR(30) NOT NULL,
	sobrenome VARCHAR(30) NOT NULL,
	pais VARCHAR(50) NOT NULL,
	idade VARCHAR(20),
	sexo CHAR(2)
);

INSERT INTO `competidores` (`id`, `nome`, `sobrenome`, `pais`, `idade`, `sexo`) VALUES
(7, 'Competidora', 'Azul', 'Alemanha', '25/10/1992', 'f'),
(8, 'Competidora', 'Vermelha', 'Alemanha', '25/10/1992', 'f'),
(9, 'Competidora', 'Verde', 'França', '25/10/1992', 'f'),
(10, 'Competidora', 'Roxa', 'Portugal', '25/10/1992', 'f'),
(11, 'Competidora', 'Rosa', 'Japao', '25/10/1992', 'f'),
(12, 'Competidor', 'Amarelo', 'Brasil', '25/10/1992', 'm'),
(13, 'Competidor', 'Verde', 'Alemanha', '25/10/1992', 'm'),
(14, 'Competidor', 'Azul', 'França', '25/10/1992', 'm'),
(15, 'Competidor', 'Marrom', 'Inglaterra', '25/10/1992', 'm'),
(16, 'Competidor', 'Vermelho', 'Japao', '25/10/1992', 'm'),
(17, 'Competidor', 'Preto', 'Portugal', '25/10/1992', 'm'),
(18, 'Competidor', 'Dourado', 'Inglaterra', '25/10/1992', 'm'),
(19, 'Competidor', 'Branco', 'França', '25/10/1992', 'm'),
(20, 'Competidora', 'Branca', 'Brasil', '25/10/1992', 'f'),
(21, 'Competidora', 'Marrom', 'Japao', '25/10/1992', 'f'),
(22, 'Competidora', 'Dourada', 'Inglaterra', '25/10/1992', 'f'),
(23, 'Competidora', 'Dourada', 'Inglaterra', '25/10/1992', 'f'),
(24, 'Competidor', 'Cinza', 'Bulgaria', '25/10/1992', 'm'),
(25, 'Competidor', 'Prata', 'Bulgaria', '20/10/1995', 'm');

DROP TABLE IF EXISTS classificacao;
CREATE TABLE classificacao (
	id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	pontuacao INT(3) NOT NULL,
	fase VARCHAR(30) NOT NULL,
	id_atleta VARCHAR(50) NOT NULL,
	modalidade VARCHAR(30)
);

INSERT INTO `classificacao` (`id`, `pontuacao`, `fase`, `id_atleta`, `modalidade`) VALUES
(1, 10, '1', '2', 'Esgrima'),
(2, 10, '1', '2', 'Esgrima'),
(3, 10, '1', '8', 'Esgrima'),
(4, 9, '1', '9', 'Esgrima'),
(5, 9, '1', '10', 'Esgrima'),
(6, 8, '1', '11', 'Esgrima');


DROP TABLE IF EXISTS cadastros;
CREATE TABLE cadastros (
	id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
	nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL,
	senha VARCHAR(50) NOT NULL
);