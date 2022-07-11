import React, {useState} from 'react'
import {
    Responsive} from 'typed-responsive-react';
import MenuOpen from '../../../MenuOpen/MenuOpen';
import Breadcrumb from '../../../Breadcrumb';
import logo from '../../../../Images/footer-29.png'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import logo1 from '../../../../Images/logohero-03.png'
import Navbar from '../../navbar';
import './header.css'
import NavBar from '../../navbar';

function Header({img, servicio, desc, crumb, title, span, parrafo, sector}) {

    const style = {
        backgroundImage: `url(${img})`
    }
    const color={
        backgroundColor: '#88cfe8'
    }
    

    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = ()=>{
      setMenuOpen(true)
  }
  const closeMenu =()=>{
      setMenuOpen(false)
  }

  const [crumbs, setCrumbs] = useState(['Home', `${sector}`, `${crumb}`]);

  const selected = crumb => {
    console.log(crumb);
  }
  return (
    <div>
     <NavBar logo={logo} logoMobile={logo}/>
      
      <article className='hero-contacto' style={style}>
        <div className='hero-text'>
         
            <h2>{servicio}</h2>
          <p>{desc}</p>
         
          
        </div>
      </article>

      <Breadcrumb crumbs ={crumbs} selected={selected}/>
      <article className='texto-servicio'>
          <h3><span>{span}</span><br/>{title} </h3>
          <div className='sub' style={color}></div>
          <p>{parrafo}</p>
      </article>

      </div>
  )
}

export default Header