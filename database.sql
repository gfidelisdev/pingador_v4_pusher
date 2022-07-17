-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.5.9-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para pingador
DROP DATABASE IF EXISTS `pingador`;
CREATE DATABASE IF NOT EXISTS `pingador` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pingador`;

-- Copiando estrutura para tabela pingador.network_points
DROP TABLE IF EXISTS `network_points`;
CREATE TABLE IF NOT EXISTS `network_points` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fqdn` tinytext NOT NULL DEFAULT '0',
  `name` tinytext NOT NULL DEFAULT '0',
  `ip` tinytext NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela pingador.ping_events
DROP TABLE IF EXISTS `ping_events`;
CREATE TABLE IF NOT EXISTS `ping_events` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `result` float unsigned DEFAULT 0,
  `network_point_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `FK1_network_point` (`network_point_id`),
  CONSTRAINT `FK1_network_point` FOREIGN KEY (`network_point_id`) REFERENCES `network_points` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
