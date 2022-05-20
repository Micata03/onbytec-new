import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './datacenter_1.jpg'
import img1 from './datacenter_2.jpg'
import {datos} from './data'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'


function Datacenter() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Datacenter'}
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'datacenter'}
        title={'estrategico y optimizado'}
        span={'centro de datos'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        sector={'soluciones'}
        />

        <article>
          <div className='data-second_seccion'>
            <div className='cloud-text'>
            <h3>datacenter</h3>
              <p> Innove rápidamente,cree nuevas fuentes
                  de ingresos y mejore la experiencia de los
                  clientes con menos costos y
                  riesgos.aliquam erat volutpat. Ut wisi
                  enim ad minim veniam, quis nostrud exerci
                  tation explore nuestras soluciones.
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
              const {img, title, desc} = data;
              return (
                <div className='componente' key={id}>
                  <img src={img} alt={title}/>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>

              )
            })}
          </div>
        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Datacenter