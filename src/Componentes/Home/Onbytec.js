import React from 'react'
import img1 from '../../Images/misc_elegirnos-23.png'
import img2 from '../../Images/misc_elegirnos-24.png'
import icono1 from '../../Images/iconos_elegirnos-17.png'
import icono2 from '../../Images/iconos_elegirnos-18.png'
import icono3 from '../../Images/iconos_elegirnos-19.png'
import {
    Responsive} from 'typed-responsive-react';
import { Link } from 'react-router-dom'




function Onbytec (){

    const style ={
        color: '#fff'

    }


    return(

        <main className='elegirnos'>
            <img src={img1} alt='2' className='ele-img1'/>
            <div className='elegirnos-text'>
                <h2>¿por qué elegir onbytec?</h2>
                <div className='sub2'></div>
                <p>Somos el aliado perfecto para la selección , formación ,
                        prescripción , distribución y soporte de soluciones que
                            mejoren la calidad de servicio.</p>
                <div className='elegirnos-icon'>
                    <div className='icon'>
                        <img src={icono1} alt='innovacion'/>
                        <h6 style={style}>innovación</h6>
                    </div>
                    <div className='icon'>
                        <img src={icono2} alt='tecnologia'/>
                        <h6 style={style}>tecnología</h6>
                    </div>
                    <div className='icon'>
                        <img src={icono3} alt='capacitacion'/>
                        <h6 style={style}>capacitación</h6>
                    </div>
                    
                </div>  
                <Responsive displayIn={['Laptop', 'LargerThanLaptop']}>
                    <Link to ='/nosotros' className='btn btn-elegirnos btn-desktop'>sobre nosotros</Link>
                  
                </Responsive>
                <Responsive displayIn={['mobile', 'tablet']}>
                <Link to ='/nosotros' className='btn btn-elegirnos btn-mobile'>sobre nosotros</Link>
                  
                </Responsive>
                
            </div>
            <img src={img2} alt='2' className='ele-img2'/>

        </main>

    )
    


}

export default Onbytec