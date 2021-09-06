const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dados.txt')

fs.readFile(caminho, (err, conteudo) => console.log(conteudo.toString()))

console.log(fs.readFileSync(caminho).toString())