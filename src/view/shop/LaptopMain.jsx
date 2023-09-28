import React from "react";
import { headerlistLow } from "../../api/arrays/header";
import LaptopHome from "../LaptopHome";

export function LaptopMain(){

    return(
        <>
        <LaptopHome
           leftsection={headerlistLow}
        />
        </>
    )
}
