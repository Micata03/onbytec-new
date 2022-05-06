import React, {useState} from 'react'
import Navbar from '../navbar/index'
import Contacto from '../../Home/Contacto'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen';
import Footer from '../../Footer/Footer'
import Breadcrumb from '../../Breadcrumb'
import logo from '../../../Images/logohero-03.png'
import logo1 from '../../../Images/logohero-03.png'
import './index.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import {dataInd} from './data'
import {
    Responsive} from 'typed-responsive-react';

function Industrias() {
    const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = ()=>{
      setMenuOpen(true)
  }
  const closeMenu =()=>{
      setMenuOpen(false)
  }

    const [crumbs, setCrumbs] = useState(['Home', 'Industrias']);

    const selected = crumb => {
      console.log(crumb);
    }

    const style ={
        width: '50%'
    }
    
  return (
    <main>
        
        <article className='heroInd '>
            <main className='overlay'>
            <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>

            <Navbar logo={logo}/>
            </Responsive>

            
            <Responsive displayIn={["mobile", "tablet"]}>
        <nav className='menuOpen'>
            <img src={logo1} />
            <AiOutlineMenu className="home-menu" onClick={openMenu}/>
                    {menuOpen ?  <MenuOpen close={closeMenu}/> : console.log('mp')}
            </nav>
            

        </Responsive>    

            
            
            <div className='heroInd-text'>
                <h2>Industrias</h2>
                <p>Adapting to a diverse set of
                    industries provides an
                    opportunity to serve markets who
                    can remain underserved. Creative
                    engineers and technicians can
                </p>
                <Link to='/contacto'>
                    <button className='btn-contacto'>contactanos</button>
                </Link>
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>
        <article className='ind-text'>
        
            
            <div className='nosotros-frase_text  '>
                <h2 className='ind'>soluciones adecuadas <span>para cada industria</span></h2>
                <div className='sub'></div>
                <p style={style}>Digital transformation requires so much more than new technology. It requires
                fundamental changes to culture, communications, and how work gets done. Without
                the right foundation in place to enable change.
                </p>
            </div>
            
        
        </article>
        <article className='ind-cards'>

            {dataInd.map((ind, id)=>{
                const { img, title, desc, alt} = ind;
                return(
                    <Card  key={id} className='ind-card' >
                    <Card.Img variant="top" src={img} alt={alt} />
                    <Card.Body>
                        <Card.Title className='title'>{title}</Card.Title>
                        <Card.Text className='desc'>
                        {desc}
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                )
            })}

        
        </article>
        <Contacto/>
        <Footer/>
    </main>
  )
}

export default Industrias