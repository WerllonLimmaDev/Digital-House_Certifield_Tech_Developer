/* Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array. */


let numbers = [1, 2, 4, 8]; //Array de números.
var soma = 0;

//Laço FOR clássico.
for(var i = 0; i < numbers.length; i++) {
    soma += numbers[i];
}

console.log(soma)
