


let prato =  "feijão:"
let tempo = "12s"
console.log(prato,tempo)

switch(tempo){

    //PIPOCA

        case 1, "10s":
            console.log( "Prato pronto, bom apetite!!!");
            break
        case 2, "20s":
            console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
            break
        case 3, "30s":
            console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
            break
    
   //MACARRÃO
        case 4, "8s":
              console.log( "Prato pronto, bom apetite!!!");
                break
        case 5, "16s":
             console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                break
        case 6, "24s":
             console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                break

    //CARNE
        case 7, "15s":
              console.log( "Prato pronto, bom apetite!!!");
                break
        case 8, "30s":
             console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                break
        case 9, "45s":
             console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                break


       //FEIJÃO   

        case 10, "12s":
            console.log( "Prato pronto, bom apetite!!!");
                    break
        case 11, "24s":
              console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                    break
        case 12, "36s":
             console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                    break

    //BRIGADEIRO
        case 13, "8s":
             console.log( "Prato pronto, bom apetite!!!");
                        break
         case 14, "16s":
             console.log ("Comida queimou!!",  "Prato pronto, bom apetite!!!");
                        break
         case 15, "24s":
              console.log("Kbuuumm!!", "Prato pronto, bom apetite!!!")
                        break
                        

        default:(
            console.log("Tempo insuficiente!!")
    )    

        
}

