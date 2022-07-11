import React from 'react'
import Header from '../../header/Header'
import img from './header_consultoria.jpg'
import {consultoria} from '../data'
import imgGrid from './consultoria_1.jpg'
import nube from '../nubelineal_fondo.png'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'

function Consultoria() {
  return (
    <main>
        <Header
        img={img}
        servicio={'Consultoria'}
        desc={'Te acompañamos durante todo el proyecto o servicio tecnológico y te asesoramos'}
        crumb={'consultoria'}
        title={'Ante nuevas tecnologías'}
        span={'fuente de consulta'}
        parrafo={'Trabajamos con usted para desarrollar estrategias para mejorar la infraestructura técnica y las eficiencias operativas con un enfoque independiente de la tecnología y de múltiples proveedores.'}
        sector={'servicios'}
        />
        <article className='low-seccion'>
          <div className='descripcion_grid'>
            <div className='descripcion_grid1'>
              {
                consultoria.map((data, id)=>{
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
              {/* <img src={nube} alt='#'/>*/}
                <img src={imgGrid} alt='#'/>
            </div>

          </div>


        </article>
        <Contacto/>
        <Footer/>

    </main>
  )
}

export default Consultoria