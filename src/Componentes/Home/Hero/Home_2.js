import React, {useState} from 'react'
import Home2 from '../../../Images/nube2.png'
import HomeMobile from '../../../Images/mobile2-22.png'
import logo from '../../../Images/logohero-03.png'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen'
import {
  Responsive} from 'typed-responsive-react';
import { Link } from 'react-router-dom'

function Home_2({background}) {

  const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
  return (

    <>
    <div className='component' style={background}>
        <div className='componente_contenido'>
      
        <div className='componente_text'>
            <p>Aumente la eficiencia y la productividad en toda su organización en la nube</p>
            <Link to='/cloud'>
                <button className='btn-home-hero'>Conoce más</button>
            </Link>
        </div> 
        </div>
        
    </div>
  {/*
   
    <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>

        <div className='home1 home'>
              <img src={Home1} alt='home1' className='home1'/>
              <div className='home1-text'>
                <p>Home costos.</p>
                <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                
                  <Link to='/costos'>
                    <button className=' btn btn-hero btn-desktop'  >Conoce más</button>
                  </Link> 
                  
                </Responsive>
                <Responsive displayIn={['mobile', 'tablet']}>
                  <button className=' btn btn-hero btn-mobile'>Conoce más</button>
                </Responsive>
                
              </div>
            </div>


    </Responsive>

<Responsive displayIn={["mobile", "tablet"]}>
<nav className='menuOpen'>
       <img src={logo} />
       <AiOutlineMenu className="home-menu" onClick={openMenu}/>
            {menuOpen ?  <MenuOpen close={closeMenu}/> : console.log('mp')}
     </nav>
      <div className='home1 home'>
              <img src={HomeMobile} alt='home1' className='homeMobile'/>
            </div>

</Responsive>

 */} 
    </>
    
  )
}

export default Home_2