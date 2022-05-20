import React from 'react'
import soluciones from '../../Images/soluciones-16.jpg'
import { Link } from 'react-router-dom'
import {
  Responsive} from 'typed-responsive-react';

function Soluciones() {
  return (
    <main className='sol-contenedor'>
        <div className='soluciones-grid'>
            <img src={soluciones} alt='soluciones'/>
            <div className='soluciones-text'>
                <h3>Soluciones</h3>
                <p>Nuestro equipo lo acompañará en cada
                  paso del camino a medida que
                  encontremos las soluciones adecuadas
                  para su entorno de IT. Nos aseguraremos
                  de que las inversiones que realice en
                  tecnología le brinden eficiencia,
                  simplicidad y éxito.</p>
                <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                <Link to='/soluciones' className='btn btn-soluciones btn-desktop'>ver soluciones</Link>
                </Responsive>
                <Responsive displayIn={['mobile', 'tablet']}>
                  <Link to='/soluciones' className='btn btn-soluciones btn-mobile'>ver soluciones</Link>
                  
                </Responsive>
                
            </div>
        </div>


    </main>
  )
}

export default Soluciones