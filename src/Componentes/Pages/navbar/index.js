import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import './index.css'
import {
  Responsive,IDeviceInfo,} from 'typed-responsive-react';


import lang from '../../../Images/lang_icon-04.png'
import { Link } from 'react-router-dom'
import Dropdown from './submenu/Dropdown';
import MenuOpen from './MenuOpen';



function NavBar({logo, color, logoMobile}) {

  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    {
      slug: "/link1/",
      anchor: "Link 1"
    },
    {
      slug: "/link2/",
      anchor: "Link 2"
    },
    {
      slug: "/link3/",
      anchor: "Link 3"
    }
  ];
 
  const openMenu = ()=>{
      setMenuOpen(true)
  }
  const closeMenu =()=>{
      setMenuOpen(false)
  }

  


  return (
    <>
    <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
        <nav className='navbar' >
          <Link to='/'  >
            <img src={logo}  alt='onbytec' className='nav-img'/>
          </Link>
        
          <ul>
       
            <Link to='/soluciones' className='li link-btn' style={color} >Soluciones</Link>
            <Link to='/industrias' className='li link-btn 'style={color}>Industrias</Link>
            <Link to='/servicios' className='li link-btn'style={color} >Servicios</Link>
            <Link to='/nosotros' className='li link-btn'style={color} >Nosotros</Link>
            <Link to='/contacto' className=' li link-contacto' style={color}>Contacto</Link>
        
              
              
          {/*<img src={lang} alt='idiomas' className='  logo-lang'/> */}
          </ul>
        </nav>
        

         </Responsive>
    <Responsive displayIn={["mobile", "tablet"]}>

        <nav className='nav-mobile'>
        <img src={logoMobile}  alt='onbytec' className='logoMobile'/>
        <AiOutlineMenu className="home-menu" onClick={openMenu}/>
            {menuOpen ? <MenuOpen close={closeMenu}/> : console.log('np')}
          
        </nav>
    </Responsive>


    </>
  )
}

export default NavBar