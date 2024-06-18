
export default class Funcionario{

    constructor(nome, endereco, cpf, telefone, senha, email){
        this.nome = nome, 
        this.endereco = endereco,
        this.cpf = cpf, 
        this.telefone = telefone, 
        this.senha = senha,
        this.email = email
    }

    getNome(){
        return this.nome
    }

    setNome(novoNome){
        this.nome = novoNome;
    }

    getEndereco(){
        return this.endereco
    }

    setEndereco(novoEndereco){
        this.endereco = novoEndereco
    }

    getCpf(){
        return this.cpf
    }

    setCpf(novoCpf){
        this.cpf = novoCpf
    }

    getTelefone(){
        return this.telefone
    }
    
    setTelefone(novoTelefone){
        this.telefone = novoTelefone
    }

    getSenha(){
        return this.senha
    }

    setSenha(novaSenha){
        this.senha = novaSenha
    }

    getEmail(){
        return this.email
    }

    setEmail(novoEmail){
        this.email = novoEmail
    }

}