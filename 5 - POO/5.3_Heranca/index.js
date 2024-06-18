import Conta from "./Conta.js";


// A partir de uma classe principal, é possível aproveitar o seu código para dar origem 
// a outras, minimizando a repetição de código.
class ContaPoupanca extends Conta{ 
    rendimento(){
        this.saldo *= 1.05
    }
}

class ContaConcorrente extends Conta{
    taxaServicoMensal(){
        this.saldo -= 20
    }
}

const cp1 = new ContaPoupanca(12, "XDSR9989", "Carlos Henrique", 700, "13/04/2040")
const cp2 = new ContaConcorrente(15, "XDSR4349", "João Daniel", 700, "13/04/2040")


console.log(`Numero da Conta Poupança ${cp1.numero} está com saldo de ${cp1.saldo}` )
cp1.rendimentoMensal()
console.log(`Numero da Conta Poupança ${cp1.numero} está com saldo de ${cp1.saldo}` )


console.log(`Numero da Conta Corrente ${cp2.numero} está com saldo de ${cp2.saldo}` )
cp2.taxaServico()
console.log(`Numero da Conta Corrente ${cp2.numero} está com saldo de ${cp2.saldo}` )