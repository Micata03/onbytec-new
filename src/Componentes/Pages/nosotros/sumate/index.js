import React, {useState} from 'react'
import Navbar from '../../../Pages/navbar/index'
import Footer from '../../../Footer/Footer'
import {useForm} from '../../../Helpers/useForm'

import Breadcrumb from '../../../Breadcrumb'
import logo from '../../../../Images/logohero-03.png'
import logo1 from '../../../../Images/logohero-03.png'
import img from './herotrabaja_1.jpg';
import img1 from './trabaja_1.jpg'
import img2 from './herotrabaja.png'
import icono1 from './trabaja_icon_1.png'
import icono2 from './trabaja_icon_2.png'
import icono3 from './trabaja_icon_3.png'


import { Link } from 'react-router-dom'


import {
    Responsive} from 'typed-responsive-react';

import './index.css'
import NavBar from '../../../Pages/navbar/index';



const initialForm ={
  name: '',
  lastname:'',

  email:'',
  puesto: '',
  ciudad:'',
  comments:'',
  tel:''
}
const validationsForm = (form)=>{
  let errors ={};
  let regexName= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail=  /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  let regexTel = /^.{1,12}$/;

  if(!form.name.trim()){
      errors.name = '*'
  } else if(!regexName.test(form.name.trim())){
      errors.name = '*'
  }
  if(!form.email.trim()){
      errors.email = '*'
  }else if(!regexEmail.test(form.email.trim())){
      errors.email = 'Email invalido'
  }
  if(!form.tel.trim()){
      errors.tel = '*'
  }else if(!regexTel.test(form.tel.trim())){
      errors.tel = 'Email invalido'
  }
  if(!form.comments.trim()){
      errors.comments = '*'
  }else if(!regexComments.test(form.comments.trim())){
      errors.comments = 'El campo comentario no debe exceder los 255 caracteres'
  }


  return errors;
}

function Rrhh() {

    const style = {
        backgroundImage: `url(${img})`
    }

    
  
      const [crumbs, setCrumbs] = useState(['Home', 'nosotros', 'RRHH']);
  
      const selected = crumb => {
        console.log(crumb);
      }

 const overlay ={
     backgroundImage:`url(${img2})`
 }
  
 const margin= {
    marginTop:'15vh'
  }
  const color ={
      backgroundColor: '#0097ce'
  }

  const links = {
    color: '#fff'
}



const{form, errors, loading, response, handleBlur, handleChange, handleSubmit}= useForm(initialForm, validationsForm)
   
      
  return (
    <main>
        <article className='heroInd ' style={style} >
            <main className='overlay' style={overlay}>
            <NavBar logo={logo} logoMobile={logo} color={links}/>

            
            
            <div className='heroInd-text'>
                <h2>Sumate al equipo</h2>
                <p>Buscamos profesionales
                    apasionados capaces de adaptarse
                    a los desafíos de la transformación
                    digital. 
                </p>

              
               
                
            </div>
            </main>
        </article>
        <Breadcrumb crumbs ={crumbs} selected={selected}/>
    <article>
    <div className='cloud_second-seccion'>
            <div className='cloud-img'>
              <img src={img1} alt='#'/>
            </div>
            <div className='cloud-text'>
              <h3>Una cultura laboral positiva</h3>
              <p> Establecemos metas, medimos el
                  progreso y recompensamos los
                  resultados, todo mientras nos divertimos
                  haciéndolo.Valoramos el arduo trabajo y
                  la determinación de nuestros empleados
                  para ser los mejores, para nuestros
                  clientes y para nosotros mismos.
              </p>
            </div>
          </div>
    </article>
    <article>
        <h2 className='sumate-title'>nosotros</h2>
        <div className='sub' style={color}></div>
    <div className='componentes' >
           
           <div className='componente' style={margin}  >
             <img src={icono1} alt='#'/>
             <h4>innovación</h4>
             <p>Buscamos perfiles dispuestos a
                involucrarse en las actividades de
                la compañía y con almas creativas</p>
           </div>
           <div className='componente' style={margin} >
             <img src={icono2} alt='#'/>
             <h4>tecnología</h4>
             <p>Buscamos profesionales inmersos
              en los cambios e interesados en
              estar al día en el ambiente
              tecnológico.</p>
           </div>
           <div className='componente' style={margin}  >
             <img src={icono3} alt='#'/>
             <h4>capacitación</h4>
             <p>Ofrecemos oportunidades de
                  aprendizaje y desarrollo para
                  crecer profesionalmente.</p>
           </div>

      
     </div>
    </article>
    <article>
        <div className='sumate-form'>
            <div className='sumate-form_text'>
                <h3>Postulate</h3>
                <p>Si querés ser parte del equipo llena
                  el siguiente formulario y
                  cuéntanos por qué quieres ser
                  parte del equipo</p>
            </div>
        
        <div className='sumate-form-form'>
        <article className='contenedor-sumate'>
           
           <div className='contacto-grid-2'>
                <form onSubmit={handleSubmit} className="form" method="post" enctype="multipart/form-data">
                 <p>
                    <label>Nombre</label>{errors.name && <small>{errors.name}</small>}     
                    <input type= 'text' 
                    name='name' 
                    placeholder='Obligatorio' 
                    //className='form'
                    onBlur={handleBlur}   
                    onChange={handleChange} 
                    value={form.name} 
                    required/> 
                </p> 
                 
                
                  
                
                <p>
                    <label>Apellido</label>{errors.name && <small>{errors.name}</small>}   
                <input 
                
                type= 'text' 
                name='lastname' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.name} 
                required/>  
                </p>
                <p>
                    <label>E-mail</label>{errors.email && <small>{errors.email}</small>} 
                <input 
                type= 'email' 
                name='email' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.email} 
                required/> 
                </p>
                <p>
                    <label>Telefono</label>{errors.tel && <small>{errors.tel}</small>} 
                <input 
                type= 'text' 
                name='tel' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.tel} 
                required/> 
                </p>
                <p>
                    <label>Puesto</label> 
                <input 
                type= 'text' 
                name='puesto' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.puesto} 
                required/> 
                </p>
                <p>
                    <label>Curriculum</label>
                <input 
                type= 'file' 
                name='profile' 
                placeholder='Envía tu CV' 
                //className='form'
                accept='.pdf'
              
               /> 
                </p>
                
                <p className='full'>
                    <label>Mensaje</label>{errors.comments && <small>{errors.comments}</small>} 
                <textarea 
                name='comments'
                cols='50'
                rows='5'
                placeholder='Deja tu mensaje'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.comments}
                className='form' />
                </p>
              
                <p>
                   <button type="submit" className="btn-hero">Enviar</button> 
                </p>
                </form>
                
            </div>
           
               
            
                        
           
       </article>
        </div>
        </div>
    </article>
    <Footer/>
  </main>
  )  
}

export default Rrhh
