
const nota = Number(prompt('Digite a nota do aluno: '))

if (nota >= 90 && nota <= 100) {
    alert('Sua nota é: A')
}else if (nota >= 80 && nota <= 89) {
    alert('Sua nota é: B')
}else if (nota >= 70 && nota <= 79) {
    alert('Sua nota é: C')
}else if (nota >= 60 && nota <= 69) {
    alert('Sua nota é: D')
}else if (nota >=0 && nota < 60) {
    alert('Nota muito baixa, você está reprovado.')
    
}else 
    alert('Nota inválida, Digite um valor entre 0 e 100')

