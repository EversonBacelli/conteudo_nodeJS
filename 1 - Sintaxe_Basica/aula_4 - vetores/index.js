// Vetores

/**
 *  Os vetores ou array são variáveis unidimensionais que carregam consigo uma coleção de valores.
 *  Cada um desses valores fica armazenado em uma posição específica do vetor que é denominado de index.
 *  Dessa forma, é possível a partir de um mesmo identificador, armazenar e recuperar inúmeros valores.
 * 
 *  Declaração de vetores
 *      var array = [1, 5, 7, 8] 
 *      var array = []
 *      var array = new Array()
 *      
 *  Recuperando valores
 *      console.log(array[2])   --  7
 * 
 *  Atributo importante
 *      lenght: apresenta o tamanho do vetor, isto é, quantas posições de memória ele contêm
 * 
 *  Métodos Úteis
 *  
 */

var lista = new Array() 

// inclui elementos em um array
lista.push("0")
lista.push("1")
lista.push("100")
lista.push("111")
lista.push("113")
lista.push("11111")

// retira o último da lista
lista.pop()

console.log(lista)

// listar todos os elementos da lista de forma simplificada
lista.forEach( (element) => {
    console.log(element)
})
