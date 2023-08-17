import React from "react";
import "./HeaderL.css";
import { headerl } from "../../api/arrays/header";
const HeaderL = () => {
  return (
    <div className="headerl">
      <div className="headerl__content container">
        {headerl.map((item, i) => (
          <div className="logo-sec" key={i}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderL;
