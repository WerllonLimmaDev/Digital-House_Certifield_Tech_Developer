CREATE DATABASE consultorio;
USE consultorio;

CREATE TABLE pacientes (
	paciente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	sobrenome VARCHAR(100)

);

CREATE TABLE especialidades (
especialidade_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100)

);

CREATE TABLE medicos (
medico_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
sobrenome VARCHAR(100),
medico_especialidade INT,
FOREIGN KEY(medico_especialidade) REFERENCES especialidades(especialidade_id)


);

CREATE TABLE consultas(
consulta_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
data_consulta DATE,
hora_consulta TIME,
paciente_id INT,
medico_id INT,
FOREIGN KEY(paciente_id) REFERENCES pacientes(paciente_id),
FOREIGN KEY(medico_id) REFERENCES medicos(medico_id)

);


INSERT INTO pacientes(nome, sobrenome) VALUES ("Yana", "Mendes");

INSERT INTO especialidades(nome) VALUES ("cardio"), ("pediatra");

INSERT INTO medicos(nomes, sobrenome, medico_especialidade) VALUES ("raphael", "copeiro", 1);

SELECT * FROM medicos;

SELECT * FROM especialidades;

SELECT * FROM pacientes;

ALTER TABLE pacientes ADD telefone VARCHAR(13) 
ADD telefone2 VARCHAR(13) NOT NULL;

