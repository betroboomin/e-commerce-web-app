import React, { useState } from 'react';
import './ShopBox.css';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopBox = ({name,list}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  const [showAll, setShowAll] = useState(false)

  
  const handleRadioClick = (index) => {
    
    setSelectedList(index);
  };
  const onlinkclink = () =>{
    setShowAll(!showAll)
  }
  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };
 
const displaylist = showAll ? list : list.slice(0,5);

  return (
    <div className="shopbox">
      <div
        className={`shopboxhead ${isExpanded ? "expanded" : ""}`}
        onClick={handleItemClick}
      >
        <h3>{name}</h3>
        <ArrowForwardIosIcon className="foward-icon" />
      </div>
      {/* {isExpanded && ( */}
      <span className={`add-height `}>
      <ul className={`ul ${!isExpanded ? 'showcontent' : ''}`}>
          {displaylist.map((item, j) => (
            <li key={j}>
              <label className="checkbox-container ">
                <input
                  type="checkbox"
                  name={name}
                  value={item}
                  checked={selectedList === j}
                  onChange={() => handleRadioClick(list)}
                />
                <span className="checkmark"></span>
              </label>
        
              <div className="listtext">{item}</div>
            </li>
          ))}
          {list.length > 5 && ( <span className="listtext colored" onClick={onlinkclink} >
            {showAll ? 'show-less' : 'show-more'}
            </span>)} 
         
        </ul>
        </span>
      {/* )} */}
    </div>
  );
};

export default ShopBox;
