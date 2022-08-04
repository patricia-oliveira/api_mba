function hello(){
    console.log("Alô!")
}

module.exports = {
    hello: hello
};


class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        console.log("Olá, eu me chamo", this.nome)
    }
}

module.exports = { Pessoa };