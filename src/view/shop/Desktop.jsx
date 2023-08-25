import Shop from "../shop";
import { headerlistLow } from '../../api/arrays/header';
import { laptop} from '../../api/arrays/shop';

export function Desktop(){

    return(
        <>
        <Shop
        leftsection={headerlistLow}
        rightsection = {laptop} 
        category = "desktops"
        

        />
        </>
    )
}
