
import conexao from "../Conexao.js"

export function incluir_carro(c){
    const pool = conexao()

    return new Promise(
        (resolve, reject) => {
            const query = `INSERT INTO tbl_carro (??, ??, ??, ??, ??, ??, ??, ??) values (?,?,?,?,?,?,?,?)`
            const itens = ["modelo", "marca", "ano", "placa", "cor", "qtdPortas", "desempenho", "quilometragem", c.modelo, c.marca, c.ano, c.placa, c.cor, c.qtdPortas, c.desempenho, c.quilometragem]
            
            pool.query(query, itens, (err, data)=>{
                if(err){
                    resolve(err)
                } else {
                    resolve(data)
                }
            })
        }
    )
    

}