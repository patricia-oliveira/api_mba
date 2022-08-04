// trago o módulo express
const express = require('express')

//pego a função express desse módulo
const app = express();

//função use em que posso usar o plugin expess.json para transformar o corpo da requisição em json
app.use(express.json());

//rota GET chamada alo
/* quandoo cliente requisitar essa rota, 
a API responde com uma função anônima que recebe requisição e resposta,
mas, na prática, só manda a resposta */
app.get("/alo", function(req, res) {
    res.send("Alô");
});

//rota POST chamado mensagem
// quando o usuário requisitar o POST, executa uma função anônima que recebe requisição e resposta
app.post("/mensagem", function(req, res){
    var { mensagem } = req.body //crio a variável mensagem para guardar o que tiver como mensagem no corpo da requisição 
    console.clear();
    console.log(mensagem); //exibo a mensagem no console
    res.send("Mensagem recebida"); //respondo pro cliente que recebi o POST
});

app.listen(3000, function() {
    console.log('App de Exemplo escutando na porta 3000!');
  });