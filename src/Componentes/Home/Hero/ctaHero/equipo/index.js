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
        texto={'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris nisi ut aliquip.'}
        boolean={true}
        
        parrafo={'Lorem ipsum dolor sit amet,Infraestructura Lorem ipsum olor sit amet, consectetuer adipiscing elit, sed diam'}
        title2={'equipo lorem ipsum dolor'}
        desc2={'Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones.'}
        imgGrid={img}
        />
        <article className='seccion'>
          <div className='seccion-grid'>
            <div className='seccion-grid-1'>
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib.</li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nib.</li>
              </ol>
            </div>
            <div className='seccion-grid-2'>
              <p><span>Lorem ipsum dolor  sit</span> infraestructura Lorem</p>
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