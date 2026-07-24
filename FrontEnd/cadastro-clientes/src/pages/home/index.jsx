
import './style.css'

function Home() {
// react a funcao sempre letra maiuscula 
  
  return (
    <div className='container'>
      <forms>
        <h1> Cadastro de Usuarios</h1>
        <input name='nome' type='text'></input>
        <input name='idade' type='number'></input>
        <input name='email' type='email'></input>
        <button type='button'>Cadastrar</button> 
      </forms>
    </div>
  )
}

export default Home
