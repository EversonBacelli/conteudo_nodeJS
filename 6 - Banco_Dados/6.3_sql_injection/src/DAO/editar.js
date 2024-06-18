
import buscar from "./buscar.js"

export default function editar(pool, res, fornecedor){
    const query = `UPDATE fornecedores SET nome = ?, email = ? WHERE codigo = ?`
    const data = [fornecedor.nome, fornecedor.email, fornecedor.codigo]
    pool.query(query, data, (err)=>{
        if(err){
            console.log(err)
            return
        }
        buscar(pool, res)
    })
}