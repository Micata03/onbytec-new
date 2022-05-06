import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import { industrias } from './industrias-data';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Responsive} from 'typed-responsive-react';

export default function Industrias() {


  
  return (
     <main className='industrias'>

        <Carousel fade>
          
            {industrias.map((ind, id)=>{
              const{img, title, desc, alt} = ind;
              return(
                <Carousel.Item  key={id} >
                    <img
                     className="d-block w-100 img-slider"
                      src={img}
                      alt={alt}
              
                    />
                    <Carousel.Caption>
                    <div className='text'>
                      <h3>{title}</h3>
                      <p>{desc}</p>
                      <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                        <button className=' btn btn-industrias btn-desktop'>ver todos</button>
                      </Responsive>
                      <Responsive displayIn={['mobile', 'tablet']}>
                        <button className=' btn btn-industrias btn-mobile'>ver todos</button>
                      </Responsive>
                     
                                      
                    </div>
                    </Carousel.Caption>

                </Carousel.Item>
              )
            })}
          
            
         
        </Carousel>
       

     </main>
  );
}


 