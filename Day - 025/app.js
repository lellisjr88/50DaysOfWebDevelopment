let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let outputDiv = document.getElementById("output");
let button = document.getElementById('show')

button.addEventListener('click', function(){
    let num1 = Number(num1Input.value);
    let num2 = Number(num2Input.value);
    let higherNumber;
    
    if (num1 > num2) {
        higherNumber = num1
    }else
        higherNumber = num2

    //  let higherNumber = (num1 > num2) ? num1 : num2; //Operador Ternário, forma mais simple de resolver o mesmo problema

    outputDiv.innerHTML = 'The higher number is ' + higherNumber

})

