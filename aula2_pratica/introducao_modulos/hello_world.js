// criação da função

function hello(){
    console.log("Alô!")
}

// exportação da função para poder usá-la em outros locais

//module.exports = hello

/*
outra forma de fazer 
*/
// armazenar o módulo em um objeto
module.exports = {
    hello: hello
};

