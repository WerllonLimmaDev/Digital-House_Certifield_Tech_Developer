const comida = ["pipoca", "macarrao", "carne", "feijao", "brigadeiro"];

function microondas(codigoPrato, tempoPadrao) {
    let tempoPreparo = tempoPadrao;

    let tempoPronto
    let tempoQueimou
    let tempoKabum

    switch (parseInt(codigoPrato)) {
        case 0:
            tempoPronto = 10;
            tempoQueimou = 20;
            tempoKabum = 30;
            break;
        case 1:
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        case 2:
            tempoPronto = 15;
            tempoQueimou = 30;
            tempoKabum = 45;
            break;
        case 3:
            tempoPronto = 12;
            tempoQueimou = 24;
            tempoKabum = 36;
            break;
        case 4:
            tempoPronto = 8;
            tempoQueimou = 16;
            tempoKabum = 24;
            break;
        default:
            console.log("Digite um prato válido")
            break;
    }

    let mensagem;
    if (tempoPreparo < tempoPronto) mensagem = "Tempo insuficiente"
    if (tempoPreparo == tempoPronto) mensagem = "Prato pronto"
    if (tempoPreparo > tempoPronto && tempoPreparo < tempoQueimou) mensagem = "quase deu ruim"
    if (tempoPreparo == tempoQueimou) mensagem = "Prato queimou"
    if (tempoPreparo > tempoQueimou && tempoPreparo < tempoKabum) mensagem = "Você não sabe o tempo da comida?"
    if (tempoPreparo == tempoKabum) mensagem = "Kaabum"
    if (tempoPreparo > tempoKabum) mensagem = "Já era! Compre outro microondas!"


    console.log(mensagem)


}

microondas(3, 100);