CREATE DATABASE DHTUBE;
USE DHTUBE;

CREATE TABLE pais (
	idPais INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100)
);

CREATE TABLE avatar (
idAvatar INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
url_imagem VARCHAR(45)
);

CREATE TABLE usuario (
idUsario INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45),
dataNascimento DATETIME,
cep VARCHAR(45),
idPais_FK INT,
idAvatar_FK INT,
FOREIGN KEY(idPais_FK) REFERENCES pais(idPais),
FOREIGN KEY(idAvatar_FK) REFERENCES avatar(idAvatar)
);

CREATE TABLE canal (
idCanal INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
descricao TEXT,
idUsuario_FK INT,
FOREIGN KEY(idUsuario_FK) REFERENCES usuario(idUsario)
);

CREATE TABLE video (
idVideo INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
descricao TEXT,
tamanho DOUBLE,
nomeArquivo VARCHAR(100),
duracao DOUBLE,
imagem VARCHAR(100),
qtdReproducoes INT(11),
qtdLikes INT(11),
qtdDislikes INT(11),
privado SMALLINT(6),
dataPublicacao DATETIME,
idUsario_FK INT,
FOREIGN KEY (idUsario_FK) REFERENCES usuario(idUsario)
);

CREATE TABLE playlist (
idPlaylist INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
dataCriacao DATETIME,
privado SMALLINT(6),
idUsario_FK INT,
FOREIGN KEY (idUsario_FK) REFERENCES usuario(idUsario)
);

CREATE TABLE playlist_video (
idPlaylistVideo INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
idVideo_FK INT,
idPlaylist_FK INT,
FOREIGN KEY (idVideo_FK) REFERENCES video(idVideo),
FOREIGN KEY (idPlaylist_FK) REFERENCES playlist(idPlaylist)
);