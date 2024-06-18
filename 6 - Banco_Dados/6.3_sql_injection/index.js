// modulos externos
import express from "express"
import exphbs from "express-handlebars"

// modulo interno
import rotas from "./src/routers/index.js"
import conexao from "./src/DAO/conexao.js"

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



app.listen(4000, () => console.log("App rodando na porta 4000"))

