import conexao from "../Conexao.js";


export function  buscarFuncionarios(res){
    const pool = conexao()
    const query = `SELECT * FROM tbl_funcionario;` 
    
    pool.query(query,  (err, data)=> {
        if(err){
            console.log(err)
            
        } 
        //console.log(data)
        res.render("gestaoFuncionario", {data: data})
        
    })
}
