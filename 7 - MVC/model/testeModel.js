import Carro from "./Carro.js"
import Cliente from "./Cliente.js"
import Cadastro from "./Cadastro.js"
import Servico from "./Servico.js"
import Vaga from "./Vaga.js"

const fusca = new Carro(1974, "DXK9087", "Fusca", "VW", 8, 100, "Azul", 200000)
const cliente = new Cliente("GE", "Masc", "29.10.1986", 124333322, "Avenida Somos Todos Iguais n°15", fusca)
const cadastro = new Cadastro(1,"23.02.2023", 2)
const vaga = new Vaga(1, "Carro", "Disponível")

const servico = new Servico("22.04.2022", 6, cadastro, vaga)
console.log(servico.cadastro.cliente.veiculo)