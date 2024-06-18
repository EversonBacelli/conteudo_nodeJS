import express from 'express';
import path from "path"


const app = express()
const port = 3000

const endHtml = path.resolve("./index.html")


app.get("/", (req, res) => {
    res.send("Ola Mundo")
})

app.get("/home", (req, res) => {
    res.sendFile(endHtml)
})

app.listen(port, ()=>{console.log("Rodando na porta " + port)})