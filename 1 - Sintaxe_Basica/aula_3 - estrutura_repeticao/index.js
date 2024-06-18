// Estruturas de Repetição

/*  
    As estruturas de repetição são um recurso poderoso para os usuários porque os permitem utilizar como facilidade a performance
    do processador para realizar operações em série. Isso é demasiadamente interessante para realizar calculos complexos, 
    buscar elementos em listas, fazer estimativas ou simulações etc.

    O NodeJS dá suporte para as 3 mais conhecidas - while, doWhile e for. Além de oferecer alguns outras ferramentas no contextos de arrays.

*/
var cont = 0

while(cont < 10){
    console.log("WHILE " + cont)
    cont ++
}

do {
    console.log("DOWHILE " + cont)
    cont --
} while (cont > 0);

for (let index = 0; index < 10; index++) {
    console.log("FOR " + index)
}