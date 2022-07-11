import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './datacenter_1.jpg'
import img1 from './datacenter_2.jpg'
import {datos} from './data'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import datacenter from './datacenter1-07.jpg'
import './index.css'


function Datacenter() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Datacenter'}
        desc={'Diseñamos estratégicamente la infraestructura de su centro de datos para respaldar las comunicaciones'}
        crumb={'datacenter'}
        title={'estrategico y optimizado'}
        span={'centro de datos'}
        parrafo={'El datacenter puede estar en las instalaciones, en una colocación o en la nube, en Onbytec lo ayudamos a decidir, planificar para reducir el gasto en IT, evitar problemas de rendimiento y liberar recursos internos.'}
        sector={'soluciones'}
        />

        <article>
          <div className='data-second_seccion'>
            <div className='cloud-text'>
            <h3>datacenter</h3>
              <p> El datacenter se pueden modernizar para
              manejar las demandas de los negocios y
              ayudar a las organizaciones a obtener una
              ventaja competitiva en el mercado.
                            </p>
              
            </div>
            <div className='data-img'>
            <img src={img1} alt='#'/>
            </div>
          </div>
        </article>
        <article >
          <h2 className='componentes-title'>componentes</h2>
          <div className='componentes'>
            {datos.map((data, id)=>{
              const {img, title} = data;
              return (
                <div className='componente' key={id}>
                  <img src={img} alt={title}/>
                  <h4>{title}</h4>
                 
                </div>

              )
            })}
          </div>
        </article>
        <article className='last-text'>
          <div className='last-text_texto'>
            <h3>business continuity cloud</h3>
            <p>Al utilizar el sistema de business continuity cloud,la
              gestión de riesgos es clave. Un plan debe considerar
              eventos impredecibles desde desastres naturales a
              ciberataques. Este sistema le ayudará a proteger su
              ecosistema completo de IT, incluyendo sus aplicaciones
              y sistemas con backup, disaster recovery,alta
              disponibilidad y soluciones de archivado de correo
              electrónico.</p>
          </div>
        </article>
        <article className='banner-datacenter'>
          <div className='banner-datacenter-text'>
            
              <p>Transforme su datacenter en máquinas generadoras de negocios eficientes y escalables.</p>
            
            
            <img src={datacenter} alt='datacenter'/>
          </div>

        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Datacenter