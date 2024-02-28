// Escreva um programa que solicite um número inteiro positivo e
// faça uma contagem regressiva a partir desse número até 0.

let num = Number(prompt("Digite um número: "))

if(num >= 0){
    for(i = num; i >= 0; i--){
        console.log(i)
    }
} else {
    console.log("Digite um número válido! (não pode ser negativo)")
}

// Escreva um programa que solicite um número e verifique se ele é
// um número primo


let texto = "meu texto"

for(letra of texto){

    const decide = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" || letra === " "

    if(decide){
        continue
    }else{
        console.log(letra)
    }
}


// Escreva uma programa que irá receber um texto e mostrará no
// console se esse texto é um palíndromo ou não. (palíndromos são
// palavras que são lidas da mesma forma de trás pra frente) Ex:
// arara


let texto = "gabiru"
let textoInvertido = ""
for(letra of texto){
    textoInvertido = letra + textoInvertido
    console.log(textoInvertido)
}

const decide = texto === textoInvertido

if(decide){
    console.log("É um palindromo")
} else {
    console.log("Não é um palindromo")
}


// Escreva um programa que irá solicitar ao usuário uma palavra e conte o
// número de vogais presentes.


let texto = "sou um programador"
let numVogal = 0

for(letra of texto){
    const decide = letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"
    if(decide){
        numVogal++
        continue
    } else {
        console.log(letra)
    }
}

console.log(`a quantidade de vogais é: ${numVogal}`)



// Escreva um programa que imprima os múltiplos de 4 de 1 a 40.
// 3.6.9.12.15.18.21.24.27.30

n = 3

for(i = n; i <= (n*10); i += n){
    console.log(i)
}


