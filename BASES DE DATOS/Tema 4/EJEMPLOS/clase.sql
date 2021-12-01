-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2021 a las 18:53:13
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `educa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clase`
--

CREATE TABLE `clase` (
  `Cno` char(3) NOT NULL,
  `Sec` char(2) NOT NULL,
  `Cinstrfno` char(2) NOT NULL,
  `Cdia` char(2) NOT NULL,
  `Chora` char(14) NOT NULL,
  `Cedif` char(2) NOT NULL,
  `Cdespacho` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `clase`
--

INSERT INTO `clase` (`Cno`, `Sec`, `Cinstrfno`, `Cdia`, `Chora`, `Cedif`, `Cdespacho`) VALUES
('c11', '01', '08', 'LU', '08:00-09:00 AM', 'SC', 305),
('c11', '02', '08', 'MA', '08:00-09:00 AM', 'SC', 306),
('c33', '01', '80', 'MI', '09:00-10:00 AM', 'SC', 305),
('c55', '01', '85', 'JU', '11:00-12:00 AM', 'HU', 306),
('P11', '01', '06', 'JU', '09:00-10:00 AM', 'HU', 102),
('P33', '01', '06', 'VI', '11:00-12:00 AM', 'HU', 201),
('T11', '01', '10', 'LU', '10:00-11:00 AM', 'HU', 101),
('T11', '02', '65', 'LU', '10:00-11:00 AM', 'HU', 102),
('T33', '01', '65', 'MI', '11:00-12:00 AM', 'HU', 101);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clase`
--
ALTER TABLE `clase`
  ADD PRIMARY KEY (`Cno`,`Sec`),
  ADD KEY `Cinstrfno` (`Cinstrfno`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clase`
--
ALTER TABLE `clase`
  ADD CONSTRAINT `clase_ibfk_1` FOREIGN KEY (`Cinstrfno`) REFERENCES `claustro` (`Fno`),
  ADD CONSTRAINT `clase_ibfk_2` FOREIGN KEY (`Cno`) REFERENCES `curso` (`Cno`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
