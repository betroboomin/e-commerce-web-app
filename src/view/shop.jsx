import React,{useState} from "react";
// import HomeViewSection from "../components/home-view-section/HomeViewSection";
import "../css/Shop.css";
import ShopBox from "../components/shop-box/ShopBox";

import ShopItem from "../components/shop-items/ShopItem";
import ShopHome from "../components/RenderShopHome/ShopHome";
import Routing from "../config/routes";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import { NotificationAdd } from "@mui/icons-material";
import { Alert} from "@mui/material";
import LeftSection from "../components/LeftSection/LeftSection";
// import { makeStyles } from '@mui/styles';
import { useParams } from "react-router-dom";


const Shop = (props) => {
  const [isClicked, setisClicked] = useState(false);
  const navigate = useNavigate();
  const { parameter } = useParams();

  const handlebtnclick =()=>{
setisClicked(!isClicked);
// navigate(<Home />)
  }
  const { rightsection, category,
    //  items 
    } = props;

  const renderItems = (items) => {
    return (
      <>
      {items.map((item, i) => (
          <>
         
            <ShopItem
              key={i}
              image={item.image}
              image2={item.image2}
              color={item.color}
              specs={item.specs}
              name={item.name}
              memory={item.memory}
              estValue={item.estValue}
              price={item.price}
            />
          </>
        ))}
      </>
    );
  };

 
 


  return (
    <div className="shop">
      <div className=" container">
        <div className="header-sec-shop">
        <span> {props.parameter}</span>
      
        </div>
      <div className="shop-items">
      <div className="left-grid">
          <LeftSection leftsection={props.leftsection}/>
        </div>
        <div className="right-grid">
       
          {rightsection.map((item, i) => (
            <div key={i}>
              {category === "machines" && renderItems(item.machines)}
              {category === "desktops" && renderItems(item.desktops)}
              {category === "monitors" && renderItems(item.monitors)}
            </div>
          ))}
        </div>
      </div>
       
      </div>
    </div>
  );
};

export default Shop;
