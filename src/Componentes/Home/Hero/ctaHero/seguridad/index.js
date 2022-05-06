import React, {useEffect, useState} from 'react'
import Layout from '../Heros/Layout'
import hero from '../Images/heromenu_web-07.jpg'
import img from '../Images/heromenu_web-11.jpg'
import Contacto from '../../../Contacto'
import Footer from '../../../../Footer/Footer'
import Loader from '../../../../Pages/contacto/ContacForm/Loader/Loader'

import './index.css'

function Seguridad() {

  const style = {
    color: '#fff',
  }
  const btnStyle = {
    marginTop: '0',
    marginLeft: '41%'
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
        texto={'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris nisi ut aliquip.'}
        boolean={false}
        boton={false}
        parrafo={'Lorem ipsum dolor sit amet,Infraestructura Lorem ipsum '}
        title2={'seguridad lorem ipsum dolor'}
        desc2={'Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones.'}
        imgGrid={img}
        descripcion={'Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones. Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh euismod dunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,                                                  '}
        />
        <article className='seccion2'>
        <div className='seccion_text_false'>
                    <div>
                      <p className='text-title' style={style}>Lorem ipsum dolor sit amet,Infraestructura Lorem ipsum</p>
                    <button className='btn btn-soluciones' style={btnStyle}>como funciona</button>
                    </div>
                    
                    
                    <p style={style}>Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones. Lorem ipsum dolor</p>
                </div>
        </article>
        <Contacto/>
        <Footer/>
    </main>
  )
}
}

export default Seguridad