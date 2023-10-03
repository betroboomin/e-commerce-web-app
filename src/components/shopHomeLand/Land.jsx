import React, { useEffect, useState } from 'react'
import "./ShapLand.css";
import background from "../../assets/laptops/girlwriting.avif";
import { TypeAnimation } from 'react-type-animation';
import bg from "../../assets/backgrounds/blacktriangle.png"

const data = {
    heading: ["Shop with us, aim for power", "Hello!"],
    desc: `We provide the best Tech Gadgets in the market that fit your style and aesthetics`,
    image: bg,
  };

const Land = () => {
  return (
    <div
    className="shopland"
    // style={{ background: `url(${data.image}) black` }}
  >
     <div className="shopland-box container">
        <div className="shopland-heading">
        <TypeAnimation
      sequence={[
        'Shop with us, aim for power', // Types 'One'
        3000, // Waits 1s
        '', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        
        
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '5rem', display: 'inline-block' }}
    />
        </div>
        <span children className="shopland-desc">
          {data.desc}
        </span>
      </div>
  </div>
  )
}

export default Land