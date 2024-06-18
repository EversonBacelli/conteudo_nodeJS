// modulo externo
import express from 'express';

// core module
import path from "path";

const router = express.Router()

// ler o body da requisição no formato de json
router.use(
    express.urlencoded({
        extended: true
    })
)

router.use(express.json())
//

// É importante indicar o endereço do arquivo desde a raiz do projeto
const addressFile = path.resolve("./src/page/users.html")
const addressFileForm = path.resolve("./src/page/form.html")

router.get("/", (req, res) => {
    res.sendFile(addressFileForm)
})

router.post("/", (req, res) => {
    console.log(req.body)
    res.sendFile(addressFile)
})


const checkOut = function(req, res, next){
    req.authStatus = true

    if (req.authStatus) {
        console.log("Está logado, pode acessar.")
        next()
    } else {
        console.log("Não está logado, bloqueado.")
    }
}

router.use(checkOut)

router.get("/:id", (req, res) => {
    const id = req.params.id
    console.log(`Estamos em busca do usuário com id ${id}`)

    res.sendFile(addressFile)
})

export default router;