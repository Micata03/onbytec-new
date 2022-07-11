import React, {useEffect, useState} from 'react'
import Layout from '../Heros/Layout'
import hero from '../Images/heromenu_web-07.jpg'
import img from './reforzar_1.jpg'
import reforzar2 from './reforzar_2.jpg'
import Contacto from '../../../Contacto'
import Footer from '../../../../Footer/Footer'
import Loader from '../../../../Pages/contacto/ContacForm/Loader/Loader'
import logo from '../../../../../Images/logohero-03.png'
import NavBar from '../../../../Pages/navbar'

import './index.css'

function Seguridad() {

  const style = {
    color: '#fff',
  }
  const color = {
    color: '#fff'
}


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
        crumb={'seguridad'}
        title={'Reforzar la seguridad'}
        texto={'Monitoreo de seguridad las 24hs, los 7 días de la semana, los 365 días del año y análisis de seguridad en tiempo real.'}
        boolean={false}
        boton={false}
        parrafo={'Mientras existan amenazas necesitará seguridad eficaz '}
        title2={'La estrategia de seguridad'}
        desc2={'Desde la detección temprana, el aislamiento, hasta la resolución y la recuperación rápida, nos comprometemos a proteger los entornos de los clientes las 24 horas del día, los 7 días de la semana, los 365 días del año.'}
        imgGrid={img}
        descripcion={'A medida que el mundo empresarial adopta la transformación digital, surgen nuevos riesgos de ciberseguridad los cuales cambian constantemente. Los atacantes nuncan dejarán de intentar aprovechar las vulnerabilidades de su organización, tanto sus sistemas y datos criticos estarán bajo ataque, y necesitará proteger la propiedad intelectual, los activos y los usuarios de la empresa.'}
        />
        <article className='seccion2'>
        <div className='seccion_text_false'>
                    <div className='seccion_text_false_parrafo'>
                      <p className='text-title' style={style}>La vulnerabilidad es una realidad del entorno digital</p>
                    <button className='btn btn-soluciones' >más información</button>
                    </div>
                    
                    
                    <p style={style}>El modelo comercial moderno se enfrenta a un panorama de amenazas en constante evolución. En Onbytec ayudamos a nuestros clientes a crear una sólida estrategia de seguridad cibernética para gestionar de forma eficiente las amenazas, reducir el riesgo comercial y garantizar el cumplimiento de los protocolos de seguridad</p>
                </div>
        </article>
        <div className='ultimo-texto'>
        <img src={reforzar2}/>

        <p>Nos enfocamos en recopilar, estandarizar y analizar datos generados por redes, aplicaciones y otra infraestructura de IT. Este análisis ocurre en tiempo real para evaluar y mejorar la postura de seguridad de una organización</p>
      </div>
        <Contacto/>
        <Footer/>
    </main>
  )
}
}

export default Seguridad