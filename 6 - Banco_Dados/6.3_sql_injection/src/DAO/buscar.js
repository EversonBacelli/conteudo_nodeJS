
export default function buscar(pool, res){
    const query = "SELECT * FROM fornecedores"
    pool.query(query, (err, data)=> {
        if(err){
            console.log(err)
            return
        } 

        res.render("buscar", {data})
    })
}

export function buscarPorCodigo(pool, res, codigo){
    const query = ` SELECT * FROM fornecedores WHERE codigo = ?` 
    const cod = [codigo]
    pool.query(query, cod, (err, data)=> {
        if(err){
            console.log(err)
            return
        } 
        res.render("editar", {data})
    })
}