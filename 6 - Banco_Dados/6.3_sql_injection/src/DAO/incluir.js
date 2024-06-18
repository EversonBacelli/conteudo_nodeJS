import buscar from "./buscar.js"

export default function incluir(pool, res, f){
    const query = `INSERT INTO fornecedores (??, ??, ??) values (?,?,?)`
    const data = ["codigo", "nome", "email", f.codigo, f.nome, f.email]
    
    pool.query(query,data, (err)=>{
        if(err){
            console.log(err)
        } else {
            buscar(pool, res)
        }
    })
}