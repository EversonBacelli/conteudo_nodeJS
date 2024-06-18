/*
    As funções e os procedimentos são blocos de códigos que podem ser divididos em 3 partes essenciais:
    - A assinatura consiste no nome da função ou procedimentos, mais os parâmetros que pode ou não receber;
    - Enquanto a implementação desrespeito ao conjunto de códigos está contido no interior da função ou procedimento;
    - A invocação é o ato de fazer o node ir buscar as funcionalidades que estão associadas com a assintura.

    As funções e procedimentos são identificos, exceto pelo fato de funções possuirem retorno enquanto que procedimentos não. 
    Seu uso é bastante acentuado dado que permite encapsular funcionalidades, sendo um recurso poderoso para simplificar softwares.
    Mas devem ser utilizados o mais autocontido possível, isto é, deve-se evitar manipular elementos que estejam externos a elas.

*/

// Exemplo 1: Função
//    -- declaração da função
function somar(a, b){
    return a + b
}
var res = somar(2, 4)


// Exemplo 2: Procedimento
//    -- declaração

var resultado = 0
diminuir(10, 8)

function diminuir(a, b){
    resultado = a - b
    console.log(res)
}



