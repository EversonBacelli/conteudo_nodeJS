import conexao from "../Conexao.js"
import { buscarFuncionarios } from "./buscar_cliente.js"


export function editar_cliente(res, body){
    const {nome, endereco, cpf, telefone, senha, email} = body
    const pool = conexao()
    const query = `UPDATE tbl_funcionario SET nome = ?, endereco = ?, cpf = ?, telefone = ?, senha = ?, email = ? WHERE cpf = ?`
    const data = [nome, endereco, cpf, telefone, senha, email, cpf]
    
    pool.query(query, data, (err)=>{
        if(err){
            console.log(err)
            res.render("erro")
        }
        buscarFuncionarios(res)
    })
}