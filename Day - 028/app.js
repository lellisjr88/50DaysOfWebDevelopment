/*Seleciona as imagens */
const images = [
    "images/image_1.jpg",
    "images/image_2.jpg",
    "images/image_3.jpg"
]

currentIndex = 0

let image = document.getElementById('image')
let button = document.getElementById('button')

button.addEventListener('click', function(){

    currentIndex ++

    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    image.src = images[currentIndex]
})