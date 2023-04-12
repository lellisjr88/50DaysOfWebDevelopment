const idade = Number(prompt('Qual a sua idade?'));

const titulo = prompt('Você tem título de Eleitor? (S/N)');

if (idade >= 18 && titulo == 'S') {
    alert('Você pode votar!')
}else if(idade >= 18 && titulo == 'N'){
    alert('Você precisa do Título de Eleitor para votar.')
}else if(idade < 18 && titulo == 'N' || idade < 18 && titulo == 'S'){
    alert('Você não pode votar.')
}else
    alert('Insira uma resposta válida')




