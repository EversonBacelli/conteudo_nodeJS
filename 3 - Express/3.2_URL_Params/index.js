// module externo
import express from 'express';

// module interno
import path from "path"


const app = express()
const port = 3000

const endHtml = path.resolve("./index.html")


app.get("/:nome", (req, res) => {
    const nome = req.params.nome
    console.log(nome)
    res.send(`Meu nome é: ${nome}`)
})

app.get("/home/:id", (req, res) => {
    const id = req.params.id 
    console.log(id)
    res.sendFile(endHtml)
})

app.listen(port, ()=>{console.log("Rodando na porta " + port)})