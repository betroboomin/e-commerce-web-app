import { Alert } from "@mui/material";
import React from "react";
import ShopBox from "../shop-box/ShopBox";
import { headerlistLow } from "../../api/arrays/header";


const LeftSection = (props) => {
  return (
    <div className="box">
      {props.leftsection && (
        <div>
          <div className="info-top">
            <Alert severity="info">
              Selecting filter(s) will refresh the results and may change the
              availability of other options.
            </Alert>
          </div>

          {props.leftsection.map((item, i) => (
            <ShopBox key={i} name={item.name} list={item.content} />
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftSection;
