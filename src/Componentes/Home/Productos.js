import React from 'react'
import consultoria from '../../Images/productos-35.jpg'
//import soporte from '../../Images/productos-36.jpg'
//import outsourcing from '../../Images/productos-37.jpg'
//import auditoria from '../../Images/productos-38.jpg'
import { productos } from './Hero/productos-data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';


function Productos() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 300 },
          items: 1
        }
      };

    const style = {
        width:'100%',
        padding: '1.5rem',
        opacity: '50%'
    }
  return (
    <main className='servicios' >
            <h2>productos y servicios</h2>
        <article className='2'>
        <Carousel responsive={responsive} infinite={true}>    
        
        
        
        {productos.map((prod, id)=>{
            const {img,  desc, alt, subtitle} = prod;
            return (
                <div className='container' key={id}>
            
            <div className='producto-card'>
                <img src={img} alt={alt} style={style}  />
                <aside className='producto-card-info'>
                    <div>
                        <p>{desc}
                        </p>
                        <Link to={`/${alt}` } className='btn-card'>leer mas</Link>
                        
                    </div>
                </aside>
            </div>

            <small>servicio</small>
            <h6>{subtitle}</h6>


        </div>
            )


        })}
        </Carousel>
        

        

       
        
        </article>
    </main>
  )
}

export default Productos