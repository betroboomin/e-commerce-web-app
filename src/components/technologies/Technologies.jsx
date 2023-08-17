import React from 'react';
import './Technologies.css'
import { explore } from '../../api/arrays/home';
import { MdArrowRightAlt } from "react-icons/md";

const Technologies = () => {
  return (
    <div className='technologies container'>

    {
        explore.map((item,i)=>(
            <div className='tech-items' key={i}>
            <img src={item.image} alt='' />
            <div className='tech-items-below'>
                <div className='tech-items-b'>
                <p>{item.name}</p>
                <MdArrowRightAlt />
                </div>
                
            </div>
            </div>
        ))
    }
      
    </div>
  );
}

export default Technologies;