import React, {useState} from 'react'
import Navbar from '../navbar'
import './index.css'
import logo1 from '../../../Images/logohero-03.png'
import mail from './images/iconos-04.png'
import phone from './images/iconos-05.png'
import point from './images/iconos-06.png'
import linkedin from './images/iconos-07.png'
import facebook from './images/iconos-08.png'
import youtube from './images/iconos-09.png'
import logo from '../../../Images/footer-29.png'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen';
import Footer from '../../Footer/Footer'
import {
  Responsive} from 'typed-responsive-react';
import Breadcrumb from '../../Breadcrumb'
import Form from '../contacto/ContacForm/Form'

function Contacto() {

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = ()=>{
      setMenuOpen(true)
  }
  const closeMenu =()=>{
      setMenuOpen(false)
  }

  const [crumbs, setCrumbs] = useState(['Home', 'Contacto']);

  const selected = crumb => {
    console.log(crumb);
  }
  return (
    <div>
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
      
      <article className='hero-contacto'>
        <div className='hero-text'>
         
            <h2>Contactanos</h2>
          <p>En Onbytec estaremos encantados de
              ayudarte. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam</p>
         
          
        </div>
      </article>

      <Breadcrumb crumbs ={crumbs} selected={selected}/>

      <article className='contac-grid'>
          <div className='formulario'>
            <h2>¿En que podemos ayudarte?</h2>
            <p>Completa el siguiente formulario y nos contactaremos a la brevedad.</p>
            <Form/>

          </div>
          <div className='formulario-tags'>
            <div className='tags-info'>
              <div className='tags'>
                <img src={mail} alt='mail'/>
                  <div className='tags-text'>
                    <h5>e-mail</h5>
                    <small>info@onbytec.com</small>
                  </div>

                </div>
                <div className='tags'>
                  <img src={phone} alt='phone'/>
                  <div className='tags-text'>
                    <h5>telefono</h5>
                    <small>+34 910 60 31 73</small>
                  </div>

                </div>
                <div className='tags'>
                  <img src={point} alt='point'/>
                  <div className='tags-text'>
                    <h5>ubicación</h5>
                    <small>Paseo de la Castellana 77, Madrid,España</small>
                  </div>

                 </div>
            </div>
            <div className='tags-rrss'>
              <small>siguenos en nuestras redes</small>
              <img src={linkedin}></img>
              <img src={facebook}></img>
              <img src={youtube}></img>
            </div>

          </div>
      </article>
      <div className='end'></div>
      <Footer/>
    </div>
  )
}

export default Contacto