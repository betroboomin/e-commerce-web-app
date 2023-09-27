import React, { useState } from "react";
import "./ShopHome.css";
import image1 from "../../assets/laptops/2laptops1screen.avif";
import image22 from "../../assets/laptops/presitionMobile.png"
import laptop360 from "../../assets/laptops/360laptop.avif"
import Vostro from "../../assets/laptops/vostroLaptop.avif"
import alienware from "../../assets/laptops/alienwarelaptop.webp"
import Gseries from "../../assets/laptops/gseriesgaminglaptop.avif"
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image2 from "../../assets/laptops/laptopwithflower.avif";
import GridSec from "./grid-section/GridSec";
import RowSec from "./grid-section/RowSec";

const ShopHome = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleComboClick = () => {
    setIsClicked(!isClicked);
  };
const data = [
    {
        heading:"XPS Laptops & 2-in-1 PCs",
        boldleft:"Creators & Creativity",
        price:599,
        text:"Power your passions with premium, precision-crafted laptops with innovative features.",
        btnName:"XPS",
        image:image1,
        click: props.click
    },
    {
        heading:"Latitude Laptops & 2-in-1 PCs",
        boldleft:"Business Performance & Collaboration",
        price:609,
        text:"Work from anywhere with the world’s most intelligent and secure business laptops sustainably designed for productivity on the go.",
        btnName:"Latitude",
        image:image22,
        click: props.click
    },
    {
        heading:"Inspiron Laptops & 2-in-1 PCs",
        boldleft:"Versatile Performance",
        price:299,
        text:"Create, consume and connect in style with versatile laptops and 2-in-1s.",
        btnName:"Inspiron",
        image:laptop360,
        click: props.click
    },
    {
        heading:"Vostro Laptops",
        boldleft:"Small Business Productivity",
        price:579,
        text:"Power your small business with laptops built to deliver security, performance and enhanced video conferencing.",
        btnName:"Vostro",
        image:Vostro,
        click: props.click
    },
    {
        heading:"Alienware Gaming Laptops",
        boldleft:"Immersive Gaming Experiences",
        price:"1,349.99",
        text:"Experience high-performance gaming with iconic designs and intelligently engineered laptops.",
        btnName:"Alienware",
        image:alienware,
        click: props.click
    },
    {
        heading:"G Series Gaming Laptops",
        boldleft:"Gaming Performance",
        price:"849.99",
        text:"Take your game to the next level with split-second responsiveness and dynamic gameplay.",
        btnName:"G Series",
        image:Gseries,
        click: props.click
    },

]
  return (
    <div className="shophome">
      {data.slice(0, 1).map((item, i) => (
        <div key={i} className="home-shop-container">
          <RowSec {...item} />
        </div>
      ))}

      
        <GridSec />
      
      {data.slice(1).map((item, i) => (
        <div key={i} className="home-shop-container">
          <RowSec {...item} />
        </div>
      ))}

    </div>
  );
};

export default ShopHome;
