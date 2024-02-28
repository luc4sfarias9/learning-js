//--Exercicios abaixo utilizo comandos para interação com usuário via web, obs: rodar com html linkado com script atual(ex00.js).

//Nome usuário
const nickname = prompt("Qual o seu nome? ")
console.log(`Olá, seja bem vindo ${nickname}`)

//Soma dois números usuário
const num1 = Number(prompt("Insira o primeiro número: "))
const num2 = Number(prompt("Insira o segundo número: "))
let num3 = num1 + num2
console.log(num3)

//Descobre idade usuário
const age = Number(prompt("Qual a sua idade? "))
let dataNasc = 2024 - age
console.log(dataNasc)

//Calcula area circulo 
const raioCirc = Number(prompt("Digite o raio do círculo: "))
let pi = 3.14
let areaCirc = pi * raioCirc**2
console.log(`A área do círculo é: ${areaCirc}`)

//Converter Dolar em Euro
const valorDol = Number(prompt("Insira o valor em dolar, para converter em euro: "))
let valorEur = valorDol * 0.85
console.log(`Valor de ${valorDol} em euro é ${valorEur}`)

//Produto com 10% de desconto
const valorProduto = Number(prompt("Insira o valor do produto 1: "))
let valorDesconto = valorProduto - valorProduto/10
console.log(valorDesconto)

//Converter Metros em Centimetros
const qtdMetros = Number(prompt("Digite o valor em metros: "))
let qtdCm = qtdMetros * 100
console.log(`${qtdMetros} metros equivalem à ${qtdCm} centimetros`)





//Faça um Programa que pergunte quanto você
//ganha por hora e o número de horas trabalhadas
//no mês. Calcule e mostre o total do seu salário no
//referido mês, sabendo-se que são descontados 11%
//para o Imposto de Renda, 8% para o INSS e 5% para
//o sindicato, faça um programa que nos dê:
//1.salário bruto.
//2.quanto pagou ao INSS.
//3.quanto pagou ao sindicato.
//4. salário liquido
//5. calcule os descontos e o salário liquido



const salarioHr = Number(prompt("Digite quanto você ganha por hora: "))
const horasTrabalhadas = Number(prompt("Digite quantas horas você trabalha por mês: "))
let salarioMes = salarioHr*horasTrabalhadas
let descontoInss = salarioMes * 8/100 
let impostoRenda = salarioMes * 11/100
let sindicato = salarioMes * 5/100
let totalDescontos = descontoInss + impostoRenda + sindicato
let salarioLiquido = salarioMes - totalDescontos

console.log(`Valor do seu salário bruto é: R$ ${salarioMes}, porém após o desconto de R$ ${descontoInss} do INSS, R$ ${sindicato} do sindicato e R$ ${impostoRenda} do imposto de renda, o total líquido é de R$ ${salarioLiquido}`)