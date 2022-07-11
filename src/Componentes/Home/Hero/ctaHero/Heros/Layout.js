import React, {useState, useEffect} from 'react'

import './layouts.css'
import Breadcrumb from '../../../../Breadcrumb'
import logo from '../../../../../Images/logohero-03.png'
import NavBar from '../../../../Pages/navbar/index'
import { Link } from 'react-router-dom'


function Layout({img_hero, title, texto, boolean, parrafo, descripcion, title2, desc2, imgGrid, boton, crumb, btnTexto, link}) {
    const [crumbs, setCrumbs] = useState(['Home', `${crumb}`]);

  const selected = crumb => {
    console.log(crumb);
  }

    const style = {
        backgroundImage: `url(${img_hero})`,
        heihgt: '100vh'
        
        
    }

    const color ={
        color: '#fff'
    }


  return (
    <main >
        <article className='layoutHero' style={style} >
            <div className='overlay1'>
             <NavBar logo={logo} logoMobile={logo} color={color}/>
              
            <div className='layoutText'>
                <h2>{title}</h2>
                <p>{texto}</p>
            </div>  
            </div>
            

        </article>
        <article className='secondSeccion'>
        <Breadcrumb crumbs ={crumbs} selected={selected}/> 
           
            {
                boolean ? <div className='secondSeccion_text'>
                    <p>{parrafo}</p>
                    <div className='sub'></div>
                </div> :
                <div className='seccion_text_false'>
                    <p className='text-title'>{parrafo}</p>
                    
                    <p>{descripcion}</p>
                </div>
            }

            <div className='secondSeccion_grid'>
                <div className='grid_1'>
                    <h3>{title2}</h3>
                    <p>{desc2}</p>
                    {
                        boton &&  <Link to={link}className='btn-hero'>{btnTexto}</Link>
                    }
                    
                </div>
                <div className='grid_2'>
                    <img src={imgGrid} alt={title}/>
                </div>
            </div>

        </article>
    
        
        

    </main>
  )
}

export default Layout