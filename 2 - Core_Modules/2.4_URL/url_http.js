const http = require("http")
const url = require("url")

const port = 3000

const server = http.createServer((req, res)=>{

    console.log("cheguei")
    const urlInfo = url.parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200

   res.setHeader("Contenty-Type", "text/html")

    res.write("<H1> Preencha o seu nome </H1>")

    if(!name){
        res.end( 
            "<form method='GET' action='http://localhost:3000/'>" +
                "<label>Nome</label>" +
                "<br>" +
                "<input type='text' name='name' />" +

                "<br>" +
                "<input type='submit' value='ENVIAR'/>" +
            "</form>"
        )
    } else {
        res.end(`<H1>Seja bem vindo ${name}</H1>`)
    }

})

server.listen(port, ()=> {
    console.log(`Servidor rodando na porta: ${port}`)
})