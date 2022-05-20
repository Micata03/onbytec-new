import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './cloud_1.jpg'
import img1 from './cloud_2.jpg'

import cloudEvo from './header.png'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'


function CloudSoluciones() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Cloud'}
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'cloud'}
        title={'infraestructura'}
        span={'el futuro de la'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        sector={'soluciones'}
        />
        <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>Cloud</h3>
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
          <div className='evolucion'>
            <h3>evolucion de cloud</h3>
            <img src={cloudEvo} alt='#'/>
          </div>
          <div className='cloud_servicios'>
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>servicio 1</h4>
                <p>Digital transformation requires so much more than new
                  technology. It requires fundamental changes to Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam.</p>
              </div>
              </div>
              
            </div>
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>servicio 1</h4>
                <p>Digital transformation requires so much more than new
                  technology. It requires fundamental changes to Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam.</p>
              </div>
              </div>
              
            </div>
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>servicio 1</h4>
                <p>Digital transformation requires so much more than new
                  technology. It requires fundamental changes to Lorem
                  ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam.</p>
              </div>
              </div>
              
            </div>
          </div>
        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default CloudSoluciones