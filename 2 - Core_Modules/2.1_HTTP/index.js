// import module externo
const http = require("http")

// Porta que o servidor ficará escutando
const port = 3000


const server = http.createServer((req, res)=>{
   res.statusCode = 200

   res.setHeader("Contenty-Type", "text/html")

   res.write("<H1> Primeira página HTML com NODE </H1>")
   res.end("<p> Ola Mundo </p>")
})

server.listen(port, ()=> {
    console.log(`Servidor rodando na porta: ${port}`)
})