import React, {useState} from 'react'
import Navbar from '../../../Pages/navbar/index'
import Footer from '../../../Footer/Footer'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../../MenuOpen/MenuOpen';

import Breadcrumb from '../../../Breadcrumb'
import logo from '../../../../Images/logohero-03.png'
import logo1 from '../../../../Images/logohero-03.png'
import img from './herotrabaja_1.jpg';
import img1 from './trabaja_1.jpg'
import img2 from './herotrabaja.png'
import icono1 from './trabaja_icon_1.png'
import icono2 from './trabaja_icon_2.png'
import icono3 from './trabaja_icon_3.png'

import { Link } from 'react-router-dom'


import {
    Responsive} from 'typed-responsive-react';

import './index.css'
import NavBar from '../../../Pages/navbar/index';

function Rrhh() {

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
  
      const [crumbs, setCrumbs] = useState(['Home', 'nosotros', 'RRHH']);
  
      const selected = crumb => {
        console.log(crumb);
      }

 const overlay ={
     backgroundImage:`url(${img2})`
 }
  
 const margin= {
    marginTop:'15vh'
  }
  const color ={
      backgroundColor: '#0097ce'
  }

  const links = {
    color: '#fff'
}


   
      
  return (
    <main>
        <article className='heroInd ' style={style} >
            <main className='overlay' style={overlay}>
            <NavBar logo={logo} logoMobile={logo} color={links}/>

            
            
            <div className='heroInd-text'>
                <h2>Sumate al equipo</h2>
                <p>Solor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna.
                </p>

              
               
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>
    <article>
    <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>Lorem ipsum dolor</h3>
              <p> Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
                  Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
                  Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
              </p>
            </div>
          </div>
    </article>
    <article>
        <h2 className='sumate-title'>nosotros</h2>
        <div className='sub' style={color}></div>
    <div className='componentes' >
           
           <div className='componente' style={margin}  >
             <img src={icono1} alt='#'/>
             <h4>planeacion</h4>
             <p>Digital transformation requires so much more than new technology. It requires fundamentalchanges to</p>
           </div>
           <div className='componente' style={margin} >
             <img src={icono2} alt='#'/>
             <h4>solucion</h4>
             <p>Digital transformation requires so much more than new technology. It requires fundamentalchanges to</p>
           </div>
           <div className='componente' style={margin}  >
             <img src={icono3} alt='#'/>
             <h4>recuperacion</h4>
             <p>Digital transformation requires so much more than new technology. It requires fundamentalchanges to</p>
           </div>

      
     </div>
    </article>
    <article>
        <div className='sumate-form'>
            <div className='sumate-form_text'>
                <h3>Postulate</h3>
                <p>Lorem ipsum dolor sit amet. consectetur adipsiscing elit, sed do eiudmod tempor incidudunt.</p>
            </div>
        
        <div className='sumate-form-form'>
            esto es el formulario
        </div>
        </div>
    </article>
    <Footer/>
  </main>
  )  
}

export default Rrhh
