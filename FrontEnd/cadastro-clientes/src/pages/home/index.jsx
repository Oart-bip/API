
import { useEffect, useState } from 'react' // executar sempre que a pagina abrir 
import './style.css'
import api from '../../services/api'

function Home() {
  // react a funcao sempre letra maiuscula 
  const [users, setUsers] = useState([]) //toda vez que o users tiver uma alteração, terá alteração no estado do react

  async function getUsers(){ // aqui criamos uma função assíncrona chamada getUsers
    const usersFromApi = await api.get('/usuarios') /* requisição HTTP GET para a rota usuarios, e o await espera a resposta chegar. 
    quando a resposta chega. ela é atribuida ao users*/ 
    setUsers(usersFromApi.data)
  }

  useEffect(()  => { // o useEffect é para chamadas da API 
    getUsers()
  }, []) // este array vazio serve para: execute apenas uma vez apos o componente aparecer na tela, apos isso, liste os usuarios pelo getUsers

  return (
    <div className='container'>
      <form>
        <h1> Cadastro de Usuarios</h1>
        <input placeholder="Nome" name='nome' type='text'></input>
        <input placeholder="Idade" name='idade' type='number'></input>
        <input placeholder="Email" name='email' type='email'></input> 
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => ( // to pegando os meus usuarios, mapeando com o map e guardando dentro do user
        <div key={user.id} className='card'> 
          <div>
            <p>Nome:{user.name} </p>
            <p>Idade:{user.age} </p>
            <p>Email:{user.email} </p>
            <button type='button'>Excluir</button>
          </div>
        </div>
      ))}



    </div>
  )
}

export default Home
