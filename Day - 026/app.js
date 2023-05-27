let numberInput = document.getElementById("numberInput");
let checkButton = document.getElementById("checkButton");
let outputDiv = document.getElementById("output");

checkButton.addEventListener("click", function() {
  let number = Number(numberInput.value); //Variável que recebe o valor do input e converte ele pra número

  if (number >= 1 && number <= 10) {
    outputDiv.innerHTML = 'The ' + number + " Valid number!";
  } else if (number < 1) {
    outputDiv.innerHTML = 'The ' + number + " Number is too small!";
  } else if (number > 10) {
    outputDiv.innerHTML = 'The ' + number + " Number is too large!";
  } else {
    outputDiv.innerHTML = 'The ' + number + " Something went wrong!";
  }

  numberInput.value = "" //Limpa o que foi digitado no input
});
