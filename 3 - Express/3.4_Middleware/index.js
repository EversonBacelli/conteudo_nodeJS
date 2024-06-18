// modulo externo
import express from 'express';

// core module
import path from "path"
import url from "url"

const app = express()
const port = 3000

const end = path.resolve("./src/index.html")

const checkOut = function(req, res, next){
    
    const arrayInfo = req.originalUrl
    const auth = arrayInfo.includes("Everson")
    console.log(req)
   

    if (auth) {
        console.log("Está logado, pode acessar.")
        next()
    } else {
        console.log("Não está logado, bloqueado.")
    }
}

app.use(checkOut)

app.get("/:name", (req, res) => {
    res.sendFile(end)
})

app.listen(port, ()=>{console.log("Rodando na porta " + port)})