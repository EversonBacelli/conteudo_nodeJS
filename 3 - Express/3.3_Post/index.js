// modulo externo
import express from 'express';

// core module
import path from "path"
import fs from "fs"

const app = express()
const port = 3000

const addressFile = path.resolve("./src/page/users.html")

// configurando o express para receber dados via BODY
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static("public"))

const addressFileForm = path.resolve("./src/page/form.html")

app.get("/users", (req, res) => {
    res.sendFile(addressFileForm)
})

const topo = path.resolve("./src/page/topo.html")
const fim = path.resolve("./src/page/fim.html")

app.post("/users", (req, res) => {
    const name = req.body.name
    const age = req.body.age
    const id = req.body.id

    fs.readFile(topo, (err, data)=> {
        res.write(data)
    })

    res.write("<H1> Pre-Cadastro </H1>")
    res.write(`<p> NAME: ${id} </p>`)
    res.write(`<p> AGE: ${name} </p>`)
    res.write(`<p> ID:  ${id} </p>`)


    fs.readFile(fim, (err, data)=> {
        res.write(data)
    })
})

app.listen(port, ()=>{console.log("Rodando na porta " + port)})