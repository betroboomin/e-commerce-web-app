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
// import { makeStyles } from '@mui/styles';


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

  // const useStyles = makeStyles((theme) => ({
  //   alert: {
  //     // Customize the styles here
  //     backgroundColor: "#f5f5f5",
  //     color: "#333",
  //     borderRadius: "4px",
  //     padding: theme.spacing(2),
  //     marginBottom: theme.spacing(2),
  //   },
  // }));
  // const classes = useStyles();
 


  return (
    <div className="shop">
      <div className="shop-items container">
        <div className="left-grid">
          <div className="box">
            {props.leftsection && (
            <div>
              <div className="info-top">
                <Alert severity="info" className={classes.alert}>

                Selecting filter(s) will refresh the results and may change the availability of other options.
        
                </Alert>
                </div>
                     
            {
              props.leftsection.map((item, i) => (
                <ShopBox key={i} name={item.name} list={item.list} />
              ))
            }
            </div>)
              }
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
