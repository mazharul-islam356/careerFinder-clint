import { Avatar, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
const Navbarr = () => {
    return (
        <div>

<Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="https://i.ibb.co/q08J4NJ/360-F-294637633-4e-Ba-HE24-Eg-CSo75m-removebg-preview.png" className="mr-3 w-10 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">CareerFinder</span>
      </Navbar.Brand>
      <div className="flex md:order-2">

        <Link to='/login'><button href="/login" className='btn mr-8'>Login</button></Link>
        
          
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
      
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/allJobs">All Jobs</Navbar.Link>
        <Navbar.Link href="/blog">Blog</Navbar.Link>
        <Navbar.Link href="#"></Navbar.Link>
        <Navbar.Link href="#"></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
            
        </div>
    );
};

export default Navbarr;