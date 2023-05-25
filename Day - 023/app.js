let number = document.getElementById('start') 
let number2 = document.getElementById('end')
let button = document.getElementById('show')
let output = document.getElementById('output')

button.addEventListener('click', function(){
    let begin = Number(number.value)
    let end = Number(number2.value)

    let i = begin
    let saida = 0;

    while (i <= end) {
        if (i % 2 == 0) {
           saida = saida + i + ' '
           output.innerHTML = saida
           
        }
        i++ //Acrescenta mais um ao loop do while que foi iniciado.
    }
        
})
