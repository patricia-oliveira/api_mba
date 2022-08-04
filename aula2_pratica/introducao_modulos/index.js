//importação dos módulos como uma constante
//const hello = require('./hello_world');

// execução da função
//hello()


/*
outra forma de fazer
*/

// desempacotamento do módulo e buscar a função
//const { hello } = require("./hello_world")
//const { Pessoa } = require("./classe_modulo")

//hello();

// usando o construtor
//var maria = new Pessoa('Maria')
// usando o apresentar
//maria.apresentar()

/*
posso simplificar e colocar a classe a função num mesmo módulo
*/
const { hello, Pessoa } = require("./classe_hello_modulo")
//hello()
var jose = new Pessoa("José")
jose.apresentar()