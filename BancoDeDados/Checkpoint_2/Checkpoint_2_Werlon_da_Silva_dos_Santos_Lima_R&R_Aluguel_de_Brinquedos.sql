/* Este é o banco de dados de uma microempresa de aluguel de brinquedos
Onde o foco é cadastrar clientes com possíveis assinaturas anuais onde o cliente poderá utilizar dos brinquedos para seus respectivos eventos. 
De acordo com cada tipo de assinatura, o cliente terá direito de alugar certas quantidades de brinquedos mensalmente
Este sistema de DB visa cadastrar o cliente, tipo de assinatura, os brinquedos que os clientes irá utilizar no evento, o tipo de evento, o endereço onde será realizado o evento, 
entre outras informações para que possa disponibilizar mimos e brindes de acordo com o tipo de assinatura do cliente. 

SÂO TRÊS TIPOS DE ASSINATURAS => Bronze, Gold e Platinum.
EVENTO => O tipo de evento que o cliente irá realizar para poder designar brinquedos mais específicos e para poder separar os brindes e mimos oferecidos por tipo de assinatura.
FAIXA_ETARIA=> Especifica a faixa etária das pessoas que irão utilizar os brinquedos, divididos em infantil, adolescentes, jovens e adultos, 
com isso, determinará também, os tipos de brindes e mimos que serão distribuídos.*/



CREATE DATABASE rr_aluguel_de_brinquedos;
USE rr_aluguel_de_brinquedos;


CREATE TABLE clientes (

id_cliente INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50),
email VARCHAR(100),
telefone VARCHAR(20) NOT NULL
);

CREATE TABLE brinquedos (

id_brinquedo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(10),
modelo VARCHAR(30),
id_cliente_FK INT,
id_end_aluguel_FK INT,
id_evento_FK INT,
FOREIGN KEY(id_cliente_FK) REFERENCES clientes(id_cliente),
FOREIGN KEY(id_end_aluguel_FK) REFERENCES endereco_aluguel(id_end_aluguel),
FOREIGN KEY(id_evento_FK) REFERENCES evento(id_evento)
);


CREATE TABLE endereco_aluguel (

id_end_aluguel INT PRIMARY KEY AUTO_INCREMENT,
rua_est_av VARCHAR(100),
complem VARCHAR(30),
numero VARCHAR(10),
ponto_refer TEXT,
id_cliente_FK INT,
id_brinquedo_FK INT,
FOREIGN KEY(id_cliente_FK) REFERENCES clientes(id_cliente)
);

CREATE TABLE assinaturas (

id_assinatura INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(10),
data_inicio DATE,
data_termino DATE,
id_cliente_FK INT,
FOREIGN KEY(id_cliente_FK) REFERENCES clientes(id_cliente)
);

CREATE TABLE forma_pagto (

id_forma_pagto INT PRIMARY KEY AUTO_INCREMENT,
id_cliente_FK INT,
FOREIGN KEY(id_cliente_FK) REFERENCES clientes(id_cliente)
);

CREATE TABLE evento(

id_evento INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(10),
faixa_etaria VARCHAR (15),
quant_pessoas INT,
id_cliente_FK INT,
id_brinquedo_FK INT,
FOREIGN KEY(id_cliente_FK) REFERENCES clientes(id_cliente)
);


-- Operações CRUD aplicadas --

SELECT * FROM clientes;

INSERT INTO  clientes (nome, sobrenome, email, telefone)
VALUES ('Daniela', 'Lima', 'daniela@email.com', 021951642489),
('Fernando', 'Gomes', 'fernando@email.com', 021985726478);

INSERT INTO assinaturas (id_assinatura, tipo, data_inicio, data_termino)
VALUES (1, 'GOLD', '2022-01-15', '2023-01-15');

UPDATE clientes SET
sobrenome = 'Oliveira Lima'
WHERE id_cliente = 1;

DELETE FROM clientes
WHERE id_cliente = 2;


