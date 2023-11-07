import { Avatar, Navbar } from 'flowbite-react';
import { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Authentication/AuthProvider';
const Navbarr = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out succecfullly"))
      .catch((err) => console.log(err));
  };





    return (
        <div>

<Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/logo&favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareerFinder</span>
      </Navbar.Brand>
      <div className="flex md:order-2">

        {/* <Link to='/login'><button href="/login" className='btn mr-8'>Login</button></Link> */}

        {
          user? (<NavLink onClick={handleLogOut}>

<button className='btn mr-8'>Log Out</button>

          </NavLink>): (<NavLink to='/login' onClick={handleLogOut}>

<button href="/login" className='btn mr-8'>Login</button>

          </NavLink>)
         
        }

        {

         
          user && <Avatar alt="User" img={user.photoURL}
           rounded />
        }
        
          
            
      
      </div>
       
<div className='flex gap-10'>
  
<NavLink className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-400 " : ""
        } to='/'>Home</NavLink>
        <NavLink
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "text-blue-400 " : ""
      }
        
        to='/allJobs'>All Jobs</NavLink>
        {
          user && <>
          <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-400 " : ""
        }
          to='/appliedJob'>Applied Job</NavLink>
          <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-400 " : ""
        }
          to='/myJobs'>My Jobs</NavLink>
          <NavLink
          className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-400 " : ""
        }
          to='/addJob'>Add a Job</NavLink></>
        }
        <NavLink
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "text-blue-400 " : ""
      }
        to='/blogs'>Blog</NavLink>
</div>



    </Navbar>
            
        </div>
    );
};

export default Navbarr;