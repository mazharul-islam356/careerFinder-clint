import { Avatar, Button, Navbar } from "flowbite-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Authentication/AuthProvider";
import { CiLogout } from "react-icons/ci";






const Navbarr = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("log out succecfullly"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="shadow-lg rounded-lg p-2 my-4 mb-6">
      <Navbar className="w-11/12 mx-auto" fluid rounded>
        <Navbar.Brand href="/">
          <img
            src="/logo&favicon.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center font-popins whitespace-nowrap text-xl font-semibold dark:text-white">
            CareerFinder
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 ml-8">
          {user ? (
            <Button className="font-semibold" outline gradientMonochrome="info" onClick={handleLogOut}>
              <CiLogout className="font-bold mr-1" />LogOut
            </Button>
          ) : (
            <Button gradientMonochrome="info" href="/login">
              Login
            </Button>
          )}
          <Navbar.Toggle />
        </div>
        {user && (
          <Avatar
            className="lg:relative left-[840px]"
            alt="User"
            img={user.photoURL}
            rounded
          />
        )}

        <Navbar.Collapse className="lg:mr-52">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#4cabb9] btn btn-outline btn-sm  "
                : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#4cabb9] ml-2 btn btn-outline btn-sm "
                : ""
            }
            to="/allJobs"
          >
            All Jobs
          </NavLink>
          {user && (
            <>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-[#4cabb9] btn btn-outline btn-sm"
                    : ""
                }
                to="/appliedJob"
              >
                Applied Job
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-[#4cabb9] btn btn-outline btn-sm "
                    : ""
                }
                to="/myJobs"
              >
                My Jobs
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? ""
                    : isActive
                    ? "text-[#4cabb9] btn btn-outline btn-sm"
                    : ""
                }
                to="/addJob"
              >
                Add a Job
              </NavLink>
            </>
          )}
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? ""
                : isActive
                ? "text-[#4cabb9] btn btn-outline btn-sm"
                : ""
            }
            to="/blogs"
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>

    

    </div>
  );
};

export default Navbarr;
