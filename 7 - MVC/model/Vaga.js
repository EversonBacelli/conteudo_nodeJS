

export default class Vaga{

    constructor(numero, tipo, status){
        this.numero = numero,
        this.tipo = tipo, 
        this.status = status
    }

    getVaga(){
        return this
    }

    setStatus(novoStatus){
        this.status = novoStatus
    }

}