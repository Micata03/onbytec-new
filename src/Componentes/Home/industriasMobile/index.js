import React from 'react'
import {industrias} from '../industrias-data'
import {Carousel} from 'react-bootstrap'
import './index.css'

function IndustriasMobile() {
  return (
    <main className=''>

        <Carousel fade className='ind-slider-mobile' >
          
            {industrias.map((ind, id)=>{
              const{img, title, desc, alt} = ind;
              return(
                <Carousel.Item  key={id} >
                  
                     <img
                     className="d-block w-100 ind-slider-mobile-img"
                      src={img}
                      alt={alt}
              
                    />
                
                  
                    <Carousel.Caption className='ind-text-mobile'>
                    <div className='text-mobile-texto' >
                      <h3>{title}</h3>
                      <p>{desc}</p>
                 
                      <button className=' btn  btn-slider-mobile'>mobile</button>
                      
                     
                      
                     
                                      
                    </div>
                    </Carousel.Caption>

                </Carousel.Item>
              )
            })}
          
            
         
        </Carousel>
       

     </main>
  )
}

export default IndustriasMobile