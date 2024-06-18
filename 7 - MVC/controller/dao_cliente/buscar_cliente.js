import conexao from "../Conexao.js"

export function buscar_cliente(cpf){
    const pool = conexao()
    const query = `SELECT * FROM tbl_funcionario where email = ? and  senha = ?` 
    
    const info = [credenciais.email, credenciais.senha]
    console.log(credenciais)
    console.log(query)

    pool.query(query, info,  (err, data)=> {
        if(err){
            console.log(err)
            return
        } 
        console.log(data)
        return data
    })
}