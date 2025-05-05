import HeaderCustom from "./Header";
import Upload from "../../../pages/Upload";
function LayoutCustom({children}) {
    return ( 
        <>
            <HeaderCustom />

            {children}
        </>
     );
}

export default LayoutCustom;