import conexao from "../Conexao.js";


export function buscar_clientes(a){
    
    return new Promise((resolve, reject) => {
        const pool = conexao()
        var query = "SELECT c.nome, c.sexo, c.cpf, c.dataNasc, c.cnh, v.modelo, v.modelo, v.marca, v.ano, v.placa, v.cor, v.qtdPortas, v.desempenho, v.quilometragem " 
        query += "FROM tbl_cliente c INNER JOIN tbl_carro v "
        query += "ON c.id_carro = v.id;"


        pool.query(query,  (err, data)=> {
            if(err){
                resolve(err)
            } 
           resolve(data)
        })
    })
}

