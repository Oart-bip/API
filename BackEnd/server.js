import express from 'express' // chamamos a biblioteca express 
import { PrismaClient } from "@prisma/client"
import cors from 'cors'

const prisma = new PrismaClient() // esta variavel guardara tudo que precisarmos do prisma 

const app = express() // criamos a variavel app e transformamos a biblioteca express em uma funcao   
app.use(express.json()) // linha que permite com que o express leia arquivos Json
app.use(cors())

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

    //criando filtro
    let users = [] // let, variavel que muda de valor

    if (req.query) { 
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age

            }
        })
    } else {
        users = await prisma.user.findMany()  // metodo prisma que indica: busca varios registros. retorna um array
    }
    res.status(200).json(users) 
}) 

app.put('/usuarios/:id', async (req, res) => { //aqui na rota put onde irei atualizar o usuario
    // :id - cria uma variavel

    await prisma.user.update({ // atualizando usuario -- funcao do await: usado para funcoes assíncronas. manda o JS esperar 

        where:  { // funcao do where: aonde que eu vou atualizar meu usuario?
            id: req.params.id
        },

        data: {
            email: req.body.email, //requisicao vindo do body
            name: req.body.name,
            age: req.body.age
        }
    }) // aqui é user porque o model no schema.prisma é chamado user

    res.status(201).json(req.body)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Usuario deletado com sucesso.'})
})



app.listen(3000) // aqui falamos para o servidor aonde ele vai rodar. porta
// rota que esta listando a rota de usuarios com o metodo HTTP: GET -- req: request / res: response
// => {} eh padrao do express 

