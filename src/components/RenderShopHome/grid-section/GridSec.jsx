import React,{useState} from 'react'
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image2 from "../../../assets/laptops/laptopwithflower.avif";


const comboData = [
    {
      name: "XPS",
      description: {
        heading: "Creators and Creativity",
        price: 599,
        description: [
          "Multitask between intensive programs",
          "Produce video, photography and music",
          "Create & edit digital content",
          "Be productive anywhere",
        ],
      },
    },
    {
      name: "XPS",
      description: {
        heading: "Creators and Creativity",
        price: 599,
        description: [
          "Multitask between intensive programs",
          "Produce video, photography and music",
          "Create & edit digital content",
          "Be productive anywhere",
        ],
      },
    },
    {
      name: "Vostro",
      description: {
        heading: "Small Business Productivity",
        price: 579,
        description: [
          "Protect data with essential security",
          "Power business applications",
          "Collaborate with video confrencing",
        ],
      },
    },
  ];
const GridSec = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleComboClick = () => {
      setIsClicked(!isClicked);
    };
  return (
    <div className='select-item'>
    <span className="home-shop-container-head">Which laptop is right for you?</span>
        <div className="home-shop-container-column-sec">
          {comboData.slice(0,3).map((comboitem, i) => (
            <div key={i} className="home-shop-container-column">
              <div className="column-combobox" onClick={handleComboClick}>
                {comboData.slice(0, 1).map((item, i) => (
                  <span key={i}>{item.name}</span>
                ))}

                {isClicked && (
                  <div
                    className={`combolist ${
                      isClicked ? "combolist-active" : ""
                    }`}
                  >
                    {comboData.map((item, i) => (
                      <span key={i}>{item.name}</span>
                    ))}
                  </div>
                )}

                <ArrowForwardIosIcon
                  className={`arrow ${isClicked ? "active" : ""}`}
                />
              </div>
              <img className="column-image-shop" src={image2} alt="" />
              <span className="column-heading">{comboitem.description.heading}</span>
              <span className="column-price">starting at ${comboitem.description.price}</span>
              <div className="column-list">
                {comboitem.description.description.map((desc, i) => (
                    <div className="column-list-sec">
                    <li className="column-list-style"></li>
                     <li className="column-list-items" key={i}>{desc}</li>
                
                    </div>
                 ))}
              </div>
              <div className="btn-section-home-sec column">
            <div className="home-shop-container-right-btn full">Shop XPS</div>
            <div className="home-shop-container-right-btn Outlined">
              Explore XPS
            </div>
          </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default GridSec