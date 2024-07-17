import React from "react"
import fotoLogo2 from '../Rodape/fotoLogo2.png'
import { IoLogoInstagram } from "react-icons/io";


export default function Cabecalho(){
return(
    <div>
    <header>
        <img src={fotoLogo2} alt="logo" width="450" height="120" />
        <img scr= {<IoLogoInstagram />} width="300" height="300" />
</header>
    </div>
)
}