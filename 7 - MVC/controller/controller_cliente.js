// modulo externo
import express from "express"

// modulo interno
import conexao from "./Conexao.js"
import { buscar_clientes } from "./dao_cliente/buscar_clientes.js"

const router_cliente = express.Router()
router_cliente.use(express.static("public"))

router_cliente.use(
    express.urlencoded({
        extended: true
    })
)

router_cliente.use(express.json())


router_cliente.get("/clientes", (req, res) => {
    buscar_clientes().then((data) => {
        console.log(data)
        res.render("listaDeClientes", {data: data})
    })
})


export default router_cliente