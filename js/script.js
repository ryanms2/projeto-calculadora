
const saida = document.getElementById("para")
console.log(saida.innerHTML)

function apaga() {
    saida.innerHTML = saida.innerHTML.substring(0, saida.innerHTML.length -1)
}

function limpar() {
    saida.innerHTML = ''
}

function calcular() {
    saida.innerHTML = eval(saida.innerHTML)
}


function botao(e) {
    saida.innerHTML += e
     
}


