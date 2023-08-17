import React,{useEffect, useRef} from "react";
import "./HeaderL.css";
import { headerl } from "../../api/arrays/header";
const HeaderL = () => {
  const headerRef = useRef();
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);


  return (
    <div ref={headerRef} className="headerl">
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
