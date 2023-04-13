let colorList = []

for (let i = 1; i <= 3; i++){
   let userColor = prompt('Digite a cor ' + 'Cor #' + i)
   colorList.push(userColor)
}

document.getElementById('listaCor').innerHTML = colorList

