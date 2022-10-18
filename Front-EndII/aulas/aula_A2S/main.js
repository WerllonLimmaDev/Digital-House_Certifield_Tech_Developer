// 1° Passo: Obter qual a jogada do jogador.

// 2° Passo: Gerar aleatóriamente entre um número 1 e 3.

// 3° Passo: Calcular os resultados.

//[1] Pedra - [2] Papel - [3] Tesoura.







// 1. Obter qual a jogada do jogador

// 2. Gerar aleatoriamente entre 1 e 3

// 3. Calcular os resultados

const joKenPo = ['','Pedra', 'Papel', 'Tesoura']
let escolhaScript
let escolhaUsuario

function novoJogo() {
  escolhaJogadores()
  opcaoJogada()
  jogarNovamente()
}

function escolhaJogadores() {
  escolhaUsuario = Number(
    prompt(`
            VAMOS JOGAR UM JOGO?

            Escolha sua opção
            1 - Pedra 
            2 - Papel 
            3 - Tesoura
`)
  )
  escolhaScript = Math.floor(Math.random() * 3)+1
}

function opcaoJogada() {
  if (escolhaUsuario <= joKenPo.length -1) {

    if (escolhaUsuario === 0 || escolhaUsuario.toString() == '') {

    } else {
    }


    if (escolhaUsuario == 1 && escolhaScript == 2 || escolhaUsuario == 2 && escolhaScript == 3 || escolhaUsuario == 3 && escolhaScript == 1) {
      alert(`PERDEU

      Você ${joKenPo[escolhaUsuario]}
      Robo ${joKenPo[escolhaScript]}
      `)
    } else if (joKenPo[escolhaScript] == joKenPo[escolhaUsuario]) {
      alert(`EMPATE

      Você ${joKenPo[escolhaUsuario]}
      Robo ${joKenPo[escolhaScript]}
      `)
    } else {
      alert(`GANHOU

      Você ${joKenPo[escolhaUsuario]}
      Robo ${joKenPo[escolhaScript]}
      `)
    }
  } else {
    alert('Opção inválida, tente novamente')
    novoJogo()
  }
}

function jogarNovamente() {
  let deNovo = confirm('Deseja tentar novamente?')
  //if ternário
  deNovo ? novoJogo(): '' 
}

novoJogo()








































/* var escolhaUsuario
var escolhaAleatoria = Math.floor(Math.random() * 3) + 1;

function jogada() {

    escolhaUsuario = Number(prompt('Escolha sua opção: [1] Pedra, [2]) Papel, [3] Tesoura'))
    escolhaAleatoria


    if (escolhaAleatoria > escolhaUsuario) {
    
        console.log('Você Perdeu!')
    
    } else {
    
        if(escolhaAleatoria === escolhaUsuario) {
    
            console.log('Deu empate!')
    
        } else {
    
            console.log('Você Ganhou!')
    
        }
    
    }
    
}

jogada() */






// Permitir jogar novamente. Dica(usar funções)
// Armazenar os pontos e se um dos jogadores chegar a 3 pontos, o jogo acaba e pergunta se deseja jogar novamente.