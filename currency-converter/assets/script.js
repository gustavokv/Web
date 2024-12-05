let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

let dolar = 6.1, type

usdInput.addEventListener("keydown", () => {
    type = 'd_to_r'
    convert(type)
})

brlInput.addEventListener("keydown", () => {
    type = 'r_to_d'
    convert(type)
})

function convert(type){
    if(type == 'd_to_r'){
        usdInput.value = usdInput.value.replace(',', '.')
        brlInput.value = (usdInput.value * dolar).toFixed(2)
    }
    else{
        brlInput.value = brlInput.value.replace(',', '.')
        usdInput.value = (brlInput.value / dolar).toFixed(2)
    }
}