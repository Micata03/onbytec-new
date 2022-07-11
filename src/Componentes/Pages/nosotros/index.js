import React, {useState} from 'react'
import Navbar from '../navbar/index'
import Contacto from '../../Home/Contacto'
import {AiOutlineMenu, AiOutlineDown} from 'react-icons/ai'
import MenuOpen from '../../MenuOpen/MenuOpen';
import Footer from '../../Footer/Footer'
import Breadcrumb from '../../Breadcrumb'
import logo from '../../../Images/logohero-03.png'
import logo1 from '../../../Images/logohero-03.png'
import img from './herosobre_1.jpg';
import sobre from './sobre_1.jpg'
import circle from './sobre_2.png'
import contact from './sobre_3.png'
import misc from '../../../Images/misc_elegirnos-23.png'
import { Link } from 'react-router-dom'
import {useForm} from '../../Helpers/useForm'
import './index.css'

import {
    Responsive} from 'typed-responsive-react';
import NavBar from '../navbar/index';

function Nosotros() {

    const style = {
        backgroundImage: `url(${img})`
    }

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = ()=>{
        setMenuOpen(true)
    }
    const closeMenu =()=>{
        setMenuOpen(false)
    }
  
      const [crumbs, setCrumbs] = useState(['Home', 'nosotros']);
  
      const selected = crumb => {
        console.log(crumb);
      }

    const sub ={
        backgroundColor: '#88cfe8'
    }  
    const height={
        height:'100vh'
    }
    const color = {
        color: '#fff'
    }


    const initialForm ={
      
    
        email:'',
      
    }
    const validationsForm = (form)=>{
        let errors ={};
        
        let regexEmail=  /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
       
    
       
        if(!form.email.trim()){
            errors.email = '*'
        }else if(!regexEmail.test(form.email.trim())){
            errors.email = 'Email invalido'
        }
        
    
    
        return errors;
    }
    const{form, errors, loading, response, handleBlur, handleChange, handleSubmit}= useForm(initialForm, validationsForm)
      
  return (
    <main>
        <article className='heroInd ' style={style} >
            <main className='overlay'>
            <NavBar logo={logo} logoMobile={logo} color={color}/>
            
            
            <div className='heroInd-text'>
                <h2>Sobre Onbytec</h2>
                <p>Conectamos personas a través de
                    soluciones creativas para la
                    integración de servicios de
                    tecnología y telecomunicaciones.</p>
              
              
               
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>
        <article>
            <div className='sobreGrid'>
                <div className='sobreGrid_texto'>
                    <h3>Servicios de tecnología
                            para su negocio</h3>
                    <p>Onbytec se enfoca en soluciones que lo
                        ayudarán a administrar sus operaciones,
                        optimizar su IT, asegurar y transformar su
                        negocio,diseñamos, implementamos y
                        gestionamos con éxito soluciones. Porque
                        al igual que su negocio, siempre está
                        cambiando. Por eso es tan importante
                        elegir el proveedor de tecnología
                        adecuado.
                    </p>
                </div>
            <div className='sobreGrid_img'>
                
                <img src={sobre} alt='#' className='sobreGrid_sobre'/>
                
                
            </div>    
            </div>
        </article>

        <article>
            <div className='segundo_parrafo'>
               
                <div className='segundo_parrafo-text'>
                    <p>somos el aliado perfecto para la selección, formación, prescripción, distribución y soporte de soluciones que mejoren la calidad del servicio.</p>
                    <div className='sub' style={sub}></div>
                </div>
                
               
            </div>
            <div className='segundo_parrafo-img'>
                    <img src={misc} alt='#'/>
                </div>
        </article>
        <article style={height}>
            <div className='tercer_parrafo'>
                <div className='tercer_parrafo-img'>
                    <img src={circle} alt='#'/>
                </div>
            
            <div className='tercer_parrafo-text'>
                <h3>trabaja con nosotros</h3>
                <div className='subrayado'></div>
                <p>Siempre estamos en la búsqueda de profesionales
                    apasionados capaces de adaptarse a los nuevos desafíos
                    de la transformación digital. Anímate a ser parte del
                    equipo de Onbytec.
                </p>
                <Link to='/nosotros/rrhh' className='btn btn-contacto'>
                    ver todos
                </Link>
               
            </div>
            </div>
        </article>
        <article >
            
            <div className='newsletter'>
                <div className='newsletter-input'>
                    <div className='newsletter-input_text'>
                        <h6>Suscribite a nuestro Newsletter</h6>
                        <p>Mantente informado sobre las últimas noticias del
                            ambiente tecnológico y de Onbytec.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className='input'>
                    <input placeholder='Introduce el e-mail'
                    type= 'email' 
                    name='email'
                    onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.email} 
                required ></input>
                {errors.email && <small>{errors.email}</small>}
                    </div>
                    
                    <div className='input-btn'>

                    
                    <button type='submit' className='btn btn-hero' >enviar</button>
                    </div>
                    </form>
                </div>
            </div>
        </article>
        <Contacto/>
        <Footer/>

    </main>
  )
}

export default Nosotros