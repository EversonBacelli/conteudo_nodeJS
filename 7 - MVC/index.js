// modulo externo
import express from "express"
import exphbs from "express-handlebars"
import mysql from "mysql"

// modulo interno
import Carro from "./Model/Carro.js"
import Cliente from "./Model/Cliente.js"
import Cadastro from "./Model/Cadastro.js"
import conexao from "./controller/Conexao.js"
import router_cliente from "./controller/controller_cliente.js"
import router_funcionario from "./controller/controller_funcionario.js"
import router_cadastro from "./controller/controller_cadastro.js"
import router_service from "./controller/controller_servico.js"
import { buscarPorCodigo } from "./controller/dao_funcionario/buscar_funcionario.js"

const app = express()
const porta = 2000



const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set("view engine", "handlebars")

//middleware
app.use(express.static("public"))
app.use("/", router_cliente)
app.use("/", router_funcionario)
app.use("/", router_cadastro)
app.use("/", router_service)

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

const poll = conexao()

app.get("/login", (req, res) => {
    res.render("formLogin")
 })
 
app.post("/login", async (req, res) => {
     const body = req.body
     const pool = conexao()
 
     const data = await buscarPorCodigo(pool, body)
     console.log(data)
    
 
     if(true){
         console.log(true)
         sessionStorage.x = "true"
         res.render("home")
     } else {
         console.log(false)
         sessionStorage.x = "false"
         res.render("erro")
     }
     
     // res.render("formLogin")
 })

app.get("/home", (req, res) => {
    res.render("home")
})

poll.getConnection((err)=> {
    if(err){
        console.log(err)
    } else{
        console.log("Conexão está funcionando")
    }
    app.listen(porta, () => console.log("App rodando na porta 2000"))
})

