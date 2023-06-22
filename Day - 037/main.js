/* Seleciona o input, Botão e parágrafo do HTML */
let textInput = document.getElementById('text-input')
let button = document.getElementById('count-button')
let result = document.getElementById('result')


/*Função que escuta o click e após o usuário digitar ou não algum valor dentro do input, a função verifica o valor digitado, 
bem como o tamanho do campo digitado, utilizando a propriedade (length) */

button.addEventListener('click', function(){
  let valueInput = textInput.value
  let count = valueInput.length
  result.innerHTML = "A quantidade de caracteres digitados foi de: " + count
})