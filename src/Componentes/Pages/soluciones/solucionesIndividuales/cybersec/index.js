import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './cyber_1.jpg'
import img1 from './cyber_2.jpg'
import icono1 from './icono1.png'
import icono2 from './icono2.png'
import icono3 from './icono3.png'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'



function Cybersecurity() {
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
        servicio={'Cybersecurity'}
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'security'}
        title={'realidad den entorno digital'}
        span={'la vulnerabilidad es una'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        sector={'soluciones'}
        />
      <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>seguridad</h3>
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
        <article style={background}>
        
          <div className='componentes' style={color}>
           
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
          <div className='componentes-info'>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>proteja</span> sus datos</h4>
              </div>
              <div className='info-2'>
                <p>Protect your organization’s data and
                    system 24/7, with cloud-based
                    vulnerability scanning tools and
                    management.
                </p>
              </div>
              
            </div>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>hacer</span> algo</h4>
              </div>
              <div className='info-2'>
                <p>Protect your organization’s data and
                    system 24/7, with cloud-based
                    vulnerability scanning tools and
                    management.
                </p>
              </div>
              
            </div>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>invierta</span> en su seguridad</h4>
              </div>
              <div className='info-2'>
                <p>Protect your organization’s data and
                    system 24/7, with cloud-based
                    vulnerability scanning tools and
                    management.
                </p>
              </div>
              
            </div>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>hacer</span> algo</h4>
              </div>
              <div className='info-2'>
                <p>Protect your organization’s data and
                    system 24/7, with cloud-based
                    vulnerability scanning tools and
                    management.
                </p>
              </div>
              
            </div>
          </div>
        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Cybersecurity