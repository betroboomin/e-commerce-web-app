import React,{useState} from "react";
// import HomeViewSection from "../components/home-view-section/HomeViewSection";
import "../css/Shop.css";
import ShopBox from "../components/shop-box/ShopBox";

import ShopItem from "../components/shop-items/ShopItem";
import ShopHome from "../components/RenderShopHome/ShopHome";
import Routing from "../config/routes";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Shop = (props) => {
  const [isClicked, setisClicked] = useState(false);
  const navigate = useNavigate();
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
      { !isClicked && <ShopHome click={handlebtnclick} />}
        {isClicked && items.map((item, i) => (
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
      <div className="shop-items container">
        <div className="left-grid">
          <div className="box">
            {props.leftsection &&
              props.leftsection.map((item, i) => (
                <ShopBox key={i} name={item.name} list={item.list} />
              ))}
          </div>
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
  );
};

export default Shop;
