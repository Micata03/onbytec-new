import React, {useState, useEffect} from 'react'
import Layout from '../Heros/Layout'
import hero from '../Images/heromenu_web-06.jpg'
import img from '../Images/heromenu_web-10.jpg'
import Contacto from '../../../Contacto'
import Footer from '../../../../Footer/Footer'
import Loader from '../../../../Pages/contacto/ContacForm/Loader/Loader'
import {data} from './data'

import './index.css'




function Cloud() {

  
  const [loading, setLoading] = useState(true)

  useEffect (()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 1600)
    
  }, [])

  if(loading){
    return(
      <Loader/>
    )
  }
  else{

  
  return (
    <main>
    <Layout
    img_hero={hero}
    crumb={'cloud'}
    title={'Migrar a la nube'}
    texto={'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris nisi ut aliquip.'}
    boolean={false}
    boton={true}
    parrafo={'Lorem ipsum dolor sit amet,Infraestructura Lorem ipsum '}
    title2={'LA NUBE LOREM IPSUM DOLOR'}
    desc2={'Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones.'}
    imgGrid={img}
    descripcion={'Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones. Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh euismod dunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,                                                  '}

    />

    <article className='cloud-segundaSeccion'>
      <h2>lorem ipsum</h2>
      <div className='segunda-grid'>
          {data.map((datos, id)=>{
            const {img, desc} = datos;
            return(
              <div className='datosGrid' key={id}>
                <img src={img} alt='#'/>
                <p>{desc}</p>
              </div>
            )
          })}
      </div>
    </article>
    
    <Contacto/>
    <Footer/>
</main>
  )
}}

export default Cloud