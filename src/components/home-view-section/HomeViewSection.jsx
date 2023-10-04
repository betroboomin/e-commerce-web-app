import React from 'react';
import'./HomeViewSection.css';
import { Link } from 'react-router-dom';
import backtoschool from '../../assets/dellimagebacktoschool.avif'

const HomeViewSection = (props) => {
  return (
    <div className='homeviewsection'>
        <div className="home-view-section container">
          <div className="img">
          <img src={props.src} alt='' />
          </div>
            
            <div className="home-view-section-text">
                <h3 className='mb-2'>{props.h3}</h3>
                <h1 className='mb-2'>{props.h1}</h1>
                <p className='mb-2'>{props.p}</p>
                <div className='link-section'>
                   <Link className='listing text-color' to=''>{props.link1}</Link> 
                   <div className='line'></div>
                   <Link className='listing text-color'>{props.link2}</Link>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default HomeViewSection;
// import React from 'react';
// import'./HomeViewSection.css';
// import { Link } from 'react-router-dom';
// import backtoschool from '../../assets/dellimagebacktoschool.avif'

// const HomeViewSection = () => {
//   return (
//     <div className='homeviewsection'>
//         <div className="home-view-section container">
//             <img src={backtoschool} alt='' />
//             <div className="home-view-section-text">
//                 <h3 className='mb-2'>back to school</h3>
//                 <h1 className='mb-2'>invest in your game. invest in others</h1>
//                 <p className='mb-2'>with each eligible purchase, Dell will donate to UNICEF to help connect 
//                     schools to the internet. Includes accidental damage service to protect your pc
//                 </p>
//                 <div className='link-section'>
//                    <Link className='listing text-color' to=''>PC Deals</Link> 
//                    <div className='line'></div>
//                    <Link className='listing text-color'>Accessory deals</Link>
//                 </div>
                
//             </div>
//         </div>
//     </div>
//   );
// }

// export default HomeViewSection;