import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar/index'
import logo from '../../Images/footer-29.png'
import nube from '../../Images/misc_elegirnos-24.png'
import './construccion.css'
import Contacto from '../Home/Contacto'
import Footer from '../Footer/Footer'

function Construccion() {

  
  return (
    <main>
        <Navbar logo={logo}/>
        <div className='construccion'>
            <div></div>
            <div className='construccionText'>
                <p><span>Sección en construcción</span> pronto quedara lista</p>
                <Link to='/' className='btn btn-hero'>volver al inicio</Link>
                
            </div>
            <div>
                <img src={nube}></img>
            </div>
        </div>
        <Contacto/>
        <Footer/>
    </main>
  )
}

export default Construccion