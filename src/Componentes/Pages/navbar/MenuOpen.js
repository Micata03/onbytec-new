import React, {useState} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import logoMobile from '../../../Images/logohero.png'

import { Link } from 'react-router-dom';
import Accordion from './Accordion';
import './index.css'

function MenuOpen({close}) {

  
    const accordionData = [
        {
          title: 'soluciones',
          content: ['cloud' ,'ciberseguridad' ,'networking', 'datacenter']
        },
       
          {
            title: 'servicios',
            content: ['cloud' ,'seguridad' ,'equipo']
          },
          {
            title: 'nosotros',
            content: ['cloud' ,'seguridad' ,'equipo']
          },
      ];

    


    return (
        <main className='menu-overlay'>
           
           <nav className='nav-mobile'>
            <img src={logoMobile}  alt='onbytec' className='logoMobile'/>
            <AiOutlineClose onClick={close} className='close-mobile'/>
          
            </nav>
            <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
        
        <Link to='/industrias' className='accordion-items accordion-titles'>
            Industrias
          </Link>
          <Link to='/contacto' className='accordion-items'>

          
          <button className=' btn btn-contacto' style={{marginTop: '9%', alignSelf: 'center'}}>contacto</button>
      </Link>
        
      </div>
           

        </main>
    )
}

export default MenuOpen