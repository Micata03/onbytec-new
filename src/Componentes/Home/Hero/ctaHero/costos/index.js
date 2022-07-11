import React, {useState, useEffect} from 'react'
import Layout from '../Heros/Layout'
import hero from '../Images/heromenu_web-05.jpg'
import img from '../Images/heromenu_web-09.jpg'
import Contacto from '../../../Contacto'
import Footer from '../../../../Footer/Footer'
import AnimatedNumbers from "react-animated-numbers";
import CircularProgress from "./CircularProgress";
import  costos2 from './reducir_2.jpg'
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
        texto={'En Onbytec le ayudamos a optimizar sus costos de operaciones a precios más bajos.'}
        boolean={true}
        boton={false}
        parrafo={'Una amplia gama de servicios y soluciones para ayudar a reducir sus gastos de tecnología'}
        title2={'MENOR COSTO MAYOR RENDIMIENTO'}
        desc2={'Onbytec puede trabajar con usted para estructurar soluciones financieras innovadoras que aprovechen el valor de los activos que ya tiene , reducir los pagos de la financiación, o proceder con las adquisiciones que necesita ahora mismo alineando sus costos con el uso y el efectivo caudal.'}
        imgGrid={img}
        />
        <article className='resultados'>
      <div className='resultados-grid'>
        <div className='contenedor'>
          <div className='contenedor1'>
            <img src={arrow} alt='/'/>
              <AnimatedNumbers
                      
                      animateToNumber= '20'
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
            <h6>Ahorros en costos IT</h6>
            <small>* al 2021</small>

          </div>
        
        
        </div>
        <div className='contenedor'>
        <CircularProgress
        size={200}
        strokeWidth={15}
        percentage={50}
        color="#1560a5"
        
      />
      <div className='texto-num'>
            <h6>Ahorros en costos</h6>
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
            <h6>Efectividad</h6>
            <small>* al 2021</small>

          </div>

        </div>
      </div>
      
    </article>
    <div className='ultimo-texto'>
        <img src={costos2}/>

        <p>Desde mantenimiento general hasta suscripciones y licencias de software,nuestros expertos lo ayudaran en la optimización de costos en su equipo integral de IT.</p>
      </div>
        <Contacto/>
        <Footer/>
    </main>
  )
}
 }
export default Costos