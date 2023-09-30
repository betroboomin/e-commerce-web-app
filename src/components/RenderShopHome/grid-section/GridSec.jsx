import React, { useEffect, useState } from 'react';
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image2 from "../../../assets/laptops/laptopwithflower.avif";

const comboData = [
  {
    id: 1,
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
    id:2,
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
    id:3,
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
  // const [isClicked, setIsClicked] = useState(null);
  const [comboStates, setComboStates] = useState(comboData.map(() => ({ isClicked: false, name: null })));

  const handleComboClick = (i) => {
    setComboStates((prevStates) =>
      prevStates.map((state, index) => ({
        isClicked: index === i ? !state.isClicked : false,
        name: index === i ? state.name : state.name,
      }))
    );
  };

  const handleComboNameChange = (i, data) => {
    setComboStates((prevStates) =>
      prevStates.map((state, index) => ({
        isClicked: index === i ? state.isClicked : false,
        name: index === i ? data : state.name,
      }))
    );
  };

  return (
    <div className='select-item'>
      <span className="home-shop-container-head">Which laptop is right for you?</span>
      <div className="home-shop-container-column-sec">
        {comboData.slice(0, 3).map((comboitem, i) => (
          <div key={i} className="home-shop-container-column">
            <div className="column-combobox" onClick={() => handleComboClick(i)}>
              {/* {comboStates[i].name || comboitem.name} */}

              <span>
              {comboStates[i].name || comboitem.name}
                {/* {comboStates[i].isClicked && comboStates[i].name ? comboStates[i].name : comboitem.name} */}
              </span>
              <ArrowForwardIosIcon
                className={`arrow ${comboStates[i].isClicked ? "active" : ""}`}
              />

              <div
                className={`combolist ${comboStates[i].isClicked ? 'combolist-active': ''}`}
              >
                {comboData.map((item, j) => (
                  <span key={j} onClick={() => handleComboNameChange(i, item.name)}>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <img className="column-image-shop" src={image2} alt="" />
            <span className="column-heading">{comboitem.description.heading}</span>
            <span className="column-price">starting at ${comboitem.description.price}</span>

            <div className="column-list">
              {comboitem.description.description.map((desc, j) => (
                <div className="column-list-sec" key={j}>
                  <li className="column-list-style"></li>
                  <li className="column-list-items">{desc}</li>
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
  );
};

export default GridSec;


