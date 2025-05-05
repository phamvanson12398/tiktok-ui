import Header from "./Header/idnex";
import Sidebar from "./Sidebar/idnex";

function DefaultLayout({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                {children}
            </div>
        </div>
     );
}

export default DefaultLayout;