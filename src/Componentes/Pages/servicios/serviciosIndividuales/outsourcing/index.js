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
        desc={'La posibilidad de obtener diversos beneficios bajo el modelo de tercerización de recursos.'}
        crumb={'outsourcing'}
        title={'para ejecutar con éxito'}
        span={'recursos especializados'}
        parrafo={'El Outsourcing se presenta cuando los recursos tanto físicos como de personal se concentran en otra empresa especializada. En Onbytec brindamos, en forma permanente o por el lapso del proyecto, profesionales especializados en el análisis y desarrollo de sistemas para empresas, que están o no relacionados con su core business.'}
        sector={'servicios'}
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