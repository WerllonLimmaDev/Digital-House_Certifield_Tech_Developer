// Declaração de função
// Nos () colocamos os parâmetros que podem ser opcionas e também podem ser infinitos.
// Podendo passar de quantos parâmetros eu quiser.
// 0 ... N

function soma(num1, num2, num3){
    return num1 + num2 + num3
    /*Return encerra a função e retorna o valor especificado para quem está chamando a função.*/
}

function minhaFuncao(nome = " ") {
    // Nome = Lucas
    // Escopo da função
    // Bloco de código a ser executado.
    console.log("Olá, seu nome é: " + nome);
}

// Chamada ou invocação da função.
minhaFuncao("Lucas");
minhaFuncao("Fulano");