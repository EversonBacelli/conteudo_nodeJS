// modulo interno
import buscar from "./buscar.js"

export default function del(conn, res, codigo){
    const query = `DELETE FROM fornecedores WHERE codigo = ${codigo}`

    conn.query(query, (err)=>{
        if(err){
            console.log(err)
            return err
        }

        buscar(conn, res)
    })
}