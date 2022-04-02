/*Consultas
1. Liste os clientes que fizeram compras durante 1996.
A lista deve conter as seguintes colunas:
● Contato
● Título
Obs: Apresente os dados da coluna Titulo em maiúsculo.
2. Liste as faturas para as quais a remessa foi para uma cidade diferente da cidade do
cliente. Considere apenas os clientes do Reino Unido.
A listagem deve incluir:
● O número da fatura completando com zeros principais 8 itens. Por exemplo,
00001234
● A data da fatura no formato YYYY-MM-DD. Por exemplo, 1996-12-01
● Para a cidade do cliente*/

-- 1) 

SELECT clientes.Contato, clientes.Titulo, faturas.DataFatura
FROM clientes
INNER JOIN faturas
ON clientes.ClienteID = faturas.ClienteID;


SELECT clientes.Contato, UPPER(clientes.Titulo), faturas.DataFatura
FROM clientes
INNER JOIN faturas
ON clientes.ClienteID = faturas.ClienteID
WHERE DataFatura >= '1996-01-01' AND DataFatura <= '1996-12-31';


-- 2)

SELECT clientes.Cidade, faturas.CidadeEnvio, 
	right(concat('00000000',faturas.FaturaId), 8) AS Numero,
    date_format(faturas.DataFatura, '%Y-%m-%d' ) AS DataFatura    
FROM clientes c
INNER JOIN faturas f
ON c.ClienteID = f.ClienteID
WHERE f.CidadeEnvio != c.Cidade 
	AND c.Pais = 'UK';