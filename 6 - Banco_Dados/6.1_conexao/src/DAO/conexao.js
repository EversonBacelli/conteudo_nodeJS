import mysql from "mysql"


export default function conexao(){
    const conn = mysql.createConnection({
        host: 'localhost', 
        //port: '3306',
        user: 'root', 
        senha: '', 
        database: 'db_teste', 
        //insecureAuth : true
    })

    return conn
}