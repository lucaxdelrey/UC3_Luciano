import React, { useState } from 'react';
import './App.css';
 
function App() {
 
  const [nomeUsuario, setNomeUsuario] = useState('')
  const[senhaUsuario, setSenhaUsuario] = useState('')

  function pegarDadosUsuario (e) {
    e.preventDefault()
    console.log(nomeUsuario, senhaUsuario)
  }

 
  return (
    <div className="App">
      <h1> formularios e hook</h1>
      <form onSubmit={pegarDadosUsuario}>
        <input
          type="text"
          placeholder='digite o usuario'
          value={nomeUsuario}
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder='digite a senha'
          value={senhaUsuario}
          onChange={(e) => setSenhaUsuario(e.target.value)}
         
        />
        <button type='submit'>enviar</button>
      </form>
    </div>
  );
}
 
export default App;
 
