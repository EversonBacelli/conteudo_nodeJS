// Sem orientação a objetos
var ano = 2010
var placa = "DDD-2344"
var modelo = "UNO"
var marca = "FIAT"
var desempenho = 12
var  velocidadeMax = 120
var  cor = "Prata"    

// Variáveis que possuem uma relação estão separadas, aumentando o trabalho para controlar a aplicação se houver inúmeros objetos


// OBJETO em JAVASCRIPT / NODE
// Melhorou um pouco, mas para cada representação de carro, ainda haverá a necessidade de criar uma estrutura desta
// Ainda há o problema da repetição do código
const c0 = {
    ano: 2010,
    placa: "DDD-2344", 
    modelo: "UNO", 
    marca: "FIAT",
    desempenho: 12,
    velocidadeMax: 120,
    cor: "Gray"
}

console.log(`O carro em questão é o ${c0.marca} ${modelo} ano ${c0.ano} na cor ${c0.cor}`)
// ou
console.log(c0)


// Uso da abstração para representar objeto carro
// Isso permite que se crie vários carros (instancias) a partir do mesmo modelo
// manipulando todas as variáveis em conjunto, afinal representam a mesma coisa
class Carro {
    constructor(ano, placa, modelo, marca, desempenho, velocidadeMax, cor){
        this.ano = ano
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.desempenho = desempenho
        this.velocidadeMax = velocidadeMax
        this.cor = cor
    }
}


const c1 = new Carro(2010, "DXK-2210","Corsa", "VW", 10, 140, "Bronze" )
const c2 = new Carro(2020, "RTI-9900", "Sandero", "Renault", 14, 140, "Black")
console.log(c1)
console.log(c2)