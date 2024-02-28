



// Atividade 01
// Crie um programa que solicita ao usuário um número e, em seguida,
// conta regressivamente até zero, imprimindo cada número no console.
// O programa deve terminar quando atingir zero.

let numUser = Number(prompt("Insira o número para ser contado regressivamente: "))

while(numUser >= 0){
    console.log(numUser)
    numUser--
}




// Atividade 02
// Desenvolva um programa que solicita ao usuário que insira suas
// notas de uma série de disciplinas. O programa deve calcular e
// imprimir a média das notas, o usuário pode continuar adicionando
// notas até decidir parar.

let contador = 0
let notaTotal = 0

while(true){
    let notasDisc = Number(prompt("Digite a nota disciplina: "))
    notaTotal += notasDisc
    contador++
    
    let decide = prompt("Deseja continuar? 'sim' ou 'nao'")
    
    if(decide === 'nao'){
        break    
    }
}

let media = notaTotal/contador

alert(media.toFixed(2))



//faça programa que identifique se um número é primo.

let numero = Number(prompt("Digite um numero: "))
let contador = numero
let ehPrimo = 0

do{
    if(numero % contador == 0){
        ehPrimo++
    }
    contador--
}while(contador>0)

if(ehPrimo == 2){
    console.log(`O número ${numero} é Primo!`)
    console.log(ehPrimo)
}else{
    console.log(`O número ${numero} nao é Primo`)
    console.log(ehPrimo)
}


// Peça ao usuário para inserir números continuamente e imprima o
// somatório dos números inseridos. O programa deve continuar executando
// até que o usuário insira zero.

let somato = 0

while(true){
    let numOn = Number(prompt("Insira um número para somar: "))
    somato += numOn

    let decide = prompt("Insira 0 para sair ou qualquer outra coisa para continuar: ")

    if(decide == 0){
        console.log("Saiu")
        break
    }
}

console.log(somato)






// Faça um programa que leia um nome de usuário e a sua senha e não
// aceite a senha igual ao nome do usuário, mostrando uma mensagem de
// erro e voltando a pedir as informações.

while(true){
    let account = prompt("Digite seu usuario: ")
    let password = prompt("Digite sua senha: ")

    if(account === password){

    }

}

let account = ''
let password =  ''

do{
   account = prompt("Digite seu usuario: ")
   password = prompt("Digite sua senha: ")

}while(account === password)

alert("Conta salva com sucesso!")





// Faça um programa que peça para 5 pessoas a sua idade, ao final o
// programa devera verificar se a média de idade da turma varia entre 0 e 25,
// 26 e 60 e maior que 60; e então, dizer se a turma é jovem, adulta ou idosa,
// conforme a média calculada.

let Npessoas = 0
let idadeTotal = 0


do{
    let idade = Number(prompt("Digite a sua idade: "))
    idadeTotal += idade
    Npessoas++
    
}while(Npessoas < 5)

let media = idadeTotal/Npessoas

let jovem = media >= 0 && media <= 25 
let adulta = media >= 26 && media <= 60
let idosa = media > 60

if(jovem){
    alert("A media de idade dessa turma é JOVEM!")
}else if(adulta){
    alert("A media de idade dessa turma é ADULTA!")
}else if(idosa){
    alert("A media de idade dessa turma é IDOSA!")
}else{
    alert("Você inseriu idades invalidas!!!")
}



// Calcule a soma dos números de 1 a 50

let contador = 0
let somaNum = 0

while(contador < 50){
    contador++
    somaNum +=contador
}
console.log(somaNum)





// DESAFIO PRÁTICO
// Você foi desafiado a criar um simulador de caixa eletrônico
// em JavaScript. O programa deve permitir que o usuário
// interaja com sua conta bancária simulada, realizando
// operações como verificar o saldo, fazer saques, fazer
// depósitos e sair do programa.
// Aqui estão os requisitos do programa:
// O programa deve começar com um saldo inicial de $1000.
// Utilize um loop while para manter o programa em execução
// até que o usuário escolha sair

let sair = false
let saldoTotal = 1000

const menu = alert("Seja bem vindo ao MU-Bank, cheque suas opções da conta corrente à seguir!")

do{
   
const menuBanco = Number(prompt("1. Verificar Saldo / 2. Sacar / 3. Depositar / 4. Sair"))

switch(menuBanco){
    case 1:
        alert(`Seu saldo é de: R$${saldoTotal},00`)
        //verifica saldo
        break
    case 2:
        let saque = Number(prompt(`Seu saldo é de ${saldoTotal}, quanto você deseja sacar? `))
        if(saque <= saldoTotal && saque > 0){
            saldoTotal -= saque
            alert(`Você sacou R$${saque}, portanto lhe resta R$${saldoTotal}`)
        } else {
            alert(`Digite um valor válido, menor que ${saldoTotal}`)
        }
        //sacar
        break
    case 3:
        let depositar = Number(prompt(`Seu saldo é de ${saldoTotal}, quanto você deseja depositar? `))
        if(depositar > 0){
        saldoTotal += depositar
        alert(`Você depositou R$${depositar}, portanto seu saldo é R$${saldoTotal}`)
        } else {
            alert(`Digite um valor válido, maior que 0`)
        }
        //depositar
        break
    case 4:
        sair === true
        alert("Obrigado por usar o MU-Bank, até a próxima ;)")
        //sair

    default:
        alert("Você não escolheu nada :( ")
    
}

}while(sair === false)
