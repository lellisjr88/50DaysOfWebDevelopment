
const celsius = parseFloat(prompt('Informe a temperatura em Grau Celsius: '))

function fahrenheit(value){
    value = (celsius * 9/5) + 32
    return value
}

alert('A temperatura convertida de Grau Celsius para Fahrenheit é: ' + fahrenheit())