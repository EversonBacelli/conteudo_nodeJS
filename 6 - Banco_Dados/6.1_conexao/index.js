// modulos externos
import express from "express"
import exphbs from "express-handlebars"
import mysql from "mysql"


// modulo interno
import conexao from "./src/DAO/conexao.js"


const app = express()
app.use(express.static("public"))

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
})

app.engine('handlebars', hbs.engine)
app.set("view engine", "handlebars")

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get("/home", (req, res) =>{
    
    const itens = ["item a","item b", "item c", "item d"]
    
    res.render("home", {itens})
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

    app.listen(5000, () => console.log("App rodando na porta 5000"))
})