import { Avatar, Button, Navbar } from 'flowbite-react';
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
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/logo&favicon.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareerFinder</span>
      </Navbar.Brand>
      
      <div className="flex md:order-2">
        
        {user?<Button outline gradientMonochrome="info" onClick={handleLogOut}>
          
          Log Out
        </Button>:<Button outline gradientMonochrome="info" href='/login'>Login</Button>}
        <Navbar.Toggle />
      </div>
        {user&&<Avatar className='lg:relative left-[920px]' alt="User" img={user.photoURL}
           rounded />}

      
      <Navbar.Collapse className='lg:mr-52'>
      <NavLink className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-400  " : ""
        } to='/'>Home</NavLink>
        <NavLink
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "text-blue-400 ml-2 " : ""
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
      </Navbar.Collapse>

      



    </Navbar>














{/* 
<Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/logo&favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareerFinder</span>
      </Navbar.Brand>
      <div className="flex md:order-2">

        

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
       
<div className='lg:flex gap-10'>
  
  
  <NavLink className={({ isActive, isPending }) =>
          isPending ? "" : isActive ? "text-blue-400  " : ""
        } to='/'>Home</NavLink>
        <NavLink
        className={({ isActive, isPending }) =>
        isPending ? "" : isActive ? "text-blue-400 ml-2 " : ""
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



    </Navbar> */}
            
        </div>
    );
};

export default Navbarr;