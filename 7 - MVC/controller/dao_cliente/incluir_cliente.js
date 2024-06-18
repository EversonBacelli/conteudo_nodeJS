
import conexao from "../Conexao.js"


export function incluir_cliente(body){

    return new Promise(
        (resolve, reject) => {
            const {nome, endereco, cpf, telefone, senha, email} = body
            const pool = conexao()
            const query = `INSERT INTO tbl_funcionario (??, ??, ??, ??, ??, ??) values (?,?,?,?,?,?)`
            const data = ["nome", "endereco", "cpf", "telefone", "senha", "email",  nome, endereco, cpf, telefone, senha, email]
            
            pool.query(query,data, (err, data)=>{
                if(err){
                    resolve(err)
                } else {
                    resolve(data)
                }
            })
        }
    )

    
}