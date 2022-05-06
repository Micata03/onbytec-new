import React, {useState} from 'react'
import Contacto from '../../Home/Contacto'
import Footer from '../../Footer/Footer'
import {
    Responsive} from 'typed-responsive-react';
import Navbar from '../navbar/index'    
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import logo from '../../../Images/logohero-03.png'
import logo1 from '../../../Images/logohero-03.png'
import MenuOpen from '../../MenuOpen/MenuOpen';
import Breadcrumb from '../../Breadcrumb'
import imgHeader from './servicios_header.jpg'
import {servicios} from './serviciosIndividuales/data'
import { Link } from 'react-router-dom';
import './index.css'


function Servicios() {

    const imagen = {
        backgroundImage : `url(${imgHeader})`
    }

    const overlay = {
        background: 'rgba(0, 53, 140, 0.8)'
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
  
      const [crumbs, setCrumbs] = useState(['Home', 'servicios']);
  
      const selected = crumb => {
        console.log(crumb);
      }
  
      const style ={
          width: '50%'
      }
  return (
    <main>
        
        <article className='heroInd ' style={imagen}>
            <main className='overlay' style={overlay}>
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

            
            
            <div className='heroInd-text' >
                <h2>Servicios</h2>
                <p>Adapting to a diverse set of
                    industries provides an
                    opportunity to serve markets who
                    can remain underserved. Creative
                    engineers and technicians can
                </p>
                
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>
        <article className='ind-text'>
        
            
            <div className='nosotros-frase_text  '>
                <h2 className='ind'>servicios tecnológicos</h2>
                <div className='sub'></div>
                <p style={style}>Digital transformation requires so much more than new technology. It requires
                fundamental changes to culture, communications, and how work gets done. Without
                the right foundation in place to enable change.
                </p>
            </div>
            
        
        </article>
        <article className='servicios_seccion'>
            <div className='servicios_cards'>
                {
                  servicios.map((data, id)=>{
                      const {img, title, desc} = data;
                      return(
                          <div className='servicios_card' key={id}>
                              <div className='card1'>
                                  <img src={img} alt='#'/>
                              </div>
                              <div className='card2'>
                                  <h4>{title}</h4>
                                  <p>{desc}</p>
                                  <Link to={`/${title}`} className='btn btn-hero'>leer mas</Link>
                              </div>
                          </div>
                      )
                  })      
                }
            </div>
        </article>
        <Contacto/>
        <Footer/>
        </main>
  )
}

export default Servicios