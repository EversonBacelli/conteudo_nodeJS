import conexao from "../Conexao.js";


export function buscar_cliente(pool, id_carro, credenciais){
    //senha = 'Abc@1234'
    //email = 'joao1234@empresa.com'
    const query = `SELECT * FROM tbl_carro where id_carro = ?` 
    
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
