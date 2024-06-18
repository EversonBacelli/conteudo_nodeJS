

const funcionario = JSON.parse(sessionStorage.funcionario)
console.log(funcionario)

var inputs = document.querySelectorAll("input")
inputs[0].value = funcionario.nome
inputs[1].value = funcionario.endereco
inputs[2].value = funcionario.cpf
inputs[3].value = funcionario.telefone
inputs[4].value = funcionario.senha
inputs[5].value = funcionario.email
