import React, {useState} from 'react'
import Navbar from '../navbar/index'
import Contacto from '../../Home/Contacto'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen';
import Footer from '../../Footer/Footer'
import Breadcrumb from '../../Breadcrumb'
import logo from '../../../Images/logohero-03.png'
import logo1 from '../../../Images/logohero-03.png'
import img from './herosobre_1.jpg';
import sobre from './sobre_1.jpg'
import circle from './sobre_2.png'
import contact from './sobre_3.png'
import misc from '../../../Images/misc_elegirnos-23.png'
import { Link } from 'react-router-dom'
import './index.css'

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

    const sub ={
        backgroundColor: '#88cfe8'
    }  
    const height={
        height:'100vh'
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
        <article>
            <div className='sobreGrid'>
                <div className='sobreGrid_texto'>
                    <h3>Lorem ipsim dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore
                        magna aliquam erat volutpat. Ut wisi
                        enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis
                        nisl ut aliquip ex ea commodo consequat.
                        Duis autem vel eum iriure dolor in
                        hendrerit in vulputate velit esse molestie
                        consequat, vel illum dolore eu feugiat
                        nulla facilisis at vero eros et accumsan et
                        iusto odio dignissim qui
                    </p>
                </div>
            <div className='sobreGrid_img'>
                
                <img src={sobre} alt='#' className='sobreGrid_sobre'/>
                
                
            </div>    
            </div>
        </article>

        <article>
            <div className='segundo_parrafo'>
               
                <div className='segundo_parrafo-text'>
                    <p>somos el aliado perfecto para la selección, formación, prescripción, distribución y soporte de soluciones que mejoren la calidad del servicio.</p>
                    <div className='sub' style={sub}></div>
                </div>
                
               
            </div>
            <div className='segundo_parrafo-img'>
                    <img src={misc} alt='#'/>
                </div>
        </article>
        <article style={height}>
            <div className='tercer_parrafo'>
                <div className='tercer_parrafo-img'>
                    <img src={circle} alt='#'/>
                </div>
            
            <div className='tercer_parrafo-text'>
                <h3>trabaja con nosotros</h3>
                <div className='subrayado'></div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi
                    enim ad minim veniam, quis nostrud
                </p>
                <Link to='/nosotros/rrhh' className='btn btn-contacto'>
                    ver todos
                </Link>
               
            </div>
            </div>
        </article>
        <article >
            
            <div className='newsletter'>
                <div className='newsletter-input'>
                    <div className='newsletter-input_text'>
                        <h6>Suscribite a nuestro Newsletter</h6>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat</p>
                    </div>
                    <div className='input'>
                    <input placeholder='Introduce el e-mail'></input>
                    </div>
                    <div className='input-btn'>

                    
                    <button className='btn btn-hero'>enviar</button>
                    </div>
                    
                </div>
            </div>
        </article>
        <Contacto/>
        <Footer/>

    </main>
  )
}

export default Nosotros