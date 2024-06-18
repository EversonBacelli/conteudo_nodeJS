import mysql from "mysql"

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost", 
    user: "root", 
    senha: "", 
    database: "db_teste"
})

export default pool;