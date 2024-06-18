import conexao from "../Conexao.js"
import { buscarFuncionarios } from "./buscar_cliente.js"

export function deletar_cliente(res, id){
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