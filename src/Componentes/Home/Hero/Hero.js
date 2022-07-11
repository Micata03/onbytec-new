import React, { useEffect, useState } from 'react'
import './hero.css'
import Navbar from '../../Pages/navbar/index'
import logo from '../../../Images/logohero-03.png'

import Home4 from '../../../Images/nube4.png'
import Home_1 from './Home_1'
import Home_2 from './Home_2'
import Home_3 from './Home_3'
import Home_4 from './Home_4'

import Home2 from '../../../Images/nube2.png'
import Home1 from '../../../Images/nube1.png'
import Home3 from '../../../Images/nube3.png'
import fondo1 from '../../../Images/fondo_hero.jpg'
import fondo2 from '../../../Images/fondo_hero2-02.jpg'
import fondo3 from '../../../Images/fondo_hero3.jpg'
import fondo4 from '../../../Images/fondo_hero4.jpg'
import {
    Responsive,IDeviceInfo,} from 'typed-responsive-react';
import { Link } from 'react-router-dom'
import HeroMobile from '../Hero/heroMobile/index'
import './hero.css'
import NavBar from '../../Pages/navbar/index'
   
    
   





  


function Hero() {

    const color = {
        color: '#fff'
    }

    const [isLoading, setIsLoading]= useState(true);

    const [id, setId] = useState(1);

    
 

 


  const tester = ()=>{
      setId(1)
  }
  const test = ()=>{
    setId(2)
}
const test1 = ()=>{
    setId(3)
}
const test2 = ()=>{
    setId(4)
}



let background = {
    backgroundImage:  `url(${Home1})`
}

let componente = <Home_1 background={background}/>



    if (id===1) {
        background = {
            backgroundImage:  `url(${Home1})`
        }
        componente = <Home_1 background={background}/>


      
         
         
 } if (id===2){
    background = {
        backgroundImage:  `url(${Home2})`
    }
    componente = <Home_2 background={background}/>
    
 }if (id===3){
    background = {
        backgroundImage:  `url(${Home3})`
    }
    componente = <Home_3 background={background}/>
    
 }if (id===4){
    background = {
        backgroundImage:  `url(${Home4})`
    }
    componente = <Home_4 background={background}/>
    
}       

let hero = 'hero'

    if(id ===  1){
        hero = 'hero1'
    } if (id===2){
        hero = 'hero2'
    }if (id===3){
        hero = 'hero3'
    }if (id===4){
        hero = 'hero4'
    }

 

 

  return (

    <main className={`${hero }`}>
        <NavBar logo={logo} logoMobile={logo} color={color}/>

<Responsive displayIn={['Laptop', 'LargerThanLaptop']}>

         
         <div className='contenedor_home_grid'>
                            <div className='contenedor_home_grid_text'>
                                <div className='contenedor_texto'>

                                
                                <h1 >¿Como podemos ayudarte?</h1>
                                <div className='contenedor_lista'>
                                    <ul >
                                       <Link to='/costos' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <li onMouseOver={tester} className='li-hero'>Reducir costos</li>
                                       </Link>
                                        
                                       
                                       <Link to='cloud' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <li onMouseOver={test} className='li-hero'  >Migrar a la nube</li>
                                        </Link>
                                        <Link to='/seguridad' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <li onMouseOver={test1} className='li-hero'>Reforzar la seguridad</li>
                                        </Link>
                                        <Link to='/equipo' style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                        <li onMouseOver={test2}className='li-hero'>Expandir mi equipo</li>
                                        </Link>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className='contenedor_home_grid_componente'>

                           {componente}
                    
                     {/*
                     <div className='component' style={background}>
        <div className='componente_contenido'>
      
        <div className='componente_text'>
            <p>{texto}</p>
            <Link to={`${link}`}>
                <button className='btn btn-hero'>Conoce más</button>
            </Link>
        </div> 
        </div>
        
    </div>
                     
                     */}       
                            
                            
                                
                            </div>
                        </div>

                        </Responsive>    

                             <Responsive displayIn={["mobile", "tablet"]}>
                              <div>
                                
                                <HeroMobile/>
                              </div>
                                

</Responsive>     
                       


    </main>
    
  )
}

export default Hero