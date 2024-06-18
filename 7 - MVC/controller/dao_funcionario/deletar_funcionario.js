import conexao from "../Conexao.js"
import { buscarFuncionarios } from "./buscar_funcionarios.js"

export function deletarFuncionario(res, id){
    const query = `DELETE FROM tbl_funcionario WHERE id_funcionario = ${id}`
    const pool = conexao()

    pool.query(query, (err)=>{
        if(err){
            console.log(err)
            return err
        }

        buscarFuncionarios(res)
    })
}