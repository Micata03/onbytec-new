import React from 'react'
import Header from '../../header/Header'
import img from './header_soporte.jpg'
import img1 from './soporte-67.jpg'
import img3 from './soporte-73.jpg'
import icono from './iconos_soporte-70.png'
import icono2 from './iconos_soporte-69.png'
import icono3 from './iconos_soporte-71.png'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'

function Soporte() {

  const style ={
    marginTop: '6%'
  }
  const imagen={
    width : '80%'
  }
  return (
    <div>
        <Header
        img={img}
        servicio={'Soporte técnico'}
        desc={'Cuenta con asistencia para que los usuarios puedan resolver eventuales problemas o inquietudes.'}
        crumb={'soporte'}
        title={'Contrata Mantenimiento'}
        span={'ahorre la molestia de'}
        parrafo={'Hacer un seguimiento de qué dispositivos están en uso y dónd están ubicados sin perder de vista qué dispositicos están cubiertos y cuáles no así como garantizar operaciones y rendiemientos óptimos.'}
        sector={'servicios'}
        />

        <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#' style={imagen}/>
            </div>
            <div className='cloud-text' style={style}>
              <h3>soporte tecnico</h3>
              <p> Nos encargamos de planificar,mantener y soportar sus sistemas informáticos asegurandole la alta disponibilidad de los mismos

              </p>
              <div className='soporte-grids'>
                <div className='soporte-grid'>
                  <img src={icono} alt='#'/>
                <h5>monitoreo</h5>
                </div>
                <div className='soporte-grid'>
                  <img src={icono2} alt='#'/>
                <h5>soporte</h5>
                </div>
                <div className='soporte-grid'>
                  <img src={icono3} alt='#'/>
                <h5>mantenimiento</h5>
                </div>
                
              </div>
            </div>
          </div>
        </article>
        <article>
          <h3 className='tec-title'>apoyo en tecnologia</h3>
          <div className='tec-grids'>
            <div className='tec-grid'>
              <p>Mejore y potencie a su equipo interno de TI con escalamiento técnico
                    cuando más lo necesite
              </p>
              
           
              <p>Trabajamos con usted para resolver su problema o volver a ponerlo en
                        funcionamiento lo más rápido posible.
              </p>
             
           
              <p>Somos socios estratégicos , brindando soluciones a la medida de sus
                    necesidades realizando una búsqueda constante del progreso.
              </p>
              
            </div>
            <img src={img3} alt='soporte'/>
          </div>

        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Soporte