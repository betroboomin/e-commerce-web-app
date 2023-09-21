
import React from 'react';
import { Link } from 'react-router-dom';
import './ShopItem.css'

const ShopItem = ({image,image2,color,name,specs,estValue,price}) => {
    
        const result = estValue - price;
        const pecentagesavevalue = (result/estValue) * 100;
    
  return (
    <div className="shopitem" >
        <div className="imagesection">
            <img className='image1' alt="" src={image}/>
            <img className='image2' alt="" src={image2}/>
            <div className="color-circle" style={{ backgroundColor: color }}>

            </div>
            <div className="top-save">
                <Link className="listing">
                    save
                </Link>
                <div className="compare-sec">
                    <input type='checkbox' />
                    <label>Compare</label>
                </div>
            </div>
        </div>
        <div className="specs-section" >
            <Link className="listing">
                <label>{name}</label>
            </Link>
            <p className='below-name'>Order Code wnm16r1cto30</p>
            <label className='specs'>specs</label>
            <div className='horizontal-line'></div>
            { specs.map((item,j)=>(
            <div key={j} className='spec-section'>
                 <div className='spec-box'>
                <label>processor</label>
                <p>{item.processor}</p>
            </div>
            <div className='spec-box'>
                <label>os</label>
                <p>{item.os}</p>
            </div>
            <div  className='spec-box'>
                <label>graphics</label>
                <p>{item.graphics}</p>
            </div>
            <div  className='spec-box'>
                <label>memory</label>
                <p>{item.memory}</p>
            </div>
            <div  className='spec-box'>
                <label>storage</label>
                <p>{item.storage}</p>
            </div>
            <div  className='spec-box'>
                <label>display</label>
                <p>{item.display}</p>
            </div>
            </div>
            ))
           }
        </div>
        <div className="price-section">
            <div className='price-section-box '>
            <label className='estimated'>estimated value  </label>
            <p className="estValue">${estValue}</p>
            </div>
            <div className='price-section-box '>
            
                <p className='price'>${price}</p>
            </div>
            <div className='price-section-box '>
                <label>
                    you save:
                </label>
                <p>{result}
                
            </p>
            </div>
            <div className='price-section-box '>
                
                <p>({pecentagesavevalue})
                
            </p>
            </div>
            
        </div>
    </div>
  )
}

export default ShopItem;