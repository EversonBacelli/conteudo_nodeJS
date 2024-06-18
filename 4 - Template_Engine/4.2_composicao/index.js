import express from "express"
import exphbs from "express-handlebars"

const app = express()

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

app.get("/dashboard", (req, res) =>{
    
    const itens = ["item a","item b", "item c", "item d"]
    
    res.render("dashboard", {itens})
})

app.get("/", (req, res) => {
    const user = {
        firstName: "Everson",
        lastName: "Bacelli",
    }

    const palavra = "teste"
    const auth = true
    
    res.render("home", {user: user, palavra, auth})
})

app.listen(3000, () => console.log("App rodando na porta 3000"))