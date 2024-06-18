// Estrutura Condicional

/*
    As estruturas condicionais são uma estratégia para controlar o fluxo de execução, dotando os sistemas de flexibilidade
    quanto aos resultados que podem entregar.
    São encontradas em 4 formas principais em Node:

*/

// A simples
const cor = "Azul"
if(cor == "Amarelo"){
    console.log("Não é Amarelo")
}

const carro = "Mazda"
// Completa
if(carro == "Elantra"){
    console.log("é um elantra.")
} else {
    console.log("Não é um elantra.")
}

// estrutura composta ou aninhada
const sala = 5
if(sala == 4){
    console.log("A sala em questão é 4")
} else if(sala == 5){
    console.log("A sala em questão é a 5")
} else {
    console.log("Nenhuma das sala informados")
}

// estrutura switch
const codigo = "043"

switch (codigo) {
    case "044":
        console.log("Banana nanica")
        break;
    case "043":
        console.log("Banana prata")
        break;
    case "045":
        console.log("Banana ouro")
        break;
    case "046":
        console.log("Banana maça")
        break;

    default:
        console.log("Não é banana")
        break;
}