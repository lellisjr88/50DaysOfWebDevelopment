let plus = document.getElementById('increment') //Seleciona o botão plus
let saida = document.getElementById('counter') //Seleciona o contador
let decrement = document.getElementById('decrement') //Seleciona o botão subtract
let zerar = document.getElementById('reset')//Seleciona o botão Reset
let count = 0 //Inicia o contador em 0


plus.addEventListener('click', function () {
    count ++
    saida.innerHTML = count
})

decrement.addEventListener('click', function(){
    if (count >0) {
        count--
        saida.innerHTML = count
    } 
})

zerar.addEventListener('click', function(){
    count = 0
    saida.innerHTML = count
})
