import React, { useState } from 'react';
import apiBuscaCep from './apicliente/buscacep/apibuscacep';
import './App.css'

export default function App() {

  const [pegarCep, setPegarCep] = useState('')
  const [dadosViaCep, SetDadosViaCep] = useState('')


  async function dadosFormularios(e){
    e.preventDefault()
    const resposta = await apiBuscaCep.get(`/${pegarCep}/json`)
    SetDadosViaCep(resposta.data)

  }

  return(
    <div>
      <h1>Busca Cep Via CEP</h1>
      <form onSubmit={dadosFormularios}>
       <input type="text"
       placeholder="Digite o Cep"
       value={pegarCep}
       onChange={(e) => setPegarCep(e.target.value)}
       />
       <button type='submit'>Enviar</button>
    </form>
    <p>A Rua é: {dadosViaCep.logradouro} </p>
    <p>A cidade é: {dadosViaCep.localidade} </p>
    <p>O estado é: {dadosViaCep.uf}</p>
  </div>
  )
}




