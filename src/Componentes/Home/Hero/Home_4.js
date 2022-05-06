import React, {useState} from 'react'
import Home4 from '../../../Images/img_hero4.png'
import HomeMobile from '../../../Images/mobile4-22.png'
import logo from '../../../Images/logohero-03.png'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen'
import {
  Responsive} from 'typed-responsive-react';
import { Link } from 'react-router-dom'

function Home_3() {

  const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
  return (
    <>
    <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
   <div className='home1 home'>
     <img src={Home4} alt='home1' className='home1'/>
     <div className='home1-text'>
       <p>Expandir mi equipo</p>
       <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
              <Link to='/equipo'>
                <button className=' btn btn-hero btn-desktop'>Conoce más</button>
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
   </>
  )
}

export default Home_3