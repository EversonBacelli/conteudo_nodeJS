// modulo interno
import buscar from "./buscar.js"

export default function del(pool, res, codigo){
    const query = `DELETE FROM fornecedores WHERE codigo = ${codigo}`

    pool.query(query, (err)=>{
        if(err){
            console.log(err)
            return err
        }

        buscar(pool, res)
    })
}