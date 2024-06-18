
var inputDes = document.querySelector("#des")
var spanDes = document.querySelector(".span_des")

inputDes.addEventListener("input", (event) =>{
    spanDes.textContent = event.target.value
})



var inputKm = document.querySelector("#km")
var spanKm = document.querySelector(".span_km")

inputKm.addEventListener("input", (event) =>{
    spanKm.textContent = event.target.value
})
