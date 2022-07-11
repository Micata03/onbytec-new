import React from 'react'
import Header from '../../header/Header'
import img from './header_auditoria.jpg'
import {auditoria, servicios} from '../data'
import imgGrid from './auditoria_1.jpg'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'


function Auditoria() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Auditoria'}
        desc={'Garantizamos la protección y seguridad de su información y sistemas a través de auditorías.'}
        crumb={'auditoria'}
        title={'Especialmente capacitados'}
        span={'profesionales'}
        parrafo={'La auditoría es un proceso llevado a cabo por profesionales especialmente capacitados. Consiste en recoger, agrupar y evaluar evidencias para determinar debilidades que pudieran presentarse en una revisión exhaustiva de las estaciones de trabajo, redes de comunicaciones o servidores.'}
        sector={'servicios'}
        />

        <article className='low-seccion'>
          <div className='descripcion_grid'>
            <div className='descripcion_grid1'>
              {
                auditoria.map((data, id)=>{
                  const {title, desc} = data;
                  return(
                    <div className='grid_contenedor' key={id}>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  )
                    
                  
                })
              }
            </div>
            <div className='descripcion_grid2'>
                <img src={imgGrid} alt='#'/>
            </div>

          </div>


        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Auditoria