import React from 'react'
import './index.css'


import lang from '../../../Images/lang_icon-04.png'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/context'


function Navbar({logo, color}) {

  const { openSubmenu, closeSubmenu} = useGlobalContext()
  const displaySubmenu =(e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center =(tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.botton -3;
    openSubmenu(page, {center, bottom})
  }
  
  const handleSubmenu =(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu()
    }
  }
  return (
    <nav className='navbar' onMouseOver={handleSubmenu}>
        <img src={logo}  alt='onbytec'/>
        <ul>
       
          <Link to='/soluciones' className='li link-btn' style={color} onMouseOver={displaySubmenu}>Soluciones</Link>
          <Link to='/industrias' className='li 'style={color}>Industrias</Link>
          <Link to='/servicios' className='li link-btn'style={color} onMouseOver={displaySubmenu}>Servicios</Link>
          <Link to='/nosotros' className='li link-btn'style={color} onMouseOver={displaySubmenu}>Nosotros</Link>
          <Link to='/contacto' className=' li link-contacto' style={color}>Contacto</Link>
        
              
              
          {/*<img src={lang} alt='idiomas' className='  logo-lang'/> */}
        </ul>
    </nav>
  )
}

export default Navbar