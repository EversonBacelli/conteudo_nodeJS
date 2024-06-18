
class Conta {
    
    constructor(numero, senha, nomeTitular, saldo, validade){
        this._numero = numero
        this.senha = senha
        this.nomeTitular = nomeTitular
        this.saldo = saldo
        this.validade = validade
    }

    aumentarSaldo(valor){
        this.saldo += valor
    }

    diminuirValor(valor){
        this.saldo -= valor
    }

    saldo(){
        return this.saldo
    }
}

const conta1 = new Conta(123456, "senha123", "João Silva", 1000, "2024-12-31");
const conta2 = new Conta(789012, "senha456", "Maria Santos", 500, "2025-06-30");
const conta3 = new Conta(345678, "senha789", "Carlos Oliveira", 1500, "2023-09-15");
const conta4 = new Conta(901234, "senhaabc", "Ana Souza", 200, "2026-03-20");
const conta5 = new Conta(567890, "senhaxyz", "Pedro Almeida", 800, "2024-11-05");

console.log(conta1._numero)