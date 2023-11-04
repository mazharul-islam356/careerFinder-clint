import { Avatar, Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
const Navbarr = () => {
    return (
        <div>

<Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="/logo&favicon.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareerFinder</span>
      </Navbar.Brand>
      <div className="flex md:order-2">

        <Link to='/login'><button href="/login" className='btn mr-8'>Login</button></Link>
        
          
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
      
      </div>
      <Navbar.Collapse>
       

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/allJobs'>All Jobs</NavLink>
        <NavLink to='/appliedJob'>Applied Job</NavLink>
        <NavLink to='/myJobs'>My Jobs</NavLink>
        <NavLink to='/addJob'>Add a Job</NavLink>
        <NavLink to='/blogs'>Blog</NavLink>



      </Navbar.Collapse>
    </Navbar>
            
        </div>
    );
};

export default Navbarr;