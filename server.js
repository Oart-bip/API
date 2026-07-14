import express from 'express' // chamamos a biblioteca express 

const app = express() // criamos a variavel app e transformamos a biblioteca express em uma funcao   
app.use(express.json()) // linha que permite com que o express leia arquivos Json

const users = [] //array de memoria 

app.post('/usuarios', (req, res) => { //aqui na rota post eu irei salvar meus usuarios

    users.push(req.body)

    res.send('Ok aqui deu certo') 

})

app.get('/usuarios', (req, res) => { // aqui na rota get eu vou listar meu usuarios 
    res.json(users) // metodo send do express - resposta
}) 
// rota que esta listando a rota de usuarios com o metodo HTTP: GET -- req: request / res: response
// => {} eh padrao do express 

app.listen(3000) // aqui falamos para o servidor aonde ele vai rodar. porta