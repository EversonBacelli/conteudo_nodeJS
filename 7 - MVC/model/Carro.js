import Veiculo from "./Veiculo.js"

export default class Carro extends Veiculo {

    constructor(modelo, marca, ano, placa, cor, qtdPortas, desempenho, quilometragem){
        super(modelo, marca, ano, placa, cor)
        this.qtdPortas = qtdPortas,
        this.desempenho = desempenho,
        this.quilometragem = quilometragem
    }

    getQtdPortas(){
        return this.qtdPortas
    }

    getDesempenho(){
        return this.desempenho
    }

    getQuilometragem(){
        return this.quilometragem
    }

    setQuilometragem(novoKm){
        this.quilometragem = novoKm
    }
}


