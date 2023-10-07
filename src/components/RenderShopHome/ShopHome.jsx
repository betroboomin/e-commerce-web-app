import React, { useEffect, useState } from "react";
import "./ShopHome.css";

import GridSec from "./grid-section/GridSec";
import RowSec from "./grid-section/RowSec";
import laptop from '../../assets/dellimage1.avif'


const ShopHome = (props) => {


  return (
    <div className="shophome">
      {props.data.slice(0, 1).map((item, i) => (
        <div key={i} className={`home-shop-container`} >
          <RowSec {...item } click={props.click} />
        </div>
      ))}

      
        <GridSec />
      
      {props.data.slice(1).map((item, i) => (
        <div key={i} className={`home-shop-container`} >
          <RowSec {...item} />
        </div>

      ))}
      <div className="experiment">
        <div className="big-box">
          <div className="circle green"></div>
          <div className="circle blue"></div>
          <div className="circle brown"></div>
        </div>
      <div className="content-exp">
        <img src={laptop} alt="" className="image" />
        <span className="descr">
          
        </span>
      </div>
      </div>

    </div>
  );
};

export default ShopHome;
