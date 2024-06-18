

let btn_fim_servico = document.querySelector(".btn_finalizar")

let valores = document.querySelectorAll(".res")

btn_fim_servico.addEventListener("click", (event)=>{
    event.preventDefault()
    let codigo = document.querySelector(".codigo")
    
    const servico = {
        codigo: codigo.value,
        hora_fim: valores[7].textContent,
        valor: valores[8].textContent
    }

    let url = "fecharServico"
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(servico)
    }

    fetch(url, options)
        .then((response)=>{
            return response.json()   
        })
        .then(response =>{
            console.log(response)
            let retorno = false
            if(!null){
                alert("Finalizado com sucesso")
                location.reload()
            }
        })
        .catch(err =>{
            console.log(err)
        })


    console.log(servico)
})