import React from 'react'
import './index.css'

import lang from '../../../Images/lang_icon-04.png'
import { Link } from 'react-router-dom'


function Navbar({logo, color}) {
  return (
    <nav className='navbar'>
        <img src={logo}  alt='onbytec'/>
        <ul>
          <Link to='/soluciones' className='li' style={color}>Soluciones</Link>
          <Link to='/industrias' className='li'style={color}>Industrias</Link>
          <Link to='/servicios' className='li'style={color}>Servicios</Link>
          <Link to='/nosotros' className='li'style={color}>Nosotros</Link>
          <Link to='/contacto' className=' li link-contacto' style={color}>Contacto</Link>
        
              
              
          {/*<img src={lang} alt='idiomas' className='  logo-lang'/> */}
        </ul>
    </nav>
  )
}

export default Navbar