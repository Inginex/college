-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2018 at 04:19 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basquete`
--
CREATE DATABASE basquete character set UTF8 collate utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `administradores`
--

CREATE TABLE `administradores` (
  `id` int(11) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  `senha` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `classificacao`
--

CREATE TABLE `classificacao` (
  `id` int(11) NOT NULL,
  `pontos` int(11) NOT NULL,
  `id_time` int(11) NOT NULL,
  `categoria` char(1) NOT NULL,
  `rodada` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `times`
--

CREATE TABLE `times` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `tecnico` varchar(50) NOT NULL,
  `bandeira` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `times`
--

INSERT INTO `times` (`id`, `nome`, `tecnico`, `bandeira`) VALUES
(1, 'Canada', 'Canadense', 'f1.jpg'),
(2, 'Inglaterra', 'Ingles', 'f3.jpg'),
(3, 'Estados Unidos', 'Chuck Norris', 'f2.jpg'),
(4, 'Alemanha', 'Fuhrer', 'f4.jpg'),
(5, 'Nova Zelandia', 'Neozelandês', 'f5.jpg'),
(6, 'China', 'Jackie Chan', 'f6.jpg'),
(7, 'Bangladeshi', 'Tony Jaa', 'f7.jpg'),
(8, 'Belgica', 'Jean-Claud Van Damme', 'f8.jpg'),
(9, 'Brasil', 'Bolsonaro', 'f9.png'),
(10, 'China Comunista', 'Jet Lee', 'f10.png'),
(11, 'Egito', 'Farao', 'f11.png'),
(12, 'França', 'Jean Reno', 'f12.png'),
(13, 'Japao', 'Hideo Kojima', 'f13.png'),
(14, 'Uruguai', 'Loco Abreu', 'f14.png'),
(15, 'Chile', 'Chileno', 'f15.png'),
(16, 'Peru', 'Peruano', 'f00.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classificacao`
--
ALTER TABLE `classificacao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `times`
--
ALTER TABLE `times`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `administradores`
--
ALTER TABLE `administradores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `classificacao`
--
ALTER TABLE `classificacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=327;

--
-- AUTO_INCREMENT for table `times`
--
ALTER TABLE `times`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
