import React from 'react'
import logo from '../../Images/footer-29.png'
import punto from '../../Images/footer-34.png'
import tel from '../../Images/footer-33.png'
import facebook from '../../Images/footer-31.png'
import linkedin from '../../Images/footer-30.png'
import youtube from '../../Images/footer-32.png'

function Footer() {
  return (
    <main className='footer'>
        <div className='footer-grid'>
            <div className='datos'>
                <img src={logo} alt='obt'/>
                <div className='direccion'>
                    <img src={punto} alt='place'/>
                    <div className='direccion-text'>
                        <small>España</small>
                        <small>Paseo de la Castellana 77, Madrid</small>
                    </div>
                </div>  
                <div className='direccion'>  
                    <img src={tel} alt='tel' />
                    <div className='direccion-text'>
                        <small>Ventas</small>
                        <small>Tel: +34 910 60 31 73</small>
                    </div>
                </div>
                
                <div className='social-links'>
                    <a href='/'>
                        <img src={linkedin} alt='linkedin' />
                    </a>
                    <a href='/'>
                        <img src={facebook} alt='facebook' />
                    </a>
                    <a href='/'>
                        <img src={youtube} alt='youtube' />
                    </a>
                </div>
            </div>
            <div className='col2'>
            <div className='secciones'>
                <div className='empresa'>
                    <ul className='list-footer'>
                    <li className='titulo-footer'>empresa</li>

                        <li>Sobre Onbytec</li>
                        <li>Noticias</li>
                        <li>Blog</li>
                        <li>Partners</li>
                        <li>RRHH</li>
                    </ul>
                </div>
                <div className='servicios-footer'>
                    <ul className='list-footer'>
                        <li className='titulo-footer'>servicios</li>
                        <li>Servicio</li>
                        <li>Servicio</li>
                        <li>Servicio</li>
                        <li>Servicio</li>
                        <li>Servicio</li>
                    </ul>
                </div>

            </div> 
            <small className='copyright'> 2022 ONBYTEC TECHNOLOGY. TODOS LOS DERECHOS RESERVADOS</small>
                      
            </div>
            <div className='soluciones-footer'>
                <ul className='list-footer'>
                <li className='titulo-footer'>Soluciones</li>

                    <li>Cloud</li>
                    <li>ciberseguridad</li>
                    <li>Datacenter</li>
                    <li>Networking</li>

                </ul>
                <div className='terminos'>
                    <ul>
                        <li>Terminos y Condiciones</li>
                        <li>Aviso Legal</li>
                        <li>Politica de Privacidad</li>
                    </ul>
                </div>
            </div>
        </div>

    </main>
  )
}

export default Footer