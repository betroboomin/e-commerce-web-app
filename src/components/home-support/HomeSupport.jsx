import React from 'react';
import './HomeSupport.css';
import { headerlistLow } from '../../api/arrays/header';
import { Link } from 'react-router-dom';

const HomeSupport = () => {

        const supportSection = headerlistLow.find((section) => section.name === 'Support');
      
        if (!supportSection) {
          return null; // Return null or any fallback component if support section is not found
        }
    
  return (
    <div className='homesupport'>
        <div className='homesupport-content container'>
            <div className="homesupport-content-text">
                <h1>Dell support</h1>
                <p>Get your questions answered</p>
            </div>
            <div className="homesupport-content-i">
            {
                supportSection.list.map((item,i)=>(
                    <div className="homesupport-content-items" key={i}>
                    <div className='homesupport-content-items-sec'>
                        <img src={item.image} alt='' />
                        <div className='homesupport-content-items-sec-text'>
                            <Link className='listing' to={item.link}>
                            <div className='homesupport-content-items-topic'>
                        {item.name}
                        </div>
                            </Link>
                        
                        <div className='homesupport-content-items-description'>
                        {item.desc}
                        </div>
                        </div>
                        
                    </div>
                    <div className="homesupport-content-items-line">
    
                    </div>
                </div>
                ))
            }
            </div>
           
            
        </div>
    </div>
  );
  
}

export default HomeSupport;
