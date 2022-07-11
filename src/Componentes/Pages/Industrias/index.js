import React, {useState} from 'react'
import Navbar from '../navbar/index'
import Contacto from '../../Home/Contacto'
import NavBar from '../navbar/index'
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
    const color = {
        color: '#fff'
    }

    
  return (
    <main>
        
        <article className='heroInd '>
            <main className='overlay'>
            <NavBar logo={logo} logoMobile={logo} color={color}/>
          

            
            
            <div className='heroInd-text'>
                <h2>Industrias</h2>
                    <p>Soluciones flexibles y
                    personalizadas que abordan las
                    necesidades particulares de cada
                    industria.
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
                <p style={style}>Cada industria enfrenta desafíos comerciales, y cada empresa es única. Nuestro
            objetivo sigue siendo el mismo; para proporcionar el mejor servicio posible para el
            usuario final.
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