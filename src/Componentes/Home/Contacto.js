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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
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