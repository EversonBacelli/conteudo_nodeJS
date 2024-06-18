// modulo externo
import express from 'express';

// core module
import path from "path";
import usersRouter from "./src/users/index.js";

const app = express()
const port = 3000



const addressFile = path.resolve("./src/page/users.html")
app.use("/users", usersRouter)


app.get("/", (req, res) => {
    res.sendFile(addressFile)
})

app.get("/", (req, res) => {
    res.sendFile(addressFile)
})



app.listen(port, ()=>{console.log("Rodando na porta " + port)})