const fs = require("fs")
const http = require("http")
const port = 3000

const server = http.createServer((req, res)=>{
    fs.readFile('topo.html', (err, data)=> {
        res.write(data)
    })

    res.write("<h1>Criando uma página dinamicamente com NODE</h1>")

    fs.readFile('fim.html', (err, data)=> {
        res.write(data)
    })


})

server.listen(port, ()=> {
    console.log(`Servidor rodando na porta: ${port}`)
})