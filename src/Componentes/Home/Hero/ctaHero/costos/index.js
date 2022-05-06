import React, {useState, useEffect} from 'react'
import Layout from '../Heros/Layout'
import hero from '../Images/heromenu_web-05.jpg'
import img from '../Images/heromenu_web-09.jpg'
import Contacto from '../../../Contacto'
import Footer from '../../../../Footer/Footer'
import AnimatedNumbers from "react-animated-numbers";
import CircularProgress from "./CircularProgress";
import arrow from './flecha.png'
import Loader from '../../../../Pages/contacto/ContacForm/Loader/Loader'
import './index.css'

function Costos() {

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
        crumb={'costos'}
        title={'Reducir Costos'}
        texto={'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation llamco laboris nisi ut aliquip.'}
        boolean={true}
        boton={true}
        parrafo={'Lorem ipsum dolor sit amet,Infraestructura Lorem ipsum olor sit amet, consectetuer adipiscing elit, sed diam'}
        title2={'MENOR COSTO MAYOR RENDIMIENTO'}
        desc2={'Innove rápidamente,cree nuevas fuentes de ingresos y mejore la experiencia de los clientes con menos costos y riesgos.aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation explore nuestras soluciones.'}
        imgGrid={img}
        />
        <article className='resultados'>
      <div className='resultados-grid'>
        <div className='contenedor'>
          <div className='contenedor1'>
            <img src={arrow} alt='/'/>
              <AnimatedNumbers
                      
                      animateToNumber= '85'
                      fontStyle={{ fontSize: '4rem' , fontFamily: 'Lato', fontWeight: 700, color:'#1560a5'}}
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
              ></AnimatedNumbers>
              <h2>%</h2>

          </div>
          <div className='texto-num'>
            <h6>texto texto</h6>
            <small>* al 2021</small>

          </div>
        
        
        </div>
        <div className='contenedor'>
        <CircularProgress
        size={200}
        strokeWidth={15}
        percentage={75}
        color="#1560a5"
        
      />
      <div className='texto-num'>
            <h6>texto texto</h6>
            <small>* al 2021</small>

          </div>
        </div>
        <div className='contenedor'>
        <div className='contenedor1'>
            
              <AnimatedNumbers
                      
                      animateToNumber= '100'
                      fontStyle={{ fontSize: '4rem' , fontFamily: 'Lato', fontWeight: 700, color:'#1560a5'}}
                      configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 1, tension: 180, friction: 130 },
                        { mass: 1, tension: 280, friction: 90 },
                        { mass: 1, tension: 180, friction: 135 },
                        { mass: 1, tension: 260, friction: 100 },
                        { mass: 1, tension: 210, friction: 180 },
                      ]}
              ></AnimatedNumbers>
              

          </div>

          <div className='texto-num'>
            <h6>texto texto</h6>
            <small>* al 2021</small>

          </div>

        </div>
      </div>
    </article>
        <Contacto/>
        <Footer/>
    </main>
  )
}
 }
export default Costos