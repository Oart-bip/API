import express from 'express' // chamamos a biblioteca express 

const app = express() // criamos a variavel app e transformamos a biblioteca express em uma funcao  

app.get('/usuarios', (req, res) => {
    res.send('Ok, deu bom') // metodo send do express - resposta
}) 
// rota que esta listando a rota de usuarios com o metodo HTTP: GET -- req: request / res: response
// => {} eh padrao do express 

app.listen(3000) // aqui falamos para o servidor aonde ele vai rodar. porta