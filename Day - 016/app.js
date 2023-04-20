
const changeColor = document.getElementById('changeColor');



changeColor.addEventListener('click', function(){
   let h1Color = document.getElementById('h1Color');
   
   h1Color.style.color = 'Blue'
   h1Color.style.backgroundColor = 'Grey'
   h1Color.style.textAlign = 'center'
   h1Color.style.margin = '0 auto'
   h1Color.style.marginBottom = '10px'
   h1Color.style.width = '600px'
   
})


function backOringin() {
   h1Color.style.color = ''
   h1Color.style.backgroundColor = ''
   h1Color.style.textAlign = ''
   h1Color.style.margin = ''
   h1Color.style.marginBottom = ''
   h1Color.style.width = ''
}