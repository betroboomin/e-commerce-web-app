import React from 'react'
import HomeViewSection from '../components/home-view-section/HomeViewSection';
import '../css/Shop.css'
import ShopBox from '../components/shop-box/ShopBox';
import { headerlistLow } from '../api/arrays/header';


const Shop = () => {
  return (
    <div className='shop'>
        <div className="shop-items container">
        <div className="left-grid">
        
        <div className='box'>
            
            {
              headerlistLow.map((item,i)=>(
                <ShopBox key={i}
              name={item.name}
              list={item.list}
                />
              ))
            }
            
        </div>
    
            
        </div>
        <div className="right-grid">
        
        </div>
        </div>
        
    </div>
  )
}

export default Shop;

