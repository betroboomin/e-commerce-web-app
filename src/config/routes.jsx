import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/Home";
// import Shop from "../view/shop";
import { Laptop } from "../view/shop/laptop";
import { Desktop } from "../view/shop/Desktop";
import { Monitor } from "../view/shop/Monitor";
import LaptopHome from "../view/LaptopHome";
// import Catalog from "../view/Catalog";
// import Detail from "../view/Detail";

const Routing = () => {
  return (
    <Routes>
      
      {/* <Route path='/:category/search/:keyword' element={<Catalog />} />
      <Route path='/:category/:id' element={<Detail />} />
  <Route path='/:category' element={<Catalog />} />*/}
      <Route path='/' element={<Home />} /> 
      <Route path='/shop/laptop/laptops' element={<Laptop />} /> 
      <Route path='/shop/laptop' element={<LaptopHome />} /> 
      <Route path='/shop' element={<Laptop />} /> 
      <Route path='/shop/desktop' element={<Desktop />} /> 
      <Route path='/shop/monitor' element={<Monitor />} /> 
    </Routes>
  );
}

export default Routing;