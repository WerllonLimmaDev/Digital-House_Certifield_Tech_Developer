//Calculadora Nível 1
function somar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2){
return num1 * num2;
}

function dividir(num1, num2) {
return num1 / num2;
}

//Calculadora Nível 2 
console.log("----------Teste de Operações / Calculadora----------")

console.log(somar (15, 25))
console.log(subtrair(40, 10))
console.log(multiplicar(5, 2))
console.log(dividir(30, 3))
console.log(dividir(20, 0))

//Calculadora Nível 3 part1.
function quadradoDoNumero(num){
    return multiplicar(num, num);
}
console.log(quadradoDoNumero(5))

//Calculadora Nível-3 part2.
function mediaDeTresNumeros(num1, num2, num3){
    return dividir(num1 + num2 + num3, 3);
}
console.log(mediaDeTresNumeros(3,3,3))

//Calculadora Nível-3 part3.
function calculaPorcetagem(num, numpercentage) {
    let porcetagem = dividir(numpercentage, 100);
    return multiplicar(num, porcetagem);
}
console.log(calculaPorcetagem(300, 15))

//Calculadora Nível-4 part4.
function geradorDePorcetagem(num, numpercentage) {
    let percentage = multiplicar(0.01, numpercentage);
    return dividir(num, percentage);
}
console.log(geradorDePorcetagem(2, 200))
