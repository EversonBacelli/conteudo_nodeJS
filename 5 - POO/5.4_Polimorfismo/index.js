import Conta from "./Conta.js";


// Em uma tradução literal, polimorfismo significa multiplas formas. Em programação a objetos
// significa que é possível que classes que herdam dados métodos possam apresentar
// comportamento diferente daquela classe de origem.

class ContaPoupanca extends Conta{ 
    rendimento(){
        this.saldo *= 1.05
    }
}

class ContaConcorrente extends Conta{
    // sobrescrita
    diminuirValor(valor){
        super.diminuirValor(valor)
        this.saldo -= 0.05
    }

    taxaServicoMensal(){
        this.saldo -= 20
    }
}

const cp1 = new ContaConcorrente(12, "XDSR9989", "Carlos Henrique", 700, "13/04/2040")
const cp2 = new ContaConcorrente(15, "XDSR4349", "João Daniel", 1000, "13/04/2040")

cp2.diminuirValor(500)
console.log(`Numero da Conta Corrente ${cp2.numero} está com saldo de ${cp2.saldo}` )

console.log(Conta.retornaDadosContas())