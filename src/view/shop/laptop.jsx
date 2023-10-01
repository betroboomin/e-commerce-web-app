import Shop from "../shop";
import { headerlistLow } from '../../api/arrays/header';
import { laptop} from '../../api/arrays/shop';
import { useParams } from "react-router-dom";

export function Laptop(){

    const {name} = useParams();
    return(
        <>
        <Shop
           leftsection={headerlistLow}
           rightsection = {laptop} 
           parameter= {name}
           category = "machines"

           


        />
        </>
    )
}
