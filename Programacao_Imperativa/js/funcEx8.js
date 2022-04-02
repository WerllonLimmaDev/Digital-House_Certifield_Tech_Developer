//Função Declarada
function darOi() {
    console.log('Olá, tudo bem!')
}

darOi()

//Função Expressa
let somar = function (numA, numB) {
    console.log(numA + numB)
}
somar(5, 13)

let multiplicar = function (numA, numB) {
    return numA * numB
}
multiplicar(15, 3)

//let resultado = multiplicar (1, 2)
console.log(multiplicar (1 ,2))

function bomDia() {
    let bomDia = 'Olá, bom dia!';
    console.log(bomDia)
}
bomDia()

let bemVindo = 'Ola, como vai?'
function ola() {
    return bemVindo
}
console.log(bemVindo)
