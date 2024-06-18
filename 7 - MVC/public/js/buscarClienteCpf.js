
let input_cpf = document.querySelector("#cpf")
let btn_buscar_servico = document.querySelector(".btn_buscar_cliente")
let label_res = document.querySelectorAll(".res")

let resp = null

btn_buscar_servico.addEventListener("click", () => {
    
    console.log(input_cpf.value)
    
    let url = `/buscarCliente/${input_cpf.value}`

    fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then( response => {
            const today = new Date(Date.now());
            resp = response
            label_res[0].textContent = response[0].nome
            label_res[1].textContent = response[0].modelo
            label_res[2].textContent = response[0].marca
            label_res[3].textContent = response[0].placa
            label_res[4].textContent = response[0].ano
            const data = today.toLocaleDateString()
            const hora = today.getHours() + " : " + today.getMinutes()
            label_res[5].textContent = data
            label_res[6].textContent = hora
            resp[0].data = today.toLocaleDateString()
            resp[0].hora = today.getHours() + " : " + today.getMinutes()
            resp[0].cpf = input_cpf.value
            resp[0].milissegundos = today.getTime()
            console.log(typeof(resp[0]).milissegundos)
        })
})