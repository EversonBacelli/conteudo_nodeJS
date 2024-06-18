// modulo externo
import express, { response } from "express"

// modulo interno
import conexao from "./Conexao.js"
import { buscarFuncionarios } from "./dao_funcionario/buscar_funcionarios.js"
import { incluirFuncionario } from "./dao_funcionario/incluir_funcionario.js"
import { deletarFuncionario } from "./dao_funcionario/deletar_funcionario.js"
import { editarFuncionario } from "./dao_funcionario/editar_funcionario.js"

const router_funcionario = express.Router()
router_funcionario.use(express.static("public"))

router_funcionario.use(
    express.urlencoded({
        extended: true
    })
)

router_funcionario.use(express.json())


router_funcionario.get("/gestaoFuncionario",  (req, res) => {
    buscarFuncionarios(res)
})

router_funcionario.post("/gestaoFuncionario", (req, res) => {
     incluirFuncionario(res, req.body)   
})

router_funcionario.get("/deletarFuncionario/:id", (req, res) =>{
    deletarFuncionario(res, req.params.id)
})

router_funcionario.get("/editarFuncionario", (req, res) => {
    res.render("editarFuncionarios")
})

router_funcionario.post("/editarFuncionario", (req, res) => {
    console.log(req.body)
    editarFuncionario(res, req.body)
})

export default router_funcionario

