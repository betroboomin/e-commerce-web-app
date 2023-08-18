import React, { useState } from 'react';
import './ShopBox.css';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopBox = ({name,list}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedList, setSelectedList] = useState('');


  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };
  const handleRadioClick = (item) => {
    
    setSelectedList(item.name);
  };
 


  return (
    <div className='shopbox'>
      
         <div className='shopboxhead' onClick={handleItemClick}>
          <h3>{name}</h3>
          <ArrowForwardIosIcon className="foward-icon" />
        </div>
        {isExpanded && (
          <ul>
            {list.map((list, j) => (
              <li key={j}>
                <div className="checkbox-container ">
                <input
            type='checkbox'
            name={name}
            value={list.name}
            checked={selectedList === list.name}
            onChange={() => handleRadioClick(list)}
          />
          <span className="checkmark"></span>
                </div>
                
                <div className='listtext'>{list.name}</div></li>
            ))}
          </ul> 
        )}
    </div>
  );
};

export default ShopBox;