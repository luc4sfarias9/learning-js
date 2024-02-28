//--Exercicios abaixo utilizo comandos para interação com usuário via web, obs: rodar com html linkado com script atual(ex02.js).



// Peça ao usuário para inserir um número e escreva um programa que
// determine se o número é positivo e par.

const num = Number(prompt("Insira um Número: "))
const condicaoPositivoPar = num >= 0 && num % 2 == 0

if(condicaoPositivoPar){
    alert(`${num} é um número positivo e par`)
} else {
    alert("Tente novamente!")
}



// Crie um programa que solicite ao usuário seu peso (em kg) e altura
// (em metros) e calcule o IMC. Em seguida, informe a categoria de
// acordo com a tabela de IMC (por exemplo, abaixo do peso, peso
// normal, sobrepeso, etc.).

const peso = parseFloat(prompt("Insira seu peso(Kg): "))
const altura = parseFloat(prompt("Insira sua altura(metros): "))

const imcMulti = peso/(altura**2)

const magreza = (imcMulti <= 18.5)
const normal = (imcMulti >= 18.5 && imcMulti <= 24.9)
const sobrepeso = (imcMulti >= 25 && imcMulti <= 29.9)
const obesidade = (imcMulti >= 30 && imcMulti <= 39.9)
const obesidadeGrave = (imcMulti >= 40)

if(magreza){
    alert("Você está na obesidade grau 0(magro)")
} else if (normal){
    alert("Você está na obesidade grau 0(normal)")
} else if (sobrepeso){
    alert("Você está na obesidade grau I(sobrepeso)")
} else if(obesidade){
    alert("Você está na obesidade grau II(obesidade)")
} else {
    alert("Você está na obesidade grau III(obesidade grave)")
}




// Atividade 03
// Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o
// preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um
// desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

const prodOne = parseFloat(prompt("Digite o valor do produto: "))
const age = Number(prompt("Digite sua idade: "))

const desconto = prodOne/10  // prodOne * 10/100 <- 

let finalPrice = prodOne - desconto

const condic = age < 18


if(condic){
    alert(finalPrice)
} else {
    alert(prodOne)
}




// Atividade 04
// Peça ao usuário para inserir os comprimentos dos lados de um
// triângulo e escreva um programa que determine se o triângulo é
// equilátero, isósceles ou escaleno

const ladoA = parseFloat(prompt("Digite comprimento o 1º lado do triângulo: "))
const ladoB = parseFloat(prompt("Digite comprimento o 2º lado do triângulo: "))
const ladoC = parseFloat(prompt("Digite comprimento o 3º lado do triângulo: "))

const equilatero = (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC)
const isoceles = (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) 

if(equilatero){
    alert("Esse triangulo é equilatero")
} else if (isoceles){
    alert("Esse triangulo é isoceles")
} else {
    alert("Esse triangulo é escaleno")
}




// Atividade 05
// Crie um programa que solicite um número de 1 a 7, representando
// o dia da semana. Use uma estrutura switch (ou equivalente) para
// imprimir o nome do dia correspondente

const diaSem = Number(prompt("Digite um número de 1 a 7, para saber o dia da semana: "))

switch(diaSem){
    case 1:
        alert("Hoje é segunda-feira")
        break
    case 2:
        alert("Hoje é terça-feira")
        break
    case 3:
        alert("Hoje é quarta-feira")
        break
    case 4:
        alert("Hoje é quinta-feira")
        break
    case 5:
        alert("Hoje é sexta-feira")
        break
    case 6:
        alert("Hoje é sábado")
        break
    case 7:
        alert("Hoje é domingo")
        break
    default:
        alert("Hoje não é um dia!")
}






// DESAFIO PRÁTICO
// Crie um programa que apresente um menu com várias
// opções de cálculos geométricos. O usuário deve ser
// capaz de escolher uma opção e inserir os valores
// necessários para realizar o cálculo correspondente.
// Utilize condicionais para direcionar o programa com
// base na escolha do usuário.
// Opções do Menu:
// 1. Calcular Área do Triângulo
// 2. Calcular Área do Retângulo
// 3. Calcular Volume do Cubo
// 4. Calcular Área do Círculo
// 5. Sai

const menu = alert("Seja bem vindo à calculadora geométrica! escolha de 1 à 5 para calcular as seguintes opções:")
const menuCalc = Number(prompt("1. área Triângulo / 2. área Retângulo / 3. volume do Cubo / 4. área do Circulo / 5. Sair"))


switch(menuCalc){
    case 1:
        const baseTri = Number(prompt("Digite a base do triângulo: "))
        const alturaTri = Number(prompt("Digite a altura do triângulo"))
        const areaTri = (baseTri*alturaTri)/2
        alert(`A área do seu triângulo é: ${areaTri}`)
        //base*altura/2
        //calc area trian
        break
    case 2:
        const baseRetan = Number(prompt("Digite a base do retângulo: "))
        const alturaRetan = Number(prompt("Digite a altura do retângulo"))
        const areaRetan = baseRetan*alturaRetan
        alert(`A área do seu triângulo é: ${areaRetan}`)
        //base*altura
        //calc area retan
        break
    case 3:
        const arestaCubo = Number(prompt("Digite a aresta do cubo: "))
        const volumeCubo = arestaCubo**3
        alert(`O volume do seu cubo é: ${volumeCubo}`)
        //calc volume cubo
        break
    case 4:
        const raioCirc = Number(prompt("Digite o raio do circulo: "))
        const pi = 3.14
        const areaCirc = pi*raioCirc**2
        alert(`A área do seu circulo é: ${areaCirc}`)

        break
    case 5:
        alert("Você escolheu sair, parece que você sabe demais...")
        break
    
    default:
        alert("Não escolheu nada")
}
