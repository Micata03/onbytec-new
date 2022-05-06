import React, {useState} from 'react'
import Navbar from '../navbar/index'
import Contacto from '../../Home/Contacto'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen';
import Footer from '../../Footer/Footer'
import Breadcrumb from '../../Breadcrumb'
import logo from '../../../Images/logohero-03.png'
import logo1 from '../../../Images/logohero-03.png'
import img from './herosobre_1.jpg'

import { Link } from 'react-router-dom'

import {
    Responsive} from 'typed-responsive-react';

function Nosotros() {

    const style = {
        backgroundImage: `url(${img})`
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
  
      const [crumbs, setCrumbs] = useState(['Home', 'nosotros']);
  
      const selected = crumb => {
        console.log(crumb);
      }
  
   
      
  return (
    <main>
        <article className='heroInd ' style={style} >
            <main className='overlay'>
            <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>

            <Navbar logo={logo}/>
            </Responsive>

            
            <Responsive displayIn={["mobile", "tablet"]}>
        <nav className='menuOpen'>
            <img src={logo1} />
            <AiOutlineMenu className="home-menu" onClick={openMenu}/>
                    {menuOpen ?  <MenuOpen close={closeMenu}/> : console.log('mp')}
            </nav>
            

        </Responsive>    

            
            
            <div className='heroInd-text'>
                <h2>Sobre Onbytec</h2>
              
               
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>

    </main>
  )
}

export default Nosotros