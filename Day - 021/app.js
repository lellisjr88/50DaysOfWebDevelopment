let checkButton = document.getElementById('check-button')
let ageInput = document.getElementById('age-input')


checkButton.addEventListener('click',function(){
    let age = ageInput.value;
    let message = (age >= 18) ? 'You are and adult' : 'You are not and adult'
    alert(message)

    ageInput.value = '' //Faz com que o campo de input receba um valor vazio, limpando o campo
})