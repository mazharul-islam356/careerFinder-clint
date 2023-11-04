import { Outlet } from "react-router-dom";
import Navbarr from "../components/shared/Navbar/Navbarr";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto my-6">

            <Navbarr></Navbarr>
            <Outlet></Outlet>
            <Toaster></Toaster>
            
            
        </div>
    );
};

export default Root;