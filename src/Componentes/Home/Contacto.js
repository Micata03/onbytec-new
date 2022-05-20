import React from 'react'
import img from '../../Images/contacto_misc-28.png'
import {
  Responsive} from 'typed-responsive-react';


function Contacto() {
  return (
    <main className='contacto'>
        <img src={img} alt='contacto'/>
        <div className='contacto-text'>
            <h3>Conectate con nosotros</h3>
            <p>Estamos listos para ayudarlo, déjenos saber
que podemos hacer por su negocio.</p>
            <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                  <button className=' btn btn-contacto btn-desktop'>contáctanos</button>
                </Responsive>
                <Responsive displayIn={['mobile', 'tablet']}>
                  <button className=' btn btn-contacto btn-mobile'>contáctanos</button>
                </Responsive>
           
        </div>

    </main>
  )
}

export default Contacto