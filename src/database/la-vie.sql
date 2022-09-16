CREATE DATABASE  IF NOT EXISTS `la-vie`;

USE `la-vie`;

DROP TABLE IF EXISTS `atendimentos`;

CREATE TABLE `atendimentos` (
  `atendimento_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `data_atendimento` datetime NOT NULL,
  `observacao` varchar(1000),
  `paciente_id` int NOT NULL,
  `psicologo_id` int NOT NULL,
  CONSTRAINT paciente_atendimento FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`paciente_id`),
  CONSTRAINT psicologo_atendimento FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`psicologo_id`)
);

LOCK TABLES `atendimentos` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `pacientes`;

CREATE TABLE `pacientes` (
  `paciente_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL UNIQUE,
  `idade` int NOT NULL,
);

LOCK TABLES `pacientes` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `psicologos`;

CREATE TABLE `psicologos` (
  `psicologo_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(10) NOT NULL,
  `apresentacao` varchar(200) NOT NULL,
);

LOCK TABLES `psicologos` WRITE;

UNLOCK TABLES;