
import './style.css'

function Home() {
  // react a funcao sempre letra maiuscula 

  const users = [{ // array e seus objetos. JS  
    id: '3131dasdasds',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com'
  },

  {
    id: '777575hghgh',
    name: 'Aline',
    age: 25,
    email: 'aline@email.com'
  },

  ]

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
