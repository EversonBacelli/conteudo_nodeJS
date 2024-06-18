// modulos externos
import express from "express"
import exphbs from "express-handlebars"
import mysql from "mysql"


// modulo interno
import conexao from "./src/DAO/conexao.js"
import buscar from "./src/DAO/buscar.js"
import rotas from "./src/routers/index.js"


const app = express()
app.use(express.static("public"))

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set("view engine", "handlebars")

app.use("/crud", rotas)

app.get("/home", (req, res) =>{
    
    res.render("home")
})

app.get("/", (req, res) => {
    res.write("Primeira rota")
})

const conn = conexao()

conn.connect((err)=> {
    if(err){
        console.log(err)
    } else{
        console.log("Conexão está funcionando")
    }

    app.listen(3000, () => console.log("App rodando na porta 3000"))
})

