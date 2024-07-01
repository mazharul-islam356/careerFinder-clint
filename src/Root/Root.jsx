import { Outlet } from "react-router-dom";
import Navbarr from "../components/shared/Navbar/Navbarr";
import { Toaster } from "react-hot-toast";
import Footer from "../components/shared/Footer/Footer";

const Root = () => {
    return (
        <div >

            <Navbarr></Navbarr>
            <div className="w-11/12 mx-auto my-6">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
            
            
        </div>
    );
};

export default Root;