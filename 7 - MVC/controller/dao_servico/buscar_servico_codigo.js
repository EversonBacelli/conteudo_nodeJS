
import conexao from "../Conexao.js";

export function buscar_servico_codigo(codigo){
    const pool = conexao()

    const query = `SELECT  ??, ??, ??, ??, ??, ??, ??, ??, ??
    FROM tbl_servico s
    INNER JOIN tbl_cliente c
    ON s.id_cliente = c.id_cliente
    INNER JOIN tbl_carro v
    ON c.id_carro = v.id
    WHERE codigo = ?; `

    const infos = [
        "s.hora_inicio", "s.milissegundos" ,"s.id_funcionario","c.cpf", "c.nome", "v.modelo", "v.marca", "v.placa", "v.ano", codigo
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