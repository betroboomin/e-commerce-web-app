import React from 'react'
import image1 from "../../../assets/laptops/2laptops1screen.avif";
import { Link } from 'react-router-dom';


const RowSec = (props) => {
  return (
    <>
    <div className="home-shop-container-left">
          <img src={props.image} alt="" />
        </div>
        <div className="home-shop-container-right">
          <span className="home-shop-container-right-Heading">
            {props.heading}
          </span>
          <span className=" home-shop-container-right-bold-heading">
            {props.boldleft}<span className="seperator"></span>Starting at
            {props.price}.00
          </span>
          <span className="home-shop-container-right-text">
            {props.text}
          </span>
          <div className="btn-section-home-sec">
            {/* <Link to="./laptops" className='listing home-shop-container-right-btn full'>
            Shop {props.btnName}
            </Link> */}
            <Link to={`${props.link}/${props.name}`} className='listing home-shop-container-right-btn full'>
            Shop {props.btnName}
            </Link>
            
            <div onClick={props.click} className="home-shop-container-right-btn Outlined">
              Explore {props.btnName}
            </div>
            {/* <Link to="./laptops" className="listing home-shop-container-right-btn Outlined">
              Explore {props.btnName}
            </Link> */}
          </div>
        </div>
    </>
  )
}

export default RowSec