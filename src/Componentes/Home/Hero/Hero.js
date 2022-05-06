import React, { useEffect, useState } from 'react'
import './hero.css'
import Navbar from '../../Pages/navbar/index'
import logo from '../../../Images/logohero-03.png'
import Home_1 from './Home_1'
import Home_2 from './Home_2'
import Home_3 from './Home_3'
import Home_4 from './Home_4'
import Home4 from '../../../Images/img_hero4.png'
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
   
    
   





  


function Hero() {

    const color = {
        color: '#fff'
    }

    const [isLoading, setIsLoading]= useState(true);

    const [id, setId] = useState(1);

    useEffect(()=>{
        const imgs = [
            Home1, Home2, Home3, Home4, fondo1, fondo2, fondo3, fondo4
        ];

        cacheImages(imgs);
    }, [])



    const cacheImages = async (srcArray) =>{
        const promises = await srcArray.map((src)=>{
            return new Promise(function(resolve, reject){
                const img = new Image();
                img.src = src;
                Image.onload = resolve();
                Image.onerror= reject();
            });
        });

        await Promise.all(promises);

        setIsLoading(false)
    }


 

 


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

let componente = <Home_1/>
    if (id===1) {
         componente =   <Home_1/>
 } if (id===2){
     componente= <Home_2/>
 }if (id===3){
     componente = <Home_3/>
 }if (id===4){
    componente = <Home_4/>
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

        <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                
                <Navbar logo={logo} color={color}/>
                        <div className='hero-slider'>
                            <div className='hero-slider-text'>
                                <h1 className='hero-title'>¿Como podemos ayudarte?</h1>
                                <div className='hero-text-list'>
                                    <ul className='slider'>
                                       
                                        <li onMouseOver={tester} className='slider'>Reducir costos</li>
                                       
                                        
                                        <li onMouseOver={test} className='slider' >Migrar a la nube</li>
                                        <li onMouseOver={test1} className='slider'>Reforzar la seguridad</li>
                                        <li onMouseOver={test2}className='slider'>Expandir mi equipo</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='hero-imgs'>
                    
                            {componente}
                            
                            
                                
                            </div>
                        </div>

     </Responsive>

     <Responsive displayIn={["mobile", "tablet"]}>
                        <div className='hero-slider-resp'>
                            <div className='hero-slider-text-resp'>
                                <h1 className='hero-title-resp'>¿Como podemos ayudarte?</h1>
                                    <div className='hero-imgs-resp'>
                                                        
                                    {componente}
                                    </div>                            
                                 <div className='hero-text-list-resp'>
                                    <ul className='slider'>
                                        <li onMouseOver={tester} className='btn-slider-hero'>Reducir costos</li>
                                        <li onMouseOver={test} className='btn-slider-hero' >Migrar a la nube</li>
                                        <li onMouseOver={test1} className='btn-slider-hero'>Reforzar la seguridad</li>
                                        <li onMouseOver={test2}className='btn-slider-hero'>Expandir mi equipo</li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>                                
                                                                    
                                     

                               

     </Responsive>

        

    </main>
    
  )
}

export default Hero