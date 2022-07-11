import React from 'react'
import {servicios} from './data'
import logo from '../../../../Images/logohero.png'
import Carousel from 'react-bootstrap/Carousel';
import './index.css'
import Navbar from '../../../Pages/navbar';
import {Link} from 'react-router-dom'

function HeroMobile() {

  const style = {
    left: 0,
    right:0,
    bottom:0,
  }
  return (
    <>
    <main className='home-hero-mobile'>
    

    {/* 
    <div className='navMobile'>Este es el navbar del mobile </div>*/}
    <h1 className='mobile_title'>¿Cómo podemos ayudarte?</h1>
   
    <Carousel fade>
        {servicios.map((servicio, id)=>{
            const{img, alt, texto, link}=servicio;
            return(
                <Carousel.Item key={id}>
                <img
                  className="d-block w-100"
                  src={img}                
                  alt={alt}
                />
                <Carousel.Caption className='mobile-subtitle' style={style}>
                  <Link to={link} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <h3>{texto}</h3>
                  </Link>
                  
                 
                </Carousel.Caption>
              </Carousel.Item>

            )
        }
        )}
    
      
    </Carousel>
    </main>
    </>
  )
}

export default HeroMobile