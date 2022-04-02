
-- Categorias e Produtos

/*1) Queremos ter uma lista de todas as categorias.
2) Como as categorias não possuem imagens, você está interessado em obter apenas um Nome e descrição da lista de categorias.
3) Obtenha uma lista dos produtos.
4) Existem produtos descontinuados? (Descontinuado = 1).
5) Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem?
6) Queremos saber todos os produtos cujo preço unitário se encontra
entre 10 e 22.
7) Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar?
8) Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero.*/

-- 1)
SELECT * FROM categorias;

 -- 2)
 SELECT categoriaNome, Descricao FROM categorias;
 
 -- 3)
 SELECT * FROM produtos;
 
 -- 4)
 SELECT * 
 FROM Produtos
 WHERE descontinuado = 1;
 
 -- 5)
 SELECT ProdutoNome, ProvedorID
 FROM produtos
 WHERE ProvedorID = 8;
 
 -- 6)
  SELECT *
 FROM produtos
 WHERE PrecoUnitario BETWEEN 10 AND 22;
 
 SELECT ProdutoNome, PrecoUnitario
 FROM produtos
 WHERE PrecoUnitario BETWEEN 10 AND 22;
 
  SELECT ProdutoNome, PrecoUnitario
 FROM produtos
 WHERE PrecoUnitario >= 10 AND PrecoUnitario <=22;
 
 -- 7)
 SELECT *
 FROM produtos
 WHERE UnidadesEstoque < NivelReabastecimento;
 
 SELECT ProdutoNome, UnidadesEstoque, NivelReabastecimento
 FROM produtos
 WHERE UnidadesEstoque < NivelReabastecimento;
 
 -- 8)
 SELECT ProdutoNome, UnidadesEstoque, NivelReabastecimento
 FROM produtos
 WHERE UnidadesEstoque < NivelReabastecimento AND UnidadesPedidas = 0;
 
-- Clientes
-- 1)
SELECT Contato, Empresa, Titulo, Pais
FROM clientes
ORDER BY Pais;

-- 2)
SELECT *
FROM clientes
WHERE Titulo = "Owner";

SELECT *
FROM clientes
WHERE Titulo LIKE "Owner";

SELECT *
FROM clientes
WHERE Titulo LIKE "_Owner";

SELECT *
FROM clientes
WHERE Titulo LIKE "%Owner"; -- Pesquisa todas as palavras com Ownwer sem exatidão.

SELECT *
FROM clientes
WHERE Titulo LIKE "_A%";

-- 3)
SELECT *
FROM clientes
WHERE Contato LIKE "C%" or "c%";


-- Faturas
/*1) Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente.
2) Agora é necessário uma lista de faturas com o país de envio "EUA" e
que a FormaeEnvio seja diferente de 3.
3) O cliente 'GOURL' fez um pedido?
4) Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.*/

-- 1)
SELECT *
FROM faturas
ORDER BY DataFatura;

SELECT *
FROM faturas
WHERE PaisEnvio = "USA" AND FormaEnvio <> 3;

-- 3)
SELECT *
FROM faturas
WHERE ClienteID = "GOURL";

SELECT *
FROM faturas
WHERE EmpregadoID in (2, 3, 5, 8, 9);

-- PArte 2
-- Produtos

-- 1)
SELECT *
FROM produtos
ORDER BY PrecoUnitario DESC;

-- 2)
SELECT *
FROM produtos
ORDER BY PrecoUnitario DESC 
LIMIT 5;

-- 3)
SELECT *
FROM produtos
ORDER BY UnidadesEstoque DESC
LIMIT 10;

-- Detalhes Faturas


-- 1)
SELECT FaturaID, ProdutoID, Quantidade
FROM DetalheFatura;

-- 2)
SELECT FaturaID, ProdutoID, Quantidade
FROM DetalheFatura
ORDER BY Quantidade DESC;

-- 3)
SELECT FaturaID, ProdutoID, Quantidade
FROM DetalheFatura
WHERE Quantidade BETWEEN 50 AND 100
ORDER BY Quantidade DESC;

-- 4)
SELECT 
FaturaID AS "Número da Fatura",
ProdutoID AS "Produto",
PrecoUnitario * Quantidade AS Total
FROM detalheFatura;

SELECT FaturaID, ProdutoID, PrecoUnitario * Quantidade AS total
FROM detalheFatura;

SELECT FaturaID AS Num_faturas, ProdutoID, PrecoUnitario * Quantidade AS total
FROM detalheFatura; -- "AS" usado apenas para renomear o nome à ESQUERDA AS pelo nome da DIREITA de "AS" no resultado do SELECT.
