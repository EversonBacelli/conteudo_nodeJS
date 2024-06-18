
let codigo = document.querySelector(".codigo")
let btn_dados = document.querySelector(".btn_servico")

btn_dados.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(codigo.value)
    let cod = {
        value: codigo.value
    }
    let url = "/finalizarServico"

    let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(cod)
        }
    
        fetch(url, options )
            .then( response =>{
                
                return response.json()
            })
            .then( response =>{
                preencherDados(response)
                console.log(response)
            })
})

function preencherDados(response){
    let res = document.querySelectorAll(".res")
    let itens = ["cpf", "nome", "modelo", "marca", "placa", "ano", "hora_inicio"]
    let cont = 0
    const today = new Date(Date.now());
 
    res[0].textContent = response[0].cpf
    res[1].textContent = response[0].nome
    res[2].textContent = response[0].modelo
    res[3].textContent = response[0].marca
    res[4].textContent = response[0].placa
    res[5].textContent = response[0].ano
    res[6].textContent = response[0].hora_inicio
    
    let hora_fim = `${today.getHours()} : ${today.getMinutes()}`
    let diff =Math.ceil( ((today.getTime() - response[0].milissegundos) / (1000*60)).toFixed(0) )
    res[7].textContent = hora_fim
   
    let t = Math.ceil((diff/60).toFixed(0)) * 12
    let valor = t == 0 ? 12 : t
    
    res[8].textContent = ` R$ ${valor}`
    console.log(valor)
}