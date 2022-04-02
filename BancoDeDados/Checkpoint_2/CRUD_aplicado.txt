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