import express from 'express' // chamamos a biblioteca express 
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient() // esta variavel guardara tudo que precisarmos do prisma 

const app = express() // criamos a variavel app e transformamos a biblioteca express em uma funcao   
app.use(express.json()) // linha que permite com que o express leia arquivos Json

app.post('/usuarios', async (req, res) => { //aqui na rota post eu irei criar e salvar meus usuarios

    await prisma.user.create({ // criando usuario -- funcao do await: usado para funcoes assíncronas. manda o JS esperar 
        data: {
            email: req.body.email, //requisicao vindo do body
            name: req.body.name,
            age: req.body.age
        }
    }) // aqui é user porque o model no schema.prisma é chamado user

    res.status(201).json(req.body)
})

// aqui na rota get eu vou listar meu usuarios 
app.get('/usuarios', async (req, res) => { 
    
    const users = await prisma.user.findMany() // metodo prisma que indica: busca varios registros. retorna um array

    res.status(200).json(users) 
}) 

app.listen(3000) // aqui falamos para o servidor aonde ele vai rodar. porta
// rota que esta listando a rota de usuarios com o metodo HTTP: GET -- req: request / res: response
// => {} eh padrao do express 

