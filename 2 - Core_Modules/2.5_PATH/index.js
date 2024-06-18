const path = require("path")

// caminho absoluto
console.log(path.resolve("arquivo.txt"))

// caminho dinâmico
const midFolder = "relatorios"
const fileName = "matheus.txt"

const finalPath = path.join("/", "arquivos", midFolder, fileName)

console.log(finalPath)