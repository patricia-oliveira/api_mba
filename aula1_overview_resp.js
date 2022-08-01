// Comentário de linha

/*
Comentário de bloco...
Veja, pode ter quebra de linha.
*/

// Variáveis - 
/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#declarando_vari%C3%A1veis
No bloco abaixo é onde as declarações das variáveis vai acontecer. 
Lembre, variáveis são espaços na memória e elas não fazem nada sozinhas. 
As variáveis são utilizadas para algum propósito, sempre! ex:
    - Inserir o dado no banco de dados
    - Inserir o dado em um dataframe
    - Apenas exibir na tela
    - Etc...
*/
var nome = "Marcelo Sabadini" // Variável do tipo string/texto. Para declarar sempre vai precisar de aspas (simples ou duplas)
var idade = 37 // variável do tipo number. Para números não precisa utilizar aspas
var idoso = false // variável boolean
var nota_final = 9.98 // variável number, mas esta com ponto flutuante
var comidas_prediletas = ["Lasanha", "Churrasco"] // variável array. É necessário utilizar os colchetes e separar cada elemento por vírgula

/*
Agora vamos utilizar as variáveis que foram declaradas acima.
Vamos exibi-las no Console. Para isso, a gente vai utilizar o comando
console.log()
*/
console.log(nome) // Para exibir o conteúdo da variável no console
console.log(nome, idade) // Podemos exibir mais que uma variável ao mesmo tempo, separando por vírgula

/*
Para cada tipo de dado (string, numero, boolean, array...) o JS
disponibiliza funções para manipulação do conteúdo, dos valores 
das variáveis. 
Veja abaixo alguns exemplos de manipulação de textos (string) - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Text_formatting#strings
*/

// tamanho do texto. Perceba que não estamos utilizando o operador de atribuição =
// Ou seja, o console.log() apenas esta exibindo o tamanho mas
// não modifica a variável em questão.
console.log(nome.length) 
console.log(nome.toUpperCase()) // texto para maiusculo
console.log(nome.toLowerCase()) // texto para minusculo
console.log(nome.replace("Marcelo", "Israel")) // substituir texto

// E se quiser modificar o conteúdo da variável (ou criar uma nova com o valor modificado), será necessário
// utilizar o operador de atribuição. 
nome = nome.toUpperCase() // modificando a variável nome
console.log(nome) // Agora o console.log() vai exibir o texto em caixa alta

// Operadores de comparação - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_de_compara%C3%A7%C3%A3o
/*
>   maior
<   menor
>=  maior ou igual
<=  menor ou igual
==  igualdade
!=  diferente
*/
console.log(idade > 18) // O resultado de uma comparação sempre será um boolean. Ou seja: true / false
console.log(idade < 18)

console.log("37" == 37)  // == compara apenas o conteúdo, então o resultado dessa linha é true
console.log("37" === 37) // === compara conteúdo e tipo da variável. Como usamos "37" (string) e 37 (numérica), o resultado será false

// Condicional - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#declara%C3%A7%C3%B5es_condicionais
// Vale a leitura dos Operadores Lógicos - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

if(idade >= 18){
    console.log("Adulto")
} else if (idade >= 12 && idade < 18){
    console.log("Adolescente")
} else {
    console.log("Criança")
}

// Loop - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration

// Vai exibir os números de 0 a 10 na tela
for(var i = 1; i <= 10; i++){
    console.log(i)
}

// Utilizando loop + condicional para exibir se o número é maior ou menor que 5
for(var i = 1; i <= 10; i++){
    // Preste atenção nas condições desse IF/ELSE. O número 5 não será exibido. 
    // Consegue arrumar esse 'bug'? :)
    if(i < 5){
        console.log(i, "é menor que 5")
    } else if(i > 5) {
        console.log(i, "é maior que 5")
    }
}

// Podemos usar um FOR para percorrer os itens de um array. 
for(indice in comidas_prediletas){
    // Cada item será exibido no console, em maiúsculo
    console.log(comidas_prediletas[indice].toUpperCase())
}

// Funções
// Veremos na próxima aula







