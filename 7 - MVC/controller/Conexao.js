import mysql from "mysql"

export default function conexao(){
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost", 
        user: "root", 
        senha: "", 
        database: "db_estacionamento"
    })
    
    return pool
}
