import conexao from "../Conexao.js";


export function incluir_servico(servico){
    const pool = conexao()
    console.log(servico)
    
    const query = "INSERT INTO tbl_servico (??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    const info = ["id_cliente", "id_funcionario", "hora_inicio", "hora_fim", "milissegundos", "valor", "status","data", servico.id_cliente, 6, servico.hora, "", servico.milissegundos, 0.0, true, servico.data]

    return new Promise((resolve, reject)=>{
        pool.query(query, info, (err, data)=>{
            if(err){
                resolve(err)
            } else {
                resolve(data)
            }
        })
    })
    
}