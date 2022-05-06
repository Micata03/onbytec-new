import React from 'react';
import {Link} from 'react-router-dom'

const breadcrumb = {
  backgroundColor: 'transparent',
  
}
const links = {
    //margin: '2vh 44%',
}

const text ={
  textTransform: 'capitalize'
}

function Breadcrumb(props) {

  function isLast(index) {
    return index === props.crumbs.length - 1;
  }

  return (
    <nav className="row "  style={links}>
      <ol className="breadcrumb" style={ breadcrumb }>
        {
          props.crumbs.map((crumb, ci) => {
            const disabled = isLast(ci) ? 'disabled' : '';
            
            return (
               
                    <li key={ ci } className="breadcrumb-item align-items-center">
                                    
                     <small className={  ` link ${ disabled }` } onClick={ () => props.selected(crumb) } style={text} >
                                    { crumb }
                    </small>                               
                                
                    </li>                
                                

                
             
            );
          })
        }
      </ol>
    </nav>
  );
}

export default Breadcrumb;