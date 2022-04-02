-- Robson Lopes, Jade Soares, Werlon Lima, Tony Jonas

use EMarket;
 -- -- CLIENTES
-- 1. Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.
CREATE VIEW clientes_0 AS
SELECT ClienteID, Contato, Fax, Telefone
FROM Clientes;

-- 2. Liste os números de telefone dos clientes que não possuem fax.
-- Faça isso de duas maneiras diferentes:
-- a. Consultando a tabela clientes
SELECT Telefone
FROM Clientes
WHERE Fax is null;

-- b. Consultando a view do cliente
SELECT Telefone
FROM clientes_0
WHERE Fax is null;


 --  -- FORNECEDORES
-- 1. Crie uma view com os seguintes dados do fornecedor: Id, contato,
-- empresa e endereço. Para o endereço, pegue o endereço, cidade, código
-- postal e país.
CREATE VIEW provedores_0 AS;

SELECT ProvedorID, Contato, Empresa, Endereco, Cidade, CodigoPostal, Pais
FROM Provedores;

-- 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:
-- a. Consultando a tabela de fornecedores
SELECT *
FROM Provedores
WHERE LOWER(Endereco) LIKE "%americanas%"
AND Pais = 'Brazil';

-- b. Consultando a view do fornecedor
SELECT *
FROM provedores_0
WHERE LOWER(Endereco) LIKE "%americanas%"
AND Pais = 'Brazil';


-- -- DESAFIO
-- 1. Crie uma view dos produtos que será usada ​​para controle de estoque. 
-- Inclua o id e nome do produto, preço unitário arredondado sem decimais, unidades
-- em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORIDADE, 
-- com os seguintes valores:
-- BAIXA se as unidades encomendadas forem zero
-- MÉDIA se as unidades pedidas forem menores do que as unidades em estoque
-- URGENTE se as unidades pedidas não dobrarem o número de unidades em estoque
-- PRIORITÁRIO caso contrário
-- CREATE VIEW produtos_estoque AS
SELECT ProdutoID, ProdutoNome, PrecoUnitario, UnidadesEstoque, UnidadesPedidas,
CASE 
WHEN UnidadesPedidas = 0 THEN 'BAIXA'
WHEN UnidadesPedidas < UnidadesEstoque THEN 'MÉDIA'
WHEN UnidadesPedidas*2 < UnidadesEstoque THEN 'URGENTE'
ELSE 'PRIORITÁRIO'
END AS PRIORIDADE
FROM Produtos;


-- 2.  É necessário um relatório para identificar problemas de estoque. 
-- Utilizando a view criada no exercício anterior, indique, para cada prioridade, 
-- quantos produtos existem e seu preço médio. Não inclua prioridades para as que 
-- possuem menos de 5 produtos.
SELECT PRIORIDADE, COUNT(ProdutoID) AS quantidade_produtos, AVG(PrecoUnitario) AS preco_medio
FROM produtos_estoque
GROUP BY PRIORIDADE
HAVING COUNT(ProdutoID) >=5;

