function microondas(opcao,tempo) {
    let tempoPadrao = 0;
    switch (opcao) {
      case 1: //Pipoca
        tempoPadrao = 10;
        break;
      case 2: //Macarrão
       tempoPadrao = 8;
        break;
      case 3: //Carne
        tempoPadrao = 15;
        break;
      case 4: //Feijão
        tempoPadrao = 12;
        break;
      case 5:// Brigadeiro
        tempoPadrao = 8;
        break;
      default:
        console.log("Prato Inexistente");
        return;
    }
  
    if(tempo < tempoPadrao)
      console.log("Tempo insuficiente");
    else if(tempo > 3*tempoPadrao)
      console.log("Kabumm");
    else if(tempo > 2*tempoPadrao)
      console.log("A comida queimou"); 
  
    console.log("Prato pronto, bom apetite!!!");
  // - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
  // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
  }
  
  microondas(5,10);
  
  let pipoca = 8;
  
  function microondas2(opcao,tempo) {
    let tempoPadrao = 0;
    if(opcao == 1 ) tempoPadrao = 10;
    else if(opcao == 2 || opcao == 5) tempoPadrao = 8;
    else if(opcao == 3) tempoPadrao = 15;
    else if(opcao == 4) tempoPadrao = 12;
    else {
      console.log("Prato Inexistente");
      return;
    }
  
    if(tempo < tempoPadrao) console.log("Tempo insuficiente");
    else if(tempo > 3*tempoPadrao) console.log("Kabumm");
    else if(tempo > 2*tempoPadrao) console.log("A comida queimou"); 
  
    console.log("Prato pronto, bom apetite!!!");
  // - Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
  // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
  // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
  }
  
  
  
  function microondas3(opcao,tempo) {
    let tempoPadrao = opcao == 1 || opcao == 5 ? 8 
    : opcao == 2 ? 10 
    : opcao == 3 ? 15
    : opcao == 4 ? 12
    : -1;
  
    tempo < tempoPadrao ? console.log("Tempo insuficiente")
    : tempo > 3*tempoPadrao ? console.log("Kabumm")
    : tempo > 2*tempoPadrao ? console.log("A comida queimou")
    : tempoPadrao == -1 ? console.log("Prato Inexistente") : "";
  
    console.log("Prato pronto, bom apetite!!!");
  }
  
  function microondas4(opcao,tempo) {
    if(opcao == 1 ) verificaCondicoes(tempo,10)
    else if(opcao == 2 || opcao == 5) verificaCondicoes(tempo,8)
    else if(opcao == 3) verificaCondicoes(tempo,15);
    else if(opcao == 4) verificaCondicoes(tempo,12);
    else console.log("Prato Inexistente");
    console.log("Prato pronto, bom apetite!!!");
  }
  
  function verificaCondicoes(tempo,tempoPadrao){
    if(tempo < tempoPadrao) console.log("Tempo insuficiente");
    else if(tempo > 3*tempoPadrao) console.log("Kabumm");
    else if(tempo > 2*tempoPadrao) console.log("A comida queimou"); 
  }
  
  microondas2(pipoca,)

  function microondas(prato, tempo){
  
    // produtos 
  
    let nomePipoca = "Pipoca"
    let nomeMacarrao = "Macarrão";
    let nomeCarne = "Carne";
    let nomeFeijao = "Feijão";
    let nomeBrigadeiro = "Brigadeiro";
  
    // tempos 
  
    let oitoSegundos = 8;
    let dezSegundos = 10;
    let dozeSegundos = 12;
    let quinzeSegundos = 15;
    let duplicarSegundos = x * 2;
    let triplicarSegundos = x * 3;
  
    // prato = produto + tempo padrão 
  
    let pipoca = nomePipoca + dezSegundos;
    let macarrao = nomeMacarrao + oitoSegundos;
    let carne = nomeCarne + quinzeSegundos;
    let feijao = nomeFeijao + oitoSegundos;
    let brigadeiro = nomeBrigadeiro + dozeSegundos;
  
  
    //execução pelo cliente 
  
    if(pipoca){
        console.log("Prato pronto, bom apetite!!!");
    } else if (pipoca && duplicar){
        console.log("A Comida Queimou");
    } else if (pipoca && triplicarSegundos){
        console.log("kabuummm")
    } else if (!pipoca){ 
        console.log("Tempo Insuficiente");
    }
  
    if(macarrao){
        console.log("Prato pronto, bom apetite!!!");
    } else if (macarrao && duplicarSegundos){
        console.log("A Comida Queimou");
    } else if (macarrao && triplicarSegundos){
        console.log("kabuummm")
    } else if (!macarrao){ 
        console.log("Tempo Insuficiente");
    }
  
    if(carne){
        console.log("Prato pronto, bom apetite!!!");
    } else if (carne && duplicarSegundos){
        console.log("A Comida Queimou");
    } else if (carne && triplicarSegundos){
        console.log("kabuummm")
    } else if (!carne){ 
        console.log("Tempo Insuficiente");
    }
  
    if(feijao){
        console.log("Prato pronto, bom apetite!!!");
    } else if (feijao && duplicarSegundos){
        console.log("A Comida Queimou");
    } else if (feijao && triplicarSegundos){
        console.log("kabuummm")
    } else if (!feijao){ 
        console.log("Tempo Insuficiente");
    }
  
    if(brigadeiro){
        console.log("Prato pronto, bom apetite!!!");
    } else if (brigadeiro && duplicarSegundos){
        console.log("A Comida Queimou");
    } else if (brigadeiro && triplicarSegundos){
        console.log("kabuummm")
    } else if (!brigadeiro){ 
        console.log("Tempo Insuficiente");
    }
  
    if(""){
        console.log("Prato Inexistente")
    }
    console.log(microondas(pipoca))
  } 