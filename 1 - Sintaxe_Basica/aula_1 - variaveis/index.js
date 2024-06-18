/*
    Variáveis são espaços de memória RAM que podem ser utilizados para armazenar valores e caracteres para posterior uso,
    são demasiadamente importantes e por isso devem ser corretamente compreendidos e acompanhados nos scripts.
    Em NodeJS, o uso de variáveis é ligeiramente diferente de outras linguagens tradicionais dado que não há necessidade de discriminar no
    ato da declaração a sua natureza. Isso é realizado dinamicamente pela própria linguagem no ato da sua atribuição e por isso é conhecida
    como fracamente tipada ou não tipada.

    Contudo, isso não significa que não existam tipos no contexto do NodeJS, os tipos mais utilizados em são: number, string, boolean, 
    undefined, null e object.

    Também se deve observar que o Node apresenta 3 formas de declarar variáveis - const, let e var

        - const: se trata de uma constante e por isso no ato da sua declaração deve receber um valor, depois disso, não pode mais ser
        modificada;
        - let: é utilizada para indicar que a variável em questão está circunscrita a um determinado contexto ou escopo. Por exemplo, imagine
        que criou uma variável no interior de um if, nesse caso, elá só existe enquanto o if estiver em execução, finalizado a estrutura
        a variável também chega ao sem fim de ciclo.
        - var: tem o funcionamento semelhante ao let, mas geralmente é utilizando para evidenciar que a variável que está associada está 
        disponível para todo código. Onde ela for inserir, está sujeito a um fenômeno denominado alçar que na prática siginfica que pode
        estar em qualquer escopo, sempre irá para as primeiras linhas.
*/

// EX 1 - const 
const nome = "Everson Bacelli"
nome = "Pedro Manuel"
console.log(nome)

// EX 2 - let


function mensagem(){
    let rg = "44.122.222-22"
}

// não irá funcionar porque let está circunscrito ao contexto da função, portanto, finalizada a execução da função a variável não irá
// mais existir
console.log("Meu RG é : " + rg)


// EX 3 - var
var texto = "Ola mundo"

function mensagem2() {
    console.log(`Eu gostaria de dizer ${texto}`)
}