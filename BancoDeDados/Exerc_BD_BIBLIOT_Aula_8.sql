CREATE DATABASE UniversoLeitura;
USE UniversoLeitura;

CREATE TABLE associados(
associado_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
rg CHAR(7),
nome VARCHAR(50),
sobrenome VARCHAR(50),
endereco VARCHAR(150),
cidade VARCHAR(50),
estado VARCHAR(2)
);

CREATE TABLE telefones(
telefone_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
telefone_socio VARCHAR(100),
codAssoc INT,
FOREIGN KEY(CodAssoc) REFERENCES associados(associado_id)
);

CREATE TABLE autores(
autor_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
sobrenome VARCHAR(100),
nome VARCHAR(100)
);

CREATE TABLE editoras(
editora_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
razao_social VARCHAR(150),
telefone VARCHAR(100)
);

CREATE TABLE livros(
livro_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
cod_ISBN VARCHAR(13),
titulo VARCHAR(200),
ano_criacao DATE,
cod_autor INT,
FOREIGN KEY(cod_autor) REFERENCES autores(autor_id),
ano_publicacao DATE,
cod_editora INT,
FOREIGN KEY(cod_editora) REFERENCES editoras(editora_id)
);

CREATE TABLE exemplares(
exemplar_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
cod_livro INT,
FOREIGN KEY(cod_livro) REFERENCES livros(livro_id),
sinistro BOOL
);

CREATE TABLE emprestimos(
emprestimo_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
codAssoc INT,
FOREIGN KEY(codAssoc) REFERENCES associados(associado_id),
data DATE,
prazo_devolucao DATE,
data_devolucao DATE
);

CREATE TABLE emprestimo_exemplares(
emprestimo_exemplar_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
cod_emprestimo INT,
FOREIGN KEY(cod_emprestimo) REFERENCES emprestimos(emprestimo_id),
cod_exemplar INT,
FOREIGN KEY(cod_exemplar) REFERENCES exemplares(exemplar_id)
);