import React from 'react';
import './form.css'
import {useForm} from '../../../Helpers/useForm'
import Loader from '../ContacForm/Loader/Loader'
import Message from '../ContacForm/Message'
import Captcha from './reCaptcha/captcha';





const initialForm ={
    name: '',
    lastname:'',

    email:'',
    empresa: '',
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



function Contacto() {
   
    const{form, errors, loading, response, handleBlur, handleChange, handleSubmit}= useForm(initialForm, validationsForm)

 

  return(
   <main className='contacto-form'>
       <article className='contenedor-sumate'>
           
           <div className='contacto-grid-2'>
                <form onSubmit={handleSubmit} className="form">
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
                type= 'number' 
                name='tel' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.tel} 
                required/> 
                </p>
                <p>
                    <label>Empresa</label>{errors.empresa && <small>{errors.empresa}</small>} 
                <input 
                type= 'text' 
                name='empresa' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.empresa} 
                required/> 
                </p>
                <p>
                    <label>Ciudad</label>{errors.ciudad && <small>{errors.ciudad}</small>} 
                <input 
                type= 'text' 
                name='ciudad' 
                placeholder='Obligatorio' 
                //className='form'
                onBlur={handleBlur}   
                onChange={handleChange} 
                value={form.ciudad} 
                required/> 
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
                    <Captcha/>
                </p>
                <p>
                   <button type="submit" className="btn-hero">Enviar</button> 
                </p>
                </form>
                
            </div>
           
                {loading && <Loader/>}
                {response && <Message msg="El mensaje ha sido enviado" />}
            
                        
           
       </article>
   </main>
   
   )
}

export default Contacto;