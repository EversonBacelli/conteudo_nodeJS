// modulo externo
import express, { response } from "express"

// modulo interno
import { buscar_cliente_cpf } from "./dao_cliente/buscar_cliente_cpf.js"
import { incluir_servico } from "./dao_servico/incluir_servico.js"
import { buscar_servico_codigo } from "./dao_servico/buscar_servico_codigo.js"
import { fim_servico } from "./dao_servico/fim_servico.js"
import { buscar_servico_status } from "./dao_servico/buscar_servico_status.js"


const router_service = express.Router()
router_service.use(express.static("public"))

router_service.use(
    express.urlencoded({
        extended: true
    })
)

router_service.use(express.json())


router_service.get("/incluirService", (req, res) =>{
    res.render("incluirServico")
})

router_service.get("/buscarCliente/:cpf", (req, res)=> {
    const cpf = req.params.cpf
    
    buscar_cliente_cpf(cpf).then((answers)=>{
        res.json(answers)

    }).catch((err)=>{
        console.log(err)
    })

})

router_service.post("/incluirServico", (req, res)=> {
    const body = req.body[0]
    incluir_servico(body)
        .then(answers =>{
            
            
            const service = {
                id_service: answers.insertId,
                cpf: body.cpf, 
                nome: body.nome,
                modelo: body.modelo,
                marca: body.marca,
                placa: body.placa,
                ano: body.ano, 
                hora: body.hora, 
                data: body.data
            }
            
            res.json(service)
        })
        .catch(err =>{
            console.log(err)
        })
})

router_service.get("/finalizarServico", (req, res)=>{
    res.render("finalizarServico")
})

router_service.post("/finalizarServico", (req, res)=>{
    const codigo = req.body.value
    buscar_servico_codigo(codigo)
        .then((answers)=>{
            res.json(answers)
        })
        .catch(err => res.json(err))
})

router_service.post("/fecharServico", (req, res)=>{
    let body = req.body
    let valor = (body.valor).slice(4)
    

    const sf = {
        codigo: body.codigo,
        valor: parseFloat(valor),
        hora_fim: body.hora_fim,
    }

    console.log(sf)




    fim_servico(sf)
        .then(answers =>{
            res.json(answers)
        })
        .catch(err =>{
             console.log(err)
        })
})

router_service.get("/inseridoServicoSucesso", (req, res)=>{
    res.render("inseridoServicoSucesso")
})

router_service.get("/relatorio", async (req, res)=>{
    const aberto = await buscar_servico_status(1)
    const fechado = await buscar_servico_status(0)

    res.render("relatorio", {aberto: aberto, fechado: fechado})
})

export default router_service