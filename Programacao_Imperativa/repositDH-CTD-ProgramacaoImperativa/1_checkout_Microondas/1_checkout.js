

//Professor, meu código ficou um pouquinho longo porque eu quis criar uma certa interatividade com o console.log



/*(---------------Aqui Começa o Meu Código-----------------)*/


function microondas(opcao, tempo)
    switch(opcao)
        case 1:
            console.log("Pipoca")
            break;
        case 1:
            console.log("Pipoca")
            break;
                case 1:
                    console.log("Pipoca")
                    break;
                    case 1:
                        console.log("Pipoca")
                        break;
                        case 1:
                            console.log("Pipoca")
                            break;
        default:
            console.log("Prato Inexistente")


console.log(`Olá, escolha a opção do seu prato?
    1 - Pipoca
    2 - Macarrão
    3 - Carne 
    4 - Feijão
    5 - Brigradeiro`)

//Minha variável listaDePratos.
let listaDePratos = 0;

//Minha função para a condição do timer e o resultado do retorno para cada prato.
function microondas(listaDePratos,timer) {
    
    //Minha variável tempoPadrao.
    let tempoPadrao = 0;
    
    //Minha variável prato.
    let prato = '';

    //Minha listaDePratos mostrada pelo "switch"
    switch(listaDePratos) {
        case 1: 
            tempoPadrao = 10;
            prato = 'Pipoca';
            break;
        case 2: 
            tempoPadrao = 8;
            prato = 'Macarrão';
            break;
        case 3:
            tempoPadrao = 15;
            prato = 'Carne';
            break;
        case 4:
            tempoPadrao = 12;
            prato = 'Feijão';
            break;
        case 5: 
            tempoPadrao = 8;
            prato = 'Brigadeiro';
            break;
        default:
            console.log('Prato inexistente');
            console.log(`Hummm!!! Boa escolha.`)
    }

    //Minhas condições if e else if.
    if (timer < tempoPadrao) {
        console.log("Escolha o tempo de preparo. Não, Não! Tempo insuficiente!");
    } else if (timer >= 2 * tempoPadrao && timer < 3 * tempoPadrao) { 
        console.log("A comida queimou."); 
    } else if (timer >= 3 * tempoPadrao) {
        console.log("Explodiu!!!");
    } else if (timer >= tempoPadrao && timer < 2* tempoPadrao ) {
        console.log(`Agora sim...\nPrato de ${prato} pronto, bom apetite!!!`);
    } 

}

microondas(6);
microondas(1,9);
microondas(5,10);
microondas(2,16);
microondas(4,36);