const R = require("r-script")

var out = R("ola_mundo/ola_mundo.R") // abre o script em R
  .data("Olá mundo de dentro do R!!!", 10) //passa argumentos pro script
  .callSync(); //chama a função de maneira síncrona

console.log(out)