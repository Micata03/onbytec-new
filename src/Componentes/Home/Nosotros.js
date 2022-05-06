import React from 'react'
import img1 from '../../Images/nosotros-img1.png'
import img2 from '../../Images/nosotros-img2.png'
import cloud from '../../Images/iconos_soluciones-05.png'
import data from '../../Images/iconos_soluciones-06.png'
import ciber from '../../Images/iconos_soluciones-07.png'
import net from '../../Images/iconos_soluciones-08.png'


function Nosotros() {
  return (
    <main className='nosotros'>
        <div className='nosotros-frase'>
            <img src={img1} className='img1'/>
            <div className='nosotros-frase_text'>
                <h2>Transformación digital</h2>
                <div className='sub'></div>
                <p>Digital transformation requires so much more than new technology. It requires
                fundamental changes to culture, communications, and how work gets done. Without
                the right foundation in place to enable change, your digital efforts will stall.
                </p>
            </div>
            <img src={img2} className='img2'/>
        </div>
        <div className='soluciones'>
            <div className='icon'>
                <img src={cloud}/>
                <h6>cloud</h6>

            </div>
            <div className='icon'>
                <img src={data}/>
                <h6>datacenter</h6>

            </div>
            <div className='icon'>
                <img src={ciber}/>
                <h6>ciberseguridad</h6>

            </div>
            <div className='icon'>
                <img src={net}/>
                <h6>network</h6>

            </div>
        </div>
    </main>
  )
}

export default Nosotros