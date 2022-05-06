import React from 'react'
import './MenuOpen.css'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../../Images/logohero-03.png'



function MenuOpen({close}) {

    
    return (
        <main className='menu-overlay'>
            <article className='menu'>
                <div className='menu-grid'>
                  
                        <AiOutlineClose className="menu-close" onClick={close}/>
                        <img src={logo} className='menu-img' onClick={close}/>
                        
                  
                        <ul className='menu-links'>
                            <li onClick={close}>Soluciones</li>
                            <li onClick={close}>Industrias</li>
                           <li onClick={close}>Servicios</li>
                           <li onClick={close}>Nosotros</li>
                           <li onClick={close}>contacto</li>
                            
                            
                        </ul>
                 </div>
              
            </article>

        </main>
    )
}

export default MenuOpen