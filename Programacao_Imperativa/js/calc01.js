const adicionar = (num1, num2) => {
    const resposta = (num1 + num2);
    console.log(`A operação de adição envolvendo os valores ${num1} e ${num2} é ${resposta}`);
    return resposta;
};
const subtracao = (num1, num2) => {
    const resposta = (num1 - num2);
    console.log(`A operação de subtração envolvendo os valores ${num1} e ${num2} é ${resposta}`);
    return resposta;
};
const multiplicao = (num1, num2) => {
    const resposta = (num1 * num2);
    console.log(`A operação de multiplicação envolvendo os valores ${num1} e ${num2} é ${resposta}`);
    return resposta;
};
const divisao = (num1, num2) => {
    const resposta = (num1 / num2);
    console.log(`A operação de divisão envolvendo os valores ${num1} e ${num2} é ${resposta}`);
    return resposta;
};

console.log ("-------------- Teste de Operações / Calculador --------------");

const quadradoDoNumero = num1 => {
    const resposta = multiplicao(num1, num1);
    console.log(`A operação ao quadrado envolvendo o valor ${num1} é ${resposta}`);
}

const mediaDeTresNumeros = (num1, num2, num3) => {
    let resposta = (num1 + num2 + num3);
    resposta = divisao(resposta, 3);
    console.log(`A operação ao mediaDeTresNumeros envolvendo os valores ${num1}, ${num2} e ${num3} é ${resposta}`);
}

const calculaPorcentagem = (num1, porcentagem) => {
    let resposta = divisao(num1, 100);
    resposta = multiplicao(resposta, porcentagem);
    console.log(`A operação de porcentagem envolvendo os valores ${num1} e ${porcentagem}% é ${resposta}`);
}

adicionar(5, 8);
subtracao(13, 8);
multiplicao(13, 8);
divisao(13, 0);
quadradoDoNumero(5);
mediaDeTresNumeros(9,7,2);
calculaPorcentagem(300, 15);