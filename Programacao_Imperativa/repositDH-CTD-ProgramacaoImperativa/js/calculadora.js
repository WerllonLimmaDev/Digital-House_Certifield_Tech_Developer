💹//Calculadora Nível 1
function somar(num1, num2) {
    return num1 + num2;
}
💹
function subtrair(num1, num2) {
    return num1 - num2;
}
💹
function multiplicar(num1, num2){
return num1 * num2;
}
💹
function dividir(num1, num2) {
return num1 / num2;
}
          

💹//Calculadora Nível 2 
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

//Calculadora Nível-3 part2.
function mediaDeTresNumeros(num1, num2, num3){
    return dividir(num1 + num2 + num3, 3);
}

//Calculadora Nível-3 part3.
function calculaPorcetagem(num, numpercentage) {
    let porcetagem = dividir(numpercentage, 100);
    return multiplicar(num, porcetagem);
}

//Calculadora Nível-4 part4.
function geradorDePorcetagem(num, numpercentage) {
  return multiplicar(dividir(num, numpercentage);
    return geradorDePorcetagem(2, 200);
}

console.log('
            Somar: ${somar(15, 25)}
            Subtrair: ${subtrair(40, 10)}
            Multiplicar: ${multiplicar(5, 2)}
            Dividir: ${dividir(30, 3)}
            Quadrado: ${quadradoDoNumero(5)}
            Media de Três: ${mediaDeTresNumeros(3, 3, 3)}
            Calculo de Porc: ${calculaPorcetagem(300, 15)}
            Gerador de Porc: ${geradorDePorcetagem(2, 200)}
')
   
