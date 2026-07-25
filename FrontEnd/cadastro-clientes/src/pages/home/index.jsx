import lixeira from '../../assets/lixeira.png'
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
      <forms>
        <h1> Cadastro de Usuarios</h1>
        <input name='nome' type='text'></input>
        <input name='idade' type='number'></input>
        <input name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </forms>

      {users.map(user => ( // to pegando os meus usuarios, mapeando com o map e guardando dentro do user
        <div key={user.id}>
          <div>
            <p>Nome:{user.name} </p>
            <p>Idade:{user.age} </p>
            <p>Email:{user.email} </p>
          </div>
          <button>
            <img src={lixeira} />
          </button>
        </div>
      ))}



    </div>
  )
}

export default Home
