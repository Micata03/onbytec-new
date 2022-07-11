import React, {useEffect, useState} from 'react'
import Layout from '../Heros/Layout'
import hero from '../Images/heromenu_web-08.jpg'
import img from '../Images/heromenu_web-12.jpg'
import Contacto from '../../../Contacto'
import Footer from '../../../../Footer/Footer'
import Loader from '../../../../Pages/contacto/ContacForm/Loader/Loader'
import './index.css'

function Equipo() {

  const [loading, setLoading] = useState(true)

  useEffect (()=>{
    setTimeout(()=>{
      setLoading(false)
    }, 1300)
    
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
        crumb={'equipo'}
        title={'Expandir mi equipo'}
        texto={'Experiencia especializada en tecnología determinada, una plataforma en la nube o un tipo de proyecto'}
        boolean={true}
        boton={true}
        parrafo={'Equipo comprometido, experimentado y altamente capacitado'}
        title2={'los recursos correctos'}
        desc2={'Las empresas se están volviendo cada vez más impulsadas por el software y centradas en el cliente. Al involucrar a nuestro equipo de expertos experimentados, los clientes saben que tienen los recursos listos para mantener sus sistemas funcionando sin problemas y de forma segura.'}
        imgGrid={img}
        btnTexto={'contacto'}
        link={'/contacto'}
        />
        <article className='seccion'>
          <div className='seccion-grid'>
            <div className='seccion-grid-1'>
              <ol>
                <li>Realizamos actividades clave necesarias para una transformación digital exitosa</li>
                <li>Determinamos la mejor manera de medir los resultados exitosos</li>
                <li>Objetivos explícitos de mejorar la eficiencia, reducir la complejidad y el costo total de propiedad</li>
                
              </ol>
            </div>
            <div className='seccion-grid-2'>
              <p><span>Exactamente</span> lo que necesita su equipo</p>
              <div className='p-sub'></div>
            </div>
          </div>
        </article>
        <Contacto/>
        <Footer/>
    </main>
  )
}
}
export default Equipo