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
    texto={'Mueva su entorno de las instalaciones a la nube con la  máxima velocidad y facilidad.'}
    boolean={false}
    boton={true}
    parrafo={'Migrar a la nube marca un cambio importante en la  estrategia '}
    title2={'EL ACERCAMIENTO CORRECTO A LA NUBE'}
    desc2={'La decisión de migrar a la nube marca un cambio importante en la estrategia IT de una empresa, que trae consigo innumerables beneficios, desde ahorro de costos y optimización hasta flexibilidad y facilidad de mantenimiento.'}
    imgGrid={img}
    descripcion={'La decisión de migrar a la nube marca un cambio importante en la estrategia IT de una empresa, que trae consigo innumerables beneficios, desde ahorro de costos y optimización hasta flexibilidad y facilidad de mantenimiento.'}
    btnTexto={'más información'}
    link={'/soluciones/cloud'}
    />

    <article className='cloud-segundaSeccion'>
      <div className='cloud-segundaSeccion-title'>
        <h2>Beneficios</h2>
      </div>
      
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