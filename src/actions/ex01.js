//--Exercicios abaixo utilizo comandos para interação com usuário via web, obs: rodar com html linkado com script atual(ex01.js).

//Em meio aos estudos tive curiosidade de tratar a entrada de dados do usuário para que ele digitasse apenas letras de A a Z, quando não o fizesse retornaria um erro, foi então que descobri que poderia fazer com Expressão regular, retornando com função.

function apenasletras(str){

    return /^[a-zA-Z]+$/.test(str)
}


const nome = prompt('qual seu nome ?')

if(!apenasletras(nome)) {
    alert('digite apenas letras')
} else {
    alert(`seu nome é ${nome}`)
}
