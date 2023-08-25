import React,{useEffect, useRef} from "react";
import "./HeaderL.css";
import { headerl } from "../../api/arrays/header";
import { Link } from "react-router-dom";
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
      <div className="headerl__content ">
        {headerl.map((item, i) => (
          <Link key={i} to={item.link} className="listing">
          <div className="logo-sec" key={i}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderL;
