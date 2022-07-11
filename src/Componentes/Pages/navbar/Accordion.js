import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-items">
      <div className="accordion-titles" onClick={() => setIsActive(!isActive)}>
        <div style={{marginRight: '9%'}}>
          <Link to={`/${title}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
            {title}
          </Link>
          </div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-contents">{content.map((items)=>{
        return(
            <ul>
              <Link to={`/${title}/${items}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <li>{items}</li>
              </Link>
                
            </ul>
        )

      })}</div>}
    </div>
  );
};

export default Accordion;