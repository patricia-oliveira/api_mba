// Comentário de linha

/*
Comentário de bloco...
Veja, pode ter quebra de linha.
*/

// Variáveis
var nome = 'Maria Silva' //variável do tipo string/text
var idade = 25 // variável do tipo int
var idoso = false //boolean
var valor_total = 10.99 //ponto flutuante
var comidas_prediletas = ['Lasanha', 'Churrasco', 'Abobrinha'] //array - variável que armaeza uma pilha de variáveis

/*
console.log("Nome", nome, "Idade", idade) //print no terminal
console.log("Comidas prediletas", comidas_prediletas)
console.log(nome.replace('Maria', 'José')) //substituir o texto
console.log(nome.length) //tamanho da variável
console.log(nome.toUpperCase()) //texto para maiúsculo
*/

// Operadores
/*
> maior
< menor
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente
 */

//console.log(idade > 18) // > maior
//console.log(idade < 18) // < menor

// Condicional
//2 condições
if(idade >= 18){
    console.log('Maior de idade')
} else{
    console.log("Menor de idade")
}

//mais de 2 condições
if(idade >= 18){
    console.log("Adulto")
} else if (idade >= 12 && idade < 18){
    console.log("Adolescente")
} else {
    console.log("Criança")
}

// Loop
//itera de 1 a 10
for(var i = 1; i <= 10; i++){
    console.log(i)
}

//loop com condição
for(var i = 1; i <= 10; i++){
    if(i<5){
        console.log(i, 'menor que 5')
    } else {
        console.log(i, 'maior que 5')
    } 
}

//loop num array
for(i in comidas_prediletas){
    console.log(comidas_prediletas[i].toUpperCase()) 
}


// Funções

var siglas = ['bh', 'sp', 'poa']
///console.log(siglas[0].toUpperCase())

function acertarSigla(sigla){
    var sigla_final = sigla.toUpperCase()
    return sigla_final
}

console.log(acertarSigla(siglas[0]))
console.log(acertarSigla(siglas[1]))
console.log(acertarSigla(siglas[2]))


var siglas = ['bh-mg', 'sp-sp', 'poa-rs']
///console.log(siglas[0].toUpperCase())

function acertarSigla(sigla){
    var sigla_final = sigla.toUpperCase().split('-')[0]
    return sigla_final
}

console.log(acertarSigla(siglas[0]))
console.log(acertarSigla(siglas[1]))
console.log(acertarSigla(siglas[2]))

//função anônima
setTimeout(function(){
    console.log('atrasado')
}, 5000)


// Objetos

var pessoa = {
    'nome': 'Maria Silva', //string
    'idade': 25, //inteiro
    'instrumentos': ['guitarra', 'bateria', 'saxofone'], //array de strings
    'filhos': [
        {
            'nome': 'Joana Silva', 
            'idade': 6
        },
        {
            'nome': 'José Silva', 
            'idade': 2
        }
    ]

}
console.log(pessoa)

//console.log(typeof(pessoa)) //object