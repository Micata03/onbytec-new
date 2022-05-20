import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './networking_1.jpg'
import img1 from './networking_2.jpg'
import icono1 from '../datacenter/icono2.png'
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
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'Networking'}
        title={'para tu equipo de trabajo'}
        span={'la herramienta necesaria'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        sector={'soluciones'}
        />
        <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>conectividad</h3>
              <p> Innove rápidamente,cree nuevas fuentes
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
                <p>Digital transformation requires so much more than new technology. It requires fundamentalchanges to</p>
              </div>
              <div className='componente' style={margin} >
                <img src={icono1} alt='#'/>
                <h4>software defined</h4>
                <p>Digital transformation requires so much more than new technology. It requires fundamentalchanges to</p>
              </div>
              <div className='componente' style={margin}  >
                <img src={icono1} alt='#'/>
                <h4>wireless</h4>
                <p>Digital transformation requires so much more than new technology. It requires fundamentalchanges to</p>
              </div>

         
        </div>
      </article>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default Networking