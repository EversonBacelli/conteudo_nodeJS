
let btn_incluir = document.querySelector(".btn_incluir_servico")
console.log(btn_incluir)

btn_incluir.addEventListener("click", ()=>{
    console.log("POST")
    let url = "/incluirServico"
    let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(resp)
        }
        console.log(resp)
        fetch(url, options )
            .then( response =>{
                return response.json()
            })
            .then( response =>{
                console.log(response)
                sessionStorage.service = JSON.stringify(response)
                location.href = "http://localhost:2000/inseridoServicoSucesso"
            })
})


