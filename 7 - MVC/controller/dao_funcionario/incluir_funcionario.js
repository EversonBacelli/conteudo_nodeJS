
import conexao from "../Conexao.js"
import { buscarFuncionarios } from "./buscar_funcionarios.js"


export function incluirFuncionario(res, body){
    const {nome, endereco, cpf, telefone, senha, email} = body
    const pool = conexao()
    const query = `INSERT INTO tbl_funcionario (??, ??, ??, ??, ??, ??) values (?,?,?,?,?,?)`
    const data = ["nome", "endereco", "cpf", "telefone", "senha", "email",  nome, endereco, cpf, telefone, senha, email]
    
    pool.query(query,data, (err)=>{
        if(err){
            console.log(err)
        } else {
            buscarFuncionarios(res)
        }
    })
}