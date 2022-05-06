import React from 'react'
import soluciones from '../../Images/soluciones-16.jpg'
import {
  Responsive} from 'typed-responsive-react';

function Soluciones() {
  return (
    <main className='sol-contenedor'>
        <div className='soluciones-grid'>
            <img src={soluciones} alt='soluciones'/>
            <div className='soluciones-text'>
                <h3>Soluciones</h3>
                <p>Innove rápidamente,cree nuevas fuentes
                de ingresos y mejore la experiencia de los
                clientes con menos costos y
                riesgos.aliquam erat volutpat. Ut wisi
                enim ad minim veniam, quis nostrud exerci
                tation explore nuestras soluciones.</p>
                <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                  <button className=' btn btn-soluciones btn-desktop'>ver soluciones</button>
                </Responsive>
                <Responsive displayIn={['mobile', 'tablet']}>
                  <button className=' btn btn-soluciones btn-mobile'>ver soluciones</button>
                </Responsive>
                
            </div>
        </div>


    </main>
  )
}

export default Soluciones