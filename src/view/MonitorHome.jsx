import React,{useState} from "react";
// import HomeViewSection from "../components/home-view-section/HomeViewSection";
import "../css/Shop.css";
// import ShopItem from "../components/shop-items/ShopItem";
import ShopHome from "../components/RenderShopHome/ShopHome";
import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSection/LeftSection";
import { headerlistLow } from "../api/arrays/header";
import ShopLand from "../components/shopHomeLand/ShopLand";
import Land from "../components/shopHomeLand/Land";
import {data } from '../api/arrays/shop'


const MonitorHome = (props) => {
  const [isClicked, setisClicked] = useState(false);
  const navigate = useNavigate();
  const handlebtnclick =()=>{
setisClicked(!isClicked);
  }
  return (
    <div className="shop">
      <Land/>
      <div className="shop-items container">
        <div className="left-grid">
          <LeftSection leftsection={headerlistLow}/>
        </div>
        <div className="right-grid">
           <ShopHome data={data.monitors} click={handlebtnclick} />
        </div>
      </div>
    </div>
  );
};

export default MonitorHome;
