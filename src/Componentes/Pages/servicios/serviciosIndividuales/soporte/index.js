import React from 'react'
import Header from '../../header/Header'
import img from './header_soporte.jpg'
import img1 from './soporte_1.jpg'
import icono from './icono2.png'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'

function Soporte() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Soporte técnico'}
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'soporte'}
        title={'Contrata Mantenimiento'}
        span={'ahorre la molestia de'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        sector={'servicios'}
        />

        <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>soporte tecnico</h3>
              <p> Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
              </p>
              <div className='soporte-grids'>
                <div className='soporte-grid'>
                  <img src={icono} alt='#'/>
                <h5>monitoreo</h5>
                </div>
                <div className='soporte-grid'>
                  <img src={icono} alt='#'/>
                <h5>monitoreo</h5>
                </div>
                <div className='soporte-grid'>
                  <img src={icono} alt='#'/>
                <h5>monitoreo</h5>
                </div>
                
              </div>
            </div>
          </div>
        </article>
        <article>
          <h3 className='tec-title'>apoyo en tecnologia</h3>
          <div className='tec-grids'>
            <div className='tec-grid'>
              <p>Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
              </p>
              <h4>30%</h4>
            </div>
            <div className='tec-grid'>
              <p>Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
              </p>
              <h4>30%</h4>
            </div>
            <div className='tec-grid'>
              <p>Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
              </p>
              <h4>30%</h4>
            </div>
          </div>

        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Soporte