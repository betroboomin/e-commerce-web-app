import React, { useEffect, useState } from "react";
import "./ShopHome.css";

import GridSec from "./grid-section/GridSec";
import RowSec from "./grid-section/RowSec";


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

    </div>
  );
};

export default ShopHome;
