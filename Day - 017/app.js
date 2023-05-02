
let button = document.getElementById('trocaCor')

button.addEventListener('click', function () {
    let colors = ['Red', 'Green','Yellow','Orange','Blue','Grey','Brown','black']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    document.body.style.backgroundColor = randomColor
    let nameColor = document.getElementById('nameColor')
    nameColor.innerHTML = randomColor

    if (randomColor == 'black') {
        document.body.style.color = 'white';
    }else 
        document.body.style.color = 'black'
});