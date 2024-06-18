
let service = JSON.parse(sessionStorage.service)

let tds = document.querySelectorAll("tbody td")

console.log(service)

tds[0].textContent = service.id_service
tds[1].textContent = service.cpf
tds[2].textContent = service.nome
tds[3].textContent = service.modelo
tds[4].textContent = service.marca
tds[5].textContent = service.placa
tds[6].textContent = service.ano
tds[7].textContent = service.hora






