use EMarket;


-- 1)
DELIMITER $$ 
CREATE PROCEDURE sp_empregados()
BEGIN 
SELECT Nome, Sobrenome FROM Empregados 
ORDER BY Nome ASC; end $$

CALL sp_empregados();

-- 2)

SELECT Cidade FROM Clientes;

CREATE PROCEDURE sp_funcionarios(IN Cidade_empregados VARCHAR(50)) 
BEGIN SELECT Nome, Sobrenome, Cidade 
FROM Empregados
WHERE Cidade LIKE Cidade_empregados; END $$ 

CALL sp_funcionarios("Seattle");

-- 3)

CREATE PROCEDURE sp_funcionarios(IN Cidade_empregados VARCHAR(50)) 
BEGIN SELECT Nome, Sobrenome, Cidade 
FROM Empregados
WHERE Cidade LIKE Cidade_empregados; END $$ 













