import React from 'react'
import { partners } from './partners-data'

function Partners() {
  return (
    <main className='partners'>
        <div className='partners-img'>
            {partners.map((partner)=>{
                const {id , url, img, alt} = partner;
                return (
                    <a href={url} key={id}>
                    <img  src ={img} alt={alt}/>
                    </a>
                )
            }
            )}

        </div>
        <h6>ver partners</h6>

    </main>
  )
}

export default Partners