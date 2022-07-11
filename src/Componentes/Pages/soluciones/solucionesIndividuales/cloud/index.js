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
        desc={'Una estrategia inteligente de nube: un plan detallado sobre la mejor manera de usar la nube para respaldar los objetivos comerciales.'}
        crumb={'cloud'}
        title={'infraestructura'}
        span={'el futuro de la'}
        parrafo={'Adoptamo un enfoque pragmático para su camino a la nube al comprender sus objetivos y metas comerciales y los resultados deseados antes de recomendar servicios y soluciones de nube especificos. Omptimizamos, simplificamos y gestionamos la adopcion de la nube para ofrecer valor comercial con menor riesgo.'}
        sector={'soluciones'}
        />
        <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>Cloud</h3>
              <p> Operamos en un estado de mejora
                  continua para ayudarlo a maximizar su
                  camino a la nube y optimizar las
                  soluciones para brindar accesibilidad,
                  escalabilidad y seguridad, al tiempo que
                  evita el tiempo de inactividad, la confusión
                  o la pérdida de productividad.
              </p>
            </div>
        </div>
      </article>
        <article>
          <div className='evolucion'>
            <h3>tipos de cloud</h3>
            <img src={cloudEvo} alt='#'/>
          </div>
          <div className='cloud_servicios'>
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>implementacion</h4>
                <p>Nuestro proceso incluye la creación de una arquitectura
                    de referencia segura que se alinee con sus prácticas de
                    seguridad existentes. Usamos las mejores prácticas de
                    almacenamiento en la nube.</p>
              </div>
              </div>
              
            </div>
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>Migración</h4>
                <p>Utilice nuevas tecnologías y herramientas para
                  aumentar la eficiencia y la productividad en toda su
                  organización</p>
              </div>
              </div>
              
            </div>
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>optimización</h4>
                <p>Planificar y administrar mejor su nube puede cambiar
                    positivamente la dinámica de costos cuando se combina
                    con un plan formal de optimización de la nube</p>
                </div>
              </div>
            </div> 
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>Segurización</h4>
                <p>Identificamos posibles brechas, riesgos o preocupaciones
                  con base en datos reales para mantener la nube en un entorno informático seguro y óptimo.
                </p>
                </div>
              </div>
            </div> 
            <div className='cloud_servicio'>
              <div className='cloud_servicio-overlay'>
                <div className='cloud_servicio-text'>
                <h4>Administración</h4>
                <p>Gestionamos la nube para obetener los beneficios de
                  operar de manera más rápida y eficiente de lo que
                  podría hacerlo por su cuenta</p>
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