import React from 'react'
import Header from '../../header/Header'
import img from './header_outsourcing.jpg'
import { outsourcing  } from '../data'
import imgGrid from '../outsourcing_1.jpg'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'


function Outsourcing() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Outsourcing'}
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'outsourcing'}
        title={'para ejecutar con éxito'}
        span={'recursos especializados'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        />
        <article className='low-seccion'>
          <div className='descripcion_grid'>
            <div className='descripcion_grid1'>
              {
                outsourcing.map((data, id)=>{
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

export default Outsourcing