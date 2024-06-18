


export function buscarPorCodigo(pool, credenciais){
    //senha = 'Abc@1234'
    //email = 'joao1234@empresa.com'
    const query = `SELECT * FROM tbl_funcionario where email = ? and  senha = ?` 
    
    const info = [credenciais.email, credenciais.senha]
    console.log(credenciais)
    console.log(query)

    return new Promise(
        (resolve, reject)=>{
            pool.query(query, info,  (err, data)=> {
                if(err){
                    console.log(err)
                    return resolve(false)
                } 
                console.log(data)
                return resolve(true)
            })
        })  
}