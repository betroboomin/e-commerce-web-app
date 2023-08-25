import React, { useState } from 'react';
import './ShopBox.css';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopBox = ({name,list}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedList, setSelectedList] = useState('');
  


  
  const handleRadioClick = (item) => {
    
    setSelectedList(item.name);
  };
  const handleItemClick = () => {
    setIsExpanded(!isExpanded);
  };
 


  return (
    <div className='shopbox'>
      
         <div className={`shopboxhead ${isExpanded ? 'expanded' : ''}`} onClick={handleItemClick}>
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

// import React, { useState } from 'react';
// import './ShopBox.css';
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const ShopBox = ({ name, list }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isExpandedLow, setIsExpandedLow] = useState(false);
//   const [selectedList, setSelectedList] = useState('');

//   const handleRadioClick = (item) => {
//     setSelectedList(item.name);
//   };

//   const handleItemClick = () => {
//     setIsExpanded(!isExpanded);
//     setIsExpandedLow(!isExpanded);
//   };

//   const renderListItems = () => {
//     if (isExpandedLow) {
//       return list.map((item, j) => (
//         <li key={j}>
//           <div className="checkbox-container">
//             <input
//               type='checkbox'
//               name={name}
//               value={item.name}
//               checked={selectedList === item.name}
//               onChange={() => handleRadioClick(item)}
//             />
//             <span className="checkmark"></span>
//           </div>
//           <div className='listtext'>{item.name}</div>
//         </li>
//       ));
//     } else {
//       return list.slice(0, 5).map((item, j) => (
//         <li key={j}>
//           <div className="checkbox-container">
//             <input
//               type='checkbox'
//               name={name}
//               value={item.name}
//               checked={selectedList === item.name}
//               onChange={() => handleRadioClick(item)}
//             />
//             <span className="checkmark"></span>
//           </div>
//           <div className='listtext'>{item.name}</div>
//         </li>
//       ));
//     }
//   };

//   return (
//     <div className='shopbox'>
//       <div className={`shopboxhead ${isExpanded ? 'expanded' : ''}`} onClick={handleItemClick}>
//         <h3>{name}</h3>
//         <ArrowForwardIosIcon className="foward-icon" />
//       </div>
//       <ul>
//         {renderListItems()}
//       </ul>
//       {!isExpandedLow && list.length > 5 && (
//         <div className="view-more" onClick={handleItemClick}>
//           View More
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShopBox;