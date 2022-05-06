import React from 'react'
import Footer from '../Footer/Footer'
import Contacto from './Contacto'
import Hero from './Hero/Hero'
import Industrias from './Industrias'
import Nosotros from './Nosotros'
import Onbytec from './Onbytec'
import Partners from './partners/Partners'
import Productos from './Productos'
import Soluciones from './Soluciones'

function Home() {
  return (
      <main >
        <Hero/>
        <Nosotros/>
        <Soluciones/>
        <Onbytec/>
        <Productos/>
        <Industrias/>
        <Partners/>
        <Contacto/>
        <Footer/>

      </main>
    
  )
}

export default Home