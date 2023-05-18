// Resolução do Professor

let randomNumber = Math.floor(Math.random() * 100) //Gera um número randomico inteiro de 1 até 100
let tries = 0
console.log(randomNumber)


let button = document.getElementById('checkGuess')

button.addEventListener('click',function(){
   let guess = document.getElementById('guess').value;  
   let message = document.getElementById('message')
   tries ++

    if (guess == randomNumber) {
        message.innerHTML = 'Parabéns, você acertou o número sorteado! ' + 'Número de tentativas ' + tries
    }
    else if(guess < randomNumber){
        message.innerHTML = 'Número abaixo. Tente de novo'
    }
    else if(guess > randomNumber){
        message.innerHTML = 'Número alto. Tente de novo'
    }
})