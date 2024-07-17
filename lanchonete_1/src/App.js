import react, {useState} from 'react'
import Modal from 'react-modal'
import './styles/index.css'
import Rotas from './Router'

export default function App() {

  const [modalAberto, setModalAberto] = useState(false)
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [senhaUsuario, setSenhaUsuario] = useState('')

  function abrirModal() {
     setModalAberto(true)
  }
  function fecharModal() {
      setModalAberto(false)
  }

  function pegarDadosUsuarios(e){
    e.preventDefault()
    console.log(nomeUsuario, senhaUsuario)
  }
  
  
 return (
   <div>
    <Rotas />
    <h1>faça seu login</h1>
    <button onClick={abrirModal}>login</button>
    <Modal
    className= 'Modal'
    isOpen={modalAberto}
    >


    <h1>login de usuario</h1>
    <button onClick={fecharModal}>continuar sem login</button>
    
    <form onSubmit={pegarDadosUsuarios} >
      <input
      type= "passaword"
      placeholder='digite a senha'
      value={senhaUsuario}
      onChange={(e)  => setSenhaUsuario(e.target.value)}
      />

      <button type='submit'>enviar</button>
      </form>
      </Modal>

   </div>
 )
  
}

