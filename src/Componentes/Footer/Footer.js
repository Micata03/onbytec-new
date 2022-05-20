import React from 'react'
import logo from '../../Images/footer-29.png'
import punto from '../../Images/footer-34.png'
import tel from '../../Images/footer-33.png'
import facebook from '../../Images/footer-31.png'
import linkedin from '../../Images/footer-30.png'
import youtube from '../../Images/footer-32.png'
import { Link } from 'react-router-dom'
import './index.css'

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
                <div className='direccion'>  
                    <img src={tel} alt='tel' />
                    <div className='direccion-text'>
                        <small>Ventas</small>
                        <small>Tel: +34 910 60 31 73</small>
                    </div>
                </div>
                
                
            </div>
            <div className='col2'>
                <div className='secciones'>
                    <div className='empresa'>
                    <ul className='list-footer'>
                        <li className='titulo-footer'>empresa</li>
                        <Link to ='/nosotros'>
                            <li>Sobre Onbytec</li>
                        </Link>
                        <Link to='/noticias'>
                           <li>Noticias</li> 
                        </Link>
                        <Link to='/blog'>
                           <li>Blog</li> 
                        </Link>
                        <Link to='/nosotros/partners'>
                           <li>Partners</li> 
                        </Link>
                        <Link to='/nosotros/rrhh'>
                           <li>RRHH</li> 
                        </Link>
                        
                        </ul>
                    </div>
                <div className='servicios-footer'>
                    <ul className='list-footer'>
                        <li className='titulo-footer'>servicios</li>
                        <Link to='/consultoria'>
                           <li>Consultoria</li> 
                        </Link>
                        <Link to='/soporte'>
                           <li>Soporte Tecnico</li> 
                        </Link>
                        <Link to='/auditoria'>
                           <li>Auditoria</li> 
                        </Link>
                        <Link to='/outsourcing'>
                           <li>Outsourcing</li> 
                        </Link>
                        
                      
                    </ul>
                </div>

            </div>
            </div>
            <div className='soluciones-footer'>
                <ul className='list-footer'>
                <li className='titulo-footer'>Soluciones</li>
                <Link to='/soluciones/cloud'>
                    <li>Cloud</li> 
                </Link>  
                <Link to='/soluciones/ciberseguridad'>
                    <li>Ciberseguridad</li> 
                </Link>  
                <Link to='/soluciones/datacenter'>
                    <li>Datacenter</li> 
                </Link>  
                <Link to='/soluciones/networking'>
                    <li>Networking</li> 
                </Link>    
                </ul>
            </div>    

            
        </div>  
        <div className='final-footer'>
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
            <div className='final-copyright'>
            <p className='copyright'> 2022 ONBYTEC TECHNOLOGY. TODOS LOS DERECHOS RESERVADOS</p> 
            </div>
            <div className='terminos'>
                    <ul>
                        <li>Terminos y Condiciones</li>
                        <li>Politicas de Cookies</li>
                        <li>Politica de Privacidad</li>
                    </ul>
                </div>
        </div>
                
            
        
        

    </main>
  )
}

export default Footer