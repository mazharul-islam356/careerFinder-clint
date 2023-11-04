import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="ml-[500px] pt-10">


   <img src="/404 error.png" className="w-[540px] " alt="" />
   <Link to='/'><button className="btn ml-52">Go Home</button></Link>
  


            
        </div>
    );
};

export default ErrorPage;