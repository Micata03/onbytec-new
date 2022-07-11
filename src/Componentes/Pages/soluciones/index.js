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
import imgHeader from './soluciones_web1.jpg'
import {soluciones} from './data'
import { Link } from 'react-router-dom';
import NavBar from '../navbar/index';




function Servicios() {

    const imagen = {
        backgroundImage : `url(${imgHeader})`
    }
    const color = {
        color: '#fff'
    }


    const overlay = {
        background: 'rgba(0, 53, 140, 0.8)'
    }

    const icono ={
        width: '62%'
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
  
      const [crumbs, setCrumbs] = useState(['Home', 'soluciones']);
  
      const selected = crumb => {
        console.log(crumb);
      }
  
      const style ={
          width: '50%'
      }
  return (
    <main>
        
        <article className='heroInd ' style={imagen}>
            <main  >
            <NavBar logo={logo} logoMobile={logo} color={color}/>

            
            
            <div className='heroInd-text' >
                <h2>Soluciones</h2>
                <p>Lo ayudaremos a satisfacer la demanda de constante innovación en el camino a la transformacion digital.
                </p>
                
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>
        <article className='ind-text'>
        
            
            <div className='nosotros-frase_text  '>
                <h2 className='ind'>nuestras soluciones</h2>
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
                  soluciones.map((data, id)=>{
                      const {img, title, desc} = data;
                      return(
                          <div className='servicios_card' key={id}>
                              <div className='card1'>
                                  <img src={img} alt='#' style={icono}/>
                              </div>
                              <div className='card2'>
                                  <h4>{title}</h4>
                                  <p>{desc}</p>
                                  <Link to={`/soluciones/${title}`} className='btn btn-hero'>leer mas</Link>
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