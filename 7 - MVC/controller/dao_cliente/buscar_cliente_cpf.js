import conexao from "../Conexao.js"

export function buscar_cliente_cpf(cpf){
    const pool = conexao()
    const query = `SELECT ??, ??, ??, ??, ??, ??, ??  FROM tbl_cliente c
    INNER JOIN tbl_carro v
    on c.id_carro = v.id
    Where cpf = ?;` 
    console.log(cpf)
    
    return new Promise((resolve, reject)=> {
        const info = ["c.id_cliente", "c.nome", "v.id", "v.modelo", "v.marca", "v.placa", "v.ano", cpf]
        console.log(query)
    
        pool.query(query, info,  (err, data)=> {
            if(err){
                resolve(err)
            } 
            resolve(data)
        })
    })

}