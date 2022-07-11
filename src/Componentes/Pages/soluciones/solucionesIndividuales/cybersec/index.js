import React from 'react'
import Header from '../../../servicios/header/Header'
import img from './cyber_1.jpg'
import img1 from './cyber_2.jpg'
import icono1 from './icono1.png'
import icono2 from './icono2.png'
import icono3 from './icono3.png'
import Contacto from '../../../../Home/Contacto'
import Footer from '../../../../Footer/Footer'
import './index.css'



function Cybersecurity() {
const background ={
  backgroundColor:'#ccc',
}
  const color ={
    
    margin: '0 auto',
    height: 'auto'
  }

  const margin= {
    marginTop:'15vh'
  }

  
  return (
    <div>
        <Header
        img={img}
        servicio={'Cybersecurity'}
        desc={'Logre un equilibrio que lo mantenga seguro, lo ayudaremos a examinar todo su entorno, inlcuida la seguridad de sus datos.'}
        crumb={'security'}
        title={'realidad den entorno digital'}
        span={'la vulnerabilidad es una'}
        parrafo={'El modelo comercial digital que ejecutamos en la actualidad, se enfrenta a un panorama de amenazas en constante evolución. En Onbytec ayudamos a nuestros clientes a crear una estrategia resistente de seguridad cibernética para gestionar de forma eficaz las amenazas, reducir el riesgo comercial y garantizar el cumplimiento de los protocolos.'}
        sector={'soluciones'}
        />
      <article>
        <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>seguridad</h3>
              <p> La ciberseguridad ya no es un
                  departamento aislado,nos encargamos de
                  mantener las prioridades críticas en toda
                  la empresa y la identificación temprana de
                  vulnerabilidades y respuesta a incidentes
                  ofreciendo un enfoque personalizado.
              </p>
            </div>
          </div>
        </article>
        <article style={background}>
        <div className='componentes-textos'>
          
            <h2>la metodología correcta</h2>
              <p>Brindamos un alto nivel de soporte en respuesta a incidentes, desde la planificación, solución y la correcta recuperación.</p>
         
              
            </div>
          <div className='componentes' style={color}>
            
           
                <div className='componente' style={margin}  >
                  <img src={icono1} alt='#'/>
                  <h4>planeacion</h4>
                </div>
                <div className='componente' style={margin} >
                  <img src={icono2} alt='#'/>
                  <h4>solucion</h4>
                </div>
                <div className='componente' style={margin}  >
                  <img src={icono3} alt='#'/>
                  <h4>recuperacion</h4>
                </div>

           
          </div>
        </article>
        <article>
          <div className='componentes-info'>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>proteja</span> sus datos</h4>
              </div>
              <div className='info-2'>
                <p>Brinde una experiencia perfecta y segura,
                    para los trabajadores de su empresa,
                    independientemente de su ubicación
                </p>
              </div>
              
            </div>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>analice</span> los riesgos</h4>
              </div>
              <div className='info-2'>
                <p>Ofrezca las mejores prácticas para
                aplicar políticas efectivas y compatibles
                con las operaciones de la empresa.
                </p>
              </div>
              
            </div>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>invierta</span> en  seguridad</h4>
              </div>
              <div className='info-2'>
                <p>Que la seguridad seaun medio para que
                  trabaje de manera más productiva y haga
                  todo de manera más segura.

                </p>
              </div>
              
            </div>
            <div className='componente-info'>
              <div className='info-1'>
                <h4><span>identifique</span> amenazas</h4>
              </div>
              <div className='info-2'>
                <p>Tenga mayor visibilidad de quién y qué
                  dispositivos solicitan acceso a su red
                </p>
              </div>
              
            </div>
          </div>
        </article>
        <article className='banner-seguridad'>
          <div className='banner-seguridad-text'>
            <p>
              Vamos más allá de mitigar el
              riesgo: nos anticipamos a las
              amenazas y brindamos soporte
              las 24 horas.
            </p>
            <div className='banner-sub'></div>
          
          </div>
        </article>
        <Contacto/>
        <Footer/>
    </div>
  )
}

export default Cybersecurity