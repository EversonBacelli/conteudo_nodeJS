import Cliente from "./Cliente.js";
import Carro from "./Carro.js";

export default class Cadastro{

    constructor(id_cliente, id_funcionario, data){
        this.id_cliente = id_cliente,
        this.data = data, 
        this.id_funcionario = id_funcionario,
        this.status = "Ativo"
    }

    getCliente(){
        return this.id_cliente
    }

    getStatus(){
        return this.status
    }

    setStatus(novoStatus){
        this.status = novoStatus
    }

    getIdFuncionario(){
        return this.id_funcionario
    }
}