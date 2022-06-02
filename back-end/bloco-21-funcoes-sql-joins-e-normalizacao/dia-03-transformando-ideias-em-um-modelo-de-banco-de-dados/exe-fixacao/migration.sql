CREATE DATABASE IF NOT EXISTS `normalization`;

USE `normalization`;

CREATE TABLE `setor`(
  `setor_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  PRIMARY KEY(`setor_id`)
);

CREATE TABLE `funcionario`(
  `funcionario_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `sobrenome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `data_cadastro` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY(`funcionario_id`)
);

CREATE TABLE `setor_funcionario`(
  `setor_id` INT NOT NULL,
  `funcionario_id` INT NOT NULL,
  FOREIGN KEY (`setor_id`) REFERENCES setor(setor_id),
  FOREIGN KEY (`funcionario_id`) REFERENCES funcionario(funcionario_id)
);


