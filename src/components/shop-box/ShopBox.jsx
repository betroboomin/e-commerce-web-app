import React, { useState } from 'react';
import './ShopBox.css';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopBox = ({name,list}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  


  
  const handleRadioClick = (index) => {
    
    setSelectedList(index);
  };
  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };
 


  return (
    <div className="shopbox">
      <div
        className={`shopboxhead ${isExpanded ? "expanded" : ""}`}
        onClick={handleItemClick}
      >
        <h3>{name}</h3>
        <ArrowForwardIosIcon className="foward-icon" />
      </div>
      {isExpanded && (
        <ul>
          {list.map((list, j) => (
            <li key={j}>
              <label className="checkbox-container ">
                <input
                  type="checkbox"
                  name={name}
                  value={list}
                  checked={selectedList === j}
                  onChange={() => handleRadioClick(list)}
                />
                <span className="checkmark"></span>
              </label>

              <div className="listtext">{list}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShopBox;
