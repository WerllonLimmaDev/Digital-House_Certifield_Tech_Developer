-- exercicio 1 

SELECT servico_basico.nome AS nome, COUNT(servico_basico.id) AS qtd, count(acomodacao_x_servico_basico.acomodacao_numero) AS Ocupação
FROM servico_basico
LEFT JOIN acomodacao_x_servico_basico
ON servico_basico.id = acomodacao_x_servico_basico.servico_basico_id
GROUP BY servico_basico.nome;


-- exercicio 2

SELECT checkin.id AS ID, CONCAT (hospede.nome, " ", hospede.sobrenome) AS Cliente, COUNT(checkin.hospede_id) AS Qtd_check
FROM checkin
INNER JOIN hospede 
ON hospede.id = checkin.hospede_id
GROUP BY Cliente
HAVING Qtd_check > 3;

-- exercicio 3

SELECT hospede.id, CONCAT(UPPER(nome), UPPER (sobrenome)) AS convidados_sem_check_in, checkin.id
FROM hospede
LEFT JOIN checkin
ON hospede.id = checkin.hospede_id
WHERE checkin.hospede_id IS NULL;

-- exercício 4

