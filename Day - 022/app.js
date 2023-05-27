let userNum1 = document.getElementById('userNum1')//Seleciona o elemento no HTML
let userNum2 = document.getElementById('userNum2')//Seleciona o elemento no HTML
let operator = document.getElementById('operator')//Seleciona o elemento no HTML
let calculateButton = document.getElementById('calculate')//Seleciona o elemento no HTML
let resultDiv = document.getElementById('result')//Seleciona o elemento no HTML

calculateButton.addEventListener('click', function(){
    let num1 = Number(userNum1.value)//Cria uma variável, para armazenar o valor que o usuário digitar
    let num2 = Number(userNum2.value)
    let op = operator.value
    let result 

    switch (op) {
        case "+":
            result = num1 + num2
            break;
        case "-":
           result = num1 - num2
           break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break
        default:
            result = 'Invalid Operator'
    }
    resultDiv.innerHTML = 'The result is: ' + result
})