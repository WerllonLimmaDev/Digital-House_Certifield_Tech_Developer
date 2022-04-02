/*É necessário determinar o vencedor de um concurso de Stand-Up composto por 3 apresentações por participante.
O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e desce. 
Após a apresentação, o público vota indicando quem eles acham que ganhou aquela rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a terceira.
Este problema exemplificado em uma planilha ficaria da seguinte forma:*/





/*const alicia = [23, 69, 32];
 const bob = [12, 67, 43];
 
 function encontrarGanhador(a, b) {
    //solução
 }*/


const alicia = [23, 82, 46];
const bob = [45, 8, 32];
 
function encontrarGanhador (a, b) {
    //let pontosPrimeiroParticipante = 0;
    //let pontosSegundoParticipante = 0;
    //continua con esto.
    let pontosAlicia = 0;
    let pontosBob = 0;
    
    for (let i = 0; i < a.length; i++) {
        
        if (a[i] > b[i]) {
        
            pontosAlicia += 1; 
        }
        else if (a[i] < b[i]) {
            pontosBob += 1; 
        }
    }
        if (pontosAlicia > pontosBob) {
            return " O ganhador é Alicia " 
        }
        if (pontosAlicia < pontosBob) {
            return "O ganhador é Bob"
        }
        if ( pontosAlicia == pontosBob)
            return "Deu empate" 
    return pontosAlicia;
    //console.log (pontosAlicia, pontosBob)
}


console.log("O ganhador é: " + encontrarGanhador (alicia, bob))

