-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-05-2019 a las 14:15:56
-- Versión del servidor: 5.7.21
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_php`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

DROP TABLE IF EXISTS `eventos`;
CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `fechaInicio` date NOT NULL,
  `horaInicio` time DEFAULT NULL,
  `fechaFinalizacion` date DEFAULT NULL,
  `horaFinalizacion` time DEFAULT NULL,
  `diaCompleto` tinyint(1) NOT NULL,
  `nombreUsuario` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `fechaInicio`, `horaInicio`, `fechaFinalizacion`, `horaFinalizacion`, `diaCompleto`, `nombreUsuario`) VALUES
(1, 'Dia del Trabajador', '2019-05-01', NULL, NULL, NULL, 1, 'rodrigo'),
(2, 'Dia del Trabajador', '2019-05-01', NULL, NULL, NULL, 1, 'usuario1'),
(3, 'Dia del Trabajador', '2019-05-01', NULL, NULL, NULL, 1, 'usuario3'),
(5, 'Revolucion de Mayo', '2019-05-25', NULL, NULL, NULL, 1, 'rodrigo'),
(6, 'Revolucion de Mayo', '2019-05-25', NULL, NULL, NULL, 1, 'usuario1'),
(7, 'Revolucion de Mayo', '2019-05-25', NULL, NULL, NULL, 1, 'usuario3'),
(9, 'Turno Dr. Salomon', '2019-04-30', NULL, NULL, NULL, 1, 'rodrigo'),
(10, 'Dentista', '2019-05-02', NULL, NULL, NULL, 1, 'rodrigo'),
(15, 'prueba', '2019-05-08', '11:00:00', '2019-05-08', '12:00:00', 0, 'rodrigo'),
(12, 'Cumple', '2019-05-11', NULL, NULL, NULL, 1, 'rodrigo'),
(16, 'prueba 2', '2019-05-10', '09:00:00', '2019-05-10', '10:00:00', 0, 'rodrigo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `email` varchar(255) NOT NULL,
  `nombreUsuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nombreCompleto` varchar(255) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `nombreUsuario`, `password`, `nombreCompleto`, `fechaNacimiento`) VALUES
('rodrigogvillarreal@gmail.com', 'rodrigo', '$2y$10$z/VLIzLagX2c//mBHbXhbueMiWA3/ORROzNP7g9rziIflL.BNvtfO', 'Rodrigo Villarreal', '1985-01-28 00:00:00'),
('usuario1@gmail.com', 'usuario1', '$2y$10$q6moQOKfbMk5R3nxQLqN7u22i2jG/qPJJJEvKwqTfVWeuiVg8YziG', 'Usuario 1', '1990-01-25 00:00:00'),
('usuario3@gmail.com', 'usuario3', '$2y$10$XUgEJqdwoFWr1zQwt7QVF.nDfkn9cjV9wK2aZrk2qOeeOzBYESLSK', 'Usuario 3', '1990-01-25 00:00:00'),
('usuario2@gmail.com', 'usuario2', '$2y$10$lbAbihRvSc/S3JPS.RR2o.eO22SRhiX19kovw3fMWgiorW/J8ZbBu', 'Usuario 2', '1990-01-25 00:00:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
