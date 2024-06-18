// modulo externo
import express from 'express';

// core module
import path from "path";

// internal module
import buscar from '../DAO/buscar.js';
import {buscarPorCodigo} from '../DAO/buscar.js';
import conexao from '../DAO/conexao.js';
import editar from '../DAO/editar.js';
import del from '../DAO/delete.js';
import incluir from '../DAO/incluir.js';

const router = express.Router()

const conn = conexao()
// ler o body da requisição no formato de json
router.use(
    express.urlencoded({
        extended: true
    })
)

router.use(express.json())

router.get("/buscar", (req, res) =>{
    buscar(conn, res)
})

router.get("/incluir", (req, res) => {
    res.render("incluir")
})

router.post("/incluir", (req, res)=>{
    console.log(req.body)

    const fornecedor = {
        codigo: req.body.codigo, 
        nome: req.body.nome, 
        email: req.body.email
    }

    incluir(conn, res, fornecedor)

})

router.get("/editar/:codigo", (req, res)=> {
    const codigo = req.params.codigo
    buscarPorCodigo(conn, res, codigo)
})

router.post("/editar", (req, res)=>{
    console.log(req.body)
    const upFornecedor = {
        codigo: req.body.codigo,
        nome: req.body.nome,
        email: req.body.email
    }
    editar(conn, res, upFornecedor)
})

router.get("/delete/:codigo", (req, res)=>{
    const codigo = req.params.codigo
    del(conn, res, codigo)
})

export default router;