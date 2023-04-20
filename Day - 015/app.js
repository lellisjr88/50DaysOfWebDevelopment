
let frutas = ['Banana', 'Maçã', 'Morango', 'Limão', 'Uva','Pera','Mamão', 'Melancia','Abacate','Caquí','Pitaya', 'Coco']

for (let i = 0; i < frutas.length; i++) {
   const ul = document.getElementById('numberList')//Seleciona a ul no HTML
   const li = document.createElement('li') //Cria o item de lista
   li.innerHTML = frutas.sort()[i]//Insere cada item da lista frutas nos bulets do li
   ul.appendChild(li) //Insere o li dentro da ul
   
}

/*Verificar a diferença entre TextContent, InnerHtml, InnerText */