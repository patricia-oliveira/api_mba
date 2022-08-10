var R = require("r-script");

function classifica(req, res) {
    // Abre o corpo da requisição e busca pelos nomes dentro do objeto
    // substitui: var sepal_length = req.body.sepal_length ...
    // se colocar outra chaves, serão ignoradas

    //verifico a requisição
    var flor = { sepal_length, sepal_width, petal_length, petal_width } = req.body;

    // Carrega o script com os dados do objeto flor
    var result = R("r_scripts/iris_predict.R").data(flor);

    // verifico se tem resposta pra tratar
    // Verifica se foi passada uma resposta (caso seja utilizada em uma rota)
    if (res != null) {
        result.call(
            function(err, script_response) {
                if (err) throw err; //se tiver erro, levanta o erro
                res.send({ especie: script_response }); // se não, manda uma resposta {especie: resposta do iris_predict}
                res.end();
            })
    } else {
        return result; //se não tiver resposta pra tratar, retorna o resultado direto
    }
}

//exporta o modulo classifica
module.exports = { classifica };

//bloco de código que executa apenas quando o usuário rodar node predict.js
//caso o usuario importe o módulo com reuqire('./predict.js') como em app.js, só será executado o bloco acima
// Verifica se o script está sendo executado diretamente ou importado
// Se o script for importado, não executa o código abaixo
if (require.main === module){

    // Objeto requisição contendo dados de uma flor
    var requisicao = 
    { 
        body: {
            sepal_length: 5.7,
            sepal_width: 2.8,
            petal_length: 4.1,
            petal_width: 1.3
        }
    };
    //só tem req, pois não tenho resposta pra dar de forma local, é só na app
    classifica(requisicao)
        .call(function(erro, data) {
            if (erro) throw erro; //retorna erro se tiver
            console.log(data); //se não, retorna a espécie da flor
        });
}