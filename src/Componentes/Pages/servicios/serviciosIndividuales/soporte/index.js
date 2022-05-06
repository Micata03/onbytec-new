import React from 'react'
import Header from '../../header/Header'
import img from './header_soporte.jpg'

function Soporte() {
  return (
    <div>
        <Header
        img={img}
        servicio={'Soporte técnico'}
        desc={'Digital transformation requires so much ore than new technology. It requires undamental changes to culture, communications, and how work gets done. Without the right efforts'}
        crumb={'soporte'}
        title={'Contrata Mantenimiento'}
        span={'ahorre la molestia de'}
        parrafo={'Digital transformation requires so much more than new technology. It requires fundamental changes to culture, communications, and how work gets done. Without the right foundation in place to enable change, your digital efforts will estalla.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.'}
        />
    </div>
  )
}

export default Soporte