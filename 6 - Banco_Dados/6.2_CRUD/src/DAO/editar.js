
import buscar from "./buscar.js"

export default function editar(conn, res, fornecedor){
    const query = `UPDATE fornecedores SET nome = '${fornecedor.nome}', email = '${fornecedor.email}' WHERE codigo = ${fornecedor.codigo}`
    conn.query(query, (err)=>{
        if(err){
            console.log(err)
            return
        }
        buscar(conn, res)
    })
}