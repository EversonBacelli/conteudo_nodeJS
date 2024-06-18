
// modulo externo
import express from "express"

// modulo interno
import conexao from "./Conexao.js"

import { buscar_clientes } from "./dao_cliente/buscar_clientes.js"
import Carro from "../Model/Carro.js"
import Cliente from "../Model/Cliente.js"
import Cadastro from "../Model/Cadastro.js"
import Funcionario from "../Model/Funcionario.js"
import { incluir_carro } from "./dao_carro/incluirCarro.js"
import { incluir_cliente } from "./dao_cliente/incluir_cliente.js"
import { incluir_cadastro } from "./dao_cadastro/incluir_cadastro.js"

const router_cadastro = express.Router()
router_cadastro.use(express.static("public"))

router_cadastro.use(
    express.urlencoded({
        extended: true
    })
)

router_cadastro.use(express.json())

router_cadastro.get("/cadastroCliente", (req, res) => {
    res.render("formCadastroCliente")
})

// realizarCadastro - Back
router_cadastro.post("/cadastroCliente", async (req, res) => {
    const body = req.body
    const carro = new Carro(body.modelo, body.marca, body.ano, body.placa, body.cor, body.qtdPortas, body.desempenho, body.quilometragem)
    const cliente = new Cliente(body.cpf, body.nome, body.sexo, body.dataNasc, body.cnh, body.endereco, carro);
    const date = new Date();
    const cadastro = new Cadastro(cliente.id, 19, date.getDate())


    incluir_cadastro(cliente)

})

export default router_cadastro