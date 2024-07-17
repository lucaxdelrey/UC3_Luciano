import React from 'react'
import fotozeus from '../imgs/fotozeus.png'
import fotoares from '../imgs/fotoares.png'
import fotoafrodite from '../imgs/fotoafrodite.png'

export default function Inicio() {
    return (
        
<div id="container">
        <div id="lado_esquerdo">
           
            
        </div>
        
        <div id="content">
            <img class="image" src={fotozeus} alt="Imagem 1"/>
            <h2>ZEUS</h2>
            <p>Hambúrguer com carne bovina, alface, tomate, queijo e maionese.</p>
            <img class="image" src={fotoares} alt="Imagem 2"/>
            <h2>ARES</h2>
            <p>Hambúrguer com bacon crocante, queijo cheddar, alface,tomate e molho de pimenta</p>
          </div>
          
        
        <div id="lado_direito">
            
        </div>
</div>
   
        
    )
}