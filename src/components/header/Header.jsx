import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HeaderList, headerlistLow } from "../../api/arrays/header";
import Input from "../input/Input";
import HeaderL from "../header2/HeaderL";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleItemHover = (index) => {
    setHoveredItem(index);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <din className="header-main">
      <div className="header">
        <div className="header__content container">
          <div className="header__logo">
            {/* <img src={} alt='' /> */}
            <h1>
              <span className="B-color">B</span>etro{" "}
              <span className="tech">Technologies</span>
            </h1>
          </div>
          <div className="section mb-3">
            <Search category="" keyword="" />
          </div>
          <div className="header_list">
            {HeaderList.map((item, i) => (
              <li className="nav-item" key={i}>
                <img src={item.logo} alt="" />
                <Link className="listing" to={item.link}>
                  {/* <svg aria-hidden="true" style="height:30px;width:30px"><use href="#dds__device-laptop"></use></svg> */}
                  {item.name}
                </Link>
                <ArrowForwardIosIcon className="foward-icon" />
              </li>
            ))}
          </div>

          {/* <NavButton>
        login
       </NavButton> */}
        </div>
        <div className="header-lower">
          <div className="header-lower-content container">
            {headerlistLow.map((item, i) => (
              <>
                <li
                  className="nav-item"
                  key={i}
                  onMouseEnter={() => handleItemHover(i)}
                  onMouseLeave={handleItemLeave}
                >
                  <Link className="listing" to={item.link}>
                    {/* <svg aria-hidden="true" style="height:30px;width:30px"><use href="#dds__device-laptop"></use></svg> */}
                    {item.name}
                  </Link>
                  <ArrowForwardIosIcon className="foward-icon" />
                  {hoveredItem === i && (
                    <div className="">
                      <div className="remove">
                        {item.list.map((list, j) => (
                          <div className="nav-item-list " key={j}>
                            <div className="list-items"> {list.name} </div>
                            <ArrowForwardIosIcon className="foward-ico" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              </>
            ))}
          </div>
        </div>
       
      </div>
      <HeaderL />

      
    </din>
  );
};

const Search = (props) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : null);
  const goTosearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate();
    }
  }, [keyword, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keycode === 13) {
        goTosearch();
      }
    };
    document.addEventListener("keyup", enterEvent);

    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goTosearch]);

  return (
    <>
      <Input
        type="text"
        placeholder="search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </>
  );
};

export default Header;
