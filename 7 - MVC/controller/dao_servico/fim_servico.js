import conexao from "../Conexao.js";


export function fim_servico(sf){
    const pool = conexao()
    console.log(sf)                                                                                          
    const query = "UPDATE tbl_servico SET ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?"
    const info = ["hora_fim", sf.hora_fim ,"valor", sf.valor ,"status", false, "codigo", sf.codigo]

    return new Promise((resolve, reject)=>{
        pool.query(query, info, (err, data)=>{
            if(err){
                resolve(err)
            } else {
                resolve(data)
            }
        })
    })
    
}