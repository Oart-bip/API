
import { useEffect, useState, useRef } from 'react' // executar sempre que a pagina abrir 
import './style.css'
import api from '../../services/api'

function Home() {
  // react a funcao sempre letra maiuscula 
  const [users, setUsers] = useState([]) //toda vez que o users tiver uma alteração, terá alteração no estado do react

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() { // aqui criamos uma função assíncrona chamada getUsers
    const usersFromApi = await api.get('/usuarios') /* requisição HTTP GET para a rota usuarios, e o await espera a resposta chegar. 
    quando a resposta chega. ela é atribuida ao users*/
    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })

    getUsers()
  }


  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    
    getUsers()
  }

  useEffect(() => { // o useEffect é para chamadas da API 
    getUsers()
  }, []) // este array vazio serve para: execute apenas uma vez apos o componente aparecer na tela, apos isso, liste os usuarios pelo getUsers

  return (
    <div className='container'>
      <form>
        <h1> Cadastro de Usuarios</h1>
        <input placeholder="Nome" name='nome' type='text' ref={inputName} ></input>
        <input placeholder="Idade" name='idade' type='number' ref={inputAge} ></input>
        <input placeholder="Email" name='email' type='email' ref={inputEmail} ></input>
        <button type='button' onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => ( // to pegando os meus usuarios, mapeando com o map e guardando dentro do user
        <div key={user.id} className='card'>
          <div>
            <p>Nome:{user.name} </p>
            <p>Idade:{user.age} </p>
            <p>Email:{user.email} </p>
            <button type="button" onClick={() => deleteUsers(user.id)}>
              Excluir
            </button>
          </div>
        </div>
      ))}



    </div>
  )
}

export default Home
