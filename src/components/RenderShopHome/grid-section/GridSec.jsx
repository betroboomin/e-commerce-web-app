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
  const [isClicked, setIsClicked] = useState(null);
  const [name, setName] = useState(null);
  const [nameExist, setNameExist] = useState(null);

  const handleComboClick = (i) => {
    if (isClicked === i) {
      setIsClicked(null);
    } else {
      setIsClicked(i);
    }
  };

  useEffect(() => {
    handleComboNameInitial();
  }, []);

  const handleComboNameChange = (data) => {
    setName(data);
  };

  const handleComboNameInitial = () => {
    if (nameExist !== null && comboData[nameExist] && comboData[nameExist].name) {
      setName(comboData[nameExist].name);
      return comboData[nameExist].name;
    }
    return null;
  };

  return (
    <div className='select-item'>
      <span className="home-shop-container-head">Which laptop is right for you?</span>
      <div className="home-shop-container-column-sec">
        {comboData.slice(0, 3).map((comboitem, i) => (
          <div key={i} className="home-shop-container-column">
            <div className="column-combobox" onClick={() => handleComboClick(i)}>
              {handleComboNameInitial()}

              <span>
                {isClicked === i && name ? name : comboitem.name}
              </span>

              {isClicked === i && (
                <div
                  className={`combolist combolist-active`}
                >
                  {comboData.map((item, j) => (
                    <span key={j} onClick={() => handleComboNameChange(item.name)}>
                      {item.name}
                    </span>
                  ))}
                </div>
              )}

              <ArrowForwardIosIcon
                className={`arrow ${isClicked === i ? "active" : ""}`}
              />
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