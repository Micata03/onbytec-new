import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './networking_1.jpg'
import img1 from './networking_2.jpg'
import icono1 from './iconos_networking-61.png'
import icono2 from './iconos_networking-62.png'
import icono3 from './iconos_networking-63.png'
import img2 from './networking_3.jpg'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'


function Networking() {

  const background ={
    backgroundColor:'#ccc',
  }
    const color ={
      
      margin: '0 auto',
      height: 'auto'
    }
  
    const margin= {
      marginTop:'15vh'
    }
  
  return (
    <div>
        <Header
        img={img}
        servicio={'Networking'}
        desc={'La red mantiene a sus empleados conectados y productivos dondequiera que estén.'}
        crumb={'Networking'}
        title={'para tu equipo de trabajo'}
        span={'la herramienta necesaria'}
        parrafo={'Descubra oportunidades para aprovechar las soluciones adecuadas y los proveedores para diseñar una infraestructura de IT creada para admitir aplicaciones y usuarios modernos en la red de trabajo.'}
        sector={'soluciones'}
        />
        <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>conectividad</h3>
              <p> 
              Transforme las capacidades y el
              rendimiento de su red adoptando una
              solución definida por software, el
              Networking le brinda una red flexible, fácil
              de administrar y poderosa, al mismo
              tiempo que crea oportunidades en el
              mundo de las redes definidas por
              software.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className='transformacion'>
            <div className='transformacion-text'>
              <h4>Transforma el espacio digital</h4>
            </div>
            <div className='transformacion-img'>
              <img src={img2} alt='transformacion'/>
            </div>
          </div>
        </article>
        <article style={background}>
        
        <div className='componentes' style={color}>
         
              <div className='componente' style={margin}  >
                <img src={icono1} alt='#'/>
                <h4>open networking</h4>
                <p>Ofrecer las mejores soluciones para su organización.</p>
              </div>
              <div className='componente' style={margin} >
                <img src={icono2} alt='#'/>
                <h4>software defined</h4>
                <p>Seleccionamos la plataforma que más se alinee con su estrategia tecnológica.</p>
              </div>
              <div className='componente' style={margin}  >
                <img src={icono3} alt='#'/>
                <h4>wireless</h4>
                <p>Para realizar negocios en cualquier lugar, en cualquier momento y desde cualquier dispositivo.</p>
              </div>

         
        </div>
      </article>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default Networking