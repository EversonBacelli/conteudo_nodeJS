

var tds_editar = document.querySelectorAll("#td_editar")



tds_editar.forEach(td => {
    td.onclick = editar
    
})


function editar(e){
    const tds = (e.target.parentNode.parentNode).children
    
    const funcionario = {
        nome: tds[0].textContent,
        endereco: tds[1].textContent,
        cpf: tds[2].textContent,
        telefone: tds[3].textContent,
        senha: tds[4].textContent,
        email: tds[5].textContent
    }

    //console.log(funcionario)
    sessionStorage.funcionario = JSON.stringify(funcionario)

    document.location.href = "/editarFuncionario"

}



