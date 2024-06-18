

export default class Servico{

    constructor(data, qtdHoras,  cadastro, vaga){
        this.data = data,
        this.qtdHoras = qtdHoras, 
        this.valor = this.calcValor(),
        this.cadastro = cadastro, 
        this.vaga = vaga
    }

    getServico(){
        return this
    }

    calcValor(){
       return  this.valor = 5 + 2 * this.qtdHoras
    }
}