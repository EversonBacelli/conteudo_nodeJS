
export default function buscar(conn, res){
    const query = "SELECT * FROM fornecedores"
    conn.query(query, (err, data)=> {
        if(err){
            console.log(err)
            return
        } 

        res.render("buscar", {data})
    })
}

export function buscarPorCodigo(conn, res, codigo){
    const query = "SELECT * FROM fornecedores WHERE codigo = " + codigo
    conn.query(query, (err, data)=> {
        if(err){
            console.log(err)
            return
        } 
        res.render("editar", {data})
    })
}