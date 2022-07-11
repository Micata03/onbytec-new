import React from 'react'
import Footer from '../Footer/Footer'
import Contacto from './Contacto'
import Hero from './Hero/Hero'
import Industrias from './Industrias'
import IndustriasMobile from './industriasMobile'
import Nosotros from './Nosotros'
import Onbytec from './Onbytec'
import Partners from './partners/Partners'
import Productos from './Productos'
import Soluciones from './Soluciones'
import {
  Responsive,IDeviceInfo,} from 'typed-responsive-react';

function Home() {
  return (
      <main >
        
        <Hero/>
        <Nosotros/>
        <Soluciones/>
        <Onbytec/>
        <Productos/>
        <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
          <Industrias/>
        </Responsive>
        <Responsive displayIn={['mobile', 'tablet']}>
          <IndustriasMobile/>
        </Responsive>
        
        <Partners/>
        <Contacto/>
        <Footer/>

      </main>
    
  )
}

export default Home