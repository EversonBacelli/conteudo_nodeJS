
import conexao from "../Conexao.js";

export function buscar_servico_status(status){
    const pool = conexao()

    const query = `SELECT  ??, ??, ??, ??, ??, ??, ??, ??, ??, ??, ??
    FROM tbl_servico s
    INNER JOIN tbl_cliente c
    ON s.id_cliente = c.id_cliente
    INNER JOIN tbl_carro v
    ON c.id_carro = v.id
    WHERE s.status = ?
    ;`

    const infos = [
        "s.codigo", "c.cpf", "c.nome", "v.modelo", "v.marca", "v.placa", "v.ano", "s.hora_inicio", "s.data", "s.hora_fim", "s.valor", status
    ]   

    return new Promise((resolve, reject)=>{
        pool.query(query, infos, (err, data)=>{
            if(err){
                resolve(err)
            } 
                resolve(data)
        })
    })

}