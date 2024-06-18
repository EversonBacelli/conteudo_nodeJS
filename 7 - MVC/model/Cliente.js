
export default class Cliente{
    
    constructor(cpf, nome, sexo, dataNasc, cnh, endereco, veiculo){
        this.cpf = cpf;
        this.nome = nome,
        this.sexo = sexo,
        this.dataNasc = dataNasc,
        this.cnh = cnh, 
        this.endereco = endereco
        this.veiculo = veiculo
    }

    getNome(){
        return this.nome
    }

    setNome(novoNome){
        this.nome = novoNome
    }

    getSexo(){
        return this.sexo
    }

    getNasc(){
        return this.dataNasc
    }

    getCnh(){
        return this.cnh
    }

    getEndereco(){
        return this.endereco
    }

    setEndereco(novoEndereco){
        this.endereco = novoEndereco
    }

    getVeiculo(){
        return this.veiculo
    }

    setVeiculo(novoVeiculo){
        this.veiculo = novoVeiculo
    }
}