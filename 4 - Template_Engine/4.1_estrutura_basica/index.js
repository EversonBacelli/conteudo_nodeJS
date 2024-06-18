// modulos externos
import express from "express"
import exphbs from "express-handlebars"

const app = express()

app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.get("/", (req, res) => {
    const user = {
        firstName: "Everson",
        lastName: "Bacelli",
    }
    res.render("home", {user: user})
})

app.get("/veiculo", (req, res) => {
    const carro = {
        ano: "2014",
        modelo: "Fox",
        marca: "VolksWagem", 
        placa: "ftz-3520"
    }

    res.render("veiculo", {carro: carro})
})



app.listen(3000, () => console.log("App rodando na porta 3000"))